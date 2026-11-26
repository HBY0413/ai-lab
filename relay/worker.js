/**
 * AI Lab relay — lets visitors of the GitHub Pages site use the live labs
 * without signing in to Claude. Runs as a Cloudflare Worker.
 *
 * The Claude API key never reaches the browser: it lives here as a secret.
 * Guard rails: only the site's own origin may call it, a per-visitor and a
 * site-wide daily cap (counted in a KV namespace), and size limits on input.
 *
 * Settings (Cloudflare dashboard → Worker → Settings → Variables and Secrets):
 *   ANTHROPIC_API_KEY  secret, required
 *   ALLOWED_ORIGINS    comma-separated, default https://hby0413.github.io
 *   DAILY_LIMIT        calls per day for the whole site, default 300
 *   PER_IP_LIMIT       calls per visitor per day, default 20
 *   MODEL              default claude-haiku-5-5
 * Bindings: KV namespace bound as COUNTER (required).
 */
const MAX_PROMPT = 12000;            // characters
const MAX_IMAGES = 2;
const MAX_IMAGE_B64 = 2_000_000;     // ~1.5 MB per image
const MAX_TOKENS = 1500;

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "https://hby0413.github.io").split(",").map(s => s.trim());
    const okOrigin = allowed.includes(origin);
    const cors = {
      "Access-Control-Allow-Origin": okOrigin ? origin : allowed[0],
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
    };
    const json = (obj, status = 200) =>
      new Response(JSON.stringify(obj), { status, headers: { ...cors, "Content-Type": "application/json" } });

    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (req.method === "GET") return json({ ok: true });            // health check
    if (req.method !== "POST") return json({ error: "method" }, 405);
    if (!okOrigin) return json({ error: "origin" }, 403);
    if (!env.ANTHROPIC_API_KEY || !env.COUNTER) return json({ error: "not_configured" }, 503);

    let body;
    try { body = await req.json(); } catch { return json({ error: "bad_request" }, 400); }
    const prompt = typeof body.prompt === "string" ? body.prompt : "";
    const images = Array.isArray(body.images) ? body.images : [];
    if (!prompt.trim() || prompt.length > MAX_PROMPT) return json({ error: "bad_request" }, 400);
    if (images.length > MAX_IMAGES) return json({ error: "bad_request" }, 400);
    for (const im of images) {
      if (!im || !/^image\/(png|jpeg|webp|gif)$/.test(im.type) || typeof im.data !== "string" || im.data.length > MAX_IMAGE_B64)
        return json({ error: "bad_request" }, 400);
    }

    // daily caps: whole site, and per visitor
    const day = new Date().toISOString().slice(0, 10);
    const ip = req.headers.get("CF-Connecting-IP") || "unknown";
    const kAll = `all:${day}`, kIp = `ip:${day}:${ip}`;
    const [nAll, nIp] = await Promise.all([env.COUNTER.get(kAll), env.COUNTER.get(kIp)]).then(v => v.map(x => +x || 0));
    if (nAll >= (+env.DAILY_LIMIT || 300)) return json({ error: "daily_cap" }, 429);
    if (nIp >= (+env.PER_IP_LIMIT || 20)) return json({ error: "rate_limited" }, 429);
    await Promise.all([
      env.COUNTER.put(kAll, String(nAll + 1), { expirationTtl: 172800 }),
      env.COUNTER.put(kIp, String(nIp + 1), { expirationTtl: 172800 }),
    ]);

    const content = [
      ...images.map(im => ({ type: "image", source: { type: "base64", media_type: im.type, data: im.data } })),
      { type: "text", text: prompt },
    ];
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({ model: env.MODEL || "claude-haiku-5-5", max_tokens: MAX_TOKENS, messages: [{ role: "user", content }] }),
    });
    if (!r.ok) return json({ error: r.status === 429 ? "rate_limited" : "upstream" }, r.status === 429 ? 429 : 502);
    const data = await r.json();
    const text = (data.content || []).filter(c => c.type === "text").map(c => c.text).join("");
    return json({ text });
  },
};
