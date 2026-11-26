/* Real-skill content: corrections to match the actual skills, evidence, and the file-placement bench.
   Loaded after i18n.js and before the page script. */
(function(){
"use strict";
const ZH={
 manual:{title:"AI 升級／保養紀錄簡報產生器",facet:"文件自動化",gain:"140–200 頁紀錄簡報：<strong>1 天 → 30 分鐘</strong>",
  pain:"工程師到客戶現場做升級或保養，通常只帶截圖回來：如果在現場邊截圖邊寫完整紀錄，會佔用大量的升級與保養時間。但帶回公司再做，等於要二次加工：得回想每張圖當下在做什麼動作、畫面上有哪些資訊，再自己一個字一個字打上去，或去剪貼以前的簡報來改。140–200 頁的紀錄一份要花一整天，還常有錯字、截圖放錯頁、殘留舊圖；工程師做完後，交付前公司內部還要再看過一遍、看完再改。",
  purpose:"工程師只要把現場截圖整批丟進來，AI 會逐張看懂畫面內容，判斷這是哪個檢查項目（例如主機硬體規格、服務狀態），並從畫面讀出數值寫成說明，例如 CPU 核心數、記憶體與磁碟容量。背後是把公司範本和檢查清單做成 Agent Skill：依共通範本的頁序比對現場截圖，套用標準文字規範並跨環境比對重複句型，有疑問先問人；異常一律整理到最後的「請客戶協助確認事項」，再產出正式簡報。升級與保養兩種案子共用同一套引擎。",
  steps:["工程師把現場截圖整批丟進專案資料夾","AI 逐張判讀畫面，對到範本的檢查項目；截圖日期不是本次作業日就排除","從畫面讀出規格與狀態（CPU、記憶體、磁碟、服務），套標準句型寫進說明；看不準就附圖問人","產出封面、摘要、目錄、章節與 Q&A 頁，異常集中到最後一頁"],
  effect:{type:"bar",before:["人工",480,"約 8 小時"],after:["Agent",30,"30 分鐘"],note:"經過 14 版迭代後上線；升級與保養共用同一套引擎"},
  tech:["Agent Skill","Python 產生 PPTX","YAML 檢查清單","文字規範比對"]},
 report:{title:"AI 部門月會報告產生器",gain:"主管自己整理的 17 頁月會簡報：<strong>半天 → 15 分鐘</strong>，附核對明細",
  pain:"每月月會前，主管要自己從客戶狀態總表和協銷進度表撈資料、算每個案子用了幾個人天，再一頁一頁照範本排成簡報。工作重複又耗時，人天算錯還得回頭重查。",
  purpose:"使用者是部門主管本人：原本要自己花半天整理的月會簡報，交給 Agent 產出，主管只要確認待確認項目與核對明細。管理職的時間成本比一般同仁高，省下的半天可以放回帶團隊、經營客戶與做決策這些更有產值的工作。Agent 讀客戶狀態總表、月報設定檔和協銷進度表，自動算出各案人天、把協銷分成本月活動與持續追蹤，照部門範本產出整份月會報告，並另外附上核對明細 Excel，每個數字都查得到來源。",
  steps:["讀入總表（合約總覽、工時追蹤）、月報設定檔、協銷進度表","依規則計算人天、分類協銷進度，資料有疑義就列為待確認","照範本產出專案執行、技術銷售等章節，並輸出核對明細"],
  effect:{type:"kpi",items:[["半天 → 15 分鐘","17 頁月會簡報製作時間"],["核對明細","每個數字可回查來源"]]},
  tech:["Agent Skill","pandas 計算","Python 產生 PPTX","核對明細 Excel"]},
 maint:{facet:"產出治理",title:"AI 產出檔案存放規範",gain:"散落各處 → <strong>統一歸檔</strong>",
  pain:"大家用 AI 產出的簡報、報表、文件，有的只留在對話裡、有的存在個人桌面，命名也各自不同。要找某份交付文件找不到，也分不出哪些是 AI 生成、哪些是人工整理。",
  purpose:"做成一支所有 Skill 都會遵守的存放規範：產出一律存到團隊共用的單一「檔案輸出區」，依類別和日期分資料夾，檔名加上「_AI生成」；同名不覆蓋、原始資料只讀不改，判斷不出類別時先問人。",
  steps:["判斷是否屬於例外（保養／升級文件、KM 設定檔）","依分類表決定「類別 → 日期」資料夾，判斷不出來就列出候選路徑請人選","套用命名規則（_AI生成、版本號、不覆蓋），存檔後回報路徑"],
  effect:{type:"kpi",items:[["1 個","統一出口"],["_AI生成","AI 產出一眼可辨"]]},
  tech:["Agent Skill","命名規範","OneDrive 同步","人工確認"],
  lab:{kind:"place",hint:"選一種產出，看規範會把它放在哪裡、檔名怎麼取。這個實驗台照 Skill 的規則在瀏覽器內執行。"}},
 kb:{title:"AI 部門 FAQ 問答助手",gain:"有出處的回答，<strong>只讀不寫</strong>",
  pain:"客戶維運、技術支援的問題反覆被問，答案散在同事腦中和 SharePoint 的 FAQ 清單裡。新人不知道去哪查；直接問一般的 AI，又可能編出部門沒有的做法。",
  purpose:"Agent 比對 SharePoint「FAQ 總表」同步到本機的鏡像，在對話中找出相關記錄並註明出處；找不到就直說，並建議同仁到 SharePoint 新增記錄。這支 Skill 刻意設計成只讀不寫：知識庫的新增與修改留給人負責，Agent 不直接改動企業的正式資料。",
  steps:["對話中比對到相關字眼，先問要不要查部門 FAQ","讀本機同步的 FAQ 鏡像，找出相關記錄","只用記錄內容回答並註明出處；查無記錄就如實告知並建議新增"],
  effect:{type:"kpi",items:[["附出處","每個答案可回查"],["只讀不寫","不改動正式資料"]]},
  tech:["Agent Skill","SharePoint 清單鏡像","有依據的回答","唯讀設計"]},
 cases:{title:"AI 歷史案子學習稽核",gain:"跨客戶找出<strong>重複模式</strong>，規則由人決定",
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

const EN={
 manual:{title:"AI Upgrade / Maintenance Record Deck Generator",facet:"Document automation",gain:"140–200-page record decks: <strong>1 day → 30 min</strong>",
  pain:"Engineers usually come back from an on-site upgrade or maintenance visit with nothing but screenshots: writing the full record on site while capturing would eat into the upgrade window itself. Doing it back at the office means reworking everything a second time, trying to remember what each screenshot was for and what it showed, then typing it all up or copying from old decks. A 140–200-page record took a full day, with typos, screenshots on the wrong page and stale images creeping in, and before delivery someone else in the company still had to review it and send it back for fixes.",
  purpose:"Engineers just drop in the on-site screenshots. The AI reads each one, works out which check it belongs to (hardware specs, service status and so on), and writes the description from what is on screen, such as CPU cores, memory and disk size. Under the hood, I turned the company template and checklists into an Agent Skill. It matches on-site screenshots to the template's page order, applies standard wording and compares repeated phrasing across environments, and asks a person when unsure. Every anomaly goes to a final \"items for the client to confirm\" page before the formal deck is rendered. Upgrades and maintenance share one engine.",
  steps:["Engineers drop the on-site screenshots into the project folder","The AI reads each screenshot and maps it to a template check; shots dated outside this visit are excluded","It reads specs and status off the screen (CPU, memory, disk, services) and writes them in the standard wording; when unsure it asks with the screenshot attached","Render cover, summary, contents, sections and Q&A, with anomalies collected on the last page"],
  effect:{type:"bar",before:["Manual",480,"~8 hours"],after:["Agent",30,"30 min"],note:"Live after 14 iterations; one engine for upgrades and maintenance"},
  tech:["Agent Skill","Python → PPTX","YAML checklists","Wording rules"]},
 report:{title:"AI Monthly Department Report Generator",gain:"The manager's own 17-slide monthly deck: <strong>half a day → 15 min</strong>, with audit workbook",
  pain:"Before each monthly meeting the manager had to pull data from the client status workbook and the presales tracker, calculate the person-days used on each project, and build the deck page by page from the template. It was repetitive and slow, and any miscount meant going back to recheck.",
  purpose:"The user is the department manager. The monthly deck they used to spend half a day putting together themselves is now produced by the agent; the manager only reviews the flagged items and the audit workbook. A manager's time costs more than anyone else's on the team, so the half day saved goes back into leading people, working with clients and making decisions. The agent reads the client status workbook, the report settings file and the presales tracker, calculates person-days per project, sorts presales into this month's activity and ongoing follow-ups, and produces the whole report in the department template, plus an audit workbook so every number can be traced to its source.",
  steps:["Read the master workbook (contracts, timesheets), report settings and presales tracker","Calculate person-days and classify presales by rule; flag anything doubtful for confirmation","Render project and presales sections from the template and write the audit workbook"],
  effect:{type:"kpi",items:[["Half a day → 15 min","to build the 17-slide monthly deck"],["Audit workbook","every number traceable"]]},
  tech:["Agent Skill","pandas","Python → PPTX","Audit Excel"]},
 maint:{facet:"Output governance",title:"AI Output Filing Rules",gain:"Scattered → <strong>filed in one place</strong>",
  pain:"Decks, reports and documents made with AI lived in chat windows or on personal desktops, each named differently. Delivered files were hard to find, and nobody could tell AI-generated files from hand-made ones.",
  purpose:"A filing rule every skill follows: outputs go to a single shared output area, into category and date folders, with \"_AI生成\" (AI-generated) added to the file name. Existing files are never overwritten, source data is read-only, and when the category is unclear it asks a person.",
  steps:["Check the exceptions (upgrade/maintenance decks, KM and settings files)","Pick the category → date folder from the table; if unclear, offer candidate paths for a person to choose","Apply naming rules (_AI生成, version suffix, never overwrite) and report where it was saved"],
  effect:{type:"kpi",items:[["1","single output location"],["_AI生成","AI output instantly recognisable"]]},
  tech:["Agent Skill","Naming rules","OneDrive sync","Human sign-off"],
  lab:{hint:"Pick an output and see where the rule files it and how it is named. This bench runs the skill's rules in your browser."}},
 kb:{title:"AI Department FAQ Assistant",gain:"Cited answers, <strong>read-only</strong> by design",
  pain:"The same client-support questions kept coming up, and the answers lived in colleagues' heads and a SharePoint FAQ list. New staff didn't know where to look, and a general-purpose AI might invent procedures the team never used.",
  purpose:"The agent searches a local mirror of the SharePoint \"FAQ list\", finds related records during the conversation and cites them. If there is no record it says so and suggests adding one on SharePoint. The skill is deliberately read-only: adding and editing knowledge stays with people, and the agent never changes the organisation's source records.",
  steps:["When related keywords come up, ask whether to check the department FAQ","Read the locally synced FAQ mirror and find related records","Answer only from those records with citations; if none, say so and suggest adding one"],
  effect:{type:"kpi",items:[["Cited sources","every answer traceable"],["Read-only","never changes source records"]]},
  tech:["Agent Skill","SharePoint list mirror","Grounded answers","Read-only design"]},
 cases:{title:"AI Learning Audit of Past Projects",gain:"<strong>Recurring patterns</strong> found across clients; people decide the rules",
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
 manual:{title:"ตัวสร้างสไลด์บันทึกการอัปเกรด/บำรุงรักษาด้วย AI",facet:"เอกสารอัตโนมัติ",gain:"สไลด์บันทึก 140–200 หน้า: <strong>1 วัน → 30 นาที</strong>",
  pain:"วิศวกรที่ไปอัปเกรดหรือบำรุงรักษาที่หน้างานมักกลับมาพร้อมภาพหน้าจออย่างเดียว เพราะถ้าเขียนบันทึกฉบับเต็มไปพร้อมกับการจับภาพ จะกินเวลางานอัปเกรดและบำรุงรักษาไปมาก แต่ถ้ากลับมาทำที่บริษัทก็เท่ากับต้องทำซ้ำอีกรอบ ต้องนึกว่าแต่ละภาพตอนนั้นกำลังทำอะไรและมีข้อมูลอะไรบ้าง แล้วพิมพ์เองทีละคำหรือคัดลอกจากสไลด์เก่ามาแก้ บันทึก 140–200 หน้าใช้เวลาทั้งวันต่อฉบับ และมักมีคำผิด ภาพผิดหน้า หรือภาพเก่าค้างอยู่ ก่อนส่งมอบยังต้องให้คนในบริษัทตรวจอีกรอบแล้วแก้ไขอีก",
  purpose:"วิศวกรแค่ใส่ภาพหน้าจอจากหน้างานทั้งหมดเข้ามา AI จะอ่านทีละภาพ ระบุว่าเป็นรายการตรวจใด (เช่น สเปกฮาร์ดแวร์ สถานะบริการ) แล้วเขียนคำอธิบายจากสิ่งที่เห็นบนหน้าจอ เช่น จำนวนคอร์ CPU หน่วยความจำ และขนาดดิสก์ เบื้องหลังคือการนำเทมเพลตและเช็กลิสต์ของบริษัทมาทำเป็น Agent Skill ซึ่งจับคู่ภาพหน้าจอกับลำดับหน้าของเทมเพลต ใช้มาตรฐานการเขียนและเทียบประโยคซ้ำข้ามสภาพแวดล้อม หากไม่แน่ใจจะถามคนก่อน ความผิดปกติทั้งหมดจะรวมไว้ในหน้าสุดท้าย \"รายการที่ขอให้ลูกค้าช่วยยืนยัน\" แล้วจึงสร้างสไลด์ฉบับทางการ งานอัปเกรดและบำรุงรักษาใช้เอนจินเดียวกัน",
  steps:["วิศวกรใส่ภาพหน้าจอจากหน้างานทั้งหมดลงในโฟลเดอร์โปรเจกต์","AI อ่านทีละภาพและจับคู่กับรายการตรวจในเทมเพลต ภาพที่วันที่ไม่ตรงกับวันปฏิบัติงานจะถูกตัดออก","อ่านสเปกและสถานะจากหน้าจอ (CPU หน่วยความจำ ดิสก์ บริการ) แล้วเขียนด้วยรูปประโยคมาตรฐาน หากไม่แน่ใจจะแนบภาพถามคน","สร้างหน้าปก สรุป สารบัญ บท และหน้า Q&A โดยรวมความผิดปกติไว้หน้าสุดท้าย"],
  effect:{type:"bar",before:["คนทำ",480,"ประมาณ 8 ชม."],after:["Agent",30,"30 นาที"],note:"ใช้งานจริงหลังปรับปรุง 14 รอบ งานอัปเกรดและบำรุงรักษาใช้เอนจินเดียวกัน"},
  tech:["Agent Skill","Python สร้าง PPTX","เช็กลิสต์ YAML","มาตรฐานการเขียน"]},
 report:{title:"ตัวสร้างรายงานประชุมประจำเดือนของแผนกด้วย AI",gain:"สไลด์รายงาน 17 หน้าที่หัวหน้าทำเอง: <strong>ครึ่งวัน → 15 นาที</strong> พร้อม Excel ตรวจสอบ",
  pain:"ก่อนประชุมประจำเดือนทุกครั้ง หัวหน้าต้องดึงข้อมูลจากตารางสถานะลูกค้าและตารางติดตามงานขายเอง คำนวณจำนวนวันทำงาน (man-day) ของแต่ละโปรเจกต์ แล้วทำสไลด์ทีละหน้าตามเทมเพลต งานซ้ำซากและใช้เวลานาน หากคำนวณผิดต้องกลับไปตรวจใหม่",
  purpose:"ผู้ใช้คือหัวหน้าแผนกเอง: สไลด์ประชุมรายเดือนที่เคยต้องใช้เวลาครึ่งวันทำเอง ตอนนี้ให้ Agent สร้างให้ หัวหน้าแค่ตรวจรายการที่ต้องยืนยันและไฟล์ตรวจสอบ เวลาของผู้บริหารมีต้นทุนสูงกว่าพนักงานทั่วไป ครึ่งวันที่ประหยัดได้จึงกลับไปใช้กับการดูแลทีม ลูกค้า และการตัดสินใจที่สร้างคุณค่ามากกว่า Agent อ่านตารางสถานะลูกค้า ไฟล์ตั้งค่ารายงาน และตารางติดตามงานขาย คำนวณ man-day ของแต่ละโปรเจกต์ แยกงานขายเป็นกิจกรรมเดือนนี้และงานติดตามต่อเนื่อง แล้วสร้างรายงานทั้งฉบับตามเทมเพลตของแผนก พร้อมไฟล์ Excel ตรวจสอบ เพื่อให้ทุกตัวเลขย้อนดูแหล่งที่มาได้",
  steps:["อ่านตารางหลัก (สัญญา บันทึกเวลา) ไฟล์ตั้งค่ารายงาน และตารางติดตามงานขาย","คำนวณ man-day และจัดประเภทงานขายตามกฎ ข้อมูลที่น่าสงสัยจะถูกระบุให้ยืนยัน","สร้างบทโปรเจกต์และงานขายจากเทมเพลต และส่งออกไฟล์ตรวจสอบ"],
  effect:{type:"kpi",items:[["ครึ่งวัน → 15 นาที","เวลาทำสไลด์รายงาน 17 หน้า"],["ไฟล์ตรวจสอบ","ทุกตัวเลขย้อนดูได้"]]},
  tech:["Agent Skill","pandas","Python สร้าง PPTX","Excel ตรวจสอบ"]},
 maint:{facet:"กำกับผลลัพธ์",title:"กฎการจัดเก็บไฟล์ที่สร้างด้วย AI",gain:"กระจัดกระจาย → <strong>จัดเก็บที่เดียว</strong>",
  pain:"สไลด์ รายงาน และเอกสารที่สร้างด้วย AI บางส่วนอยู่แค่ในแชต บางส่วนอยู่บนเดสก์ท็อปส่วนตัว และตั้งชื่อต่างกัน หาไฟล์ส่งมอบไม่เจอ และแยกไม่ออกว่าไฟล์ไหน AI สร้าง ไฟล์ไหนคนทำ",
  purpose:"กฎการจัดเก็บที่ทุก Skill ต้องปฏิบัติตาม: ผลลัพธ์ทั้งหมดเก็บใน \"พื้นที่ส่งออกไฟล์\" ของแผนก แยกโฟลเดอร์ตามประเภทและวันที่ และเติม \"_AI生成\" (สร้างโดย AI) ในชื่อไฟล์ ไม่เขียนทับไฟล์เดิม ข้อมูลต้นฉบับอ่านอย่างเดียว และหากไม่แน่ใจประเภทจะถามคนก่อน",
  steps:["ตรวจว่าเป็นข้อยกเว้นหรือไม่ (สไลด์อัปเกรด/บำรุงรักษา ไฟล์ KM และไฟล์ตั้งค่า)","เลือกโฟลเดอร์ \"ประเภท → วันที่\" ตามตาราง หากไม่ชัดเจนให้เสนอเส้นทางให้คนเลือก","ใช้กฎการตั้งชื่อ (_AI生成 เลขเวอร์ชัน ไม่เขียนทับ) แล้วแจ้งตำแหน่งที่บันทึก"],
  effect:{type:"kpi",items:[["1 แห่ง","จุดจัดเก็บเดียว"],["_AI生成","รู้ทันทีว่า AI สร้าง"]]},
  tech:["Agent Skill","กฎการตั้งชื่อ","ซิงก์ OneDrive","ยืนยันโดยคน"],
  lab:{hint:"เลือกประเภทไฟล์ แล้วดูว่ากฎจะจัดเก็บไว้ที่ไหนและตั้งชื่ออย่างไร สถานีนี้ทำงานตามกฎของ Skill ในเบราว์เซอร์"}},
 kb:{title:"ผู้ช่วย AI ตอบคำถาม FAQ ของแผนก",gain:"ตอบพร้อมแหล่งที่มา <strong>อ่านอย่างเดียว</strong>",
  pain:"คำถามด้านดูแลระบบและซัพพอร์ตลูกค้าถูกถามซ้ำ ๆ คำตอบอยู่ในหัวของเพื่อนร่วมงานและในรายการ FAQ บน SharePoint พนักงานใหม่ไม่รู้จะหาที่ไหน ส่วน AI ทั่วไปก็อาจแต่งวิธีการที่แผนกไม่เคยใช้",
  purpose:"Agent ค้นจากสำเนา \"รายการ FAQ\" ของ SharePoint ที่ซิงก์มาไว้ในเครื่อง หารายการที่เกี่ยวข้องระหว่างสนทนาและระบุแหล่งที่มา หากไม่พบก็บอกตรง ๆ และแนะนำให้เพิ่มรายการบน SharePoint Skill นี้ออกแบบให้อ่านอย่างเดียวโดยตั้งใจ การเพิ่มหรือแก้ไขความรู้เป็นหน้าที่ของคน และ Agent จะไม่แก้ไขข้อมูลต้นฉบับขององค์กร",
  steps:["เมื่อพบคำที่เกี่ยวข้อง ให้ถามก่อนว่าจะค้น FAQ ของแผนกหรือไม่","อ่านสำเนา FAQ ที่ซิงก์ในเครื่องและหารายการที่เกี่ยวข้อง","ตอบจากรายการเท่านั้นพร้อมอ้างอิง หากไม่พบให้บอกและแนะนำให้เพิ่มรายการ"],
  effect:{type:"kpi",items:[["ระบุแหล่งที่มา","ตรวจสอบย้อนกลับได้"],["อ่านอย่างเดียว","ไม่แก้ไขข้อมูลต้นฉบับ"]]},
  tech:["Agent Skill","สำเนารายการ SharePoint","คำตอบมีหลักฐาน","ออกแบบให้อ่านอย่างเดียว"]},
 cases:{title:"AI ตรวจสอบเพื่อเรียนรู้จากโปรเจกต์ในอดีต",gain:"พบ<strong>รูปแบบซ้ำ</strong>ข้ามลูกค้า ให้คนตัดสินใจเรื่องกฎ",
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
  L:[["① 去識別化","代號對照表只存在使用者本機；AI 要讀必須在對話中取得同意，讀完不記憶，代號定期汰換。共通範本由客戶真實手冊去識別化而來：截圖全部馬賽克，主機名、網域、帳號、IP、Email、客戶名改為佔位值；規定不可放未去識別化的客戶檔。"],
     ["② 只讀原則","FAQ 助手只讀不寫、本機鏡像禁止寫入；檔案存放規範規定原始資料只讀不改。"],
     ["③ 人工確認","讀不準就附截圖問人、不要猜；存放位置判斷不出來就先問使用者。"],
     ["④ 驗證才交付","月會報告產出後必跑驗證步驟；核對明細用公式重算人天，程式比對全部 ✓ 才算通過。"],
     ["⑤ 不確定不硬掰","學習稽核禁止為了報告不空白而捏造發現；FAQ 找不到記錄時不能憑自己的知識瞎猜。"]]},
 en:{title:"How the five governance layers live inside the skills",note:"Screenshots of the skills' source files and real outputs (client and company names replaced with codes). Governance isn't a separate document; it is written into each skill as hard rules.",
  L:[["① De-identification","The code table stays only on the user's machine; the AI must get approval in the conversation to read it, remembers nothing, and codes are rotated regularly. The shared template was de-identified from a real client manual: every screenshot pixelated, host names, domains, accounts, IPs, emails and client names replaced; un-sanitised client files are forbidden."],
     ["② Read-only","The FAQ assistant only reads and must never write to its local mirror; the filing rules keep source data read-only."],
     ["③ Human confirmation","If a screenshot can't be read with confidence, ask with the screenshot instead of guessing; if the filing location is unclear, ask the user first."],
     ["④ Verify before delivery","The monthly report must pass its verification steps; the audit workbook recalculates person-days with formulas and every check must show ✓."],
     ["⑤ No made-up answers","The learning audit must never invent findings to fill a report; the FAQ assistant must not guess when no record exists."]]},
 th:{title:"การกำกับดูแล 5 ชั้นถูกฝังไว้ใน Skill อย่างไร",note:"ภาพหน้าจอของไฟล์ต้นฉบับและผลลัพธ์จริงของ Skill (ชื่อลูกค้าและบริษัทถูกแทนด้วยรหัส) การกำกับดูแลไม่ได้เป็นเอกสารแยก แต่เขียนเป็นกฎบังคับในทุก Skill",
  L:[["① ปกปิดข้อมูล","ตารางเทียบรหัสอยู่บนเครื่องผู้ใช้เท่านั้น AI ต้องขออนุมัติในบทสนทนาก่อนอ่าน อ่านแล้วไม่จดจำ และเปลี่ยนรหัสเป็นระยะ เทมเพลตกลางทำจากคู่มือลูกค้าจริงที่ปกปิดข้อมูลแล้ว: ภาพหน้าจอเบลอทั้งหมด ชื่อโฮสต์ โดเมน บัญชี IP อีเมล และชื่อลูกค้าถูกแทนที่ และห้ามใช้ไฟล์ลูกค้าที่ยังไม่ปกปิด"],
     ["② อ่านอย่างเดียว","ผู้ช่วย FAQ อ่านอย่างเดียวและห้ามเขียนสำเนาในเครื่อง กฎการจัดเก็บกำหนดให้ข้อมูลต้นฉบับอ่านอย่างเดียว"],
     ["③ ให้คนยืนยัน","อ่านภาพไม่แน่ใจให้ถามพร้อมแนบภาพ ห้ามเดา หากไม่แน่ใจตำแหน่งจัดเก็บให้ถามผู้ใช้ก่อน"],
     ["④ ตรวจสอบก่อนส่งมอบ","รายงานประจำเดือนต้องผ่านขั้นตอนตรวจสอบ ไฟล์ตรวจสอบคำนวณ man-day ใหม่ด้วยสูตร และทุกรายการต้องเป็น ✓"],
     ["⑤ ไม่แต่งคำตอบ","การตรวจสอบเพื่อเรียนรู้ห้ามแต่งข้อค้นพบเพื่อไม่ให้รายงานว่าง ผู้ช่วย FAQ ห้ามเดาเมื่อไม่มีรายการ"]]}
};
const GOV_IMG=[["l1a","l1b"],["l2a","l2b","l2c"],["l3a","l3b"],["l4a","l4b"],["l5a","l5b"]];

ZH.gov={title:"AI 導入的五層治理",gain:"治理寫進每支 Skill，<strong>主管同意下完成驗證</strong>",
  purpose:"關鍵在第一層去識別化：客戶名稱、主機名、帳號等機敏資料先在本機換成代號，<b>代號對照表只存在使用者自己的電腦</b>，不上傳、不放進共用資料夾。AI 若需要讀對照表，Skill 有硬性條件：必須在對話中請使用者按「同意」才能讀取；讀完不留存、不記憶這次的內容；對照表的代號也會定期更新、汰換檔案。其餘四層（只讀原則、人工確認、驗證才交付、不確定不硬掰）同樣直接寫成每支 Skill 的硬性規則。",
  steps:["在本機把個資、客戶名稱、主機名換成代號","代號對照表只存在使用者本機，不上傳、不共用","AI 要讀對照表時，必須在對話中取得使用者同意","讀完不留存、不記憶；對照表代號定期更新汰換","只把遮罩後的內容交給 AI 處理"],
  tech:["本機對照表","使用者同意關卡","不留存・不記憶","代號定期汰換","只讀原則","人工確認"]};
EN.gov={title:"Five-Layer Governance for AI Adoption",gain:"Governance in every skill, <strong>validated with manager approval</strong>",purpose:"The key is layer one, de-identification. Client names, host names, accounts and other sensitive data are swapped for codes on the user's machine, and <b>the code lookup table lives only on the user's own computer</b>: never uploaded, never put in a shared folder. If the AI needs to read the table, the skill has a hard condition: the user must click Approve in the conversation first; nothing is retained or remembered afterwards; and the codes are rotated and the table replaced on a regular schedule. The other four layers (read-only, human confirmation, verify before delivery, no made-up answers) are written into every skill as hard rules in the same way.",
  steps:["Replace personal data, client names and host names with codes on the local machine","Keep the code lookup table only on the user's computer; never upload or share it","Before the AI reads the table, get the user's approval in the conversation","Retain and remember nothing afterwards; rotate the codes and replace the table regularly","Send only the masked content to the AI"],
  tech:["Local lookup table","User approval gate","No retention or memory","Regular code rotation","Read-only","Human confirmation"]};
TH.gov={title:"การกำกับดูแล 5 ชั้นสำหรับการนำ AI มาใช้",gain:"ฝังการกำกับดูแลในทุก Skill <strong>ทดสอบภายใต้การอนุมัติของหัวหน้า</strong>",purpose:"หัวใจอยู่ที่ชั้นแรก การปกปิดข้อมูล: ชื่อลูกค้า ชื่อโฮสต์ บัญชี และข้อมูลอ่อนไหวอื่น ๆ ถูกแทนด้วยรหัสบนเครื่องของผู้ใช้ และ<b>ตารางเทียบรหัสเก็บไว้บนคอมพิวเตอร์ของผู้ใช้เท่านั้น</b> ไม่อัปโหลดและไม่ใส่ในโฟลเดอร์ส่วนกลาง หาก AI ต้องอ่านตาราง Skill มีเงื่อนไขบังคับ: ผู้ใช้ต้องกด \"อนุมัติ\" ในบทสนทนาก่อน อ่านแล้วไม่เก็บและไม่จดจำ และรหัสในตารางจะถูกเปลี่ยนและแทนไฟล์ใหม่เป็นระยะ อีกสี่ชั้น (อ่านอย่างเดียว ให้คนยืนยัน ตรวจสอบก่อนส่งมอบ ไม่แต่งคำตอบ) ก็เขียนเป็นกฎบังคับในทุก Skill เช่นกัน",
  steps:["แทนข้อมูลส่วนบุคคล ชื่อลูกค้า และชื่อโฮสต์ด้วยรหัสบนเครื่อง","ตารางเทียบรหัสเก็บไว้บนคอมพิวเตอร์ของผู้ใช้เท่านั้น ไม่อัปโหลดหรือแชร์","ก่อน AI อ่านตาราง ต้องได้รับอนุมัติจากผู้ใช้ในบทสนทนา","อ่านแล้วไม่เก็บไม่จดจำ และเปลี่ยนรหัส/แทนไฟล์เป็นระยะ","ส่งเฉพาะเนื้อหาที่ปกปิดแล้วให้ AI"],
  tech:["ตารางเทียบในเครื่อง","ด่านขออนุมัติผู้ใช้","ไม่เก็บ·ไม่จดจำ","เปลี่ยนรหัสเป็นระยะ","อ่านอย่างเดียว","ให้คนยืนยัน"]};
/* ---- 01 / 03 live labs, aligned with the real cases (mock data) ---- */
const RPT_PROMPT={
 zh:i=>`你是部門月會報告 Agent，使用者是部門主管本人。根據以下模擬的工時紀錄與協銷進度（報告月份 2026-10），照月會範本的規則整理，用繁體中文、Markdown 輸出：
規則：1 人天 = 8 小時，人天取到小數一位；專案類型缺漏的工時不計入人天，列為待確認；協銷活動日期在報告月份內的歸「本月活動」，其餘（含沒有日期的）歸「持續追蹤」。數字一律從資料計算，不要編造。
#### 專案執行（本月人天）
一個表格：| 類型 | 客戶 | 工時 | 人天 |，依類型排列，最後一列為合計（只算已分類的工時）。
#### 技術銷售・協銷進度
- **本月活動**：逐筆列出。
- **持續追蹤**：逐筆列出。
#### 待主管確認
- 資料有缺漏或疑義的項目，每項一句，說明暫時怎麼處理。
資料：
${i}`,
 en:i=>`You are a department monthly-report agent; the user is the department manager. Using the mock timesheet and presales tracker below (report month 2026-10), follow the template rules and output Markdown in English.
Rules: 1 person-day = 8 hours, one decimal place; hours with no project type are excluded from person-days and flagged for confirmation; presales activities dated within the report month go under "This month", everything else (including undated items) under "Ongoing". Calculate every number from the data; never invent one.
#### Project delivery (person-days this month)
A table: | Type | Client | Hours | Person-days |, grouped by type, last row Total (classified hours only).
#### Presales progress
- **This month**: one line per item.
- **Ongoing**: one line per item.
#### For the manager to confirm
- One sentence per missing or doubtful item, saying how it was handled for now.
Data:
${i}`,
 th:i=>`คุณคือ Agent ทำรายงานประชุมประจำเดือนของแผนก ผู้ใช้คือหัวหน้าแผนกเอง ใช้บันทึกชั่วโมงงานและความคืบหน้างาน Presales (ข้อมูลจำลอง เดือนรายงาน 2026-10) ด้านล่าง จัดตามกฎของเทมเพลต แล้วตอบเป็นภาษาไทยในรูปแบบ Markdown
กฎ: 1 แมนเดย์ = 8 ชั่วโมง ทศนิยมหนึ่งตำแหน่ง ชั่วโมงที่ไม่ระบุประเภทโครงการไม่นับเป็นแมนเดย์และให้ระบุว่ารอยืนยัน กิจกรรม Presales ที่มีวันที่อยู่ในเดือนรายงานให้อยู่ใน "กิจกรรมเดือนนี้" ที่เหลือ (รวมรายการไม่มีวันที่) อยู่ใน "ติดตามต่อเนื่อง" ทุกตัวเลขต้องคำนวณจากข้อมูล ห้ามแต่งขึ้นเอง
#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
ตาราง: | ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ | เรียงตามประเภท แถวสุดท้ายเป็นรวม (เฉพาะชั่วโมงที่จัดประเภทแล้ว)
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: รายการละหนึ่งบรรทัด
- **ติดตามต่อเนื่อง**: รายการละหนึ่งบรรทัด
#### รายการให้หัวหน้ายืนยัน
- รายการที่ข้อมูลขาดหรือไม่ชัดเจน รายการละหนึ่งประโยค บอกว่าตอนนี้จัดการอย่างไร
ข้อมูล:
${i}`};
const RPT_LAB={
 zh:{hint:"以下是模擬的當月工時紀錄與協銷進度表。AI 會照月會範本的規則算出各案人天、把協銷分成「本月活動」與「持續追蹤」，資料有缺漏的列為待主管確認。可以直接修改資料再產生一次。",
  input:`【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶A,顧問服務&開發,64
客戶A,維護,12
客戶B,維護,20
客戶C,教育訓練,16
客戶D,顧問服務&開發,40
客戶E,,10
【協銷進度】客戶,活動,日期,狀態
客戶F,產品展示,2026-10-08,已完成
客戶G,POC 規劃,2026-10-21,進行中
客戶H,報價追蹤,2026-09-15,等待客戶回覆
客戶I,Test-Drive,,待排定`,
  btn:"產生月會摘要",prompt:RPT_PROMPT.zh,
  example:`#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶A | 64 | 8.0 |
| 顧問服務&開發 | 客戶D | 40 | 5.0 |
| 維護 | 客戶A | 12 | 1.5 |
| 維護 | 客戶B | 20 | 2.5 |
| 教育訓練 | 客戶C | 16 | 2.0 |
| 合計 | — | 152 | 19.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶F 產品展示（10/08，已完成）；客戶G POC 規劃（10/21，進行中）
- **持續追蹤**：客戶H 報價追蹤（9/15 起，等待客戶回覆）；客戶I Test-Drive（待排定）
#### 待主管確認
- 客戶E 的 10 小時沒有填專案類型，暫不計入人天，請確認歸屬哪一類。
- 客戶I 的 Test-Drive 還沒有日期，先列在持續追蹤。`},
 en:{hint:"Below are a mock monthly timesheet and presales tracker. AI follows the report template rules: it calculates person-days per project, splits presales into \"This month\" and \"Ongoing\", and flags gaps for the manager to confirm. Edit the data and run it again.",
  input:`[Timesheet 2026-10] Client,Project type,Hours
Client A,Consulting & development,64
Client A,Maintenance,12
Client B,Maintenance,20
Client C,Training,16
Client D,Consulting & development,40
Client E,,10
[Presales tracker] Client,Activity,Date,Status
Client F,Product demo,2026-10-08,Done
Client G,POC planning,2026-10-21,In progress
Client H,Quote follow-up,2026-09-15,Waiting for client
Client I,Test-Drive,,To be scheduled`,
  btn:"Write summary",prompt:RPT_PROMPT.en,
  example:`#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client A | 64 | 8.0 |
| Consulting & development | Client D | 40 | 5.0 |
| Maintenance | Client A | 12 | 1.5 |
| Maintenance | Client B | 20 | 2.5 |
| Training | Client C | 16 | 2.0 |
| Total | — | 152 | 19.0 |
#### Presales progress
- **This month**: Client F product demo (10/08, done); Client G POC planning (10/21, in progress)
- **Ongoing**: Client H quote follow-up (since 9/15, waiting for client); Client I Test-Drive (to be scheduled)
#### For the manager to confirm
- Client E's 10 hours have no project type, so they are left out of person-days for now; please confirm the category.
- Client I's Test-Drive has no date yet, so it is listed under Ongoing.`},
 th:{hint:"ด้านล่างคือบันทึกชั่วโมงงานประจำเดือนและความคืบหน้างาน Presales (ข้อมูลจำลอง) AI จะคำนวณแมนเดย์ของแต่ละโครงการตามกฎของเทมเพลต แยกงาน Presales เป็น \"กิจกรรมเดือนนี้\" กับ \"ติดตามต่อเนื่อง\" และระบุรายการที่ข้อมูลขาดให้หัวหน้ายืนยัน แก้ข้อมูลแล้วสร้างใหม่ได้",
  input:`[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า A,ที่ปรึกษาและพัฒนา,64
ลูกค้า A,บำรุงรักษา,12
ลูกค้า B,บำรุงรักษา,20
ลูกค้า C,ฝึกอบรม,16
ลูกค้า D,ที่ปรึกษาและพัฒนา,40
ลูกค้า E,,10
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า F,สาธิตผลิตภัณฑ์,2026-10-08,เสร็จแล้ว
ลูกค้า G,วางแผน POC,2026-10-21,กำลังดำเนินการ
ลูกค้า H,ติดตามใบเสนอราคา,2026-09-15,รอลูกค้าตอบกลับ
ลูกค้า I,Test-Drive,,รอกำหนดวัน`,
  btn:"สร้างสรุปการประชุม",prompt:RPT_PROMPT.th,
  example:`#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า A | 64 | 8.0 |
| ที่ปรึกษาและพัฒนา | ลูกค้า D | 40 | 5.0 |
| บำรุงรักษา | ลูกค้า A | 12 | 1.5 |
| บำรุงรักษา | ลูกค้า B | 20 | 2.5 |
| ฝึกอบรม | ลูกค้า C | 16 | 2.0 |
| รวม | — | 152 | 19.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า F สาธิตผลิตภัณฑ์ (10/08 เสร็จแล้ว); ลูกค้า G วางแผน POC (10/21 กำลังดำเนินการ)
- **ติดตามต่อเนื่อง**: ลูกค้า H ติดตามใบเสนอราคา (ตั้งแต่ 9/15 รอลูกค้าตอบกลับ); ลูกค้า I Test-Drive (รอกำหนดวัน)
#### รายการให้หัวหน้ายืนยัน
- 10 ชั่วโมงของลูกค้า E ไม่ได้ระบุประเภทโครงการ จึงยังไม่นับเป็นแมนเดย์ กรุณายืนยันประเภท
- Test-Drive ของลูกค้า I ยังไม่มีวันที่ จึงจัดไว้ในติดตามต่อเนื่อง`}};
const KB_P={
 zh:(q,docs)=>`你是部門 FAQ 問答助手，只能根據下方 FAQ 記錄回答，用繁體中文，2～4 句。每個事實後面用【記錄編號】標示出處。如果記錄裡沒有答案，回答「部門 FAQ 目前沒有這筆記錄」，並建議同仁到 FAQ 總表新增，不要自行推測。
FAQ 記錄：
${docs}
問題：${q}`,
 en:(q,docs)=>`You are the department FAQ assistant. Answer only from the FAQ records below, in English, in 2–4 sentences. Put the record ID in brackets after each fact, e.g. [FAQ-027]. If the records don't contain the answer, say "The department FAQ has no record of this yet" and suggest adding one to the FAQ list; never guess.
FAQ records:
${docs}
Question: ${q}`,
 th:(q,docs)=>`คุณคือผู้ช่วยตอบคำถาม FAQ ของแผนก ตอบจากบันทึก FAQ ด้านล่างเท่านั้น เป็นภาษาไทย 2–4 ประโยค ใส่รหัสบันทึกในวงเล็บหลังแต่ละข้อเท็จจริง เช่น [FAQ-027] หากบันทึกไม่มีคำตอบ ให้ตอบว่า "FAQ ของแผนกยังไม่มีบันทึกเรื่องนี้" และแนะนำให้เพิ่มบันทึกในรายการ FAQ ห้ามเดาเอง
บันทึก FAQ:
${docs}
คำถาม: ${q}`};
const KB_LAB={
 zh:{hint:"下方是 12 筆模擬的部門 FAQ 記錄（客戶維運與技術支援）。試著問一個記錄裡有的問題，再問一個記錄裡沒有的（例如「客戶要怎麼申請 VPN？」），看它會不會編答案。",
  docs:`[FAQ-012 報表匯出失敗] 問題：系統升級後，報表匯出 PDF 出現錯誤。處理：確認匯出元件版本與升級後的版本一致，重新部署匯出元件後重啟服務。出處：2026/05 升級案。
[FAQ-027 服務啟動逾時] 問題：升級後服務啟動超過 10 分鐘仍未完成。處理：先檢查暫存目錄所在磁碟的剩餘空間是否低於 10 GB，清理後重新啟動；仍失敗就收集 log 交給原廠。出處：2026/07 保養案。
[FAQ-031 授權到期提醒] 問題：客戶詢問授權到期前多久會收到提醒。處理：系統會在到期前 30 天於管理頁顯示提醒；續約由業務窗口提供報價。出處：2026/08 客戶詢問。
[FAQ-035 升級前備份] 問題：升級前要備份哪些東西？處理：先執行系統內建的維護備份指令產生備份檔，並另外匯出設定檔；備份檔放在和系統不同的磁碟。出處：2026/03 升級案。
[FAQ-040 憑證過期] 問題：瀏覽器顯示憑證過期，使用者無法登入。處理：向客戶取得新憑證，在系統管理頁更新並重啟服務；更新前先確認新憑證包含完整的中繼憑證鏈。出處：2026/06 保養案。
[FAQ-044 排程資料沒有更新] 問題：儀表板資料停在前一天。處理：先看排程紀錄是否失敗；常見原因是來源資料庫備份時鎖表，可把排程時間往後調 1 小時。出處：2026/09 客戶詢問。
[FAQ-048 新增使用者] 問題：客戶要新增系統使用者。處理：由客戶的系統管理員在管理頁新增；授權數不足時要先購買授權，由業務窗口報價。出處：2026/10 客戶詢問。
[FAQ-052 升級停機時間] 問題：客戶問升級要停機多久。處理：一般升級停機約 1～2 小時，依資料量而定；建議安排在非上班時段，並提前一週通知使用者。出處：2026/04 升級案。
[FAQ-056 備份檔太大] 問題：備份檔過大，磁碟空間不足。處理：清理 30 天以前的舊備份，並把備份目錄移到容量較大的磁碟；清理前確認至少保留最近 3 份。出處：2026/08 保養案。
[FAQ-060 通知信寄不出去] 問題：系統的訂閱信或通知信寄不出去。處理：確認 SMTP 伺服器位址、連接埠與帳號沒有變更；客戶若更換郵件伺服器，要在管理頁更新設定並寄測試信。出處：2026/09 保養案。
[FAQ-064 儀表板開啟很慢] 問題：使用者反映儀表板開啟很慢。處理：先看是否為即時連線；資料量大的儀表板建議改用萃取並設定排程更新，同時減少單頁的圖表數量。出處：2026/10 客戶詢問。
[FAQ-068 升級後外掛失效] 問題：升級後原本的外掛或擴充功能不能用。處理：確認外掛版本是否支援新版本；不支援就先停用，並聯繫外掛廠商取得相容版本。出處：2026/07 升級案。`,
  input:"客戶升級後服務一直啟動不起來，要先檢查什麼？",single:true,btn:"詢問部門 FAQ",prompt:KB_P.zh,
  example:`先檢查暫存目錄所在磁碟的剩餘空間是否低於 10 GB，清理後再重新啟動服務【FAQ-027】。如果還是啟動失敗，就收集 log 交給原廠處理【FAQ-027】。`},
 en:{hint:"Below are 12 mock department FAQ records (client support and maintenance). Ask one question the records cover, then one they don't (e.g. \"How does a client request VPN access?\") and see whether it makes anything up.",
  docs:`[FAQ-012 Report export fails] Issue: after a system upgrade, exporting a report to PDF throws an error. Fix: check that the export component version matches the upgraded version, redeploy the export component and restart the service. Source: 2026/05 upgrade project.
[FAQ-027 Service start times out] Issue: after an upgrade the service is still starting after 10 minutes. Fix: first check whether the disk holding the temp directory has less than 10 GB free; clean it up and restart. If it still fails, collect the logs and send them to the vendor. Source: 2026/07 maintenance project.
[FAQ-031 Licence expiry reminder] Issue: a client asks how early they are reminded before the licence expires. Answer: the system shows a reminder on the admin page 30 days before expiry; renewals are quoted by the sales contact. Source: 2026/08 client question.
[FAQ-035 Pre-upgrade backup] Issue: what to back up before an upgrade. Answer: run the system's built-in maintenance backup command to create a backup file and export the configuration separately; keep the backup on a different disk from the system. Source: 2026/03 upgrade project.
[FAQ-040 Expired certificate] Issue: the browser shows an expired certificate and users can't log in. Fix: get the new certificate from the client, update it on the system admin page and restart the service; first check it includes the full intermediate chain. Source: 2026/06 maintenance project.
[FAQ-044 Scheduled data not refreshing] Issue: dashboard data is stuck at the previous day. Fix: check whether the scheduled job failed; a common cause is the source database locking tables during its backup, so move the schedule one hour later. Source: 2026/09 client question.
[FAQ-048 Adding users] Issue: a client wants to add system users. Answer: the client's own system administrator adds them on the admin page; if licences run short, buy more first, quoted by the sales contact. Source: 2026/10 client question.
[FAQ-052 Upgrade downtime] Issue: a client asks how long an upgrade takes offline. Answer: about 1–2 hours, depending on data volume; schedule it outside working hours and notify users a week ahead. Source: 2026/04 upgrade project.
[FAQ-056 Backup files too large] Issue: backups are filling the disk. Fix: delete backups older than 30 days and move the backup directory to a larger disk; keep at least the three most recent backups. Source: 2026/08 maintenance project.
[FAQ-060 Notification emails not sending] Issue: subscription or notification emails aren't going out. Fix: check the SMTP server address, port and account haven't changed; if the client switched mail servers, update the settings on the admin page and send a test email. Source: 2026/09 maintenance project.
[FAQ-064 Dashboards slow to open] Issue: users say dashboards take a long time to open. Fix: first check whether it uses a live connection; for large data, switch to an extract with a scheduled refresh and reduce the number of charts per page. Source: 2026/10 client question.
[FAQ-068 Plug-in broken after upgrade] Issue: an existing plug-in or extension stops working after the upgrade. Fix: check whether the plug-in version supports the new release; if not, disable it and get a compatible version from the plug-in vendor. Source: 2026/07 upgrade project.`,
  input:"After the upgrade the client's service won't start. What should I check first?",btn:"Ask the department FAQ",prompt:KB_P.en,
  example:`First check whether the disk holding the temp directory has less than 10 GB free, clean it up and restart the service [FAQ-027]. If it still won't start, collect the logs and send them to the vendor [FAQ-027].`},
 th:{hint:"ด้านล่างคือบันทึก FAQ ของแผนก (ข้อมูลจำลอง เรื่องดูแลระบบและซัพพอร์ตลูกค้า) 12 รายการ ลองถามคำถามที่บันทึกมีคำตอบ แล้วถามคำถามที่ไม่มี (เช่น \"ลูกค้าขอใช้ VPN อย่างไร\") ดูว่า AI จะแต่งคำตอบเองหรือไม่",
  docs:`[FAQ-012 ส่งออกรายงานไม่ได้] ปัญหา: หลังอัปเกรดระบบ ส่งออกรายงานเป็น PDF แล้วเกิดข้อผิดพลาด วิธีแก้: ตรวจว่าเวอร์ชันคอมโพเนนต์ส่งออกตรงกับเวอร์ชันหลังอัปเกรด ติดตั้งคอมโพเนนต์ใหม่แล้วรีสตาร์ตเซอร์วิส ที่มา: โปรเจกต์อัปเกรด 2026/05
[FAQ-027 เซอร์วิสเริ่มทำงานนานเกินไป] ปัญหา: หลังอัปเกรด เซอร์วิสเริ่มทำงานเกิน 10 นาทีแล้วยังไม่เสร็จ วิธีแก้: ตรวจก่อนว่าดิสก์ที่เก็บโฟลเดอร์ชั่วคราวเหลือพื้นที่น้อยกว่า 10 GB หรือไม่ ล้างแล้วรีสตาร์ต ถ้ายังไม่ได้ให้เก็บ log ส่งให้ผู้ผลิต ที่มา: โปรเจกต์บำรุงรักษา 2026/07
[FAQ-031 แจ้งเตือนไลเซนส์หมดอายุ] ปัญหา: ลูกค้าถามว่าจะได้รับแจ้งเตือนก่อนไลเซนส์หมดอายุนานเท่าไร คำตอบ: ระบบแสดงแจ้งเตือนในหน้าผู้ดูแล 30 วันก่อนหมดอายุ การต่ออายุให้ฝ่ายขายเสนอราคา ที่มา: คำถามจากลูกค้า 2026/08
[FAQ-035 สำรองข้อมูลก่อนอัปเกรด] ปัญหา: ก่อนอัปเกรดต้องสำรองอะไรบ้าง วิธีทำ: รันคำสั่งสำรองข้อมูลที่มากับระบบเพื่อสร้างไฟล์สำรอง และส่งออกไฟล์การตั้งค่าแยกไว้ ไฟล์สำรองต้องเก็บคนละดิสก์กับระบบ ที่มา: โปรเจกต์อัปเกรด 2026/03
[FAQ-040 ใบรับรองหมดอายุ] ปัญหา: เบราว์เซอร์ขึ้นว่าใบรับรองหมดอายุ ผู้ใช้เข้าสู่ระบบไม่ได้ วิธีแก้: ขอใบรับรองใหม่จากลูกค้า อัปเดตในหน้าผู้ดูแลระบบแล้วรีสตาร์ตเซอร์วิส ก่อนอัปเดตให้ตรวจว่ามีสายใบรับรองตัวกลางครบ ที่มา: โปรเจกต์บำรุงรักษา 2026/06
[FAQ-044 ข้อมูลตามกำหนดเวลาไม่อัปเดต] ปัญหา: ข้อมูลแดชบอร์ดค้างที่วันก่อน วิธีแก้: ดูบันทึกงานตามกำหนดเวลาว่าล้มเหลวหรือไม่ สาเหตุที่พบบ่อยคือฐานข้อมูลต้นทางล็อกตารางระหว่างสำรองข้อมูล ให้เลื่อนเวลางานออกไป 1 ชั่วโมง ที่มา: คำถามจากลูกค้า 2026/09
[FAQ-048 เพิ่มผู้ใช้] ปัญหา: ลูกค้าต้องการเพิ่มผู้ใช้ในระบบ วิธีทำ: ผู้ดูแลระบบของลูกค้าเพิ่มเองในหน้าผู้ดูแล หากไลเซนส์ไม่พอต้องซื้อเพิ่มก่อน โดยฝ่ายขายเสนอราคา ที่มา: คำถามจากลูกค้า 2026/10
[FAQ-052 เวลาหยุดระบบเพื่ออัปเกรด] ปัญหา: ลูกค้าถามว่าอัปเกรดต้องหยุดระบบนานเท่าไร คำตอบ: ประมาณ 1–2 ชั่วโมง ขึ้นอยู่กับปริมาณข้อมูล ควรทำนอกเวลาทำงานและแจ้งผู้ใช้ล่วงหน้าหนึ่งสัปดาห์ ที่มา: โปรเจกต์อัปเกรด 2026/04
[FAQ-056 ไฟล์สำรองใหญ่เกินไป] ปัญหา: ไฟล์สำรองใหญ่จนดิสก์ใกล้เต็ม วิธีแก้: ลบไฟล์สำรองที่เก่ากว่า 30 วัน และย้ายโฟลเดอร์สำรองไปดิสก์ที่ใหญ่กว่า ก่อนลบให้เก็บไฟล์ล่าสุดไว้อย่างน้อย 3 ชุด ที่มา: โปรเจกต์บำรุงรักษา 2026/08
[FAQ-060 ส่งอีเมลแจ้งเตือนไม่ได้] ปัญหา: อีเมลสมัครรับหรืออีเมลแจ้งเตือนของระบบส่งไม่ออก วิธีแก้: ตรวจว่าที่อยู่เซิร์ฟเวอร์ SMTP พอร์ต และบัญชีไม่ได้เปลี่ยน หากลูกค้าเปลี่ยนเมลเซิร์ฟเวอร์ ให้อัปเดตการตั้งค่าในหน้าผู้ดูแลแล้วส่งอีเมลทดสอบ ที่มา: โปรเจกต์บำรุงรักษา 2026/09
[FAQ-064 แดชบอร์ดเปิดช้า] ปัญหา: ผู้ใช้แจ้งว่าแดชบอร์ดเปิดช้ามาก วิธีแก้: ตรวจก่อนว่าใช้การเชื่อมต่อแบบสดหรือไม่ ถ้าข้อมูลเยอะให้เปลี่ยนเป็น Extract พร้อมตั้งเวลารีเฟรช และลดจำนวนกราฟต่อหน้า ที่มา: คำถามจากลูกค้า 2026/10
[FAQ-068 ปลั๊กอินใช้ไม่ได้หลังอัปเกรด] ปัญหา: ปลั๊กอินหรือส่วนขยายเดิมใช้ไม่ได้หลังอัปเกรด วิธีแก้: ตรวจว่าเวอร์ชันปลั๊กอินรองรับเวอร์ชันใหม่หรือไม่ ถ้าไม่รองรับให้ปิดไว้ก่อน แล้วติดต่อผู้ผลิตปลั๊กอินเพื่อขอเวอร์ชันที่รองรับ ที่มา: โปรเจกต์อัปเกรด 2026/07`,
  input:"หลังอัปเกรด เซอร์วิสของลูกค้าเริ่มทำงานไม่ได้ ควรตรวจอะไรก่อน",btn:"ถาม FAQ ของแผนก",prompt:KB_P.th,
  example:`ให้ตรวจก่อนว่าดิสก์ที่เก็บโฟลเดอร์ชั่วคราวเหลือพื้นที่น้อยกว่า 10 GB หรือไม่ ล้างแล้วรีสตาร์ตเซอร์วิส [FAQ-027] ถ้ายังเริ่มทำงานไม่ได้ ให้เก็บ log ส่งให้ผู้ผลิต [FAQ-027]`}};
ZH.report.lab=RPT_LAB.zh;EN.report.lab=RPT_LAB.en;TH.report.lab=RPT_LAB.th;
ZH.kb.lab=KB_LAB.zh;EN.kb.lab=KB_LAB.en;TH.kb.lab=KB_LAB.th;
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
      if(x.id==="gov"){const G=GOV[lang]||GOV.zh;y.evidence={layers:G.L.map((l,i)=>({t:l[0],d:l[1],imgs:GOV_IMG[i].map(k=>`ev/gov-${k}.jpg`)})),title:G.title,note:G.note}}
      if(SKTREE[x.id])y.evidence={tree:SKTREE[x.id],excerpt:EXCERPT[x.id],imgs:EV[x.id]?EV[x.id].imgs:null};
      return y});
  }
};
})();
