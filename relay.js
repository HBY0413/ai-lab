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
      e.code = d.error === "rate_limited" || d.error === "daily_cap" ? "rate_limited" : "relay_failed";
      throw e;
    }
    if (opts.onText) opts.onText({ text: d.text });
    return { text: d.text };
  };
  sample.limits = async () => ({ images: true });
  return sample;
};
