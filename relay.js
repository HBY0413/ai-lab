/* Live AI for visitors who are not signed in to Claude.
   Paste the Cloudflare Worker address below after deploying relay/worker.js.
   Left empty, the labs show their pre-generated sample results. */
window.AILAB_RELAY = "";

window.relaySample = function () {
  const url = window.AILAB_RELAY;
  if (!url) return null;
  const toB64 = blob => new Promise((ok, no) => {
    const fr = new FileReader();
    fr.onload = () => ok({ type: blob.type || "image/png", data: String(fr.result).split(",")[1] });
    fr.onerror = no; fr.readAsDataURL(blob);
  });
  const sample = async (prompt, opts = {}) => {
    const images = opts.images ? await Promise.all(opts.images.map(toB64)) : [];
    const r = await fetch(url, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, images }), signal: opts.signal,
    });
    const d = await r.json().catch(() => ({}));
    if (!r.ok || typeof d.text !== "string") {
      const e = new Error(d.error || "relay_failed");
      e.code = d.error === "daily_cap" ? "quota_all" : d.error === "ip_cap" ? "quota_mine" : d.error === "rate_limited" ? "rate_limited" : "relay_failed";
      throw e;
    }
    if (opts.onText) opts.onText({ text: d.text });
    return { text: d.text };
  };
  sample.limits = async () => ({ images: true });
  return sample;
};

/* remaining free quota for today: {left, mine}, or null if unknown */
window.relayCheck = async function () {
  if (!window.AILAB_RELAY) return null;
  try { const r = await fetch(window.AILAB_RELAY, { method: "GET" }); return r.ok ? await r.json() : null; } catch (e) { return null; }
};
/* message key for a used-up quota */
window.quotaKey = code => code === "quota_mine" ? "note.quotaMine" : code === "quota_all" ? "note.quota" : null;
