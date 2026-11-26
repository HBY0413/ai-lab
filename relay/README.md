# AI Lab relay（即時 AI 中繼服務）

讓 GitHub Pages 上的觀看者不用登入 Claude，就能在 Live Lab 即時呼叫 AI。Claude API 金鑰只存在 Cloudflare，不會出現在網頁裡。

## 部署步驟

1. **Anthropic Console**（platform.claude.com）：建立 API 金鑰，並在 Limits 設定每月花費上限。
2. **Cloudflare**：Workers & Pages → Create → Worker，名稱例如 `ai-lab-relay`，把 `worker.js` 的內容貼進編輯器後 Deploy。
3. **建立 KV**：Storage & Databases → KV → Create namespace（例如 `ai-lab-counter`）。
4. **綁定 KV**：回到 Worker → Settings → Bindings → Add → KV namespace，變數名稱填 `COUNTER`，選剛建立的 namespace。
5. **加入金鑰**：Worker → Settings → Variables and Secrets → Add，類型選 Secret，名稱 `ANTHROPIC_API_KEY`，值貼上 API 金鑰。
6. （可選）調整用量：`DAILY_LIMIT`（全站每日次數，預設 300）、`PER_IP_LIMIT`（每位訪客每日次數，預設 20）。
7. 把 Worker 網址（`https://ai-lab-relay.<你的子網域>.workers.dev`）填進網站根目錄 `relay.js` 的 `window.AILAB_RELAY`。

## 防護

- 只接受 `https://hby0413.github.io` 發出的請求（`ALLOWED_ORIGINS` 可改）。
- 全站與每位訪客都有每日上限，超過就回到顯示範例結果。
- 限制輸入長度、圖片數量與大小，回覆上限 1,500 tokens。
- 預設模型 `claude-haiku-5-5`（`MODEL` 可改）。
