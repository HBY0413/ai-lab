/* Real-skill content: corrections to match the actual skills, evidence, and the file-placement bench.
   Loaded after i18n.js and before the page script. */
(function(){
"use strict";
const ZH={
 manual:{title:"升級／保養紀錄簡報產生器",facet:"文件自動化",gain:"140–200 頁紀錄簡報：<strong>1 天 → 30 分鐘</strong>",
  pain:"每次到客戶現場做系統升級或保養健檢，工程師都得把動輒上百張截圖整理成給客戶的正式紀錄簡報。一份要花一整天，還常有錯字、截圖放錯頁、範本殘留舊圖，交付前要反覆檢查。",
  purpose:"把公司範本和檢查清單做成 Agent Skill：依共通範本的頁序比對現場截圖，套用標準文字規範並跨環境比對重複句型，有疑問先問人；異常一律整理到最後的「請客戶協助確認事項」，再產出正式簡報。升級與保養兩種案子共用同一套引擎。",
  steps:["確認本機連線與專案資料夾，讀入現場截圖","依範本頁序比對截圖、套用標準文字規範，不確定就停下來問人","產出封面、摘要、目錄、章節與 Q&A 頁，異常集中到最後一頁"],
  effect:{type:"bar",before:["人工",480,"約 8 小時"],after:["Agent",30,"30 分鐘"],note:"經過 14 版迭代後上線；升級與保養共用同一套引擎"},
  tech:["Agent Skill","Python 產生 PPTX","YAML 檢查清單","文字規範比對"]},
 report:{title:"部門月會報告產生器",gain:"<strong>17 頁</strong>月會報告一次產出，附核對明細",
  pain:"每月月會前，要從客戶狀態總表和協銷進度表撈資料、算每個案子用了幾個人天，再一頁一頁照主管範本排成簡報。工作重複又耗時，人天算錯還得回頭重查。",
  purpose:"Agent 讀客戶狀態總表、月報設定檔和協銷進度表，自動算出各案人天、把協銷分成本月活動與持續追蹤，照主管範本產出整份月會報告，並另外附上核對明細 Excel，每個數字都查得到來源。",
  steps:["讀入總表（合約總覽、工時追蹤）、月報設定檔、協銷進度表","依規則計算人天、分類協銷進度，資料有疑義就列為待確認","照範本產出專案執行、技術銷售等章節，並輸出核對明細"],
  effect:{type:"kpi",items:[["17 頁","整份報告一次產出"],["核對明細","每個數字可回查來源"]]},
  tech:["Agent Skill","pandas 計算","Python 產生 PPTX","核對明細 Excel"]},
 maint:{facet:"產出治理",title:"AI 產出檔案存放規範",gain:"散落各處 → <strong>統一歸檔</strong>",
  pain:"大家用 AI 產出的簡報、報表、文件，有的只留在對話裡、有的存在個人桌面，命名也各自不同。要找某份交付文件找不到，也分不出哪些是 AI 生成、哪些是人工整理。",
  purpose:"做成一支所有 Skill 都會遵守的存放規範：產出一律存到部門的「檔案輸出區」，依類別和日期分資料夾，檔名加上「_AI生成」；同名不覆蓋、原始資料只讀不改，判斷不出類別時先問人。",
  steps:["判斷是否屬於例外（保養／升級文件、KM 設定檔）","依分類表決定「類別 → 日期」資料夾，判斷不出來就列出候選路徑請人選","套用命名規則（_AI生成、版本號、不覆蓋），存檔後回報路徑"],
  effect:{type:"kpi",items:[["1 個","統一出口"],["_AI生成","AI 產出一眼可辨"]]},
  tech:["Agent Skill","命名規範","OneDrive 同步","人工確認"],
  lab:{kind:"place",hint:"選一種產出，看規範會把它放在哪裡、檔名怎麼取。這個實驗台照 Skill 的規則在瀏覽器內執行。"}},
 kb:{title:"部門 FAQ 問答助手",gain:"有出處的回答，<strong>只讀不寫</strong>",
  pain:"客戶維運、技術支援的問題反覆被問，答案散在同事腦中和 SharePoint 的 FAQ 清單裡。新人不知道去哪查；直接問一般的 AI，又可能編出部門沒有的做法。",
  purpose:"Agent 比對 SharePoint「FAQ 總表」同步到本機的鏡像，在對話中找出相關記錄並註明出處；找不到就直說，並建議同仁到 SharePoint 新增記錄。這支 Skill 只讀不寫，因為公司不開放 Agent 直接寫入 SharePoint。",
  steps:["對話中比對到相關字眼，先問要不要查部門 FAQ","讀本機同步的 FAQ 鏡像，找出相關記錄","只用記錄內容回答並註明出處；查無記錄就如實告知並建議新增"],
  effect:{type:"kpi",items:[["附出處","每個答案可回查"],["只讀不寫","符合公司資安規範"]]},
  tech:["Agent Skill","SharePoint 清單鏡像","有依據的回答","唯讀設計"]},
 cases:{title:"歷史案子學習稽核",gain:"跨客戶找出<strong>重複模式</strong>，規則由人決定",
  pain:"升級／保養紀錄做了很多份，散在各客戶的專案資料夾裡。同樣的寫法、同樣的異常一再出現，卻沒有人回頭整理成規則，經驗只留在個別案子裡。",
  purpose:"Agent 定期掃描各客戶資料夾裡歷次案子留下的 spec.yaml，跟目前 Skill 的規則比對，寫出一份純觀察報告：哪些重複的文字模式、結構特徵、反覆出現的異常值得考慮寫進規則。它只提出觀察，絕不自己修改 Skill。",
  steps:["逐一客戶找出歷史案子的 spec.yaml","跟目前 Skill 規則比對，歸納重複模式與反覆出現的異常","寫成觀察報告，由人決定要不要更新規則"],
  effect:{type:"kpi",items:[["跨客戶","找出重複模式"],["只觀察不修改","規則由人決定"]]},
  tech:["Agent Skill","YAML 解析","模式歸納","人工決策"],
  lab:{hint:"以下是 8 筆模擬的歷史案子摘要。AI 會對照 Skill 目前已寫好的規則（異常處理方式、已記錄的陷阱、必拍清單），找出重複模式，並說明哪些還沒被規則涵蓋、值得寫進去。",btn:"產出觀察報告",
   input:`A01 客戶甲 2026-03 Tableau 升級：摘要頁授權寫成「10C/5E」
A02 客戶乙 2026-04 Tableau 升級：摘要頁授權寫成「Core 10 / Explorer 5」
A03 客戶丙 2026-05 保養健檢：備份頁漏截 backup 完成畫面，已列入請客戶確認事項
A04 客戶甲 2026-06 保養健檢：返回大綱箭頭蓋到標題
A05 客戶丁 2026-07 Tableau 升級：摘要頁授權寫成「10C/5E」
A06 客戶乙 2026-08 保養健檢：備份頁漏截 backup 完成畫面
A07 客戶戊 2026-09 Tableau 升級：返回大綱箭頭蓋到標題
A08 客戶丙 2026-10 保養健檢：範本殘留上一案的舊截圖`,
   example:`#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 授權寫法不一致（10C/5E 與 Core 10 / Explorer 5） | A01、A02、A05 | 3 | 已涵蓋（授權固定句型）；這些案子仍不一致，可能早於規則或未套用 |
| 備份完成畫面漏截 | A03、A06 | 2 | 部分涵蓋：A03 已依規則列入請客戶確認事項；是否列為必拍，節錄中未見 |
| 返回大綱箭頭蓋到標題 | A04、A07 | 2 | 已涵蓋（已記錄的陷阱） |
| 範本殘留舊截圖 | A08 | 1 | 已涵蓋（已記錄的陷阱）；單次，不算模式 |
#### 值得考慮寫進規則
- 授權已有固定句型，建議在產出前加一道檢查，確認摘要頁確實套用。
- 「備份完成畫面」連續漏截 2 次，可考慮列為保養案必拍截圖。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`}}
};
const CUR_RULES=`目前 upgrade-maintenance-pptx 已有的規則（節錄）：
- 異常一律放在簡報最末「請客戶協助確認事項」。
- 已記錄的陷阱：截圖錯位、範本殘留舊圖、標題與返回箭頭重疊。
- 摘要頁與細項大綱預設必要。
- 升級與保養案套用標準文字規範與重複比對機制（固定標題與句型、跨環境比對，使用者確認後寫入文字規範）。
- 授權資訊有固定句型：「授權：{key}（{type}，{c}/{e}/{v}），到期日{date}，維護到期{date}」；草稿給使用者確認（尤其授權／到期日）後才寫進 spec。
（以上為節錄，沒列出的項目請回答「節錄中未見」，不要推測。）`;
ZH.cases.lab.prompt=i=>`你是「歷史案子學習稽核」Agent，負責回顧升級／保養紀錄簡報的歷史案子。請對照下方「目前規則」，判斷每個模式是否已被涵蓋。
${CUR_RULES}
根據以下案子摘要（模擬資料），用繁體中文 Markdown 輸出：
#### 觀察到的重複模式
表格：| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |，依次數由多到少；「是否涵蓋」要依上方目前規則回答「已涵蓋（哪一條）」或「未涵蓋」；只出現一次的要註明「單次，不算模式」。
#### 值得考慮寫進規則
- 2 點以內，只寫有出現 2 次以上的模式。
#### 說明
一句話：本報告只提出觀察，不會修改 Skill。不要編造摘要裡沒有的資訊。
案子摘要：
${i}`;
const KB_PROMPT=(q,docs)=>`你是部門 FAQ 問答助手，只能根據下方 FAQ 記錄回答，用繁體中文，2～4 句。每個事實後面用【記錄編號】標示出處。如果記錄裡沒有答案，回答「部門 FAQ 目前沒有這筆記錄」，並建議同仁到 SharePoint 的「FAQ 總表」新增，不要自行推測。
FAQ 記錄：
${docs}
問題：${q}`;
ZH.kb.lab={prompt:KB_PROMPT};

const EN={
 manual:{title:"Upgrade / Maintenance Record Deck Generator",facet:"Document automation",gain:"140–200-page record decks: <strong>1 day → 30 min</strong>",
  pain:"After every on-site upgrade or health check, engineers had to turn a hundred-plus screenshots into a formal record deck for the client. Each took a full day, and typos, screenshots on the wrong page and stale images left in the template meant checking everything again before delivery.",
  purpose:"I turned the company template and checklists into an Agent Skill. It matches on-site screenshots to the template's page order, applies standard wording and compares repeated phrasing across environments, and asks a person when unsure. Every anomaly goes to a final \"items for the client to confirm\" page before the formal deck is rendered. Upgrades and maintenance share one engine.",
  steps:["Check the local connection and project folder, then read the on-site screenshots","Match screenshots to the template page order and apply standard wording; stop and ask when unsure","Render cover, summary, contents, sections and Q&A, with anomalies collected on the last page"],
  effect:{type:"bar",before:["Manual",480,"~8 hours"],after:["Agent",30,"30 min"],note:"Live after 14 iterations; one engine for upgrades and maintenance"},
  tech:["Agent Skill","Python → PPTX","YAML checklists","Wording rules"]},
 report:{title:"Monthly Department Report Generator",gain:"<strong>17-page</strong> monthly report in one run, with audit workbook",
  pain:"Before each monthly meeting someone pulled data from the client status workbook and the presales tracker, calculated the person-days used on each project, and built the deck page by page in the manager's template. It was repetitive and slow, and any miscount meant going back to recheck.",
  purpose:"The agent reads the client status workbook, the report settings file and the presales tracker, calculates person-days per project, sorts presales into this month's activity and ongoing follow-ups, and produces the whole report in the manager's template, plus an audit workbook so every number can be traced to its source.",
  steps:["Read the master workbook (contracts, timesheets), report settings and presales tracker","Calculate person-days and classify presales by rule; flag anything doubtful for confirmation","Render project and presales sections from the template and write the audit workbook"],
  effect:{type:"kpi",items:[["17 pages","whole report in one run"],["Audit workbook","every number traceable"]]},
  tech:["Agent Skill","pandas","Python → PPTX","Audit Excel"]},
 maint:{facet:"Output governance",title:"AI Output Filing Rules",gain:"Scattered → <strong>filed in one place</strong>",
  pain:"Decks, reports and documents made with AI lived in chat windows or on personal desktops, each named differently. Delivered files were hard to find, and nobody could tell AI-generated files from hand-made ones.",
  purpose:"A filing rule every skill follows: outputs go to the department's output area, into category and date folders, with \"_AI生成\" (AI-generated) added to the file name. Existing files are never overwritten, source data is read-only, and when the category is unclear it asks a person.",
  steps:["Check the exceptions (upgrade/maintenance decks, KM and settings files)","Pick the category → date folder from the table; if unclear, offer candidate paths for a person to choose","Apply naming rules (_AI生成, version suffix, never overwrite) and report where it was saved"],
  effect:{type:"kpi",items:[["1","single output location"],["_AI生成","AI output instantly recognisable"]]},
  tech:["Agent Skill","Naming rules","OneDrive sync","Human sign-off"],
  lab:{hint:"Pick an output and see where the rule files it and how it is named. This bench runs the skill's rules in your browser."}},
 kb:{title:"Department FAQ Assistant",gain:"Cited answers, <strong>read-only</strong> by design",
  pain:"The same client-support questions kept coming up, and the answers lived in colleagues' heads and a SharePoint FAQ list. New staff didn't know where to look, and a general-purpose AI might invent procedures the team never used.",
  purpose:"The agent searches a local mirror of the SharePoint \"FAQ list\", finds related records during the conversation and cites them. If there is no record it says so and suggests adding one on SharePoint. The skill is read-only because the company doesn't let agents write to SharePoint.",
  steps:["When related keywords come up, ask whether to check the department FAQ","Read the locally synced FAQ mirror and find related records","Answer only from those records with citations; if none, say so and suggest adding one"],
  effect:{type:"kpi",items:[["Cited sources","every answer traceable"],["Read-only","meets company security policy"]]},
  tech:["Agent Skill","SharePoint list mirror","Grounded answers","Read-only design"]},
 cases:{title:"Learning Audit of Past Projects",gain:"<strong>Recurring patterns</strong> found across clients; people decide the rules",
  pain:"Many upgrade and maintenance decks were scattered across client project folders. The same wording and the same anomalies kept recurring, but nobody went back to turn them into rules, so the lessons stayed buried in individual projects.",
  purpose:"The agent periodically scans the spec.yaml files left by past projects in each client folder, compares them with the current skill rules, and writes a purely observational report on recurring wording, structural traits and repeated anomalies worth adding to the rules. It only reports; it never edits the skill.",
  steps:["Find past projects' spec.yaml files client by client","Compare with the current skill rules and group recurring patterns and anomalies","Write an observation report; a person decides whether to change the rules"],
  effect:{type:"kpi",items:[["Cross-client","recurring patterns found"],["Observe only","people decide the rules"]]},
  tech:["Agent Skill","YAML parsing","Pattern mining","Human decision"],
  lab:{hint:"Below are 8 mock summaries of past projects. AI compares them with the skill's current rules (anomaly handling, recorded pitfalls, required screenshots), finds recurring patterns and points out which ones the rules don't cover yet.",btn:"Write observation report",
   input:`A01 Client A 2026-03 Tableau upgrade: summary lists licence as "10C/5E"
A02 Client B 2026-04 Tableau upgrade: summary lists licence as "Core 10 / Explorer 5"
A03 Client C 2026-05 health check: backup-complete screenshot missing, added to client confirmation items
A04 Client A 2026-06 health check: back-to-contents arrow overlaps the title
A05 Client D 2026-07 Tableau upgrade: summary lists licence as "10C/5E"
A06 Client B 2026-08 health check: backup-complete screenshot missing
A07 Client E 2026-09 Tableau upgrade: back-to-contents arrow overlaps the title
A08 Client C 2026-10 health check: old screenshot from a previous project left in the template`,
   example:`#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Inconsistent licence wording (10C/5E vs Core 10 / Explorer 5) | A01, A02, A05 | 3 | Covered (fixed licence sentence pattern); these projects still differ, possibly predating the rule |
| Backup-complete screenshot missing | A03, A06 | 2 | Partly covered: A03 was moved to client confirmation items per the rules; whether it is a required shot isn't in the excerpt |
| Back-to-contents arrow overlaps title | A04, A07 | 2 | Covered (recorded pitfall) |
| Old screenshot left in template | A08 | 1 | Covered (recorded pitfall); single case, not a pattern |
#### Worth adding to the rules
- A fixed licence pattern exists; add a pre-output check that the summary page actually uses it.
- The backup-complete screen was missed twice; consider making it a required shot for maintenance projects.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`}}
};
const TH={
 manual:{title:"ตัวสร้างสไลด์บันทึกการอัปเกรด/บำรุงรักษา",facet:"เอกสารอัตโนมัติ",gain:"สไลด์บันทึก 140–200 หน้า: <strong>1 วัน → 30 นาที</strong>",
  pain:"ทุกครั้งที่อัปเกรดระบบหรือตรวจสุขภาพระบบที่หน้างานลูกค้า วิศวกรต้องจัดภาพหน้าจอนับร้อยภาพเป็นสไลด์บันทึกฉบับทางการ ใช้เวลาทั้งวันต่อฉบับ และมักมีคำผิด ภาพผิดหน้า หรือภาพเก่าค้างในเทมเพลต ต้องตรวจซ้ำก่อนส่งมอบ",
  purpose:"ผมนำเทมเพลตและเช็กลิสต์ของบริษัทมาทำเป็น Agent Skill ซึ่งจับคู่ภาพหน้าจอกับลำดับหน้าของเทมเพลต ใช้มาตรฐานการเขียนและเทียบประโยคซ้ำข้ามสภาพแวดล้อม หากไม่แน่ใจจะถามคนก่อน ความผิดปกติทั้งหมดจะรวมไว้ในหน้าสุดท้าย \"รายการที่ขอให้ลูกค้าช่วยยืนยัน\" แล้วจึงสร้างสไลด์ฉบับทางการ งานอัปเกรดและบำรุงรักษาใช้เอนจินเดียวกัน",
  steps:["ตรวจการเชื่อมต่อเครื่องและโฟลเดอร์โปรเจกต์ แล้วอ่านภาพหน้าจอจากหน้างาน","จับคู่ภาพกับลำดับหน้าเทมเพลตและใช้มาตรฐานการเขียน หากไม่แน่ใจให้หยุดถามคน","สร้างหน้าปก สรุป สารบัญ บท และหน้า Q&A โดยรวมความผิดปกติไว้หน้าสุดท้าย"],
  effect:{type:"bar",before:["คนทำ",480,"ประมาณ 8 ชม."],after:["Agent",30,"30 นาที"],note:"ใช้งานจริงหลังปรับปรุง 14 รอบ งานอัปเกรดและบำรุงรักษาใช้เอนจินเดียวกัน"},
  tech:["Agent Skill","Python สร้าง PPTX","เช็กลิสต์ YAML","มาตรฐานการเขียน"]},
 report:{title:"ตัวสร้างรายงานประชุมประจำเดือนของแผนก",gain:"รายงาน <strong>17 หน้า</strong> ในครั้งเดียว พร้อม Excel ตรวจสอบ",
  pain:"ก่อนประชุมประจำเดือนทุกครั้ง ต้องดึงข้อมูลจากตารางสถานะลูกค้าและตารางติดตามงานขาย คำนวณจำนวนวันทำงาน (man-day) ของแต่ละโปรเจกต์ แล้วทำสไลด์ทีละหน้าตามเทมเพลตของหัวหน้า งานซ้ำซากและใช้เวลานาน หากคำนวณผิดต้องกลับไปตรวจใหม่",
  purpose:"Agent อ่านตารางสถานะลูกค้า ไฟล์ตั้งค่ารายงาน และตารางติดตามงานขาย คำนวณ man-day ของแต่ละโปรเจกต์ แยกงานขายเป็นกิจกรรมเดือนนี้และงานติดตามต่อเนื่อง แล้วสร้างรายงานทั้งฉบับตามเทมเพลตของหัวหน้า พร้อมไฟล์ Excel ตรวจสอบ เพื่อให้ทุกตัวเลขย้อนดูแหล่งที่มาได้",
  steps:["อ่านตารางหลัก (สัญญา บันทึกเวลา) ไฟล์ตั้งค่ารายงาน และตารางติดตามงานขาย","คำนวณ man-day และจัดประเภทงานขายตามกฎ ข้อมูลที่น่าสงสัยจะถูกระบุให้ยืนยัน","สร้างบทโปรเจกต์และงานขายจากเทมเพลต และส่งออกไฟล์ตรวจสอบ"],
  effect:{type:"kpi",items:[["17 หน้า","สร้างทั้งฉบับในครั้งเดียว"],["ไฟล์ตรวจสอบ","ทุกตัวเลขย้อนดูได้"]]},
  tech:["Agent Skill","pandas","Python สร้าง PPTX","Excel ตรวจสอบ"]},
 maint:{facet:"กำกับผลลัพธ์",title:"กฎการจัดเก็บไฟล์ที่สร้างด้วย AI",gain:"กระจัดกระจาย → <strong>จัดเก็บที่เดียว</strong>",
  pain:"สไลด์ รายงาน และเอกสารที่สร้างด้วย AI บางส่วนอยู่แค่ในแชต บางส่วนอยู่บนเดสก์ท็อปส่วนตัว และตั้งชื่อต่างกัน หาไฟล์ส่งมอบไม่เจอ และแยกไม่ออกว่าไฟล์ไหน AI สร้าง ไฟล์ไหนคนทำ",
  purpose:"กฎการจัดเก็บที่ทุก Skill ต้องปฏิบัติตาม: ผลลัพธ์ทั้งหมดเก็บใน \"พื้นที่ส่งออกไฟล์\" ของแผนก แยกโฟลเดอร์ตามประเภทและวันที่ และเติม \"_AI生成\" (สร้างโดย AI) ในชื่อไฟล์ ไม่เขียนทับไฟล์เดิม ข้อมูลต้นฉบับอ่านอย่างเดียว และหากไม่แน่ใจประเภทจะถามคนก่อน",
  steps:["ตรวจว่าเป็นข้อยกเว้นหรือไม่ (สไลด์อัปเกรด/บำรุงรักษา ไฟล์ KM และไฟล์ตั้งค่า)","เลือกโฟลเดอร์ \"ประเภท → วันที่\" ตามตาราง หากไม่ชัดเจนให้เสนอเส้นทางให้คนเลือก","ใช้กฎการตั้งชื่อ (_AI生成 เลขเวอร์ชัน ไม่เขียนทับ) แล้วแจ้งตำแหน่งที่บันทึก"],
  effect:{type:"kpi",items:[["1 แห่ง","จุดจัดเก็บเดียว"],["_AI生成","รู้ทันทีว่า AI สร้าง"]]},
  tech:["Agent Skill","กฎการตั้งชื่อ","ซิงก์ OneDrive","ยืนยันโดยคน"],
  lab:{hint:"เลือกประเภทไฟล์ แล้วดูว่ากฎจะจัดเก็บไว้ที่ไหนและตั้งชื่ออย่างไร สถานีนี้ทำงานตามกฎของ Skill ในเบราว์เซอร์"}},
 kb:{title:"ผู้ช่วยตอบคำถาม FAQ ของแผนก",gain:"ตอบพร้อมแหล่งที่มา <strong>อ่านอย่างเดียว</strong>",
  pain:"คำถามด้านดูแลระบบและซัพพอร์ตลูกค้าถูกถามซ้ำ ๆ คำตอบอยู่ในหัวของเพื่อนร่วมงานและในรายการ FAQ บน SharePoint พนักงานใหม่ไม่รู้จะหาที่ไหน ส่วน AI ทั่วไปก็อาจแต่งวิธีการที่แผนกไม่เคยใช้",
  purpose:"Agent ค้นจากสำเนา \"รายการ FAQ\" ของ SharePoint ที่ซิงก์มาไว้ในเครื่อง หารายการที่เกี่ยวข้องระหว่างสนทนาและระบุแหล่งที่มา หากไม่พบก็บอกตรง ๆ และแนะนำให้เพิ่มรายการบน SharePoint Skill นี้อ่านอย่างเดียว เพราะบริษัทไม่อนุญาตให้ Agent เขียนลง SharePoint",
  steps:["เมื่อพบคำที่เกี่ยวข้อง ให้ถามก่อนว่าจะค้น FAQ ของแผนกหรือไม่","อ่านสำเนา FAQ ที่ซิงก์ในเครื่องและหารายการที่เกี่ยวข้อง","ตอบจากรายการเท่านั้นพร้อมอ้างอิง หากไม่พบให้บอกและแนะนำให้เพิ่มรายการ"],
  effect:{type:"kpi",items:[["ระบุแหล่งที่มา","ตรวจสอบย้อนกลับได้"],["อ่านอย่างเดียว","สอดคล้องนโยบายความปลอดภัย"]]},
  tech:["Agent Skill","สำเนารายการ SharePoint","คำตอบมีหลักฐาน","ออกแบบให้อ่านอย่างเดียว"]},
 cases:{title:"ตรวจสอบเพื่อเรียนรู้จากโปรเจกต์ในอดีต",gain:"พบ<strong>รูปแบบซ้ำ</strong>ข้ามลูกค้า ให้คนตัดสินใจเรื่องกฎ",
  pain:"สไลด์บันทึกการอัปเกรดและบำรุงรักษาจำนวนมากกระจายอยู่ในโฟลเดอร์โปรเจกต์ของลูกค้าแต่ละราย รูปแบบการเขียนและความผิดปกติเดิม ๆ เกิดซ้ำ แต่ไม่มีใครกลับไปสรุปเป็นกฎ บทเรียนจึงจมอยู่ในแต่ละโปรเจกต์",
  purpose:"Agent สแกนไฟล์ spec.yaml ของโปรเจกต์ในอดีตในโฟลเดอร์ลูกค้าแต่ละรายเป็นระยะ เทียบกับกฎปัจจุบันของ Skill แล้วเขียนรายงานเชิงสังเกตล้วน ๆ ว่ารูปแบบการเขียน ลักษณะโครงสร้าง และความผิดปกติที่เกิดซ้ำใดควรพิจารณาเพิ่มเป็นกฎ โดยรายงานเท่านั้นและไม่แก้ไข Skill เอง",
  steps:["หาไฟล์ spec.yaml ของโปรเจกต์ในอดีตทีละลูกค้า","เทียบกับกฎปัจจุบันและจัดกลุ่มรูปแบบและความผิดปกติที่เกิดซ้ำ","เขียนรายงานข้อสังเกต ให้คนตัดสินใจว่าจะปรับกฎหรือไม่"],
  effect:{type:"kpi",items:[["ข้ามลูกค้า","พบรูปแบบที่เกิดซ้ำ"],["สังเกตเท่านั้น","คนเป็นผู้ตัดสินกฎ"]]},
  tech:["Agent Skill","อ่าน YAML","หารูปแบบ","คนตัดสินใจ"],
  lab:{hint:"ด้านล่างคือสรุปโปรเจกต์ในอดีต (ข้อมูลจำลอง) 8 รายการ AI จะเทียบกับกฎปัจจุบันของ Skill (วิธีจัดการความผิดปกติ ข้อควรระวังที่บันทึกไว้ ภาพบังคับ) หารูปแบบที่เกิดซ้ำ และบอกว่าข้อใดกฎยังไม่ครอบคลุม",btn:"สร้างรายงานข้อสังเกต",
   input:`A01 ลูกค้า A 2026-03 อัปเกรด Tableau: หน้าสรุปเขียนสิทธิ์ใช้งานว่า "10C/5E"
A02 ลูกค้า B 2026-04 อัปเกรด Tableau: หน้าสรุปเขียนสิทธิ์ใช้งานว่า "Core 10 / Explorer 5"
A03 ลูกค้า C 2026-05 ตรวจสุขภาพระบบ: ขาดภาพหน้าจอสำรองข้อมูลเสร็จ ใส่ไว้ในรายการให้ลูกค้ายืนยันแล้ว
A04 ลูกค้า A 2026-06 ตรวจสุขภาพระบบ: ลูกศรกลับสารบัญทับหัวข้อ
A05 ลูกค้า D 2026-07 อัปเกรด Tableau: หน้าสรุปเขียนสิทธิ์ใช้งานว่า "10C/5E"
A06 ลูกค้า B 2026-08 ตรวจสุขภาพระบบ: ขาดภาพหน้าจอสำรองข้อมูลเสร็จ
A07 ลูกค้า E 2026-09 อัปเกรด Tableau: ลูกศรกลับสารบัญทับหัวข้อ
A08 ลูกค้า C 2026-10 ตรวจสุขภาพระบบ: ภาพเก่าจากโปรเจกต์ก่อนค้างอยู่ในเทมเพลต`,
   example:`#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| เขียนสิทธิ์ใช้งานไม่เหมือนกัน (10C/5E กับ Core 10 / Explorer 5) | A01, A02, A05 | 3 | ครอบคลุมแล้ว (มีรูปแบบประโยคสิทธิ์ใช้งานตายตัว) แต่ยังไม่สม่ำเสมอ อาจเกิดก่อนมีกฎ |
| ขาดภาพสำรองข้อมูลเสร็จ | A03, A06 | 2 | ครอบคลุมบางส่วน: A03 ใส่ในรายการให้ลูกค้ายืนยันตามกฎแล้ว ส่วนการเป็นภาพบังคับไม่พบในข้อความที่ยกมา |
| ลูกศรกลับสารบัญทับหัวข้อ | A04, A07 | 2 | ครอบคลุมแล้ว (บันทึกเป็นข้อควรระวัง) |
| ภาพเก่าค้างในเทมเพลต | A08 | 1 | ครอบคลุมแล้ว (บันทึกเป็นข้อควรระวัง) ครั้งเดียว ไม่นับเป็นรูปแบบ |
#### ควรพิจารณาเพิ่มเป็นกฎ
- มีรูปแบบประโยคสิทธิ์ใช้งานแล้ว ควรเพิ่มการตรวจก่อนส่งออกว่าหน้าสรุปใช้รูปแบบนั้นจริง
- ภาพสำรองข้อมูลเสร็จขาดไป 2 ครั้ง ควรพิจารณาให้เป็นภาพบังคับสำหรับงานบำรุงรักษา
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่`}}
};
/* evidence: real skill outputs and structure (company identifiers masked) */
const SKTREE={
 manual:["upgrade-maintenance-pptx/","├─ SKILL.md  (45 KB)","├─ scripts/generate_deck.py","├─ scripts/renumber_screenshots.py","├─ assets/template.pptx","├─ assets/full_checklist_core.yaml","├─ assets/full_checklist_maintenance_core.yaml","├─ assets/full_checklist_optional_desktop_module.yaml","└─ assets/example_spec.yaml"],
 report:["monthly-report/","├─ SKILL.md  (17 KB)","├─ references/template_structure.md","├─ scripts/build_monthly_report.py","├─ scripts/build_project_section.py","├─ scripts/build_sales_section.py","├─ scripts/verify_sections.py","├─ scripts/check_overflow.py","└─ assets/template_monthly.pptx · template_sales.pptx"],
 maint:["file-placement/","└─ SKILL.md  (7 KB)"],
 kb:["faq-qa/","├─ SKILL.md  (12 KB)","├─ references/faq_schema.md","├─ scripts/README.md","└─ assets/README.md"],
 cases:["learning-upgrade/","├─ SKILL.md  (16 KB)","├─ references/state_schema.md","├─ scripts/README.md","└─ assets/README.md"]
};
const EXCERPT={
 manual:`description: 產出〔公司〕格式的升級／保養紀錄PPTX；一開始先確認本機連線；
依_KM_共通範本頁序比對現場截圖；摘要頁與細項大綱預設必要；
升級與保養案都套用標準文字規範＋重複比對機制（固定標題與句型、跨環境比對、
使用者確認後寫入_KM_文字規範）；異常放最末「請客戶協助確認事項」；
並記錄截圖錯位、範本殘留舊圖、標題與返回箭頭重疊等陷阱。`,
 report:`固定章節：OP／專案執行／技術銷售／組織與發展／ED
  專案執行：章節封面 → 顧問服務&開發 → 維護 → 教育訓練
  技術銷售：章節封面 → 協銷進度 – 本月活動 → 協銷進度 – 持續追蹤 → Test-Drive 規劃
用法：
  python3 build_monthly_report.py --master 總表.xlsx --config 月報設定檔.xlsx --sales 協銷進度.xlsx \\
      --month 2026-10 --out 202610_〔部門〕月會報告_AI生成.pptx [--audit-project 專案執行核對明細.xlsx]`,
 maint:`## 決定存放位置的順序
1. 屬於上方「例外」 → 依例外規則。
2. 使用者在這次對話指定了 _檔案輸出區 內的位置 → 照使用者說的放。
3. 對照分類表能明確判斷 → 直接存放，存完告訴使用者路徑。
4. 判斷不出來，或可能有兩個以上合理位置 → 先詢問使用者，不要自行決定。
## 檔名規則
- 一律加「_AI生成」…版本號放在 _AI生成 之後：…_AI生成_v2.pptx
- 同名檔案已存在時不覆蓋，改用 _v2、_v3 遞增
## 必守規則
1. 原始資料只讀不改。`,
 kb:`這支skill只負責讀取、比對、回答，完全不負責寫入任何東西。
新知識的新增／更新，一律由同仁自己到SharePoint網站上的「FAQ總表」清單填寫。
## 資料架構：本機看到的是唯讀鏡像，不是清單本身
- 本機CSV是唯讀的，Claude絕對不要寫入它。
## 步驟4：比對與呈現結果
- 只有部分相關、不夠肯定：如實說明「找到一筆可能相關但不完全一樣的記錄」
- 完全找不到對應記錄：不要憑自己的知識瞎猜敷衍過去`,
 cases:`它不會修改那支skill的SKILL.md、不會產生任何簡報、也不會動到客戶的工作檔案。
## 步驟3——逐一客戶分開掃描，絕對不要一次掃整棵樹
## 步驟6——寫報告，絕對不要動skill本身
## 這支skill絕對不能做的事
- 絕對不要為了不讓報告空白就硬掰一個發現
- 絕對不要把只在單一案子出現過一次的觀察，當成已經確立的模式。`
};
const EV={
 manual:{imgs:[1,2,3,4,5,6,7,8].map(i=>`ev/um-${i}.jpg`)},
 report:{imgs:[1,2,3,4,5,6,7,8].map(i=>`ev/mr-${i}.jpg`)}
};

/* governance: five layers, each backed by real source screenshots */
const GOV={
 zh:{title:"五層治理怎麼落實在 Skill 裡",note:"以下是 Skill 原始檔與實際產出的截圖（客戶與公司名稱已改為代號）。治理不是另外寫一份文件，而是直接寫進每支 Skill 的硬性規則。",
  L:[["① 去識別化","共通範本由客戶真實手冊去識別化而來：截圖全部馬賽克，主機名、網域、帳號、IP、Email、客戶名改為佔位值；規定不可放未去識別化的客戶檔。"],
     ["② 只讀原則","FAQ 助手只讀不寫、本機鏡像禁止寫入；檔案存放規範規定原始資料只讀不改。"],
     ["③ 人工確認","讀不準就附截圖問人、不要猜；存放位置判斷不出來就先問使用者。"],
     ["④ 驗證才交付","月會報告產出後必跑驗證步驟；核對明細用公式重算人天，程式比對全部 ✓ 才算通過。"],
     ["⑤ 不確定不硬掰","學習稽核禁止為了報告不空白而捏造發現；FAQ 找不到記錄時不能憑自己的知識瞎猜。"]]},
 en:{title:"How the five governance layers live inside the skills",note:"Screenshots of the skills' source files and real outputs (client and company names replaced with codes). Governance isn't a separate document; it is written into each skill as hard rules.",
  L:[["① De-identification","The shared template was de-identified from a real client manual: every screenshot pixelated, host names, domains, accounts, IPs, emails and client names replaced; un-sanitised client files are forbidden."],
     ["② Read-only","The FAQ assistant only reads and must never write to its local mirror; the filing rules keep source data read-only."],
     ["③ Human confirmation","If a screenshot can't be read with confidence, ask with the screenshot instead of guessing; if the filing location is unclear, ask the user first."],
     ["④ Verify before delivery","The monthly report must pass its verification steps; the audit workbook recalculates person-days with formulas and every check must show ✓."],
     ["⑤ No made-up answers","The learning audit must never invent findings to fill a report; the FAQ assistant must not guess when no record exists."]]},
 th:{title:"การกำกับดูแล 5 ชั้นถูกฝังไว้ใน Skill อย่างไร",note:"ภาพหน้าจอของไฟล์ต้นฉบับและผลลัพธ์จริงของ Skill (ชื่อลูกค้าและบริษัทถูกแทนด้วยรหัส) การกำกับดูแลไม่ได้เป็นเอกสารแยก แต่เขียนเป็นกฎบังคับในทุก Skill",
  L:[["① ปกปิดข้อมูล","เทมเพลตกลางทำจากคู่มือลูกค้าจริงที่ปกปิดข้อมูลแล้ว: ภาพหน้าจอเบลอทั้งหมด ชื่อโฮสต์ โดเมน บัญชี IP อีเมล และชื่อลูกค้าถูกแทนที่ และห้ามใช้ไฟล์ลูกค้าที่ยังไม่ปกปิด"],
     ["② อ่านอย่างเดียว","ผู้ช่วย FAQ อ่านอย่างเดียวและห้ามเขียนสำเนาในเครื่อง กฎการจัดเก็บกำหนดให้ข้อมูลต้นฉบับอ่านอย่างเดียว"],
     ["③ ให้คนยืนยัน","อ่านภาพไม่แน่ใจให้ถามพร้อมแนบภาพ ห้ามเดา หากไม่แน่ใจตำแหน่งจัดเก็บให้ถามผู้ใช้ก่อน"],
     ["④ ตรวจสอบก่อนส่งมอบ","รายงานประจำเดือนต้องผ่านขั้นตอนตรวจสอบ ไฟล์ตรวจสอบคำนวณ man-day ใหม่ด้วยสูตร และทุกรายการต้องเป็น ✓"],
     ["⑤ ไม่แต่งคำตอบ","การตรวจสอบเพื่อเรียนรู้ห้ามแต่งข้อค้นพบเพื่อไม่ให้รายงานว่าง ผู้ช่วย FAQ ห้ามเดาเมื่อไม่มีรายการ"]]}
};
const GOV_IMG=[["l1a","l1b"],["l2a","l2b","l2c"],["l3a","l3b"],["l4a","l4b"],["l5a","l5b"]];

ZH.gov={title:"AI 導入的五層治理",gain:"治理寫進每支 Skill，<strong>主管同意下完成驗證</strong>",
  purpose:"把治理直接寫進每支 Skill 的硬性規則：去識別化、只讀原則、人工確認、驗證才交付、不確定不硬掰。下方是每一層在 Skill 原始檔裡的實際寫法；最後的實驗台示範第一層「去識別化」怎麼運作。"};
EN.gov={title:"Five-Layer Governance for AI Adoption",gain:"Governance in every skill, <strong>validated with manager approval</strong>",purpose:"Governance is written into every skill as hard rules: de-identification, read-only, human confirmation, verify before delivery, no made-up answers. Below is how each layer is actually written in the skills' source files; the bench at the end shows layer one, de-identification, in action."};
TH.gov={title:"การกำกับดูแล 5 ชั้นสำหรับการนำ AI มาใช้",gain:"ฝังการกำกับดูแลในทุก Skill <strong>ทดสอบภายใต้การอนุมัติของหัวหน้า</strong>",purpose:"การกำกับดูแลถูกเขียนเป็นกฎบังคับในทุก Skill: ปกปิดข้อมูล อ่านอย่างเดียว ให้คนยืนยัน ตรวจสอบก่อนส่งมอบ และไม่แต่งคำตอบ ด้านล่างคือวิธีเขียนแต่ละชั้นในไฟล์ต้นฉบับของ Skill จริง และสถานีทดลองท้ายสุดสาธิตชั้นแรก คือการปกปิดข้อมูล"};
function merge(a,b){if(b===undefined)return a;if(Array.isArray(b)||typeof b!=="object"||b===null||typeof b==="function")return b;const o=Object.assign({},a);for(const k in b)o[k]=merge(a?a[k]:undefined,b[k]);return o}
const TX={
 "ev.title":{zh:"實際畫面 · Skill 真實產出",en:"Real output · produced by the skill",th:"ภาพจริง · ผลลัพธ์ที่ Skill สร้าง"},
 "ev.slides":{zh:"以下是這支 Skill 實際執行產生的簡報頁。輸入資料為模擬，公司標誌、名稱與聯絡資訊已遮蔽。點圖可放大。",en:"These slides were generated by actually running this skill. Inputs are mock data; company logo, name and contact details are masked. Click to enlarge.",th:"สไลด์เหล่านี้สร้างจากการรัน Skill จริง ข้อมูลนำเข้าเป็นข้อมูลจำลอง โลโก้ ชื่อบริษัท และข้อมูลติดต่อถูกปิดบังแล้ว คลิกเพื่อขยาย"},
 "ev.struct":{zh:"Skill 檔案結構",en:"Skill file structure",th:"โครงสร้างไฟล์ของ Skill"},
 "ev.excerpt":{zh:"SKILL.md 節錄（原文，已去識別化）",en:"SKILL.md excerpt (original Chinese, de-identified)",th:"ข้อความจาก SKILL.md (ต้นฉบับภาษาจีน ปกปิดตัวตนแล้ว)"},
 "pl.type":{zh:"產出類型",en:"Output type",th:"ประเภทไฟล์"},
 "pl.cust":{zh:"客戶名稱",en:"Client",th:"ชื่อลูกค้า"},
 "pl.date":{zh:"產出日期",en:"Date",th:"วันที่"},
 "pl.topic":{zh:"檔名主題",en:"File topic",th:"หัวข้อไฟล์"},
 "pl.ext":{zh:"副檔名",en:"Extension",th:"นามสกุลไฟล์"},
 "pl.exists":{zh:"同名檔案已存在",en:"A file with this name already exists",th:"มีไฟล์ชื่อนี้อยู่แล้ว"},
 "pl.path":{zh:"存放位置",en:"Saved to",th:"ตำแหน่งจัดเก็บ"},
 "pl.name":{zh:"檔名",en:"File name",th:"ชื่อไฟล์"},
 "pl.why":{zh:"判斷依據",en:"Why",th:"เหตุผล"},
 "pl.ask":{zh:"判斷不出類別 → 先詢問使用者，列出候選路徑：",en:"Category unclear → ask the user first, offering candidate paths:",th:"ไม่แน่ใจประเภท → ถามผู้ใช้ก่อน โดยเสนอเส้นทาง:"},
 "pl.noSuffix":{zh:"KM／設定檔是 Skill 依固定檔名讀取的，不加「_AI生成」",en:"KM/settings files are read by fixed name, so no \"_AI生成\" suffix",th:"ไฟล์ KM/ตั้งค่าถูกอ่านด้วยชื่อตายตัว จึงไม่เติม \"_AI生成\""},
 "pl.ver":{zh:"同名檔已存在 → 不覆蓋，改用 _v2",en:"Same name exists → never overwrite, use _v2",th:"มีชื่อซ้ำ → ไม่เขียนทับ ใช้ _v2"},
 "pl.exc1":{zh:"例外：保養／升級文件存回原始截圖所在的客戶專案資料夾",en:"Exception: upgrade/maintenance decks go back to the client project folder holding the original screenshots",th:"ข้อยกเว้น: สไลด์อัปเกรด/บำรุงรักษาเก็บกลับไปที่โฟลเดอร์โปรเจกต์ลูกค้าที่มีภาพต้นฉบับ"},
 "pl.exc2":{zh:"例外：KM、Skill 設定檔放在 _KM_ 資料夾",en:"Exception: KM and skill settings files live in the _KM_ folder",th:"ข้อยกเว้น: ไฟล์ KM และไฟล์ตั้งค่า Skill อยู่ในโฟลเดอร์ _KM_"},
 "pl.table":{zh:"依分類表：{c} → 日期資料夾",en:"From the table: {c} → date folder",th:"ตามตาราง: {c} → โฟลเดอร์วันที่"}
};
const PL=[
 {k:"deliver",zh:"客戶交付文件",en:"Client deliverable",th:"เอกสารส่งมอบลูกค้า",dir:(c,d)=>`客戶交付\\${c}\\${d}`},
 {k:"monthly",zh:"月會報告",en:"Monthly report",th:"รายงานประชุมประจำเดือน",dir:(c,d)=>`月會報告\\${d.slice(0,6)}`},
 {k:"presales",zh:"協銷素材／提案／報價",en:"Presales / proposal / quote",th:"เอกสารงานขาย/ข้อเสนอ/ใบเสนอราคา",dir:(c,d)=>`協銷\\${c}\\${d}`},
 {k:"training",zh:"內部訓練教材",en:"Internal training",th:"สื่อฝึกอบรมภายใน",dir:(c,d)=>`內部訓練\\${d}`},
 {k:"knowledge",zh:"知識文件／技術筆記",en:"Knowledge / tech notes",th:"เอกสารความรู้/บันทึกเทคนิค",dir:(c,d)=>`知識整理\\${d}`},
 {k:"skilltest",zh:"Skill 測試試產",en:"Skill trial output",th:"ผลทดลอง Skill",dir:(c,d)=>`skill測試\\upgrade-maintenance-pptx\\${d}`},
 {k:"upgrade",zh:"升級／保養紀錄簡報",en:"Upgrade/maintenance deck",th:"สไลด์อัปเกรด/บำรุงรักษา",exc:1},
 {k:"km",zh:"KM／Skill 設定檔",en:"KM / skill settings",th:"ไฟล์ KM/ตั้งค่า Skill",exc:2},
 {k:"unclear",zh:"其他（無法判斷）",en:"Other (unclear)",th:"อื่น ๆ (ไม่ชัดเจน)"}
];
window.REAL={
  PL,
  t(k,v){const L=(window.I18N&&I18N.lang)||"zh";const e=TX[k];let s=e?(e[L]||e.zh):k;if(v)for(const x in v)s=s.replace("{"+x+"}",v[x]);return s},
  apply(list,lang){
    const over=lang==="en"?EN:lang==="th"?TH:null;
    return list.map(x=>{let y=merge(x,ZH[x.id]);if(over&&over[x.id])y=merge(y,over[x.id]);
      if(lang!=="zh"&&x.id==="kb"){y=merge(y,{lab:{prompt:(q,d)=>KB_PROMPT(q,d)}})}
      if(x.id==="gov"){const G=GOV[lang]||GOV.zh;y.evidence={layers:G.L.map((l,i)=>({t:l[0],d:l[1],imgs:GOV_IMG[i].map(k=>`ev/gov-${k}.jpg`)})),title:G.title,note:G.note}}
      if(SKTREE[x.id])y.evidence={tree:SKTREE[x.id],excerpt:EXCERPT[x.id],imgs:EV[x.id]?EV[x.id].imgs:null};
      return y});
  }
};
})();
