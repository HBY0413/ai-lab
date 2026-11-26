/* Pre-run results for the AI benches.
   GitHub Pages has no live AI, so each bench offers several sample inputs whose
   results were produced in advance by Claude with the same prompt the bench uses.
   The bench's own input/example is preset #1; the ones below follow it.
   Each entry: {label, input, output} per language (zh / en / th). */
window.PRESETS = {
/* ---------- 01 monthly report ---------- */
report: {
 firstLabel: { zh: "一般月份（有缺漏）", en: "Typical month (with gaps)", th: "เดือนทั่วไป (ข้อมูลขาดบางส่วน)" },
 items: [
 { label: { zh: "資料完整的忙碌月份", en: "Busy month, complete data", th: "เดือนงานยุ่ง ข้อมูลครบ" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶J,顧問服務&開發,96
客戶K,顧問服務&開發,52
客戶J,維護,8
客戶L,維護,28
客戶M,教育訓練,24
客戶N,教育訓練,12
【協銷進度】客戶,活動,日期,狀態
客戶P,技術簡報,2026-10-03,已完成
客戶Q,POC 執行,2026-10-15,進行中
客戶R,產品展示,2026-10-29,已完成
客戶S,報價追蹤,2026-08-20,等待客戶回覆`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client J,Consulting & development,96
Client K,Consulting & development,52
Client J,Maintenance,8
Client L,Maintenance,28
Client M,Training,24
Client N,Training,12
[Presales tracker] Client,Activity,Date,Status
Client P,Technical briefing,2026-10-03,Done
Client Q,POC run,2026-10-15,In progress
Client R,Product demo,2026-10-29,Done
Client S,Quote follow-up,2026-08-20,Waiting for client`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า J,ที่ปรึกษาและพัฒนา,96
ลูกค้า K,ที่ปรึกษาและพัฒนา,52
ลูกค้า J,บำรุงรักษา,8
ลูกค้า L,บำรุงรักษา,28
ลูกค้า M,ฝึกอบรม,24
ลูกค้า N,ฝึกอบรม,12
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า P,บรรยายเทคนิค,2026-10-03,เสร็จแล้ว
ลูกค้า Q,ทำ POC,2026-10-15,กำลังดำเนินการ
ลูกค้า R,สาธิตผลิตภัณฑ์,2026-10-29,เสร็จแล้ว
ลูกค้า S,ติดตามใบเสนอราคา,2026-08-20,รอลูกค้าตอบกลับ` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶J | 96 | 12.0 |
| 顧問服務&開發 | 客戶K | 52 | 6.5 |
| 維護 | 客戶J | 8 | 1.0 |
| 維護 | 客戶L | 28 | 3.5 |
| 教育訓練 | 客戶M | 24 | 3.0 |
| 教育訓練 | 客戶N | 12 | 1.5 |
| 合計 | — | 220 | 27.5 |
#### 技術銷售・協銷進度
- **本月活動**：客戶P 技術簡報（10/03，已完成）；客戶Q POC 執行（10/15，進行中）；客戶R 產品展示（10/29，已完成）
- **持續追蹤**：客戶S 報價追蹤（8/20 起，等待客戶回覆）
#### 待主管確認
- 本月工時與協銷資料都完整，沒有需要確認的項目。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client J | 96 | 12.0 |
| Consulting & development | Client K | 52 | 6.5 |
| Maintenance | Client J | 8 | 1.0 |
| Maintenance | Client L | 28 | 3.5 |
| Training | Client M | 24 | 3.0 |
| Training | Client N | 12 | 1.5 |
| Total | — | 220 | 27.5 |
#### Presales progress
- **This month**: Client P technical briefing (10/03, done); Client Q POC run (10/15, in progress); Client R product demo (10/29, done)
- **Ongoing**: Client S quote follow-up (since 8/20, waiting for client)
#### For the manager to confirm
- Timesheet and presales data are complete this month; nothing to confirm.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า J | 96 | 12.0 |
| ที่ปรึกษาและพัฒนา | ลูกค้า K | 52 | 6.5 |
| บำรุงรักษา | ลูกค้า J | 8 | 1.0 |
| บำรุงรักษา | ลูกค้า L | 28 | 3.5 |
| ฝึกอบรม | ลูกค้า M | 24 | 3.0 |
| ฝึกอบรม | ลูกค้า N | 12 | 1.5 |
| รวม | — | 220 | 27.5 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า P บรรยายเทคนิค (10/03 เสร็จแล้ว); ลูกค้า Q ทำ POC (10/15 กำลังดำเนินการ); ลูกค้า R สาธิตผลิตภัณฑ์ (10/29 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ลูกค้า S ติดตามใบเสนอราคา (ตั้งแต่ 8/20 รอลูกค้าตอบกลับ)
#### รายการให้หัวหน้ายืนยัน
- ข้อมูลชั่วโมงงานและ Presales เดือนนี้ครบถ้วน ไม่มีรายการที่ต้องยืนยัน` } },

 { label: { zh: "缺漏較多的月份", en: "Month with several gaps", th: "เดือนที่ข้อมูลขาดหลายจุด" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶T,維護,20
客戶U,,6
客戶V,顧問服務&開發,44
客戶U,,14
客戶W,教育訓練,8
【協銷進度】客戶,活動,日期,狀態
客戶X,產品展示,2026-10-12,已完成
客戶Y,POC 規劃,,進行中
客戶Z,Test-Drive,2026-11-05,已排定`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client T,Maintenance,20
Client U,,6
Client V,Consulting & development,44
Client U,,14
Client W,Training,8
[Presales tracker] Client,Activity,Date,Status
Client X,Product demo,2026-10-12,Done
Client Y,POC planning,,In progress
Client Z,Test-Drive,2026-11-05,Scheduled`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า T,บำรุงรักษา,20
ลูกค้า U,,6
ลูกค้า V,ที่ปรึกษาและพัฒนา,44
ลูกค้า U,,14
ลูกค้า W,ฝึกอบรม,8
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า X,สาธิตผลิตภัณฑ์,2026-10-12,เสร็จแล้ว
ลูกค้า Y,วางแผน POC,,กำลังดำเนินการ
ลูกค้า Z,Test-Drive,2026-11-05,กำหนดวันแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶V | 44 | 5.5 |
| 維護 | 客戶T | 20 | 2.5 |
| 教育訓練 | 客戶W | 8 | 1.0 |
| 合計 | — | 72 | 9.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶X 產品展示（10/12，已完成）
- **持續追蹤**：客戶Y POC 規劃（沒有日期，進行中）；客戶Z Test-Drive（11/05，已排定）
#### 待主管確認
- 客戶U 有兩筆工時（6 小時、14 小時，共 20 小時）沒有填專案類型，暫不計入人天，請確認歸屬。
- 客戶Y 的 POC 規劃沒有日期，先列在持續追蹤。
- 客戶Z 的 Test-Drive 排在 11/05，不在本月，依規則列在持續追蹤。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client V | 44 | 5.5 |
| Maintenance | Client T | 20 | 2.5 |
| Training | Client W | 8 | 1.0 |
| Total | — | 72 | 9.0 |
#### Presales progress
- **This month**: Client X product demo (10/12, done)
- **Ongoing**: Client Y POC planning (no date, in progress); Client Z Test-Drive (11/05, scheduled)
#### For the manager to confirm
- Client U has two entries (6 and 14 hours, 20 hours in total) with no project type, left out of person-days for now; please confirm the category.
- Client Y's POC planning has no date, so it is listed under Ongoing.
- Client Z's Test-Drive is set for 11/05, outside this month, so per the rules it is listed under Ongoing.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า V | 44 | 5.5 |
| บำรุงรักษา | ลูกค้า T | 20 | 2.5 |
| ฝึกอบรม | ลูกค้า W | 8 | 1.0 |
| รวม | — | 72 | 9.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า X สาธิตผลิตภัณฑ์ (10/12 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ลูกค้า Y วางแผน POC (ไม่มีวันที่ กำลังดำเนินการ); ลูกค้า Z Test-Drive (11/05 กำหนดวันแล้ว)
#### รายการให้หัวหน้ายืนยัน
- ลูกค้า U มีบันทึก 2 รายการ (6 และ 14 ชั่วโมง รวม 20 ชั่วโมง) ที่ไม่ได้ระบุประเภทโครงการ จึงยังไม่นับเป็นแมนเดย์ กรุณายืนยันประเภท
- วางแผน POC ของลูกค้า Y ไม่มีวันที่ จึงจัดไว้ในติดตามต่อเนื่อง
- Test-Drive ของลูกค้า Z กำหนดวันที่ 11/05 ซึ่งไม่อยู่ในเดือนนี้ ตามกฎจึงจัดไว้ในติดตามต่อเนื่อง` } },

 { label: { zh: "淡季、協銷表空白", en: "Quiet month, empty presales tracker", th: "เดือนงานน้อย ไม่มีข้อมูล Presales" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶A,維護,16
客戶B,維護,12
客戶C,維護,4
【協銷進度】客戶,活動,日期,狀態`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client A,Maintenance,16
Client B,Maintenance,12
Client C,Maintenance,4
[Presales tracker] Client,Activity,Date,Status`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า A,บำรุงรักษา,16
ลูกค้า B,บำรุงรักษา,12
ลูกค้า C,บำรุงรักษา,4
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 維護 | 客戶A | 16 | 2.0 |
| 維護 | 客戶B | 12 | 1.5 |
| 維護 | 客戶C | 4 | 0.5 |
| 合計 | — | 32 | 4.0 |
#### 技術銷售・協銷進度
- **本月活動**：無
- **持續追蹤**：無
#### 待主管確認
- 協銷進度表本月沒有任何資料，請確認是本月確實沒有協銷活動，還是漏填。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Maintenance | Client A | 16 | 2.0 |
| Maintenance | Client B | 12 | 1.5 |
| Maintenance | Client C | 4 | 0.5 |
| Total | — | 32 | 4.0 |
#### Presales progress
- **This month**: none
- **Ongoing**: none
#### For the manager to confirm
- The presales tracker has no entries this month; please confirm whether there really was no presales activity or it hasn't been filled in.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| บำรุงรักษา | ลูกค้า A | 16 | 2.0 |
| บำรุงรักษา | ลูกค้า B | 12 | 1.5 |
| บำรุงรักษา | ลูกค้า C | 4 | 0.5 |
| รวม | — | 32 | 4.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ไม่มี
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- ตาราง Presales เดือนนี้ไม่มีข้อมูลเลย กรุณายืนยันว่าเดือนนี้ไม่มีกิจกรรม Presales จริง หรือยังไม่ได้กรอก` } }
 ] },

/* ---------- 03 department FAQ: questions matched against what the visitor types ---------- */
kb: {
 items: [
 { q: { zh: "升級完報表匯出 PDF 一直失敗怎麼辦？", en: "Report export to PDF keeps failing after the upgrade. What do I do?", th: "หลังอัปเกรด ส่งออกรายงานเป็น PDF ไม่ได้ ต้องทำอย่างไร" },
   a: { zh: "先確認匯出元件的版本和升級後的系統版本一致【FAQ-012】。版本不一致的話，重新部署匯出元件，再重啟服務【FAQ-012】。",
        en: "First check that the export component version matches the upgraded system version [FAQ-012]. If they differ, redeploy the export component and restart the service [FAQ-012].",
        th: "ให้ตรวจก่อนว่าเวอร์ชันคอมโพเนนต์ส่งออกตรงกับเวอร์ชันระบบหลังอัปเกรด [FAQ-012] ถ้าไม่ตรง ให้ติดตั้งคอมโพเนนต์ส่งออกใหม่แล้วรีสตาร์ตเซอร์วิส [FAQ-012]" } },
 { q: { zh: "授權快到期了，系統會提前多久提醒？", en: "How early does the system warn before the licence expires?", th: "ไลเซนส์ใกล้หมดอายุ ระบบจะเตือนล่วงหน้ากี่วัน" },
   a: { zh: "系統會在授權到期前 30 天，在管理頁顯示提醒【FAQ-031】。要續約的話，由業務窗口提供報價【FAQ-031】。",
        en: "The system shows a reminder on the admin page 30 days before the licence expires [FAQ-031]. For renewal, the sales contact provides the quote [FAQ-031].",
        th: "ระบบจะแสดงการแจ้งเตือนในหน้าผู้ดูแล 30 วันก่อนไลเซนส์หมดอายุ [FAQ-031] หากต้องการต่ออายุ ฝ่ายขายจะเป็นผู้เสนอราคา [FAQ-031]" } },
 { q: { zh: "升級前需要備份哪些東西？", en: "What should be backed up before an upgrade?", th: "ก่อนอัปเกรดต้องสำรองข้อมูลอะไรบ้าง" },
   a: { zh: "先執行系統內建的維護備份指令產生備份檔，並另外匯出設定檔【FAQ-035】。備份檔要放在和系統不同的磁碟【FAQ-035】。",
        en: "Run the system's built-in maintenance backup command to create a backup file, and export the configuration separately [FAQ-035]. Keep the backup on a different disk from the system [FAQ-035].",
        th: "ให้รันคำสั่งสำรองข้อมูลที่มากับระบบเพื่อสร้างไฟล์สำรอง และส่งออกไฟล์การตั้งค่าแยกไว้อีกชุด [FAQ-035] ไฟล์สำรองต้องเก็บไว้คนละดิสก์กับระบบ [FAQ-035]" } },
 { q: { zh: "使用者說瀏覽器顯示憑證過期，登不進去", en: "Users say the browser shows an expired certificate and they can't log in", th: "ผู้ใช้แจ้งว่าเบราว์เซอร์ขึ้นว่าใบรับรองหมดอายุ และเข้าสู่ระบบไม่ได้" },
   a: { zh: "向客戶取得新的憑證後，在系統管理頁更新憑證並重啟服務【FAQ-040】。更新前先確認新憑證包含完整的中繼憑證鏈【FAQ-040】。",
        en: "Get the new certificate from the client, update it on the system admin page and restart the service [FAQ-040]. Before updating, check that the new certificate includes the full intermediate chain [FAQ-040].",
        th: "ขอใบรับรองใหม่จากลูกค้า แล้วอัปเดตในหน้าผู้ดูแลระบบและรีสตาร์ตเซอร์วิส [FAQ-040] ก่อนอัปเดตให้ตรวจว่าใบรับรองใหม่มีสายใบรับรองตัวกลางครบ [FAQ-040]" } },
 { q: { zh: "儀表板的資料停在昨天，沒有更新", en: "The dashboard data is stuck at yesterday and isn't refreshing", th: "ข้อมูลในแดชบอร์ดค้างอยู่ที่เมื่อวาน ไม่อัปเดต" },
   a: { zh: "先看排程紀錄有沒有失敗【FAQ-044】。常見原因是來源資料庫正在備份而鎖表，可以把排程時間往後調 1 小時【FAQ-044】。",
        en: "First check whether the scheduled job failed in its log [FAQ-044]. A common cause is the source database locking tables during its backup; moving the schedule one hour later usually helps [FAQ-044].",
        th: "ให้ดูบันทึกงานตามกำหนดเวลาก่อนว่าล้มเหลวหรือไม่ [FAQ-044] สาเหตุที่พบบ่อยคือฐานข้อมูลต้นทางล็อกตารางระหว่างสำรองข้อมูล ให้เลื่อนเวลางานออกไป 1 ชั่วโมง [FAQ-044]" } },
 { q: { zh: "客戶要新增系統使用者，要怎麼處理？", en: "A client wants to add system users. How is that handled?", th: "ลูกค้าต้องการเพิ่มผู้ใช้ในระบบ ต้องทำอย่างไร" },
   a: { zh: "由客戶自己的系統管理員在管理頁新增使用者【FAQ-048】。如果授權數不夠，要先購買授權，由業務窗口報價【FAQ-048】。",
        en: "The client's own system administrator adds users on the admin page [FAQ-048]. If they don't have enough licences, they need to buy more first, quoted by the sales contact [FAQ-048].",
        th: "ผู้ดูแลระบบของลูกค้าเป็นผู้เพิ่มผู้ใช้ในหน้าผู้ดูแลเอง [FAQ-048] หากจำนวนไลเซนส์ไม่พอ ต้องซื้อไลเซนส์เพิ่มก่อน โดยฝ่ายขายเป็นผู้เสนอราคา [FAQ-048]" } },
 { q: { zh: "升級大概要停機多久？", en: "Roughly how long is the downtime for an upgrade?", th: "อัปเกรดต้องหยุดระบบนานประมาณเท่าไร" },
   a: { zh: "一般升級停機約 1～2 小時，實際時間依資料量而定【FAQ-052】。建議安排在非上班時段，並提前一週通知使用者【FAQ-052】。",
        en: "A typical upgrade needs about 1–2 hours of downtime, depending on data volume [FAQ-052]. Schedule it outside working hours and notify users a week ahead [FAQ-052].",
        th: "การอัปเกรดทั่วไปต้องหยุดระบบประมาณ 1–2 ชั่วโมง ขึ้นอยู่กับปริมาณข้อมูล [FAQ-052] ควรทำนอกเวลาทำงานและแจ้งผู้ใช้ล่วงหน้าหนึ่งสัปดาห์ [FAQ-052]" } },
 { q: { zh: "客戶要怎麼申請 VPN？", en: "How does a client request VPN access?", th: "ลูกค้าขอใช้ VPN อย่างไร" },
   a: { zh: "部門 FAQ 目前沒有這筆記錄。建議到 FAQ 總表新增這個問題，由負責的同事補上正確的處理方式。",
        en: "The department FAQ has no record of this yet. Please add the question to the FAQ list so the responsible colleague can fill in the correct procedure.",
        th: "FAQ ของแผนกยังไม่มีบันทึกเรื่องนี้ แนะนำให้เพิ่มคำถามนี้ในรายการ FAQ เพื่อให้ผู้รับผิดชอบเติมวิธีดำเนินการที่ถูกต้อง" }, none: true },
 { q: { zh: "可以幫客戶安裝防毒軟體嗎？", en: "Can we install antivirus software for the client?", th: "เราติดตั้งโปรแกรมป้องกันไวรัสให้ลูกค้าได้ไหม" },
   a: { zh: "部門 FAQ 目前沒有這筆記錄。建議到 FAQ 總表新增這個問題，確認部門的服務範圍後再回覆客戶。",
        en: "The department FAQ has no record of this yet. Please add the question to the FAQ list and confirm the department's service scope before answering the client.",
        th: "FAQ ของแผนกยังไม่มีบันทึกเรื่องนี้ แนะนำให้เพิ่มคำถามนี้ในรายการ FAQ และยืนยันขอบเขตบริการของแผนกก่อนตอบลูกค้า" }, none: true }
 ] },

/* ---------- 05 learning from past projects ---------- */
cases: {
 firstLabel: { zh: "授權寫法不一致", en: "Inconsistent licence wording", th: "เขียนสิทธิ์ใช้งานไม่เหมือนกัน" },
 items: [
 { label: { zh: "出現規則沒涵蓋的新問題", en: "A new issue the rules don't cover", th: "ปัญหาใหม่ที่กฎยังไม่ครอบคลุม" },
   input: {
    zh: `B01 客戶甲 2026-04 保養健檢：服務狀態截圖只截到一半
B02 客戶丙 2026-05 Tableau 升級：服務狀態截圖只截到一半
B03 客戶丁 2026-06 保養健檢：版本頁截到升級後畫面，放進升級前章節
B04 客戶乙 2026-07 Tableau 升級：服務狀態截圖只截到一半
B05 客戶戊 2026-08 保養健檢：版本頁截到升級後畫面，放進升級前章節
B06 客戶甲 2026-09 Tableau 升級：細項大綱漏放`,
    en: `B01 Client A 2026-04 health check: service-status screenshot only half captured
B02 Client C 2026-05 Tableau upgrade: service-status screenshot only half captured
B03 Client D 2026-06 health check: post-upgrade version screen placed in the pre-upgrade section
B04 Client B 2026-07 Tableau upgrade: service-status screenshot only half captured
B05 Client E 2026-08 health check: post-upgrade version screen placed in the pre-upgrade section
B06 Client A 2026-09 Tableau upgrade: detailed outline missing`,
    th: `B01 ลูกค้า A 2026-04 ตรวจสุขภาพระบบ: ภาพสถานะเซอร์วิสจับได้แค่ครึ่งเดียว
B02 ลูกค้า C 2026-05 อัปเกรด Tableau: ภาพสถานะเซอร์วิสจับได้แค่ครึ่งเดียว
B03 ลูกค้า D 2026-06 ตรวจสุขภาพระบบ: ภาพหน้าเวอร์ชันหลังอัปเกรดไปอยู่ในส่วนก่อนอัปเกรด
B04 ลูกค้า B 2026-07 อัปเกรด Tableau: ภาพสถานะเซอร์วิสจับได้แค่ครึ่งเดียว
B05 ลูกค้า E 2026-08 ตรวจสุขภาพระบบ: ภาพหน้าเวอร์ชันหลังอัปเกรดไปอยู่ในส่วนก่อนอัปเกรด
B06 ลูกค้า A 2026-09 อัปเกรด Tableau: ไม่มีสารบัญรายละเอียด` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 服務狀態截圖不完整 | B01、B02、B04 | 3 | 未涵蓋（節錄中未見截圖完整性的檢查） |
| 升級後的版本畫面放進升級前章節 | B03、B05 | 2 | 已涵蓋（已記錄的陷阱：截圖錯位） |
| 細項大綱漏放 | B06 | 1 | 已涵蓋（摘要頁與細項大綱預設必要）；單次，不算模式 |
#### 值得考慮寫進規則
- 服務狀態截圖連續 3 次不完整，建議把「完整的服務狀態畫面」列為必拍，並在產出前檢查截圖是否完整。
- 截圖錯位已記錄為陷阱但仍發生 2 次，可考慮產出前比對截圖時間與章節，提早攔下。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Service-status screenshot incomplete | B01, B02, B04 | 3 | Not covered (no screenshot-completeness check in the excerpt) |
| Post-upgrade version screen placed in the pre-upgrade section | B03, B05 | 2 | Covered (recorded pitfall: misplaced screenshots) |
| Detailed outline missing | B06 | 1 | Covered (summary page and detailed outline required by default); single case, not a pattern |
#### Worth adding to the rules
- The service-status screenshot was incomplete three times; consider making a complete service-status screen a required shot and checking completeness before output.
- Misplaced screenshots are already a recorded pitfall yet happened twice; consider checking screenshot times against sections before output.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ภาพสถานะเซอร์วิสไม่ครบ | B01, B02, B04 | 3 | ยังไม่ครอบคลุม (ไม่พบการตรวจความครบของภาพในข้อความที่ยกมา) |
| ภาพเวอร์ชันหลังอัปเกรดอยู่ในส่วนก่อนอัปเกรด | B03, B05 | 2 | ครอบคลุมแล้ว (ข้อควรระวัง: ภาพหน้าจอผิดตำแหน่ง) |
| ไม่มีสารบัญรายละเอียด | B06 | 1 | ครอบคลุมแล้ว (หน้าสรุปและสารบัญรายละเอียดจำเป็นโดยค่าเริ่มต้น) ครั้งเดียว ไม่นับเป็นรูปแบบ |
#### ควรพิจารณาเพิ่มเป็นกฎ
- ภาพสถานะเซอร์วิสไม่ครบติดต่อกัน 3 ครั้ง ควรกำหนดให้ "หน้าจอสถานะเซอร์วิสแบบเต็ม" เป็นภาพบังคับ และตรวจความครบของภาพก่อนส่งออก
- ภาพผิดตำแหน่งบันทึกเป็นข้อควรระวังแล้วแต่ยังเกิด 2 ครั้ง ควรเทียบเวลาของภาพกับส่วนของเอกสารก่อนส่งออก
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "規則都有，但沒被落實", en: "Rules exist but aren't followed", th: "มีกฎแล้วแต่ไม่ได้ทำตาม" },
   input: {
    zh: `C01 客戶乙 2026-05 保養健檢：範本殘留上一案的舊截圖
C02 客戶丁 2026-06 Tableau 升級：範本殘留上一案的舊截圖
C03 客戶甲 2026-07 Tableau 升級：返回大綱箭頭蓋到標題
C04 客戶丙 2026-08 保養健檢：異常寫在中間章節，沒有放到最末確認事項
C05 客戶戊 2026-09 保養健檢：異常寫在中間章節，沒有放到最末確認事項`,
    en: `C01 Client B 2026-05 health check: old screenshot from the previous project left in the template
C02 Client D 2026-06 Tableau upgrade: old screenshot from the previous project left in the template
C03 Client A 2026-07 Tableau upgrade: back-to-contents arrow overlaps the title
C04 Client C 2026-08 health check: anomaly written in a middle section, not in the final confirmation items
C05 Client E 2026-09 health check: anomaly written in a middle section, not in the final confirmation items`,
    th: `C01 ลูกค้า B 2026-05 ตรวจสุขภาพระบบ: ภาพเก่าจากโปรเจกต์ก่อนค้างอยู่ในเทมเพลต
C02 ลูกค้า D 2026-06 อัปเกรด Tableau: ภาพเก่าจากโปรเจกต์ก่อนค้างอยู่ในเทมเพลต
C03 ลูกค้า A 2026-07 อัปเกรด Tableau: ลูกศรกลับสารบัญทับหัวข้อ
C04 ลูกค้า C 2026-08 ตรวจสุขภาพระบบ: เขียนความผิดปกติไว้กลางเอกสาร ไม่ได้ย้ายไปรายการให้ลูกค้ายืนยันท้ายเล่ม
C05 ลูกค้า E 2026-09 ตรวจสุขภาพระบบ: เขียนความผิดปกติไว้กลางเอกสาร ไม่ได้ย้ายไปรายการให้ลูกค้ายืนยันท้ายเล่ม` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 範本殘留舊截圖 | C01、C02 | 2 | 已涵蓋（已記錄的陷阱） |
| 異常沒有放到最末「請客戶協助確認事項」 | C04、C05 | 2 | 已涵蓋（異常一律放在簡報最末） |
| 返回大綱箭頭蓋到標題 | C03 | 1 | 已涵蓋（已記錄的陷阱）；單次，不算模式 |
#### 值得考慮寫進規則
- 舊截圖與異常位置都已有規則，問題出在沒被落實；建議在產出前加一道自動檢查，攔下殘留的舊圖。
- 產出前自動把各章節標記的異常彙整到最末確認事項，避免異常留在中間章節。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Old screenshot left in the template | C01, C02 | 2 | Covered (recorded pitfall) |
| Anomaly not moved to the final "items for the client to confirm" | C04, C05 | 2 | Covered (anomalies always go at the end of the deck) |
| Back-to-contents arrow overlaps the title | C03 | 1 | Covered (recorded pitfall); single case, not a pattern |
#### Worth adding to the rules
- Old screenshots and anomaly placement already have rules; the gap is enforcement. Consider an automatic pre-output check that catches leftover old images.
- Before output, automatically collect anomalies flagged in any section into the final confirmation items so none stay mid-deck.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ภาพเก่าค้างในเทมเพลต | C01, C02 | 2 | ครอบคลุมแล้ว (บันทึกเป็นข้อควรระวัง) |
| ความผิดปกติไม่ได้อยู่ใน "รายการให้ลูกค้ายืนยัน" ท้ายเล่ม | C04, C05 | 2 | ครอบคลุมแล้ว (ความผิดปกติต้องอยู่ท้ายเล่มเสมอ) |
| ลูกศรกลับสารบัญทับหัวข้อ | C03 | 1 | ครอบคลุมแล้ว (บันทึกเป็นข้อควรระวัง) ครั้งเดียว ไม่นับเป็นรูปแบบ |
#### ควรพิจารณาเพิ่มเป็นกฎ
- ภาพเก่าและตำแหน่งความผิดปกติมีกฎอยู่แล้ว ปัญหาคือไม่ได้ทำตาม ควรเพิ่มการตรวจอัตโนมัติก่อนส่งออกเพื่อจับภาพเก่าที่ค้างอยู่
- ก่อนส่งออก ให้รวบรวมความผิดปกติจากทุกส่วนไปไว้ในรายการให้ลูกค้ายืนยันท้ายเล่มโดยอัตโนมัติ
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "案子太少，還看不出模式", en: "Too few projects to see a pattern", th: "โปรเจกต์น้อยเกินไป ยังไม่เห็นรูปแบบ" },
   input: {
    zh: `D01 客戶甲 2026-09 保養健檢：授權到期日寫成舊合約的日期
D02 客戶乙 2026-10 Tableau 升級：返回大綱箭頭蓋到標題
D03 客戶丙 2026-10 保養健檢：備份頁漏截 backup 完成畫面`,
    en: `D01 Client A 2026-09 health check: licence expiry date taken from the old contract
D02 Client B 2026-10 Tableau upgrade: back-to-contents arrow overlaps the title
D03 Client C 2026-10 health check: backup-complete screenshot missing`,
    th: `D01 ลูกค้า A 2026-09 ตรวจสุขภาพระบบ: วันหมดอายุไลเซนส์ใช้วันที่จากสัญญาเก่า
D02 ลูกค้า B 2026-10 อัปเกรด Tableau: ลูกศรกลับสารบัญทับหัวข้อ
D03 ลูกค้า C 2026-10 ตรวจสุขภาพระบบ: ขาดภาพหน้าจอสำรองข้อมูลเสร็จ` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 授權到期日寫錯 | D01 | 1 | 已涵蓋（授權固定句型；草稿需使用者確認授權／到期日）；單次，不算模式 |
| 返回大綱箭頭蓋到標題 | D02 | 1 | 已涵蓋（已記錄的陷阱）；單次，不算模式 |
| 備份完成畫面漏截 | D03 | 1 | 節錄中未見是否列為必拍；單次，不算模式 |
#### 值得考慮寫進規則
- 目前沒有出現 2 次以上的模式，暫不建議修改規則，下次回顧時再觀察。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Wrong licence expiry date | D01 | 1 | Covered (fixed licence pattern; the user confirms licence and dates in the draft); single case, not a pattern |
| Back-to-contents arrow overlaps the title | D02 | 1 | Covered (recorded pitfall); single case, not a pattern |
| Backup-complete screenshot missing | D03 | 1 | Whether it is a required shot isn't in the excerpt; single case, not a pattern |
#### Worth adding to the rules
- Nothing has occurred twice or more yet, so no rule change is suggested for now; check again at the next review.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| วันหมดอายุไลเซนส์ผิด | D01 | 1 | ครอบคลุมแล้ว (รูปแบบประโยคไลเซนส์ตายตัว ผู้ใช้ยืนยันไลเซนส์และวันที่ในฉบับร่าง) ครั้งเดียว ไม่นับเป็นรูปแบบ |
| ลูกศรกลับสารบัญทับหัวข้อ | D02 | 1 | ครอบคลุมแล้ว (บันทึกเป็นข้อควรระวัง) ครั้งเดียว ไม่นับเป็นรูปแบบ |
| ขาดภาพสำรองข้อมูลเสร็จ | D03 | 1 | ไม่พบในข้อความที่ยกมาว่าเป็นภาพบังคับหรือไม่ ครั้งเดียว ไม่นับเป็นรูปแบบ |
#### ควรพิจารณาเพิ่มเป็นกฎ
- ยังไม่มีรูปแบบที่เกิด 2 ครั้งขึ้นไป จึงยังไม่แนะนำให้แก้กฎ ให้ติดตามอีกครั้งในการทบทวนครั้งหน้า
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } }
 ] },

/* ---------- 06 de-identification: masking runs live, the summary is pre-run on the masked text ---------- */
gov: {
 firstLabel: { zh: "報表匯出問題", en: "Report export issue", th: "ปัญหาส่งออกรายงาน" },
 items: [
 { label: { zh: "儀表板沒更新", en: "Dashboard not refreshing", th: "แดชบอร์ดไม่อัปเดต" },
   input: {
    zh: `星禾科技有限公司的林小美小姐來信，說儀表板從昨天開始資料沒有更新。
她的 Email 是 xiaomei.lin@example.com，分機不方便，請改打手機 0987-654-321。
希望今天下班前能先回覆初步原因。`,
    en: `Ms. Amy Lin from Starbright Tech Ltd. emailed: the dashboard hasn't refreshed since yesterday.
Her email is amy.lin@example.com; please call her mobile 0987-654-321 instead of the desk line.
She'd like an initial cause before the end of today.`,
    th: `คุณอรุณี ศรีสุข จากบริษัท สตาร์ไบรท์เทค จำกัด อีเมลมาแจ้งว่าแดชบอร์ดไม่อัปเดตข้อมูลตั้งแต่เมื่อวาน
อีเมลของเธอคือ arunee.s@example.com กรุณาโทรเข้ามือถือ 089-765-4321 แทนเบอร์โต๊ะ
อยากทราบสาเหตุเบื้องต้นก่อนเลิกงานวันนี้` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕反映儀表板從昨天開始資料沒有更新。
- 期限：今天下班前先回覆初步原因。
- 下一步：檢查排程紀錄是否失敗、來源資料是否有異動，再透過〔電話A〕或〔Email A〕回覆〔人員A〕。`,
    en: `- Issue: [Person A] from [Client A] reports the dashboard hasn't refreshed since yesterday.
- Deadline: give an initial cause before the end of today.
- Next step: check the scheduled job log and any source-data changes, then reply to [Person A] via [Phone A] or [Email A].`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] แจ้งว่าแดชบอร์ดไม่อัปเดตข้อมูลตั้งแต่เมื่อวาน
- กำหนดเวลา: แจ้งสาเหตุเบื้องต้นก่อนเลิกงานวันนี้
- ขั้นตอนถัดไป: ตรวจบันทึกงานตามกำหนดเวลาและการเปลี่ยนแปลงของข้อมูลต้นทาง แล้วตอบกลับ [บุคคล A] ทาง [โทรศัพท์ A] หรือ [อีเมล A]` } },

 { label: { zh: "改停機時間", en: "Rescheduling downtime", th: "เลื่อนเวลาหยุดระบบ" },
   input: {
    zh: `澄川物流股份有限公司陳志明經理來電：升級停機時間要改到下週六晚上。
連絡手機 0933-123-456，另一位窗口張美玲小姐的信箱是 meiling.chang@example.com。`,
    en: `Mr. Kevin Chen from Chengchuan Logistics Co., Ltd. called: the upgrade downtime should move to next Saturday night.
Mobile 0933-123-456. The other contact, Ms. Mei Chang, can be reached at mei.chang@example.com.`,
    th: `คุณวิชัย มั่นคง จากบริษัท เฉิงชวนโลจิสติกส์ จำกัด โทรมาแจ้งว่าขอเลื่อนเวลาหยุดระบบเพื่ออัปเกรดเป็นคืนวันเสาร์หน้า
มือถือ 086-123-4567 ผู้ติดต่ออีกคนใช้อีเมล malee.k@example.com` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕來電，要把升級停機時間改到下週六晚上。
- 期限：下週六晚上之前，完成停機時間的調整與確認。
- 下一步：重新確認升級排程與人力，透過〔電話A〕回覆〔人員A〕，並用〔Email A〕通知另一位窗口〔人員B〕。`,
    en: `- Issue: [Person A] from [Client A] called to move the upgrade downtime to next Saturday night.
- Deadline: confirm the new downtime before next Saturday night.
- Next step: recheck the upgrade schedule and staffing, reply to [Person A] via [Phone A], and inform the other contact, [Person B], at [Email A].`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] โทรมาขอเลื่อนเวลาหยุดระบบเพื่ออัปเกรดเป็นคืนวันเสาร์หน้า
- กำหนดเวลา: ยืนยันเวลาหยุดระบบใหม่ก่อนคืนวันเสาร์หน้า
- ขั้นตอนถัดไป: ตรวจตารางอัปเกรดและกำลังคนอีกครั้ง ตอบกลับ [บุคคล A] ทาง [โทรศัพท์ A] และแจ้งผู้ติดต่ออีกคนทาง [อีเมล A]` } },

 { label: { zh: "調閱登入紀錄", en: "Login records request", th: "ขอดูบันทึกการเข้าสู่ระบบ" },
   input: {
    zh: `申請人李大同先生（身分證字號 B234567890）要求調閱上個月的系統登入紀錄。
公司名稱：青嵐資訊股份有限公司，聯絡信箱 datong.lee@example.com，月底前需要。`,
    en: `Applicant Mr. Daniel Lee (ID B234567890) requests last month's system login records.
Company: Qinglan Info Corp., email daniel.lee@example.com. Needed by month end.`,
    th: `ผู้ยื่นคำขอ คุณประเสริฐ ดีงาม จากบริษัท ชิงหลานอินโฟ จำกัด ขอดูบันทึกการเข้าสู่ระบบของเดือนที่แล้ว
เลขประจำตัว 3-1234-56789-01-2 อีเมล prasert.d@example.com ต้องการภายในสิ้นเดือน` },
   output: {
    zh: `- 問題：〔客戶A〕的申請人〔人員A〕要求調閱上個月的系統登入紀錄。
- 期限：月底前提供。
- 下一步：先確認申請人身分（〔身分證A〕）與調閱權限是否符合規定，核准後匯出紀錄，再透過〔Email A〕回覆。`,
    en: `- Issue: applicant [Person A] from [Client A] requests last month's system login records.
- Deadline: provide them by month end.
- Next step: verify the applicant's identity ([ID A]) and whether the request is authorised; once approved, export the records and reply via [Email A].`,
    th: `- ปัญหา: ผู้ยื่นคำขอ [บุคคล A] จาก [ลูกค้า A] ขอดูบันทึกการเข้าสู่ระบบของเดือนที่แล้ว
- กำหนดเวลา: ส่งให้ภายในสิ้นเดือน
- ขั้นตอนถัดไป: ตรวจสอบตัวตนผู้ยื่นคำขอ ([เลขบัตร A]) และสิทธิ์ในการขอดูข้อมูล เมื่ออนุมัติแล้วให้ส่งออกบันทึกและตอบกลับทาง [อีเมล A]` } }
 ] }
};
/* ---- batch 2 ---- */
window.PRESETS.report.items.push(
 { label: { zh: "教育訓練為主的月份", en: "Training-heavy month", th: "เดือนที่เน้นงานฝึกอบรม" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶A,教育訓練,40
客戶B,教育訓練,32
客戶C,顧問服務&開發,24
客戶D,維護,4
【協銷進度】客戶,活動,日期,狀態
客戶E,技術簡報,2026-10-09,已完成
客戶F,報價追蹤,2026-10-27,等待客戶回覆`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client A,Training,40
Client B,Training,32
Client C,Consulting & development,24
Client D,Maintenance,4
[Presales tracker] Client,Activity,Date,Status
Client E,Technical briefing,2026-10-09,Done
Client F,Quote follow-up,2026-10-27,Waiting for client`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า A,ฝึกอบรม,40
ลูกค้า B,ฝึกอบรม,32
ลูกค้า C,ที่ปรึกษาและพัฒนา,24
ลูกค้า D,บำรุงรักษา,4
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า E,บรรยายเทคนิค,2026-10-09,เสร็จแล้ว
ลูกค้า F,ติดตามใบเสนอราคา,2026-10-27,รอลูกค้าตอบกลับ` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶C | 24 | 3.0 |
| 維護 | 客戶D | 4 | 0.5 |
| 教育訓練 | 客戶A | 40 | 5.0 |
| 教育訓練 | 客戶B | 32 | 4.0 |
| 合計 | — | 100 | 12.5 |
#### 技術銷售・協銷進度
- **本月活動**：客戶E 技術簡報（10/09，已完成）；客戶F 報價追蹤（10/27，等待客戶回覆）
- **持續追蹤**：無
#### 待主管確認
- 本月工時與協銷資料都完整，沒有需要確認的項目。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client C | 24 | 3.0 |
| Maintenance | Client D | 4 | 0.5 |
| Training | Client A | 40 | 5.0 |
| Training | Client B | 32 | 4.0 |
| Total | — | 100 | 12.5 |
#### Presales progress
- **This month**: Client E technical briefing (10/09, done); Client F quote follow-up (10/27, waiting for client)
- **Ongoing**: none
#### For the manager to confirm
- Timesheet and presales data are complete this month; nothing to confirm.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า C | 24 | 3.0 |
| บำรุงรักษา | ลูกค้า D | 4 | 0.5 |
| ฝึกอบรม | ลูกค้า A | 40 | 5.0 |
| ฝึกอบรม | ลูกค้า B | 32 | 4.0 |
| รวม | — | 100 | 12.5 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า E บรรยายเทคนิค (10/09 เสร็จแล้ว); ลูกค้า F ติดตามใบเสนอราคา (10/27 รอลูกค้าตอบกลับ)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- ข้อมูลชั่วโมงงานและ Presales เดือนนี้ครบถ้วน ไม่มีรายการที่ต้องยืนยัน` } },

 { label: { zh: "同一客戶多種專案、協銷缺狀態", en: "One client, several project types; a missing status", th: "ลูกค้าเดียวหลายประเภทงาน และสถานะขาดหาย" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶G,顧問服務&開發,56
客戶G,維護,16
客戶G,教育訓練,8
客戶H,維護,12
【協銷進度】客戶,活動,日期,狀態
客戶G,擴充授權提案,2026-10-18,進行中
客戶I,產品展示,2026-07-30,等待客戶回覆
客戶J,POC 執行,2026-09-22,`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client G,Consulting & development,56
Client G,Maintenance,16
Client G,Training,8
Client H,Maintenance,12
[Presales tracker] Client,Activity,Date,Status
Client G,Licence expansion proposal,2026-10-18,In progress
Client I,Product demo,2026-07-30,Waiting for client
Client J,POC run,2026-09-22,`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า G,ที่ปรึกษาและพัฒนา,56
ลูกค้า G,บำรุงรักษา,16
ลูกค้า G,ฝึกอบรม,8
ลูกค้า H,บำรุงรักษา,12
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า G,เสนอขยายไลเซนส์,2026-10-18,กำลังดำเนินการ
ลูกค้า I,สาธิตผลิตภัณฑ์,2026-07-30,รอลูกค้าตอบกลับ
ลูกค้า J,ทำ POC,2026-09-22,` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶G | 56 | 7.0 |
| 維護 | 客戶G | 16 | 2.0 |
| 維護 | 客戶H | 12 | 1.5 |
| 教育訓練 | 客戶G | 8 | 1.0 |
| 合計 | — | 92 | 11.5 |
#### 技術銷售・協銷進度
- **本月活動**：客戶G 擴充授權提案（10/18，進行中）
- **持續追蹤**：客戶I 產品展示（7/30 起，等待客戶回覆）；客戶J POC 執行（9/22 起，狀態未填）
#### 待主管確認
- 客戶J 的 POC 執行沒有填狀態，請確認目前進度。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client G | 56 | 7.0 |
| Maintenance | Client G | 16 | 2.0 |
| Maintenance | Client H | 12 | 1.5 |
| Training | Client G | 8 | 1.0 |
| Total | — | 92 | 11.5 |
#### Presales progress
- **This month**: Client G licence expansion proposal (10/18, in progress)
- **Ongoing**: Client I product demo (since 7/30, waiting for client); Client J POC run (since 9/22, no status)
#### For the manager to confirm
- Client J's POC run has no status; please confirm where it stands.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า G | 56 | 7.0 |
| บำรุงรักษา | ลูกค้า G | 16 | 2.0 |
| บำรุงรักษา | ลูกค้า H | 12 | 1.5 |
| ฝึกอบรม | ลูกค้า G | 8 | 1.0 |
| รวม | — | 92 | 11.5 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า G เสนอขยายไลเซนส์ (10/18 กำลังดำเนินการ)
- **ติดตามต่อเนื่อง**: ลูกค้า I สาธิตผลิตภัณฑ์ (ตั้งแต่ 7/30 รอลูกค้าตอบกลับ); ลูกค้า J ทำ POC (ตั้งแต่ 9/22 ไม่ได้ระบุสถานะ)
#### รายการให้หัวหน้ายืนยัน
- ทำ POC ของลูกค้า J ไม่ได้ระบุสถานะ กรุณายืนยันความคืบหน้าปัจจุบัน` } },

 { label: { zh: "工時格式填錯", en: "Hours entered in the wrong format", th: "กรอกชั่วโมงผิดรูปแบบ" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶K,維護,24
客戶L,顧問服務&開發,半天
客戶M,顧問服務&開發,36
客戶N,教育訓練,8
【協銷進度】客戶,活動,日期,狀態
客戶O,技術簡報,2026-10-14,已完成
客戶P,Test-Drive,2026-10-31,已排定`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client K,Maintenance,24
Client L,Consulting & development,half a day
Client M,Consulting & development,36
Client N,Training,8
[Presales tracker] Client,Activity,Date,Status
Client O,Technical briefing,2026-10-14,Done
Client P,Test-Drive,2026-10-31,Scheduled`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า K,บำรุงรักษา,24
ลูกค้า L,ที่ปรึกษาและพัฒนา,ครึ่งวัน
ลูกค้า M,ที่ปรึกษาและพัฒนา,36
ลูกค้า N,ฝึกอบรม,8
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า O,บรรยายเทคนิค,2026-10-14,เสร็จแล้ว
ลูกค้า P,Test-Drive,2026-10-31,กำหนดวันแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶M | 36 | 4.5 |
| 維護 | 客戶K | 24 | 3.0 |
| 教育訓練 | 客戶N | 8 | 1.0 |
| 合計 | — | 68 | 8.5 |
#### 技術銷售・協銷進度
- **本月活動**：客戶O 技術簡報（10/14，已完成）；客戶P Test-Drive（10/31，已排定）
- **持續追蹤**：無
#### 待主管確認
- 客戶L 的工時填的是「半天」而不是時數，無法換算，暫不計入人天，請確認實際時數。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client M | 36 | 4.5 |
| Maintenance | Client K | 24 | 3.0 |
| Training | Client N | 8 | 1.0 |
| Total | — | 68 | 8.5 |
#### Presales progress
- **This month**: Client O technical briefing (10/14, done); Client P Test-Drive (10/31, scheduled)
- **Ongoing**: none
#### For the manager to confirm
- Client L's hours say "half a day" instead of a number, so they can't be converted and are left out of person-days for now; please confirm the actual hours.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า M | 36 | 4.5 |
| บำรุงรักษา | ลูกค้า K | 24 | 3.0 |
| ฝึกอบรม | ลูกค้า N | 8 | 1.0 |
| รวม | — | 68 | 8.5 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า O บรรยายเทคนิค (10/14 เสร็จแล้ว); ลูกค้า P Test-Drive (10/31 กำหนดวันแล้ว)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- ชั่วโมงงานของลูกค้า L กรอกว่า "ครึ่งวัน" ไม่ใช่ตัวเลข จึงแปลงไม่ได้และยังไม่นับเป็นแมนเดย์ กรุณายืนยันจำนวนชั่วโมงจริง` } }
);

window.PRESETS.cases.items.push(
 { label: { zh: "升級案集中漏截同一張圖", en: "Upgrades keep missing the same shot", th: "งานอัปเกรดขาดภาพเดิมซ้ำ ๆ" },
   input: {
    zh: `E01 客戶甲 2026-02 Tableau 升級：升級前沒有截到服務停止畫面
E02 客戶乙 2026-03 Tableau 升級：升級前沒有截到服務停止畫面
E03 客戶丙 2026-04 保養健檢：授權寫成「Core 10 / Explorer 5」
E04 客戶丁 2026-05 Tableau 升級：升級前沒有截到服務停止畫面
E05 客戶戊 2026-06 Tableau 升級：同一段說明在三個環境寫法不同
E06 客戶甲 2026-07 保養健檢：同一段說明在三個環境寫法不同`,
    en: `E01 Client A 2026-02 Tableau upgrade: no screenshot of the services stopped before the upgrade
E02 Client B 2026-03 Tableau upgrade: no screenshot of the services stopped before the upgrade
E03 Client C 2026-04 health check: licence written as "Core 10 / Explorer 5"
E04 Client D 2026-05 Tableau upgrade: no screenshot of the services stopped before the upgrade
E05 Client E 2026-06 Tableau upgrade: the same paragraph worded differently across three environments
E06 Client A 2026-07 health check: the same paragraph worded differently across three environments`,
    th: `E01 ลูกค้า A 2026-02 อัปเกรด Tableau: ไม่มีภาพหน้าจอตอนหยุดเซอร์วิสก่อนอัปเกรด
E02 ลูกค้า B 2026-03 อัปเกรด Tableau: ไม่มีภาพหน้าจอตอนหยุดเซอร์วิสก่อนอัปเกรด
E03 ลูกค้า C 2026-04 ตรวจสุขภาพระบบ: เขียนสิทธิ์ใช้งานว่า "Core 10 / Explorer 5"
E04 ลูกค้า D 2026-05 อัปเกรด Tableau: ไม่มีภาพหน้าจอตอนหยุดเซอร์วิสก่อนอัปเกรด
E05 ลูกค้า E 2026-06 อัปเกรด Tableau: คำอธิบายย่อหน้าเดียวกันเขียนต่างกันใน 3 สภาพแวดล้อม
E06 ลูกค้า A 2026-07 ตรวจสุขภาพระบบ: คำอธิบายย่อหน้าเดียวกันเขียนต่างกันใน 3 สภาพแวดล้อม` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 升級前漏截服務停止畫面 | E01、E02、E04 | 3 | 未涵蓋（節錄中未見必拍清單） |
| 同一段說明跨環境寫法不同 | E05、E06 | 2 | 已涵蓋（標準文字規範與跨環境重複比對）；仍發生 2 次 |
| 授權寫法不一致 | E03 | 1 | 已涵蓋（授權固定句型）；單次，不算模式 |
#### 值得考慮寫進規則
- 升級案連續 3 次漏截服務停止畫面，建議列為升級案必拍截圖。
- 跨環境比對機制已存在卻仍發生 2 次，建議確認比對有在產出前執行，並由使用者確認後寫入文字規範。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Services-stopped screen missing before the upgrade | E01, E02, E04 | 3 | Not covered (no required-shot list in the excerpt) |
| Same paragraph worded differently across environments | E05, E06 | 2 | Covered (standard wording rules and cross-environment comparison); still happened twice |
| Inconsistent licence wording | E03 | 1 | Covered (fixed licence pattern); single case, not a pattern |
#### Worth adding to the rules
- Upgrades missed the services-stopped screen three times; consider making it a required shot for upgrade projects.
- The cross-environment comparison exists but the issue still occurred twice; confirm the comparison runs before output and that the user confirms wording before it goes into the rules.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ขาดภาพตอนหยุดเซอร์วิสก่อนอัปเกรด | E01, E02, E04 | 3 | ยังไม่ครอบคลุม (ไม่พบรายการภาพบังคับในข้อความที่ยกมา) |
| ย่อหน้าเดียวกันเขียนต่างกันข้ามสภาพแวดล้อม | E05, E06 | 2 | ครอบคลุมแล้ว (มาตรฐานข้อความและการเทียบข้ามสภาพแวดล้อม) แต่ยังเกิด 2 ครั้ง |
| เขียนสิทธิ์ใช้งานไม่เหมือนกัน | E03 | 1 | ครอบคลุมแล้ว (รูปแบบประโยคสิทธิ์ใช้งานตายตัว) ครั้งเดียว ไม่นับเป็นรูปแบบ |
#### ควรพิจารณาเพิ่มเป็นกฎ
- งานอัปเกรดขาดภาพตอนหยุดเซอร์วิสติดต่อกัน 3 ครั้ง ควรกำหนดเป็นภาพบังคับของงานอัปเกรด
- มีกลไกเทียบข้ามสภาพแวดล้อมแล้วแต่ยังเกิด 2 ครั้ง ควรตรวจว่าการเทียบทำงานก่อนส่งออก และผู้ใช้ยืนยันก่อนบันทึกเป็นมาตรฐานข้อความ
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "問題集中在同一位客戶", en: "Issues concentrated on one client", th: "ปัญหาเกิดกับลูกค้ารายเดียว" },
   input: {
    zh: `F01 客戶甲 2026-03 保養健檢：返回大綱箭頭蓋到標題
F02 客戶甲 2026-06 保養健檢：返回大綱箭頭蓋到標題
F03 客戶甲 2026-09 保養健檢：返回大綱箭頭蓋到標題
F04 客戶乙 2026-04 Tableau 升級：摘要頁漏放
F05 客戶丙 2026-08 Tableau 升級：摘要頁漏放`,
    en: `F01 Client A 2026-03 health check: back-to-contents arrow overlaps the title
F02 Client A 2026-06 health check: back-to-contents arrow overlaps the title
F03 Client A 2026-09 health check: back-to-contents arrow overlaps the title
F04 Client B 2026-04 Tableau upgrade: summary page missing
F05 Client C 2026-08 Tableau upgrade: summary page missing`,
    th: `F01 ลูกค้า A 2026-03 ตรวจสุขภาพระบบ: ลูกศรกลับสารบัญทับหัวข้อ
F02 ลูกค้า A 2026-06 ตรวจสุขภาพระบบ: ลูกศรกลับสารบัญทับหัวข้อ
F03 ลูกค้า A 2026-09 ตรวจสุขภาพระบบ: ลูกศรกลับสารบัญทับหัวข้อ
F04 ลูกค้า B 2026-04 อัปเกรด Tableau: ไม่มีหน้าสรุป
F05 ลูกค้า C 2026-08 อัปเกรด Tableau: ไม่มีหน้าสรุป` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 返回大綱箭頭蓋到標題 | F01、F02、F03 | 3 | 已涵蓋（已記錄的陷阱）；3 次都發生在客戶甲 |
| 摘要頁漏放 | F04、F05 | 2 | 已涵蓋（摘要頁與細項大綱預設必要） |
#### 值得考慮寫進規則
- 箭頭蓋到標題 3 次都是客戶甲的保養案，建議檢查這位客戶使用的範本版面，必要時記錄成該客戶的專屬注意事項。
- 摘要頁是預設必要卻漏了 2 次，建議產出前自動檢查摘要頁是否存在。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Back-to-contents arrow overlaps the title | F01, F02, F03 | 3 | Covered (recorded pitfall); all three were Client A |
| Summary page missing | F04, F05 | 2 | Covered (summary page and detailed outline required by default) |
#### Worth adding to the rules
- All three arrow overlaps were Client A health checks; consider checking the template layout used for this client and noting it as a client-specific caution if needed.
- The summary page is required by default yet was missing twice; consider an automatic pre-output check that it exists.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ลูกศรกลับสารบัญทับหัวข้อ | F01, F02, F03 | 3 | ครอบคลุมแล้ว (บันทึกเป็นข้อควรระวัง) ทั้ง 3 ครั้งเป็นลูกค้า A |
| ไม่มีหน้าสรุป | F04, F05 | 2 | ครอบคลุมแล้ว (หน้าสรุปและสารบัญรายละเอียดจำเป็นโดยค่าเริ่มต้น) |
#### ควรพิจารณาเพิ่มเป็นกฎ
- ลูกศรทับหัวข้อทั้ง 3 ครั้งเป็นงานตรวจสุขภาพของลูกค้า A ควรตรวจเลย์เอาต์เทมเพลตที่ใช้กับลูกค้ารายนี้ และบันทึกเป็นข้อควรระวังเฉพาะลูกค้าหากจำเป็น
- หน้าสรุปจำเป็นโดยค่าเริ่มต้นแต่ยังขาดไป 2 ครั้ง ควรตรวจอัตโนมัติก่อนส่งออกว่ามีหน้าสรุปหรือไม่
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "有新有舊的混合情況", en: "A mix of new and known issues", th: "ปัญหาใหม่ปนกับปัญหาที่รู้แล้ว" },
   input: {
    zh: `G01 客戶乙 2026-07 Tableau 升級：截圖順序和步驟順序不一致
G02 客戶丁 2026-08 保養健檢：截圖順序和步驟順序不一致
G03 客戶丙 2026-08 Tableau 升級：請客戶確認事項頁是空白的，卻沒有刪除
G04 客戶戊 2026-09 保養健檢：請客戶確認事項頁是空白的，卻沒有刪除
G05 客戶甲 2026-10 Tableau 升級：範本殘留上一案的舊截圖`,
    en: `G01 Client B 2026-07 Tableau upgrade: screenshot order doesn't match the step order
G02 Client D 2026-08 health check: screenshot order doesn't match the step order
G03 Client C 2026-08 Tableau upgrade: the client confirmation page is empty but wasn't removed
G04 Client E 2026-09 health check: the client confirmation page is empty but wasn't removed
G05 Client A 2026-10 Tableau upgrade: old screenshot from the previous project left in the template`,
    th: `G01 ลูกค้า B 2026-07 อัปเกรด Tableau: ลำดับภาพหน้าจอไม่ตรงกับลำดับขั้นตอน
G02 ลูกค้า D 2026-08 ตรวจสุขภาพระบบ: ลำดับภาพหน้าจอไม่ตรงกับลำดับขั้นตอน
G03 ลูกค้า C 2026-08 อัปเกรด Tableau: หน้ารายการให้ลูกค้ายืนยันว่างเปล่าแต่ไม่ได้ลบออก
G04 ลูกค้า E 2026-09 ตรวจสุขภาพระบบ: หน้ารายการให้ลูกค้ายืนยันว่างเปล่าแต่ไม่ได้ลบออก
G05 ลูกค้า A 2026-10 อัปเกรด Tableau: ภาพเก่าจากโปรเจกต์ก่อนค้างอยู่ในเทมเพลต` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 截圖順序和步驟順序不一致 | G01、G02 | 2 | 可能屬於已記錄的陷阱「截圖錯位」；節錄中未見針對順序的明確規則 |
| 確認事項頁空白卻沒有刪除 | G03、G04 | 2 | 未涵蓋（節錄只規定異常放最末，未見沒有異常時的處理方式） |
| 範本殘留舊截圖 | G05 | 1 | 已涵蓋（已記錄的陷阱）；單次，不算模式 |
#### 值得考慮寫進規則
- 規定沒有異常時，「請客戶協助確認事項」頁要刪除或註明「本次無」，避免交付空白頁。
- 產出前比對截圖順序與步驟順序，不一致時先提醒使用者。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Screenshot order doesn't match step order | G01, G02 | 2 | May fall under the recorded pitfall "misplaced screenshots"; no explicit ordering rule in the excerpt |
| Empty confirmation page not removed | G03, G04 | 2 | Not covered (the excerpt only says anomalies go at the end; nothing on what to do when there are none) |
| Old screenshot left in the template | G05 | 1 | Covered (recorded pitfall); single case, not a pattern |
#### Worth adding to the rules
- When there are no anomalies, remove the "items for the client to confirm" page or mark it "none this time" so no blank page is delivered.
- Before output, compare screenshot order with step order and alert the user if they differ.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ลำดับภาพไม่ตรงกับลำดับขั้นตอน | G01, G02 | 2 | อาจอยู่ในข้อควรระวัง "ภาพหน้าจอผิดตำแหน่ง" แต่ไม่พบกฎเรื่องลำดับที่ชัดเจนในข้อความที่ยกมา |
| หน้ารายการให้ลูกค้ายืนยันว่างแต่ไม่ได้ลบ | G03, G04 | 2 | ยังไม่ครอบคลุม (ข้อความที่ยกมากำหนดแค่ให้ความผิดปกติอยู่ท้ายเล่ม ไม่ได้บอกว่าถ้าไม่มีต้องทำอย่างไร) |
| ภาพเก่าค้างในเทมเพลต | G05 | 1 | ครอบคลุมแล้ว (บันทึกเป็นข้อควรระวัง) ครั้งเดียว ไม่นับเป็นรูปแบบ |
#### ควรพิจารณาเพิ่มเป็นกฎ
- เมื่อไม่มีความผิดปกติ ให้ลบหน้า "รายการให้ลูกค้ายืนยัน" หรือระบุว่า "ครั้งนี้ไม่มี" เพื่อไม่ส่งหน้าว่างให้ลูกค้า
- ก่อนส่งออก ให้เทียบลำดับภาพกับลำดับขั้นตอน และแจ้งผู้ใช้หากไม่ตรงกัน
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } }
);

window.PRESETS.gov.items.push(
 { label: { zh: "帳號被鎖", en: "Locked account", th: "บัญชีถูกล็อก" },
   input: {
    zh: `晨曦電子股份有限公司的黃俊傑先生反映，早上連續輸錯密碼後帳號被鎖住，影響整個部門結帳。
請盡快回電 0918-222-333，或寄信到 junjie.huang@example.com。`,
    en: `Mr. Jason Huang from Chenxi Electronics Co., Ltd. reports his account was locked this morning after several wrong passwords, blocking his department's month-end closing.
Please call back on 0918-222-333 or email jason.huang@example.com as soon as possible.`,
    th: `คุณสุดา วงศ์ทอง จากบริษัท เฉินซีอิเล็กทรอนิกส์ จำกัด แจ้งว่าเช้านี้ใส่รหัสผ่านผิดหลายครั้งจนบัญชีถูกล็อก ทำให้ทั้งแผนกปิดบัญชีไม่ได้
กรุณาโทรกลับ 081-222-3333 หรืออีเมล suda.w@example.com โดยเร็ว` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕連續輸錯密碼後帳號被鎖住，影響整個部門結帳。
- 期限：盡快處理。
- 下一步：確認帳號鎖定狀態並協助解鎖，提醒重設密碼，再透過〔電話A〕或〔Email A〕回覆〔人員A〕。`,
    en: `- Issue: [Person A] from [Client A] is locked out after several wrong passwords, blocking the department's month-end closing.
- Deadline: as soon as possible.
- Next step: check the lock status and help unlock the account, remind them to reset the password, then reply to [Person A] via [Phone A] or [Email A].`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] ใส่รหัสผ่านผิดหลายครั้งจนบัญชีถูกล็อก ทำให้ทั้งแผนกปิดบัญชีไม่ได้
- กำหนดเวลา: โดยเร็วที่สุด
- ขั้นตอนถัดไป: ตรวจสถานะการล็อกและช่วยปลดล็อก แนะนำให้ตั้งรหัสผ่านใหม่ แล้วตอบกลับ [บุคคล A] ทาง [โทรศัพท์ A] หรือ [อีเมล A]` } },

 { label: { zh: "續約報價", en: "Renewal quote", th: "ใบเสนอราคาต่ออายุ" },
   input: {
    zh: `雲杉系統有限公司採購部吳佩珊小姐詢問：明年一月授權到期，想先拿續約報價。
請寄到 peishan.wu@example.com，並副本給主管周建宏協理。`,
    en: `Ms. Grace Wu from Yunshan Systems Ltd. (purchasing) asks for a renewal quote: their licence expires next January.
Please send it to grace.wu@example.com and cc her manager, Mr. Henry Chou.`,
    th: `คุณพิมพ์ชนก รุ่งเรือง จากบริษัท หยุนซานซิสเต็มส์ จำกัด ฝ่ายจัดซื้อ ขอใบเสนอราคาต่ออายุ เพราะไลเซนส์จะหมดอายุเดือนมกราคมปีหน้า
กรุณาส่งไปที่ pimchanok.r@example.com และสำเนาถึงหัวหน้าของเธอ` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕詢問續約報價，授權明年一月到期。
- 期限：明年一月授權到期前提供報價。
- 下一步：請業務窗口準備續約報價，寄到〔Email A〕，並副本給主管〔人員B〕。`,
    en: `- Issue: [Person A] from [Client A] asks for a renewal quote; the licence expires next January.
- Deadline: provide the quote before the licence expires in January.
- Next step: ask the sales contact to prepare the renewal quote and send it to [Email A], cc [Person B].`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] ขอใบเสนอราคาต่ออายุ ไลเซนส์จะหมดอายุเดือนมกราคมปีหน้า
- กำหนดเวลา: ส่งใบเสนอราคาก่อนไลเซนส์หมดอายุในเดือนมกราคม
- ขั้นตอนถัดไป: ให้ฝ่ายขายเตรียมใบเสนอราคาต่ออายุ ส่งไปที่ [อีเมล A] และสำเนาถึงหัวหน้าของเธอ` } },

 { label: { zh: "現場派工與門禁", en: "On-site visit and site access", th: "นัดงานหน้างานและการเข้าพื้นที่" },
   input: {
    zh: `明天早上 9 點，工程師到客戶松岳紡織股份有限公司機房做保養，現場聯絡人是趙文華先生，手機 0922-555-666。
門禁需要提前登記工程師身分證字號：A198765432。`,
    en: `Tomorrow at 9 a.m. an engineer goes to Songyue Textile Co., Ltd. for on-site maintenance. The on-site contact is Mr. Peter Chao, mobile 0922-555-666.
Site access must be registered in advance with the engineer's ID: A198765432.`,
    th: `พรุ่งนี้ 9 โมงเช้า วิศวกรต้องไปบำรุงรักษาห้องเซิร์ฟเวอร์ที่บริษัท ซงเยว่เท็กซ์ไทล์ จำกัด ผู้ติดต่อหน้างานคือคุณธนา ใจกล้า โทร 092-555-6666
ต้องลงทะเบียนเข้าพื้นที่ล่วงหน้าด้วยเลขประจำตัววิศวกร 1-1020-30405-06-7` },
   output: {
    zh: `- 問題：明天早上 9 點要到客戶〔客戶A〕的機房做保養。
- 期限：門禁登記要在明天早上 9 點前完成。
- 下一步：先用〔身分證A〕完成門禁登記，出發前透過〔電話A〕向現場聯絡人〔人員A〕確認。`,
    en: `- Issue: on-site maintenance at [Client A] tomorrow at 9 a.m.
- Deadline: site-access registration must be done before 9 a.m. tomorrow.
- Next step: register site access with [ID A], and confirm with the on-site contact [Person A] via [Phone A] before leaving.`,
    th: `- ปัญหา: ต้องไปบำรุงรักษาห้องเซิร์ฟเวอร์ที่ [ลูกค้า A] พรุ่งนี้ 9 โมงเช้า
- กำหนดเวลา: ต้องลงทะเบียนเข้าพื้นที่ให้เสร็จก่อน 9 โมงเช้าพรุ่งนี้
- ขั้นตอนถัดไป: ลงทะเบียนเข้าพื้นที่ด้วย [เลขบัตร A] และยืนยันกับผู้ติดต่อหน้างาน [บุคคล A] ทาง [โทรศัพท์ A] ก่อนออกเดินทาง` } }
);
/* ---- batch 3 ---- */
window.PRESETS.report.items.push(
 { label: { zh: "協銷活動特別多", en: "Lots of presales activity", th: "กิจกรรม Presales เยอะเป็นพิเศษ" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶A,顧問服務&開發,32
客戶B,維護,16
【協銷進度】客戶,活動,日期,狀態
客戶C,技術簡報,2026-10-02,已完成
客戶D,產品展示,2026-10-07,已完成
客戶E,POC 規劃,2026-10-16,進行中
客戶F,Test-Drive,2026-10-23,已完成
客戶G,報價追蹤,2026-09-30,等待客戶回覆
客戶H,技術簡報,2026-11-12,已排定`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client A,Consulting & development,32
Client B,Maintenance,16
[Presales tracker] Client,Activity,Date,Status
Client C,Technical briefing,2026-10-02,Done
Client D,Product demo,2026-10-07,Done
Client E,POC planning,2026-10-16,In progress
Client F,Test-Drive,2026-10-23,Done
Client G,Quote follow-up,2026-09-30,Waiting for client
Client H,Technical briefing,2026-11-12,Scheduled`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า A,ที่ปรึกษาและพัฒนา,32
ลูกค้า B,บำรุงรักษา,16
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า C,บรรยายเทคนิค,2026-10-02,เสร็จแล้ว
ลูกค้า D,สาธิตผลิตภัณฑ์,2026-10-07,เสร็จแล้ว
ลูกค้า E,วางแผน POC,2026-10-16,กำลังดำเนินการ
ลูกค้า F,Test-Drive,2026-10-23,เสร็จแล้ว
ลูกค้า G,ติดตามใบเสนอราคา,2026-09-30,รอลูกค้าตอบกลับ
ลูกค้า H,บรรยายเทคนิค,2026-11-12,กำหนดวันแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶A | 32 | 4.0 |
| 維護 | 客戶B | 16 | 2.0 |
| 合計 | — | 48 | 6.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶C 技術簡報（10/02，已完成）；客戶D 產品展示（10/07，已完成）；客戶E POC 規劃（10/16，進行中）；客戶F Test-Drive（10/23，已完成）
- **持續追蹤**：客戶G 報價追蹤（9/30 起，等待客戶回覆）；客戶H 技術簡報（11/12，已排定）
#### 待主管確認
- 客戶H 的技術簡報排在 11/12，不在本月，依規則列在持續追蹤。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client A | 32 | 4.0 |
| Maintenance | Client B | 16 | 2.0 |
| Total | — | 48 | 6.0 |
#### Presales progress
- **This month**: Client C technical briefing (10/02, done); Client D product demo (10/07, done); Client E POC planning (10/16, in progress); Client F Test-Drive (10/23, done)
- **Ongoing**: Client G quote follow-up (since 9/30, waiting for client); Client H technical briefing (11/12, scheduled)
#### For the manager to confirm
- Client H's technical briefing is set for 11/12, outside this month, so per the rules it is listed under Ongoing.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า A | 32 | 4.0 |
| บำรุงรักษา | ลูกค้า B | 16 | 2.0 |
| รวม | — | 48 | 6.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า C บรรยายเทคนิค (10/02 เสร็จแล้ว); ลูกค้า D สาธิตผลิตภัณฑ์ (10/07 เสร็จแล้ว); ลูกค้า E วางแผน POC (10/16 กำลังดำเนินการ); ลูกค้า F Test-Drive (10/23 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ลูกค้า G ติดตามใบเสนอราคา (ตั้งแต่ 9/30 รอลูกค้าตอบกลับ); ลูกค้า H บรรยายเทคนิค (11/12 กำหนดวันแล้ว)
#### รายการให้หัวหน้ายืนยัน
- บรรยายเทคนิคของลูกค้า H กำหนดวันที่ 11/12 ซึ่งไม่อยู่ในเดือนนี้ ตามกฎจึงจัดไว้ในติดตามต่อเนื่อง` } },

 { label: { zh: "疑似重複填寫", en: "Possible duplicate entry", th: "อาจกรอกซ้ำ" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶J,維護,12
客戶J,維護,12
客戶K,顧問服務&開發,40
客戶L,教育訓練,16
【協銷進度】客戶,活動,日期,狀態
客戶M,產品展示,2026-10-20,已完成`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client J,Maintenance,12
Client J,Maintenance,12
Client K,Consulting & development,40
Client L,Training,16
[Presales tracker] Client,Activity,Date,Status
Client M,Product demo,2026-10-20,Done`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า J,บำรุงรักษา,12
ลูกค้า J,บำรุงรักษา,12
ลูกค้า K,ที่ปรึกษาและพัฒนา,40
ลูกค้า L,ฝึกอบรม,16
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า M,สาธิตผลิตภัณฑ์,2026-10-20,เสร็จแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶K | 40 | 5.0 |
| 維護 | 客戶J | 24 | 3.0 |
| 教育訓練 | 客戶L | 16 | 2.0 |
| 合計 | — | 80 | 10.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶M 產品展示（10/20，已完成）
- **持續追蹤**：無
#### 待主管確認
- 客戶J 有兩筆完全相同的維護工時（各 12 小時），已照資料合計為 24 小時，請確認是否重複填寫；若是重複，本月合計應為 68 小時、8.5 人天。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client K | 40 | 5.0 |
| Maintenance | Client J | 24 | 3.0 |
| Training | Client L | 16 | 2.0 |
| Total | — | 80 | 10.0 |
#### Presales progress
- **This month**: Client M product demo (10/20, done)
- **Ongoing**: none
#### For the manager to confirm
- Client J has two identical maintenance entries (12 hours each), added together as 24 hours per the data; please confirm whether one is a duplicate. If so, this month's total would be 68 hours, 8.5 person-days.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า K | 40 | 5.0 |
| บำรุงรักษา | ลูกค้า J | 24 | 3.0 |
| ฝึกอบรม | ลูกค้า L | 16 | 2.0 |
| รวม | — | 80 | 10.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า M สาธิตผลิตภัณฑ์ (10/20 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- ลูกค้า J มีบันทึกงานบำรุงรักษาที่เหมือนกันทุกช่อง 2 รายการ (รายการละ 12 ชั่วโมง) รวมตามข้อมูลเป็น 24 ชั่วโมง กรุณายืนยันว่ากรอกซ้ำหรือไม่ หากซ้ำ ยอดรวมเดือนนี้จะเป็น 68 ชั่วโมง 8.5 แมนเดย์` } },

 { label: { zh: "協銷都不在本月", en: "No presales in the report month", th: "ไม่มี Presales ในเดือนรายงาน" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶N,顧問服務&開發,48
客戶O,維護,8
客戶P,教育訓練,12
【協銷進度】客戶,活動,日期,狀態
客戶Q,技術簡報,2026-09-25,已完成
客戶R,POC 執行,2026-11-03,已排定`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client N,Consulting & development,48
Client O,Maintenance,8
Client P,Training,12
[Presales tracker] Client,Activity,Date,Status
Client Q,Technical briefing,2026-09-25,Done
Client R,POC run,2026-11-03,Scheduled`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า N,ที่ปรึกษาและพัฒนา,48
ลูกค้า O,บำรุงรักษา,8
ลูกค้า P,ฝึกอบรม,12
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า Q,บรรยายเทคนิค,2026-09-25,เสร็จแล้ว
ลูกค้า R,ทำ POC,2026-11-03,กำหนดวันแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶N | 48 | 6.0 |
| 維護 | 客戶O | 8 | 1.0 |
| 教育訓練 | 客戶P | 12 | 1.5 |
| 合計 | — | 68 | 8.5 |
#### 技術銷售・協銷進度
- **本月活動**：無
- **持續追蹤**：客戶Q 技術簡報（9/25，已完成）；客戶R POC 執行（11/03，已排定）
#### 待主管確認
- 本月沒有任何協銷活動落在 10 月。
- 客戶Q 的技術簡報 9/25 已完成，請確認上月報告是否已呈現、還需不需要繼續追蹤。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client N | 48 | 6.0 |
| Maintenance | Client O | 8 | 1.0 |
| Training | Client P | 12 | 1.5 |
| Total | — | 68 | 8.5 |
#### Presales progress
- **This month**: none
- **Ongoing**: Client Q technical briefing (9/25, done); Client R POC run (11/03, scheduled)
#### For the manager to confirm
- No presales activity falls in October this month.
- Client Q's technical briefing was completed on 9/25; please confirm whether last month's report covered it and whether it still needs tracking.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า N | 48 | 6.0 |
| บำรุงรักษา | ลูกค้า O | 8 | 1.0 |
| ฝึกอบรม | ลูกค้า P | 12 | 1.5 |
| รวม | — | 68 | 8.5 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ไม่มี
- **ติดตามต่อเนื่อง**: ลูกค้า Q บรรยายเทคนิค (9/25 เสร็จแล้ว); ลูกค้า R ทำ POC (11/03 กำหนดวันแล้ว)
#### รายการให้หัวหน้ายืนยัน
- เดือนนี้ไม่มีกิจกรรม Presales ใดอยู่ในเดือนตุลาคม
- บรรยายเทคนิคของลูกค้า Q เสร็จไปแล้วเมื่อ 9/25 กรุณายืนยันว่ารายงานเดือนก่อนรวมไว้แล้วหรือยัง และยังต้องติดตามต่อหรือไม่` } }
);

window.PRESETS.cases.items.push(
 { label: { zh: "授權資訊反覆出錯", en: "Licence details keep going wrong", th: "ข้อมูลไลเซนส์ผิดซ้ำ ๆ" },
   input: {
    zh: `H01 客戶甲 2026-03 保養健檢：授權到期日沿用舊合約日期
H02 客戶乙 2026-05 Tableau 升級：授權只寫了 Creator 數量，缺 Explorer 與 Viewer
H03 客戶丙 2026-06 保養健檢：授權到期日沿用舊合約日期
H04 客戶丁 2026-08 Tableau 升級：授權只寫了 Creator 數量，缺 Explorer 與 Viewer
H05 客戶甲 2026-09 保養健檢：維護到期日漏寫`,
    en: `H01 Client A 2026-03 health check: licence expiry date carried over from the old contract
H02 Client B 2026-05 Tableau upgrade: licence lists only the Creator count, missing Explorer and Viewer
H03 Client C 2026-06 health check: licence expiry date carried over from the old contract
H04 Client D 2026-08 Tableau upgrade: licence lists only the Creator count, missing Explorer and Viewer
H05 Client A 2026-09 health check: maintenance expiry date missing`,
    th: `H01 ลูกค้า A 2026-03 ตรวจสุขภาพระบบ: วันหมดอายุไลเซนส์ใช้วันที่จากสัญญาเก่า
H02 ลูกค้า B 2026-05 อัปเกรด Tableau: ไลเซนส์ระบุแค่จำนวน Creator ขาด Explorer และ Viewer
H03 ลูกค้า C 2026-06 ตรวจสุขภาพระบบ: วันหมดอายุไลเซนส์ใช้วันที่จากสัญญาเก่า
H04 ลูกค้า D 2026-08 อัปเกรด Tableau: ไลเซนส์ระบุแค่จำนวน Creator ขาด Explorer และ Viewer
H05 ลูกค้า A 2026-09 ตรวจสุขภาพระบบ: ไม่ได้ระบุวันหมดอายุการบำรุงรักษา` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 授權到期日沿用舊合約 | H01、H03 | 2 | 已涵蓋（授權固定句型；草稿給使用者確認） |
| 授權數量只寫 Creator | H02、H04 | 2 | 已涵蓋（句型含 {c}/{e}/{v} 三種數量） |
| 維護到期日漏寫 | H05 | 1 | 已涵蓋（句型含維護到期日）；單次，不算模式 |
#### 值得考慮寫進規則
- 授權相關錯誤共 5 次，句型雖已規定，建議產出前逐欄檢查句型的每個欄位是否都有值。
- 確認草稿時，把到期日與維護到期日特別標出，提醒使用者對照最新合約。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Licence expiry carried over from the old contract | H01, H03 | 2 | Covered (fixed licence pattern; the user confirms the draft) |
| Licence lists only the Creator count | H02, H04 | 2 | Covered (the pattern includes all three counts {c}/{e}/{v}) |
| Maintenance expiry date missing | H05 | 1 | Covered (the pattern includes the maintenance expiry); single case, not a pattern |
#### Worth adding to the rules
- Licence-related errors happened five times even with a fixed pattern; consider checking before output that every field in the pattern has a value.
- When the user confirms the draft, highlight the expiry and maintenance-expiry dates so they are checked against the latest contract.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| วันหมดอายุไลเซนส์ใช้วันที่จากสัญญาเก่า | H01, H03 | 2 | ครอบคลุมแล้ว (รูปแบบประโยคไลเซนส์ตายตัว ผู้ใช้ยืนยันฉบับร่าง) |
| ไลเซนส์ระบุแค่จำนวน Creator | H02, H04 | 2 | ครอบคลุมแล้ว (รูปแบบประโยคมีจำนวนครบ 3 ประเภท {c}/{e}/{v}) |
| ไม่ได้ระบุวันหมดอายุการบำรุงรักษา | H05 | 1 | ครอบคลุมแล้ว (รูปแบบประโยคมีวันหมดอายุการบำรุงรักษา) ครั้งเดียว ไม่นับเป็นรูปแบบ |
#### ควรพิจารณาเพิ่มเป็นกฎ
- ข้อผิดพลาดเรื่องไลเซนส์เกิด 5 ครั้งแม้มีรูปแบบประโยคแล้ว ควรตรวจก่อนส่งออกว่าทุกช่องในรูปแบบมีค่าครบ
- ตอนให้ผู้ใช้ยืนยันฉบับร่าง ให้ไฮไลต์วันหมดอายุและวันหมดอายุการบำรุงรักษา เพื่อให้เทียบกับสัญญาล่าสุด
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "跨環境文字不一致", en: "Wording differs across environments", th: "ข้อความไม่ตรงกันข้ามสภาพแวดล้อม" },
   input: {
    zh: `I01 客戶乙 2026-04 Tableau 升級：測試環境寫「已完成升級」，正式環境寫「升級完畢」
I02 客戶丙 2026-06 Tableau 升級：測試環境和正式環境的章節標題不同
I03 客戶丁 2026-07 保養健檢：三個環境的檢查結果用不同句型描述
I04 客戶戊 2026-09 Tableau 升級：測試環境和正式環境的章節標題不同`,
    en: `I01 Client B 2026-04 Tableau upgrade: test environment says "upgrade completed", production says "upgrade finished"
I02 Client C 2026-06 Tableau upgrade: section titles differ between test and production
I03 Client D 2026-07 health check: check results described with different sentence patterns in three environments
I04 Client E 2026-09 Tableau upgrade: section titles differ between test and production`,
    th: `I01 ลูกค้า B 2026-04 อัปเกรด Tableau: สภาพแวดล้อมทดสอบเขียนว่า "อัปเกรดเสร็จสิ้น" แต่ระบบจริงเขียนว่า "อัปเกรดเรียบร้อย"
I02 ลูกค้า C 2026-06 อัปเกรด Tableau: หัวข้อบทของสภาพแวดล้อมทดสอบกับระบบจริงไม่เหมือนกัน
I03 ลูกค้า D 2026-07 ตรวจสุขภาพระบบ: ผลการตรวจใน 3 สภาพแวดล้อมใช้รูปแบบประโยคต่างกัน
I04 ลูกค้า E 2026-09 อัปเกรด Tableau: หัวข้อบทของสภาพแวดล้อมทดสอบกับระบบจริงไม่เหมือนกัน` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 跨環境用詞或句型不一致 | I01、I03 | 2 | 已涵蓋（固定句型與跨環境比對） |
| 跨環境章節標題不同 | I02、I04 | 2 | 已涵蓋（固定標題與跨環境比對） |
#### 值得考慮寫進規則
- 兩種情況規則都已涵蓋，卻合計發生 4 次，建議確認跨環境比對是在每次產出前自動執行，而不是只在使用者要求時才做。
- 比對發現差異時，列出差異讓使用者一次確認，確認後寫入文字規範。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Wording or sentence pattern differs across environments | I01, I03 | 2 | Covered (fixed sentence patterns and cross-environment comparison) |
| Section titles differ across environments | I02, I04 | 2 | Covered (fixed titles and cross-environment comparison) |
#### Worth adding to the rules
- Both are covered by the rules yet happened four times in total; confirm the cross-environment comparison runs automatically before every output, not only when the user asks.
- When differences are found, list them for the user to confirm in one go, then add the confirmed wording to the rules.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| คำหรือรูปแบบประโยคต่างกันข้ามสภาพแวดล้อม | I01, I03 | 2 | ครอบคลุมแล้ว (รูปแบบประโยคตายตัวและการเทียบข้ามสภาพแวดล้อม) |
| หัวข้อบทต่างกันข้ามสภาพแวดล้อม | I02, I04 | 2 | ครอบคลุมแล้ว (หัวข้อตายตัวและการเทียบข้ามสภาพแวดล้อม) |
#### ควรพิจารณาเพิ่มเป็นกฎ
- ทั้งสองกรณีมีกฎครอบคลุมแล้ว แต่รวมกันยังเกิด 4 ครั้ง ควรยืนยันว่าการเทียบข้ามสภาพแวดล้อมทำงานอัตโนมัติก่อนส่งออกทุกครั้ง ไม่ใช่เฉพาะเมื่อผู้ใช้ขอ
- เมื่อพบความต่าง ให้แสดงรายการให้ผู้ใช้ยืนยันในครั้งเดียว แล้วบันทึกข้อความที่ยืนยันเป็นมาตรฐาน
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "截圖品質與外洩風險", en: "Screenshot quality and leak risk", th: "คุณภาพภาพหน้าจอและความเสี่ยงข้อมูลรั่ว" },
   input: {
    zh: `J01 客戶甲 2026-05 保養健檢：截圖解析度太低，文字看不清楚
J02 客戶乙 2026-06 Tableau 升級：截圖裡出現其他客戶的視窗標題
J03 客戶丙 2026-07 保養健檢：截圖解析度太低，文字看不清楚
J04 客戶丁 2026-08 保養健檢：截圖解析度太低，文字看不清楚
J05 客戶戊 2026-10 Tableau 升級：截圖裡出現其他客戶的視窗標題`,
    en: `J01 Client A 2026-05 health check: screenshot resolution too low to read the text
J02 Client B 2026-06 Tableau upgrade: another client's window title visible in a screenshot
J03 Client C 2026-07 health check: screenshot resolution too low to read the text
J04 Client D 2026-08 health check: screenshot resolution too low to read the text
J05 Client E 2026-10 Tableau upgrade: another client's window title visible in a screenshot`,
    th: `J01 ลูกค้า A 2026-05 ตรวจสุขภาพระบบ: ภาพหน้าจอความละเอียดต่ำ อ่านข้อความไม่ออก
J02 ลูกค้า B 2026-06 อัปเกรด Tableau: ในภาพหน้าจอมีชื่อหน้าต่างของลูกค้ารายอื่น
J03 ลูกค้า C 2026-07 ตรวจสุขภาพระบบ: ภาพหน้าจอความละเอียดต่ำ อ่านข้อความไม่ออก
J04 ลูกค้า D 2026-08 ตรวจสุขภาพระบบ: ภาพหน้าจอความละเอียดต่ำ อ่านข้อความไม่ออก
J05 ลูกค้า E 2026-10 อัปเกรด Tableau: ในภาพหน้าจอมีชื่อหน้าต่างของลูกค้ารายอื่น` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 截圖解析度太低 | J01、J03、J04 | 3 | 未涵蓋（節錄中未見截圖品質規範） |
| 截圖出現其他客戶的視窗標題 | J02、J05 | 2 | 未涵蓋（節錄中未見）；涉及其他客戶資訊外洩風險 |
#### 值得考慮寫進規則
- 優先處理：截圖出現其他客戶資訊屬於外洩風險，建議產出前檢查截圖中的視窗標題與分頁，發現時遮蔽或重截。
- 訂出截圖最低解析度，產出前檢查文字是否清楚可讀，不清楚就請工程師重截。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Screenshot resolution too low | J01, J03, J04 | 3 | Not covered (no screenshot-quality rule in the excerpt) |
| Another client's window title visible | J02, J05 | 2 | Not covered (not in the excerpt); a risk of leaking another client's information |
#### Worth adding to the rules
- Priority: another client's information in a screenshot is a leak risk; check window titles and tabs before output and mask or retake when found.
- Set a minimum screenshot resolution and check readability before output; ask the engineer to retake unreadable shots.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ภาพหน้าจอความละเอียดต่ำ | J01, J03, J04 | 3 | ยังไม่ครอบคลุม (ไม่พบมาตรฐานคุณภาพภาพในข้อความที่ยกมา) |
| ภาพหน้าจอมีชื่อหน้าต่างของลูกค้ารายอื่น | J02, J05 | 2 | ยังไม่ครอบคลุม (ไม่พบในข้อความที่ยกมา) มีความเสี่ยงที่ข้อมูลลูกค้ารายอื่นจะรั่วไหล |
#### ควรพิจารณาเพิ่มเป็นกฎ
- เร่งด่วน: ข้อมูลลูกค้ารายอื่นในภาพหน้าจอเป็นความเสี่ยงข้อมูลรั่ว ควรตรวจชื่อหน้าต่างและแท็บก่อนส่งออก ถ้าพบให้ปิดบังหรือถ่ายใหม่
- กำหนดความละเอียดขั้นต่ำของภาพ และตรวจว่าอ่านข้อความได้ชัดก่อนส่งออก ถ้าไม่ชัดให้วิศวกรถ่ายใหม่
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } }
);

window.PRESETS.gov.items.push(
 { label: { zh: "發票寄錯地址", en: "Invoice sent to the wrong address", th: "ส่งใบแจ้งหนี้ผิดที่อยู่" },
   input: {
    zh: `拓垣精密股份有限公司會計部王淑芬小姐來電：上個月的發票寄到舊地址，需要重新開立。
請回電 0955-888-777，新的收件信箱是 shufen.wang@example.com。`,
    en: `Ms. Susan Wang from Tuoyuan Precision Co., Ltd. (accounting) called: last month's invoice went to their old address and needs to be reissued.
Please call back on 0955-888-777; the new receiving email is susan.wang@example.com.`,
    th: `คุณวิไล แสงทอง จากบริษัท ทั่วหยวนพรีซิชั่น จำกัด ฝ่ายบัญชี แจ้งว่าใบแจ้งหนี้เดือนที่แล้วส่งไปที่อยู่เก่า ต้องออกใหม่
กรุณาโทรกลับ 095-888-7777 อีเมลรับเอกสารใหม่คือ wilai.s@example.com` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕反映上個月的發票寄到舊地址，需要重新開立。
- 期限：紀錄中沒有明確期限，建議盡快處理。
- 下一步：確認新的寄送資訊後重新開立發票，透過〔電話A〕回覆〔人員A〕，電子檔寄到〔Email A〕。`,
    en: `- Issue: [Person A] from [Client A] says last month's invoice went to the old address and needs reissuing.
- Deadline: none stated in the record; handle it soon.
- Next step: confirm the new delivery details, reissue the invoice, reply to [Person A] via [Phone A] and send the electronic copy to [Email A].`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] แจ้งว่าใบแจ้งหนี้เดือนที่แล้วส่งไปที่อยู่เก่า ต้องออกใหม่
- กำหนดเวลา: ในบันทึกไม่ได้ระบุ ควรดำเนินการโดยเร็ว
- ขั้นตอนถัดไป: ยืนยันข้อมูลการจัดส่งใหม่แล้วออกใบแจ้งหนี้ใหม่ ตอบกลับ [บุคคล A] ทาง [โทรศัพท์ A] และส่งไฟล์ไปที่ [อีเมล A]` } },

 { label: { zh: "資安事件通報", en: "Security incident report", th: "แจ้งเหตุด้านความปลอดภัย" },
   input: {
    zh: `嵐川網通有限公司資安窗口蔡明哲經理通報：今天凌晨有異常登入，來源 IP 不明，已先停用兩個帳號。
請在兩小時內回電 0911-000-222，事件單號 SEC-1127。`,
    en: `Mr. Allen Tsai, security contact at Lanchuan Networks Ltd., reports unusual logins early this morning from an unknown IP; two accounts have been disabled for now.
Please call back within two hours on 0911-000-222. Incident ticket: SEC-1127.`,
    th: `คุณกิตติ ทองดี จากบริษัท หลานชวนเน็ตเวิร์กส์ จำกัด ผู้ประสานงานด้านความปลอดภัย แจ้งว่าเช้ามืดวันนี้มีการเข้าสู่ระบบผิดปกติจาก IP ที่ไม่ทราบที่มา ระงับบัญชีไปแล้ว 2 บัญชี
กรุณาโทรกลับภายใน 2 ชั่วโมงที่ 091-000-2222 เลขที่เหตุการณ์ SEC-1127` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕通報今天凌晨有異常登入，來源 IP 不明，已先停用兩個帳號。
- 期限：兩小時內回電。
- 下一步：依資安事件流程調閱登入紀錄、確認影響範圍，兩小時內透過〔電話A〕回覆〔人員A〕，往來紀錄都註明事件單號 SEC-1127。`,
    en: `- Issue: [Person A] from [Client A] reports unusual logins early this morning from an unknown IP; two accounts have been disabled.
- Deadline: call back within two hours.
- Next step: follow the security-incident process, pull the login records and assess the impact, call [Person A] back via [Phone A] within two hours, and quote ticket SEC-1127 in all correspondence.`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] แจ้งว่าเช้ามืดวันนี้มีการเข้าสู่ระบบผิดปกติจาก IP ที่ไม่ทราบที่มา ระงับบัญชีไปแล้ว 2 บัญชี
- กำหนดเวลา: โทรกลับภายใน 2 ชั่วโมง
- ขั้นตอนถัดไป: ทำตามขั้นตอนรับมือเหตุด้านความปลอดภัย ดึงบันทึกการเข้าสู่ระบบและประเมินผลกระทบ โทรกลับ [บุคคล A] ทาง [โทรศัพท์ A] ภายใน 2 ชั่วโมง และอ้างอิงเลขที่เหตุการณ์ SEC-1127 ทุกครั้ง` } },

 { label: { zh: "教育訓練報名", en: "Training registration", th: "ลงทะเบียนอบรม" },
   input: {
    zh: `明澄醫療股份有限公司要報名下週的系統教育訓練，學員是劉怡君小姐（yijun.liu@example.com）和許志豪先生（zhihao.hsu@example.com）。
報名截止是本週五。`,
    en: `Mingcheng Medical Co., Ltd. wants to enrol in next week's system training. Attendees: Ms. Ivy Liu (ivy.liu@example.com) and Mr. Howard Hsu (howard.hsu@example.com).
Registration closes this Friday.`,
    th: `บริษัท หมิงเฉิงเมดิคอล จำกัด ต้องการลงทะเบียนอบรมระบบสัปดาห์หน้า ผู้เข้าอบรมคือคุณนภา สายใจ จากฝ่ายไอที (napa.s@example.com) และ kittipong.r@example.com
ปิดรับสมัครวันศุกร์นี้` },
   output: {
    zh: `- 問題：〔客戶A〕要報名下週的系統教育訓練，學員為〔人員A〕（〔Email A〕）與〔人員B〕（〔Email B〕）。
- 期限：本週五報名截止。
- 下一步：本週五前完成兩位學員的報名，並把上課通知寄到〔Email A〕與〔Email B〕。`,
    en: `- Issue: [Client A] wants to enrol in next week's system training; attendees are [Person A] ([Email A]) and [Person B] ([Email B]).
- Deadline: registration closes this Friday.
- Next step: register both attendees before Friday and send the course details to [Email A] and [Email B].`,
    th: `- ปัญหา: [ลูกค้า A] ต้องการลงทะเบียนอบรมระบบสัปดาห์หน้า ผู้เข้าอบรมคือ [บุคคล A] ([อีเมล A]) และอีกหนึ่งคน ([อีเมล B])
- กำหนดเวลา: ปิดรับสมัครวันศุกร์นี้
- ขั้นตอนถัดไป: ลงทะเบียนให้ทั้งสองคนก่อนวันศุกร์ และส่งรายละเอียดการอบรมไปที่ [อีเมล A] และ [อีเมล B]` } }
);
/* ---- batch 4: FAQ questions 11–20 ---- */
window.PRESETS.kb.items.push(
 { q: { zh: "備份檔太大，磁碟快滿了怎麼辦？", en: "Backups are filling up the disk. What should I do?", th: "ไฟล์สำรองใหญ่จนดิสก์ใกล้เต็ม ต้องทำอย่างไร" },
   a: { zh: "清理 30 天以前的舊備份，並把備份目錄移到容量較大的磁碟【FAQ-056】。清理前要確認至少保留最近 3 份備份【FAQ-056】。",
        en: "Delete backups older than 30 days and move the backup directory to a larger disk [FAQ-056]. Before cleaning up, make sure at least the three most recent backups are kept [FAQ-056].",
        th: "ให้ลบไฟล์สำรองที่เก่ากว่า 30 วัน และย้ายโฟลเดอร์สำรองไปดิสก์ที่ใหญ่กว่า [FAQ-056] ก่อนลบต้องเก็บไฟล์สำรองล่าสุดไว้อย่างน้อย 3 ชุด [FAQ-056]" } },
 { q: { zh: "系統的通知信突然寄不出去", en: "System notification emails suddenly stopped sending", th: "อีเมลแจ้งเตือนของระบบส่งไม่ออกกะทันหัน" },
   a: { zh: "先確認 SMTP 伺服器位址、連接埠與帳號有沒有變更【FAQ-060】。如果客戶更換了郵件伺服器，要在管理頁更新設定，再寄一封測試信確認【FAQ-060】。",
        en: "First check whether the SMTP server address, port or account has changed [FAQ-060]. If the client switched mail servers, update the settings on the admin page and send a test email to confirm [FAQ-060].",
        th: "ให้ตรวจก่อนว่าที่อยู่เซิร์ฟเวอร์ SMTP พอร์ต หรือบัญชีมีการเปลี่ยนแปลงหรือไม่ [FAQ-060] หากลูกค้าเปลี่ยนเมลเซิร์ฟเวอร์ ให้อัปเดตการตั้งค่าในหน้าผู้ดูแลแล้วส่งอีเมลทดสอบ [FAQ-060]" } },
 { q: { zh: "客戶換了郵件伺服器，系統要改哪裡？", en: "The client changed mail servers. What needs updating in the system?", th: "ลูกค้าเปลี่ยนเมลเซิร์ฟเวอร์ ต้องแก้อะไรในระบบ" },
   a: { zh: "要在系統管理頁更新 SMTP 伺服器位址、連接埠與帳號設定【FAQ-060】。更新後寄一封測試信，確認通知信能正常寄出【FAQ-060】。",
        en: "Update the SMTP server address, port and account settings on the system admin page [FAQ-060]. Then send a test email to confirm notifications go out [FAQ-060].",
        th: "ให้อัปเดตที่อยู่เซิร์ฟเวอร์ SMTP พอร์ต และบัญชีในหน้าผู้ดูแลระบบ [FAQ-060] จากนั้นส่งอีเมลทดสอบเพื่อยืนยันว่าส่งการแจ้งเตือนได้ [FAQ-060]" } },
 { q: { zh: "儀表板打開要等很久", en: "Dashboards take ages to open", th: "แดชบอร์ดเปิดนานมาก" },
   a: { zh: "先看儀表板是不是即時連線【FAQ-064】。資料量大的話，建議改用萃取並設定排程更新，同時減少單頁的圖表數量【FAQ-064】。",
        en: "First check whether the dashboard uses a live connection [FAQ-064]. For large data, switch to an extract with a scheduled refresh and reduce the number of charts per page [FAQ-064].",
        th: "ให้ตรวจก่อนว่าแดชบอร์ดใช้การเชื่อมต่อแบบสดหรือไม่ [FAQ-064] ถ้าข้อมูลเยอะ ควรเปลี่ยนเป็น Extract พร้อมตั้งเวลารีเฟรช และลดจำนวนกราฟต่อหน้า [FAQ-064]" } },
 { q: { zh: "升級之後外掛不能用了", en: "A plug-in stopped working after the upgrade", th: "หลังอัปเกรด ปลั๊กอินใช้ไม่ได้" },
   a: { zh: "先確認外掛的版本是否支援新版本【FAQ-068】。不支援的話先停用外掛，再聯繫外掛廠商取得相容的版本【FAQ-068】。",
        en: "Check whether the plug-in version supports the new release [FAQ-068]. If it doesn't, disable it for now and get a compatible version from the plug-in vendor [FAQ-068].",
        th: "ให้ตรวจว่าเวอร์ชันปลั๊กอินรองรับเวอร์ชันใหม่หรือไม่ [FAQ-068] ถ้าไม่รองรับ ให้ปิดปลั๊กอินไว้ก่อน แล้วติดต่อผู้ผลิตเพื่อขอเวอร์ชันที่รองรับ [FAQ-068]" } },
 { q: { zh: "舊的備份要保留幾份？", en: "How many old backups should we keep?", th: "ควรเก็บไฟล์สำรองเก่าไว้กี่ชุด" },
   a: { zh: "至少要保留最近 3 份備份【FAQ-056】。超過 30 天的舊備份可以清理【FAQ-056】。",
        en: "Keep at least the three most recent backups [FAQ-056]. Backups older than 30 days can be deleted [FAQ-056].",
        th: "ควรเก็บไฟล์สำรองล่าสุดไว้อย่างน้อย 3 ชุด [FAQ-056] ไฟล์สำรองที่เก่ากว่า 30 วันลบได้ [FAQ-056]" } },
 { q: { zh: "升級前一週要先做哪些準備？", en: "What should be prepared in the week before an upgrade?", th: "หนึ่งสัปดาห์ก่อนอัปเกรดต้องเตรียมอะไรบ้าง" },
   a: { zh: "升級要提前一週通知使用者，並安排在非上班時段，一般停機約 1～2 小時【FAQ-052】。升級前也要執行系統內建的備份指令並另外匯出設定檔【FAQ-035】。",
        en: "Notify users a week ahead and schedule the upgrade outside working hours; downtime is usually about 1–2 hours [FAQ-052]. Before upgrading, also run the built-in backup command and export the configuration separately [FAQ-035].",
        th: "ต้องแจ้งผู้ใช้ล่วงหน้าหนึ่งสัปดาห์และจัดนอกเวลาทำงาน โดยทั่วไปหยุดระบบประมาณ 1–2 ชั่วโมง [FAQ-052] ก่อนอัปเกรดต้องรันคำสั่งสำรองข้อมูลที่มากับระบบและส่งออกไฟล์การตั้งค่าแยกไว้ด้วย [FAQ-035]" } },
 { q: { zh: "憑證換了之後瀏覽器還是有警告", en: "The browser still warns after the certificate was replaced", th: "เปลี่ยนใบรับรองแล้ว เบราว์เซอร์ยังเตือนอยู่" },
   a: { zh: "請確認新憑證是否包含完整的中繼憑證鏈，並確認更新後有重啟服務【FAQ-040】。",
        en: "Check that the new certificate includes the full intermediate chain and that the service was restarted after the update [FAQ-040].",
        th: "ให้ตรวจว่าใบรับรองใหม่มีสายใบรับรองตัวกลางครบ และได้รีสตาร์ตเซอร์วิสหลังอัปเดตแล้ว [FAQ-040]" } },
 { q: { zh: "可以幫客戶做資料庫效能調校嗎？", en: "Can we tune the client's database performance?", th: "เราช่วยปรับแต่งประสิทธิภาพฐานข้อมูลของลูกค้าได้ไหม" },
   a: { zh: "部門 FAQ 目前沒有這筆記錄。建議到 FAQ 總表新增這個問題，先確認是否在部門的服務範圍內再回覆客戶。",
        en: "The department FAQ has no record of this yet. Please add the question to the FAQ list and confirm whether it's within the department's service scope before replying to the client.",
        th: "FAQ ของแผนกยังไม่มีบันทึกเรื่องนี้ แนะนำให้เพิ่มคำถามนี้ในรายการ FAQ และยืนยันว่าอยู่ในขอบเขตบริการของแผนกหรือไม่ก่อนตอบลูกค้า" }, none: true },
 { q: { zh: "客戶想把系統搬到雲端，要怎麼規劃？", en: "The client wants to move the system to the cloud. How should we plan it?", th: "ลูกค้าอยากย้ายระบบขึ้นคลาวด์ ควรวางแผนอย่างไร" },
   a: { zh: "部門 FAQ 目前沒有這筆記錄。建議到 FAQ 總表新增這個問題，由負責的同事整理搬遷的處理方式。",
        en: "The department FAQ has no record of this yet. Please add the question to the FAQ list so the responsible colleague can write up a migration procedure.",
        th: "FAQ ของแผนกยังไม่มีบันทึกเรื่องนี้ แนะนำให้เพิ่มคำถามนี้ในรายการ FAQ เพื่อให้ผู้รับผิดชอบเขียนขั้นตอนการย้ายระบบ" }, none: true }
);
/* ---- batch 5 ---- */
window.PRESETS.report.items.push(
 { label: { zh: "協銷有取消的活動", en: "A cancelled presales activity", th: "มีกิจกรรม Presales ที่ยกเลิก" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶A,顧問服務&開發,72
客戶B,顧問服務&開發,36
客戶C,顧問服務&開發,20
【協銷進度】客戶,活動,日期,狀態
客戶D,POC 執行,2026-10-08,已取消
客戶E,技術簡報,2026-10-21,已完成`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client A,Consulting & development,72
Client B,Consulting & development,36
Client C,Consulting & development,20
[Presales tracker] Client,Activity,Date,Status
Client D,POC run,2026-10-08,Cancelled
Client E,Technical briefing,2026-10-21,Done`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า A,ที่ปรึกษาและพัฒนา,72
ลูกค้า B,ที่ปรึกษาและพัฒนา,36
ลูกค้า C,ที่ปรึกษาและพัฒนา,20
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า D,ทำ POC,2026-10-08,ยกเลิก
ลูกค้า E,บรรยายเทคนิค,2026-10-21,เสร็จแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶A | 72 | 9.0 |
| 顧問服務&開發 | 客戶B | 36 | 4.5 |
| 顧問服務&開發 | 客戶C | 20 | 2.5 |
| 合計 | — | 128 | 16.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶D POC 執行（10/08，已取消）；客戶E 技術簡報（10/21，已完成）
- **持續追蹤**：無
#### 待主管確認
- 客戶D 的 POC 執行狀態是「已取消」，請確認是否仍要列在月會報告中，或改列說明取消原因。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client A | 72 | 9.0 |
| Consulting & development | Client B | 36 | 4.5 |
| Consulting & development | Client C | 20 | 2.5 |
| Total | — | 128 | 16.0 |
#### Presales progress
- **This month**: Client D POC run (10/08, cancelled); Client E technical briefing (10/21, done)
- **Ongoing**: none
#### For the manager to confirm
- Client D's POC run is marked "cancelled"; please confirm whether it should still appear in the report or be listed with the reason for cancelling.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า A | 72 | 9.0 |
| ที่ปรึกษาและพัฒนา | ลูกค้า B | 36 | 4.5 |
| ที่ปรึกษาและพัฒนา | ลูกค้า C | 20 | 2.5 |
| รวม | — | 128 | 16.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า D ทำ POC (10/08 ยกเลิก); ลูกค้า E บรรยายเทคนิค (10/21 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- ทำ POC ของลูกค้า D มีสถานะ "ยกเลิก" กรุณายืนยันว่ายังต้องแสดงในรายงานหรือไม่ หรือควรระบุเหตุผลที่ยกเลิก` } },

 { label: { zh: "人天需要四捨五入", en: "Person-days need rounding", th: "แมนเดย์ต้องปัดเศษ" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶F,維護,10
客戶G,教育訓練,6
客戶H,顧問服務&開發,30
【協銷進度】客戶,活動,日期,狀態
客戶I,產品展示,2026-10-10,已完成`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client F,Maintenance,10
Client G,Training,6
Client H,Consulting & development,30
[Presales tracker] Client,Activity,Date,Status
Client I,Product demo,2026-10-10,Done`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า F,บำรุงรักษา,10
ลูกค้า G,ฝึกอบรม,6
ลูกค้า H,ที่ปรึกษาและพัฒนา,30
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า I,สาธิตผลิตภัณฑ์,2026-10-10,เสร็จแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶H | 30 | 3.8 |
| 維護 | 客戶F | 10 | 1.3 |
| 教育訓練 | 客戶G | 6 | 0.8 |
| 合計 | — | 46 | 5.8 |
#### 技術銷售・協銷進度
- **本月活動**：客戶I 產品展示（10/10，已完成）
- **持續追蹤**：無
#### 待主管確認
- 人天依規則四捨五入到小數一位（3.75→3.8、1.25→1.3、0.75→0.8），各列相加是 5.9，和用總工時換算的合計 5.8 差 0.1；合計以總工時 46 小時換算為準。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client H | 30 | 3.8 |
| Maintenance | Client F | 10 | 1.3 |
| Training | Client G | 6 | 0.8 |
| Total | — | 46 | 5.8 |
#### Presales progress
- **This month**: Client I product demo (10/10, done)
- **Ongoing**: none
#### For the manager to confirm
- Person-days are rounded to one decimal per the rules (3.75→3.8, 1.25→1.3, 0.75→0.8). The rows add up to 5.9, 0.1 more than the total of 5.8 converted from all 46 hours; the total uses the 46 hours.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า H | 30 | 3.8 |
| บำรุงรักษา | ลูกค้า F | 10 | 1.3 |
| ฝึกอบรม | ลูกค้า G | 6 | 0.8 |
| รวม | — | 46 | 5.8 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า I สาธิตผลิตภัณฑ์ (10/10 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- แมนเดย์ปัดเป็นทศนิยมหนึ่งตำแหน่งตามกฎ (3.75→3.8, 1.25→1.3, 0.75→0.8) ผลรวมของแต่ละแถวคือ 5.9 มากกว่ายอดรวม 5.8 ที่คำนวณจากชั่วโมงทั้งหมด 46 ชั่วโมงอยู่ 0.1 ยอดรวมใช้ค่าจาก 46 ชั่วโมง` } }
);

window.PRESETS.cases.items.push(
 { label: { zh: "規則上線後問題消失", en: "The issue stopped after a rule", th: "ปัญหาหายไปหลังมีกฎ" },
   input: {
    zh: `K01 客戶甲 2026-01 Tableau 升級：授權寫成「10C/5E」
K02 客戶乙 2026-02 Tableau 升級：授權寫成「Core 10 / Explorer 5」
K03 客戶丙 2026-03 保養健檢：（本月起套用授權固定句型）沒有授權問題
K04 客戶丁 2026-06 Tableau 升級：沒有授權問題
K05 客戶戊 2026-09 保養健檢：沒有授權問題`,
    en: `K01 Client A 2026-01 Tableau upgrade: licence written as "10C/5E"
K02 Client B 2026-02 Tableau upgrade: licence written as "Core 10 / Explorer 5"
K03 Client C 2026-03 health check: (fixed licence pattern applied from this month) no licence issue
K04 Client D 2026-06 Tableau upgrade: no licence issue
K05 Client E 2026-09 health check: no licence issue`,
    th: `K01 ลูกค้า A 2026-01 อัปเกรด Tableau: เขียนสิทธิ์ใช้งานว่า "10C/5E"
K02 ลูกค้า B 2026-02 อัปเกรด Tableau: เขียนสิทธิ์ใช้งานว่า "Core 10 / Explorer 5"
K03 ลูกค้า C 2026-03 ตรวจสุขภาพระบบ: (เริ่มใช้รูปแบบประโยคไลเซนส์ตายตัวเดือนนี้) ไม่มีปัญหาไลเซนส์
K04 ลูกค้า D 2026-06 อัปเกรด Tableau: ไม่มีปัญหาไลเซนส์
K05 ลูกค้า E 2026-09 ตรวจสุขภาพระบบ: ไม่มีปัญหาไลเซนส์` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 授權寫法不一致 | K01、K02 | 2 | 已涵蓋（授權固定句型）；兩次都發生在 2026-03 套用句型之前，之後 K03～K05 都沒有再發生 |
#### 值得考慮寫進規則
- 授權固定句型看起來有效，不需要新增規則；建議下次回顧時繼續觀察。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Inconsistent licence wording | K01, K02 | 2 | Covered (fixed licence pattern); both happened before the pattern was applied in 2026-03, and K03–K05 had no recurrence |
#### Worth adding to the rules
- The fixed licence pattern appears to be working; no new rule is needed. Keep watching at the next review.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| เขียนสิทธิ์ใช้งานไม่เหมือนกัน | K01, K02 | 2 | ครอบคลุมแล้ว (รูปแบบประโยคไลเซนส์ตายตัว) ทั้งสองครั้งเกิดก่อนเริ่มใช้รูปแบบในเดือน 2026-03 และ K03–K05 ไม่เกิดอีก |
#### ควรพิจารณาเพิ่มเป็นกฎ
- รูปแบบประโยคไลเซนส์ดูได้ผล ไม่ต้องเพิ่มกฎใหม่ ให้ติดตามต่อในการทบทวนครั้งหน้า
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "大綱頁碼對不上", en: "Outline page numbers don't match", th: "เลขหน้าในสารบัญไม่ตรง" },
   input: {
    zh: `L01 客戶甲 2026-04 Tableau 升級：細項大綱的頁碼和實際頁數對不上
L02 客戶乙 2026-05 保養健檢：細項大綱的頁碼和實際頁數對不上
L03 客戶丙 2026-07 Tableau 升級：細項大綱的頁碼和實際頁數對不上
L04 客戶丁 2026-09 保養健檢：返回大綱箭頭蓋到標題`,
    en: `L01 Client A 2026-04 Tableau upgrade: page numbers in the detailed outline don't match the actual pages
L02 Client B 2026-05 health check: page numbers in the detailed outline don't match the actual pages
L03 Client C 2026-07 Tableau upgrade: page numbers in the detailed outline don't match the actual pages
L04 Client D 2026-09 health check: back-to-contents arrow overlaps the title`,
    th: `L01 ลูกค้า A 2026-04 อัปเกรด Tableau: เลขหน้าในสารบัญรายละเอียดไม่ตรงกับหน้าจริง
L02 ลูกค้า B 2026-05 ตรวจสุขภาพระบบ: เลขหน้าในสารบัญรายละเอียดไม่ตรงกับหน้าจริง
L03 ลูกค้า C 2026-07 อัปเกรด Tableau: เลขหน้าในสารบัญรายละเอียดไม่ตรงกับหน้าจริง
L04 ลูกค้า D 2026-09 ตรวจสุขภาพระบบ: ลูกศรกลับสารบัญทับหัวข้อ` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 細項大綱頁碼和實際頁數對不上 | L01、L02、L03 | 3 | 部分涵蓋（細項大綱預設必要，但節錄中未見頁碼檢查）；升級與保養案都有發生 |
| 返回大綱箭頭蓋到標題 | L04 | 1 | 已涵蓋（已記錄的陷阱）；單次，不算模式 |
#### 值得考慮寫進規則
- 產出的最後一步自動更新細項大綱的頁碼，並和實際頁數比對，不一致就提醒使用者。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Outline page numbers don't match the actual pages | L01, L02, L03 | 3 | Partly covered (the detailed outline is required by default, but the excerpt has no page-number check); happens in both upgrades and health checks |
| Back-to-contents arrow overlaps the title | L04 | 1 | Covered (recorded pitfall); single case, not a pattern |
#### Worth adding to the rules
- As the last step of output, automatically refresh the outline's page numbers and compare them with the actual pages, alerting the user if they differ.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| เลขหน้าในสารบัญรายละเอียดไม่ตรงกับหน้าจริง | L01, L02, L03 | 3 | ครอบคลุมบางส่วน (สารบัญรายละเอียดจำเป็นโดยค่าเริ่มต้น แต่ไม่พบการตรวจเลขหน้าในข้อความที่ยกมา) เกิดทั้งงานอัปเกรดและงานตรวจสุขภาพ |
| ลูกศรกลับสารบัญทับหัวข้อ | L04 | 1 | ครอบคลุมแล้ว (บันทึกเป็นข้อควรระวัง) ครั้งเดียว ไม่นับเป็นรูปแบบ |
#### ควรพิจารณาเพิ่มเป็นกฎ
- ขั้นตอนสุดท้ายของการส่งออก ให้อัปเดตเลขหน้าในสารบัญรายละเอียดอัตโนมัติและเทียบกับหน้าจริง ถ้าไม่ตรงให้แจ้งผู้ใช้
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } }
);

window.PRESETS.gov.items.push(
 { label: { zh: "要求刪除個資", en: "Personal data deletion request", th: "ขอให้ลบข้อมูลส่วนบุคคล" },
   input: {
    zh: `依個資法，禾森貿易股份有限公司的鄭雅文小姐要求刪除她在系統中的個人資料。
她的身分證字號是 C223344556，聯絡信箱 yawen.cheng@example.com，請於 14 天內回覆處理結果。`,
    en: `Under data-protection law, Ms. Grace Cheng from Hesen Trading Co., Ltd. asks us to delete her personal data from the system.
Her ID is C223344556 and her email is grace.cheng@example.com. Please reply with the outcome within 14 days.`,
    th: `คุณมาลี ศรีวงศ์ จากบริษัท เหอเซินเทรดดิ้ง จำกัด ขอให้ลบข้อมูลส่วนบุคคลของเธอออกจากระบบตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
เลขประจำตัว 3-4455-66778-89-0 อีเมล malee.s@example.com กรุณาแจ้งผลภายใน 14 วัน` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕依個資法要求刪除她在系統中的個人資料。
- 期限：14 天內回覆處理結果。
- 下一步：先以〔身分證A〕確認申請人身分，依公司的個資刪除流程處理並留下紀錄，完成後透過〔Email A〕回覆。`,
    en: `- Issue: [Person A] from [Client A] asks, under data-protection law, for her personal data to be deleted from the system.
- Deadline: reply with the outcome within 14 days.
- Next step: verify the requester's identity with [ID A], follow the company's personal-data deletion process and keep a record, then reply via [Email A].`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] ขอให้ลบข้อมูลส่วนบุคคลของเธอออกจากระบบตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
- กำหนดเวลา: แจ้งผลภายใน 14 วัน
- ขั้นตอนถัดไป: ยืนยันตัวตนผู้ขอด้วย [เลขบัตร A] ดำเนินการตามขั้นตอนลบข้อมูลส่วนบุคคลของบริษัทพร้อมเก็บบันทึก แล้วตอบกลับทาง [อีเมล A]` } },

 { label: { zh: "合作夥伴轉介新客戶", en: "Partner referral", th: "พาร์ตเนอร์แนะนำลูกค้าใหม่" },
   input: {
    zh: `我們的合作夥伴：序恆整合有限公司，介紹了新客戶晴田食品股份有限公司，窗口是孫立人經理，手機 0966-111-222。
希望下週安排一次產品說明會。`,
    en: `Our partner Xuheng Integration Ltd. referred a new client, Qingtian Foods Co., Ltd. The contact is Mr. Leo Sun, mobile 0966-111-222.
They'd like a product briefing next week.`,
    th: `พาร์ตเนอร์ของเรา บริษัท ซวี่เหิงอินทิเกรชัน จำกัด แนะนำลูกค้าใหม่ บริษัท ชิงเถียนฟู้ดส์ จำกัด ผู้ติดต่อคือคุณสมศักดิ์ ใจเย็น โทร 096-111-2222
อยากนัดบรรยายผลิตภัณฑ์สัปดาห์หน้า` },
   output: {
    zh: `- 問題：合作夥伴〔客戶A〕介紹新客戶〔客戶B〕，對方希望下週安排產品說明會。
- 期限：下週。
- 下一步：透過〔電話A〕聯絡〔客戶B〕的窗口〔人員A〕，確認說明會的時間與參加人數，並把安排結果告知〔客戶A〕。`,
    en: `- Issue: partner [Client A] referred a new client, [Client B], who would like a product briefing next week.
- Deadline: next week.
- Next step: contact [Person A] at [Client B] via [Phone A] to confirm the time and number of attendees, then let [Client A] know the arrangement.`,
    th: `- ปัญหา: พาร์ตเนอร์ [ลูกค้า A] แนะนำลูกค้าใหม่ [ลูกค้า B] ซึ่งอยากนัดบรรยายผลิตภัณฑ์สัปดาห์หน้า
- กำหนดเวลา: สัปดาห์หน้า
- ขั้นตอนถัดไป: ติดต่อ [บุคคล A] ของ [ลูกค้า B] ทาง [โทรศัพท์ A] เพื่อยืนยันเวลาและจำนวนผู้เข้าร่วม แล้วแจ้งผลการนัดหมายให้ [ลูกค้า A] ทราบ` } }
);
/* ---- batch 6 ---- */
window.PRESETS.report.items.push(
 { label: { zh: "日期疑似打錯", en: "A date that looks like a typo", th: "วันที่ที่อาจพิมพ์ผิด" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶A,維護,24
客戶B,顧問服務&開發,16
【協銷進度】客戶,活動,日期,狀態
客戶C,產品展示,2026-01-15,已完成
客戶D,技術簡報,2026-10-28,已完成`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client A,Maintenance,24
Client B,Consulting & development,16
[Presales tracker] Client,Activity,Date,Status
Client C,Product demo,2026-01-15,Done
Client D,Technical briefing,2026-10-28,Done`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า A,บำรุงรักษา,24
ลูกค้า B,ที่ปรึกษาและพัฒนา,16
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า C,สาธิตผลิตภัณฑ์,2026-01-15,เสร็จแล้ว
ลูกค้า D,บรรยายเทคนิค,2026-10-28,เสร็จแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶B | 16 | 2.0 |
| 維護 | 客戶A | 24 | 3.0 |
| 合計 | — | 40 | 5.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶D 技術簡報（10/28，已完成）
- **持續追蹤**：客戶C 產品展示（1/15，已完成）
#### 待主管確認
- 客戶C 的產品展示日期是 2026-01-15，狀態卻是剛完成；如果其實是 10/15 的誤植，就應列入本月活動。目前依資料列在持續追蹤，請確認正確日期。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client B | 16 | 2.0 |
| Maintenance | Client A | 24 | 3.0 |
| Total | — | 40 | 5.0 |
#### Presales progress
- **This month**: Client D technical briefing (10/28, done)
- **Ongoing**: Client C product demo (1/15, done)
#### For the manager to confirm
- Client C's product demo is dated 2026-01-15 yet marked done; if it should be 10/15, it belongs under This month. It is listed under Ongoing per the data for now; please confirm the date.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า B | 16 | 2.0 |
| บำรุงรักษา | ลูกค้า A | 24 | 3.0 |
| รวม | — | 40 | 5.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า D บรรยายเทคนิค (10/28 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ลูกค้า C สาธิตผลิตภัณฑ์ (1/15 เสร็จแล้ว)
#### รายการให้หัวหน้ายืนยัน
- สาธิตผลิตภัณฑ์ของลูกค้า C ลงวันที่ 2026-01-15 แต่มีสถานะเสร็จแล้ว หากที่จริงคือ 10/15 ควรอยู่ในกิจกรรมเดือนนี้ ตอนนี้จัดไว้ในติดตามต่อเนื่องตามข้อมูล กรุณายืนยันวันที่ที่ถูกต้อง` } },

 { label: { zh: "工時明顯偏高", en: "Unusually high hours", th: "ชั่วโมงงานสูงผิดปกติ" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶E,維護,160
客戶F,維護,12
客戶G,教育訓練,8
【協銷進度】客戶,活動,日期,狀態
客戶H,報價追蹤,2026-10-05,已完成`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client E,Maintenance,160
Client F,Maintenance,12
Client G,Training,8
[Presales tracker] Client,Activity,Date,Status
Client H,Quote follow-up,2026-10-05,Done`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า E,บำรุงรักษา,160
ลูกค้า F,บำรุงรักษา,12
ลูกค้า G,ฝึกอบรม,8
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า H,ติดตามใบเสนอราคา,2026-10-05,เสร็จแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 維護 | 客戶E | 160 | 20.0 |
| 維護 | 客戶F | 12 | 1.5 |
| 教育訓練 | 客戶G | 8 | 1.0 |
| 合計 | — | 180 | 22.5 |
#### 技術銷售・協銷進度
- **本月活動**：客戶H 報價追蹤（10/05，已完成）
- **持續追蹤**：無
#### 待主管確認
- 客戶E 的維護工時是 160 小時（20.0 人天），遠高於另一筆維護案的 12 小時，請確認是否輸入錯誤，或確實是大型維護案。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Maintenance | Client E | 160 | 20.0 |
| Maintenance | Client F | 12 | 1.5 |
| Training | Client G | 8 | 1.0 |
| Total | — | 180 | 22.5 |
#### Presales progress
- **This month**: Client H quote follow-up (10/05, done)
- **Ongoing**: none
#### For the manager to confirm
- Client E's maintenance hours are 160 (20.0 person-days), far above the other maintenance entry of 12 hours; please confirm whether it's a typo or a genuinely large maintenance job.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| บำรุงรักษา | ลูกค้า E | 160 | 20.0 |
| บำรุงรักษา | ลูกค้า F | 12 | 1.5 |
| ฝึกอบรม | ลูกค้า G | 8 | 1.0 |
| รวม | — | 180 | 22.5 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า H ติดตามใบเสนอราคา (10/05 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- ชั่วโมงบำรุงรักษาของลูกค้า E คือ 160 ชั่วโมง (20.0 แมนเดย์) สูงกว่างานบำรุงรักษาอีกรายการที่ 12 ชั่วโมงมาก กรุณายืนยันว่ากรอกผิดหรือเป็นงานบำรุงรักษาขนาดใหญ่จริง` } }
);

window.PRESETS.cases.items.push(
 { label: { zh: "同一案一次出現多個問題", en: "Several issues in one project", th: "หลายปัญหาในโปรเจกต์เดียว" },
   input: {
    zh: `M01 客戶甲 2026-10 Tableau 升級：服務狀態截圖只截到一半
M02 客戶甲 2026-10 Tableau 升級：範本殘留上一案的舊截圖
M03 客戶甲 2026-10 Tableau 升級：返回大綱箭頭蓋到標題
M04 客戶乙 2026-10 保養健檢：服務狀態截圖只截到一半`,
    en: `M01 Client A 2026-10 Tableau upgrade: service-status screenshot only half captured
M02 Client A 2026-10 Tableau upgrade: old screenshot from the previous project left in the template
M03 Client A 2026-10 Tableau upgrade: back-to-contents arrow overlaps the title
M04 Client B 2026-10 health check: service-status screenshot only half captured`,
    th: `M01 ลูกค้า A 2026-10 อัปเกรด Tableau: ภาพสถานะเซอร์วิสจับได้แค่ครึ่งเดียว
M02 ลูกค้า A 2026-10 อัปเกรด Tableau: ภาพเก่าจากโปรเจกต์ก่อนค้างอยู่ในเทมเพลต
M03 ลูกค้า A 2026-10 อัปเกรด Tableau: ลูกศรกลับสารบัญทับหัวข้อ
M04 ลูกค้า B 2026-10 ตรวจสุขภาพระบบ: ภาพสถานะเซอร์วิสจับได้แค่ครึ่งเดียว` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 服務狀態截圖不完整 | M01、M04 | 2 | 未涵蓋（節錄中未見截圖完整性的檢查） |
| 範本殘留舊截圖 | M02 | 1 | 已涵蓋（已記錄的陷阱）；單次，不算模式 |
| 返回大綱箭頭蓋到標題 | M03 | 1 | 已涵蓋（已記錄的陷阱）；單次，不算模式 |
#### 值得考慮寫進規則
- 把完整的服務狀態畫面列為必拍，並在產出前檢查截圖是否完整。
- 客戶甲 10 月的升級案一次出現 3 個問題，其中 2 個是已記錄的陷阱，建議回頭確認這次產出是否略過了既有的檢查步驟。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Service-status screenshot incomplete | M01, M04 | 2 | Not covered (no screenshot-completeness check in the excerpt) |
| Old screenshot left in the template | M02 | 1 | Covered (recorded pitfall); single case, not a pattern |
| Back-to-contents arrow overlaps the title | M03 | 1 | Covered (recorded pitfall); single case, not a pattern |
#### Worth adding to the rules
- Make a complete service-status screen a required shot and check completeness before output.
- Client A's October upgrade had three issues at once, two of them recorded pitfalls; check whether this output skipped the existing checks.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ภาพสถานะเซอร์วิสไม่ครบ | M01, M04 | 2 | ยังไม่ครอบคลุม (ไม่พบการตรวจความครบของภาพในข้อความที่ยกมา) |
| ภาพเก่าค้างในเทมเพลต | M02 | 1 | ครอบคลุมแล้ว (บันทึกเป็นข้อควรระวัง) ครั้งเดียว ไม่นับเป็นรูปแบบ |
| ลูกศรกลับสารบัญทับหัวข้อ | M03 | 1 | ครอบคลุมแล้ว (บันทึกเป็นข้อควรระวัง) ครั้งเดียว ไม่นับเป็นรูปแบบ |
#### ควรพิจารณาเพิ่มเป็นกฎ
- กำหนดให้หน้าจอสถานะเซอร์วิสแบบเต็มเป็นภาพบังคับ และตรวจความครบของภาพก่อนส่งออก
- งานอัปเกรดเดือนตุลาคมของลูกค้า A มี 3 ปัญหาในครั้งเดียว 2 ข้อเป็นข้อควรระวังที่บันทึกไว้แล้ว ควรตรวจว่าการส่งออกครั้งนี้ข้ามขั้นตอนตรวจที่มีอยู่หรือไม่
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "保養案的內容不夠具體", en: "Health-check content not specific enough", th: "เนื้อหางานตรวจสุขภาพไม่ชัดเจนพอ" },
   input: {
    zh: `N01 客戶乙 2026-03 保養健檢：磁碟用量沒有和上次保養比較
N02 客戶丙 2026-05 保養健檢：磁碟用量沒有和上次保養比較
N03 客戶丁 2026-08 保養健檢：磁碟用量沒有和上次保養比較
N04 客戶戊 2026-09 保養健檢：建議事項只寫「持續觀察」，沒有具體動作
N05 客戶甲 2026-10 保養健檢：建議事項只寫「持續觀察」，沒有具體動作`,
    en: `N01 Client B 2026-03 health check: disk usage not compared with the previous health check
N02 Client C 2026-05 health check: disk usage not compared with the previous health check
N03 Client D 2026-08 health check: disk usage not compared with the previous health check
N04 Client E 2026-09 health check: recommendations only say "keep monitoring", no concrete action
N05 Client A 2026-10 health check: recommendations only say "keep monitoring", no concrete action`,
    th: `N01 ลูกค้า B 2026-03 ตรวจสุขภาพระบบ: ไม่ได้เทียบการใช้ดิสก์กับการตรวจครั้งก่อน
N02 ลูกค้า C 2026-05 ตรวจสุขภาพระบบ: ไม่ได้เทียบการใช้ดิสก์กับการตรวจครั้งก่อน
N03 ลูกค้า D 2026-08 ตรวจสุขภาพระบบ: ไม่ได้เทียบการใช้ดิสก์กับการตรวจครั้งก่อน
N04 ลูกค้า E 2026-09 ตรวจสุขภาพระบบ: ข้อเสนอแนะเขียนแค่ "เฝ้าติดตามต่อ" ไม่มีสิ่งที่ต้องทำชัดเจน
N05 ลูกค้า A 2026-10 ตรวจสุขภาพระบบ: ข้อเสนอแนะเขียนแค่ "เฝ้าติดตามต่อ" ไม่มีสิ่งที่ต้องทำชัดเจน` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 磁碟用量沒有和上次保養比較 | N01、N02、N03 | 3 | 未涵蓋（節錄中未見跨次比較的要求） |
| 建議事項只寫「持續觀察」 | N04、N05 | 2 | 未涵蓋（節錄中未見建議事項的寫法規範） |
#### 值得考慮寫進規則
- 保養案加入「與上次保養比較」段落，至少列出磁碟用量的變化。
- 建議事項要寫出具體動作與建議時程，避免只寫「持續觀察」。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Disk usage not compared with the previous health check | N01, N02, N03 | 3 | Not covered (no comparison requirement in the excerpt) |
| Recommendations only say "keep monitoring" | N04, N05 | 2 | Not covered (no rule on writing recommendations in the excerpt) |
#### Worth adding to the rules
- Add a "compared with the previous health check" section, listing at least the change in disk usage.
- Recommendations should state a concrete action and suggested timing rather than just "keep monitoring".
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ไม่ได้เทียบการใช้ดิสก์กับการตรวจครั้งก่อน | N01, N02, N03 | 3 | ยังไม่ครอบคลุม (ไม่พบข้อกำหนดเรื่องการเทียบในข้อความที่ยกมา) |
| ข้อเสนอแนะเขียนแค่ "เฝ้าติดตามต่อ" | N04, N05 | 2 | ยังไม่ครอบคลุม (ไม่พบมาตรฐานการเขียนข้อเสนอแนะในข้อความที่ยกมา) |
#### ควรพิจารณาเพิ่มเป็นกฎ
- เพิ่มส่วน "เทียบกับการตรวจครั้งก่อน" ในงานตรวจสุขภาพ อย่างน้อยแสดงการเปลี่ยนแปลงของการใช้ดิสก์
- ข้อเสนอแนะต้องระบุสิ่งที่ต้องทำและช่วงเวลาที่แนะนำ ไม่ใช่เขียนแค่ "เฝ้าติดตามต่อ"
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } }
);

window.PRESETS.gov.items.push(
 { label: { zh: "遠端連線安排", en: "Remote access arrangement", th: "นัดเชื่อมต่อระยะไกล" },
   input: {
    zh: `岳崧鋼鐵股份有限公司的楊家豪先生同意明天下午 2 點開放遠端連線，連線帳號會用簡訊傳到 0977-333-444。
連線完成後請把報告寄到 jiahao.yang@example.com。`,
    en: `Mr. Kevin Yang from Yuesong Steel Co., Ltd. agreed to open remote access tomorrow at 2 p.m.; the login details will be texted to 0977-333-444.
After the session, please email the report to kevin.yang@example.com.`,
    th: `คุณอนุชา เพ็ชรดี จากบริษัท เยว่ซงสตีล จำกัด อนุญาตให้เชื่อมต่อระยะไกลพรุ่งนี้บ่ายสองโมง บัญชีเชื่อมต่อจะส่งทาง SMS ไปที่ 097-333-4444
เสร็จแล้วกรุณาส่งรายงานไปที่ anucha.p@example.com` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕同意明天下午 2 點開放遠端連線，連線帳號會用簡訊傳到〔電話A〕。
- 期限：明天下午 2 點。
- 下一步：連線前確認已收到帳號並準備好作業清單；完成後把報告寄到〔Email A〕。`,
    en: `- Issue: [Person A] from [Client A] agreed to open remote access tomorrow at 2 p.m.; login details will be texted to [Phone A].
- Deadline: tomorrow at 2 p.m.
- Next step: before connecting, confirm the login details arrived and prepare the task list; afterwards, email the report to [Email A].`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] อนุญาตให้เชื่อมต่อระยะไกลพรุ่งนี้บ่ายสองโมง บัญชีเชื่อมต่อจะส่งทาง SMS ไปที่ [โทรศัพท์ A]
- กำหนดเวลา: พรุ่งนี้บ่ายสองโมง
- ขั้นตอนถัดไป: ก่อนเชื่อมต่อให้ยืนยันว่าได้รับบัญชีแล้วและเตรียมรายการงาน เสร็จแล้วส่งรายงานไปที่ [อีเมล A]` } },

 { label: { zh: "客訴升級", en: "Escalated complaint", th: "ข้อร้องเรียนที่ยกระดับ" },
   input: {
    zh: `恆翊航勤股份有限公司資訊處林志偉協理來信抱怨：同一個問題已經回報三次還沒解決，要求明天中午前給正式說明。
他的信箱是 zhiwei.lin@example.com，秘書電話 0938-777-888。`,
    en: `Mr. David Lin, IT director at Hengyi Aviation Services Co., Ltd., complained by email: the same issue has been reported three times and is still unresolved. He wants a formal explanation by noon tomorrow.
His email is david.lin@example.com; his assistant's phone is 0938-777-888.`,
    th: `คุณประวิทย์ แก้วใส จากบริษัท เหิงอี้เอวิเอชั่นเซอร์วิส จำกัด ผู้อำนวยการฝ่ายไอที ร้องเรียนทางอีเมลว่าปัญหาเดิมแจ้งไปสามครั้งแล้วยังไม่ได้แก้ ต้องการคำชี้แจงอย่างเป็นทางการภายในเที่ยงวันพรุ่งนี้
อีเมลของเขาคือ prawit.k@example.com เบอร์เลขานุการ 093-777-8888` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕抱怨同一個問題已回報三次仍未解決，要求正式說明。
- 期限：明天中午前提供正式說明。
- 下一步：整理三次回報的處理紀錄與目前進度，由主管確認後把正式說明寄到〔Email A〕，必要時先透過秘書電話〔電話A〕聯繫。`,
    en: `- Issue: [Person A] from [Client A] complains the same issue has been reported three times and is still unresolved, and wants a formal explanation.
- Deadline: noon tomorrow.
- Next step: compile the handling record and current status for all three reports, have a manager review it, send the formal explanation to [Email A], and if needed call the assistant at [Phone A] first.`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] ร้องเรียนว่าปัญหาเดิมแจ้งไปสามครั้งแล้วยังไม่ได้แก้ และต้องการคำชี้แจงอย่างเป็นทางการ
- กำหนดเวลา: ภายในเที่ยงวันพรุ่งนี้
- ขั้นตอนถัดไป: รวบรวมบันทึกการดำเนินการและสถานะปัจจุบันของทั้งสามครั้ง ให้หัวหน้าตรวจ แล้วส่งคำชี้แจงไปที่ [อีเมล A] หากจำเป็นให้โทรหาเลขานุการที่ [โทรศัพท์ A] ก่อน` } }
);

window.PRESETS.kb.items.push(
 { q: { zh: "儀表板跑很慢，要怎麼改善？", en: "The dashboard is slow. How can we speed it up?", th: "แดชบอร์ดช้า ต้องแก้อย่างไร" },
   a: { zh: "先確認是不是即時連線【FAQ-064】。資料量大的話改用萃取並設定排程更新，同時減少單頁的圖表數量【FAQ-064】。",
        en: "First check whether it uses a live connection [FAQ-064]. For large data, switch to an extract with a scheduled refresh and reduce the number of charts per page [FAQ-064].",
        th: "ให้ตรวจก่อนว่าใช้การเชื่อมต่อแบบสดหรือไม่ [FAQ-064] ถ้าข้อมูลเยอะให้เปลี่ยนเป็น Extract พร้อมตั้งเวลารีเฟรช และลดจำนวนกราฟต่อหน้า [FAQ-064]" } },
 { q: { zh: "要怎麼幫客戶開新帳號？", en: "How do we create a new account for the client?", th: "จะสร้างบัญชีใหม่ให้ลูกค้าอย่างไร" },
   a: { zh: "新帳號由客戶自己的系統管理員在管理頁新增【FAQ-048】。授權數不夠的話，要先購買授權，由業務窗口報價【FAQ-048】。",
        en: "New accounts are added by the client's own system administrator on the admin page [FAQ-048]. If there aren't enough licences, they need to buy more first, quoted by the sales contact [FAQ-048].",
        th: "บัญชีใหม่ให้ผู้ดูแลระบบของลูกค้าเพิ่มเองในหน้าผู้ดูแล [FAQ-048] ถ้าไลเซนส์ไม่พอ ต้องซื้อเพิ่มก่อน โดยฝ่ายขายเป็นผู้เสนอราคา [FAQ-048]" } },
 { q: { zh: "授權數不夠，還能再加人嗎？", en: "We're out of licences. Can we still add people?", th: "ไลเซนส์ไม่พอ ยังเพิ่มคนได้ไหม" },
   a: { zh: "授權數不足時，要先購買授權才能新增使用者，報價由業務窗口提供【FAQ-048】。",
        en: "When licences run short, more must be bought before adding users; the sales contact provides the quote [FAQ-048].",
        th: "เมื่อไลเซนส์ไม่พอ ต้องซื้อไลเซนส์เพิ่มก่อนจึงจะเพิ่มผู้ใช้ได้ โดยฝ่ายขายเป็นผู้เสนอราคา [FAQ-048]" } },
 { q: { zh: "升級前要提前多久通知使用者？", en: "How far ahead should users be told about an upgrade?", th: "ต้องแจ้งผู้ใช้ล่วงหน้านานเท่าไรก่อนอัปเกรด" },
   a: { zh: "建議提前一週通知使用者，並把升級安排在非上班時段【FAQ-052】。",
        en: "Notify users a week ahead and schedule the upgrade outside working hours [FAQ-052].",
        th: "ควรแจ้งผู้ใช้ล่วงหน้าหนึ่งสัปดาห์ และจัดการอัปเกรดนอกเวลาทำงาน [FAQ-052]" } },
 { q: { zh: "使用者帳號被鎖住了怎麼辦？", en: "A user's account is locked. What do we do?", th: "บัญชีผู้ใช้ถูกล็อก ต้องทำอย่างไร" },
   a: { zh: "部門 FAQ 目前沒有這筆記錄。建議到 FAQ 總表新增這個問題，由負責的同事補上解鎖的處理方式。",
        en: "The department FAQ has no record of this yet. Please add the question to the FAQ list so the responsible colleague can fill in the unlock procedure.",
        th: "FAQ ของแผนกยังไม่มีบันทึกเรื่องนี้ แนะนำให้เพิ่มคำถามนี้ในรายการ FAQ เพื่อให้ผู้รับผิดชอบเติมวิธีปลดล็อก" }, none: true }
);
/* ---- batch 7 ---- */
window.PRESETS.report.items.push(
 { label: { zh: "協銷狀態寫法不統一", en: "Inconsistent status wording", th: "เขียนสถานะไม่เหมือนกัน" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶A,維護,8
客戶B,顧問服務&開發,24
【協銷進度】客戶,活動,日期,狀態
客戶C,產品展示,2026-10-03,完成
客戶D,技術簡報,2026-10-17,已完成
客戶E,POC 規劃,2026-10-25,done`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client A,Maintenance,8
Client B,Consulting & development,24
[Presales tracker] Client,Activity,Date,Status
Client C,Product demo,2026-10-03,Complete
Client D,Technical briefing,2026-10-17,Done
Client E,POC planning,2026-10-25,finished`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า A,บำรุงรักษา,8
ลูกค้า B,ที่ปรึกษาและพัฒนา,24
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า C,สาธิตผลิตภัณฑ์,2026-10-03,เสร็จ
ลูกค้า D,บรรยายเทคนิค,2026-10-17,เสร็จแล้ว
ลูกค้า E,วางแผน POC,2026-10-25,done` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶B | 24 | 3.0 |
| 維護 | 客戶A | 8 | 1.0 |
| 合計 | — | 32 | 4.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶C 產品展示（10/03，完成）；客戶D 技術簡報（10/17，已完成）；客戶E POC 規劃（10/25，done）
- **持續追蹤**：無
#### 待主管確認
- 協銷狀態有「完成」「已完成」「done」三種寫法，報告照原文呈現；建議統一用詞，方便之後統計。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client B | 24 | 3.0 |
| Maintenance | Client A | 8 | 1.0 |
| Total | — | 32 | 4.0 |
#### Presales progress
- **This month**: Client C product demo (10/03, complete); Client D technical briefing (10/17, done); Client E POC planning (10/25, finished)
- **Ongoing**: none
#### For the manager to confirm
- Presales status is written three ways ("Complete", "Done", "finished"); the report keeps the original wording. Consider standardising it to make later counts easier.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า B | 24 | 3.0 |
| บำรุงรักษา | ลูกค้า A | 8 | 1.0 |
| รวม | — | 32 | 4.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า C สาธิตผลิตภัณฑ์ (10/03 เสร็จ); ลูกค้า D บรรยายเทคนิค (10/17 เสร็จแล้ว); ลูกค้า E วางแผน POC (10/25 done)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- สถานะ Presales เขียนไว้ 3 แบบ ("เสร็จ" "เสร็จแล้ว" "done") รายงานแสดงตามต้นฉบับ ควรใช้คำเดียวกันเพื่อให้นับสถิติภายหลังได้ง่าย` } },

 { label: { zh: "有一筆工時是 0", en: "A zero-hour entry", th: "มีรายการ 0 ชั่วโมง" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶F,維護,0
客戶G,顧問服務&開發,40
客戶H,教育訓練,16
【協銷進度】客戶,活動,日期,狀態
客戶I,技術簡報,2026-10-19,已完成`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client F,Maintenance,0
Client G,Consulting & development,40
Client H,Training,16
[Presales tracker] Client,Activity,Date,Status
Client I,Technical briefing,2026-10-19,Done`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า F,บำรุงรักษา,0
ลูกค้า G,ที่ปรึกษาและพัฒนา,40
ลูกค้า H,ฝึกอบรม,16
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า I,บรรยายเทคนิค,2026-10-19,เสร็จแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶G | 40 | 5.0 |
| 維護 | 客戶F | 0 | 0.0 |
| 教育訓練 | 客戶H | 16 | 2.0 |
| 合計 | — | 56 | 7.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶I 技術簡報（10/19，已完成）
- **持續追蹤**：無
#### 待主管確認
- 客戶F 的維護工時是 0 小時，請確認是本月沒有作業、這列可以刪除，還是漏填了時數。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client G | 40 | 5.0 |
| Maintenance | Client F | 0 | 0.0 |
| Training | Client H | 16 | 2.0 |
| Total | — | 56 | 7.0 |
#### Presales progress
- **This month**: Client I technical briefing (10/19, done)
- **Ongoing**: none
#### For the manager to confirm
- Client F's maintenance entry is 0 hours; please confirm whether there was no work this month and the row can be removed, or the hours are missing.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า G | 40 | 5.0 |
| บำรุงรักษา | ลูกค้า F | 0 | 0.0 |
| ฝึกอบรม | ลูกค้า H | 16 | 2.0 |
| รวม | — | 56 | 7.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า I บรรยายเทคนิค (10/19 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- งานบำรุงรักษาของลูกค้า F มี 0 ชั่วโมง กรุณายืนยันว่าเดือนนี้ไม่มีงานและลบแถวนี้ได้ หรือยังไม่ได้กรอกชั่วโมง` } },

 { label: { zh: "專案類型寫法不同", en: "Project type spelled two ways", th: "เขียนประเภทโครงการสองแบบ" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶J,顧問服務&開發,32
客戶K,顧問服務與開發,24
客戶L,維護,8
【協銷進度】客戶,活動,日期,狀態
客戶M,產品展示,2026-10-09,已完成`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client J,Consulting & development,32
Client K,Consulting and development,24
Client L,Maintenance,8
[Presales tracker] Client,Activity,Date,Status
Client M,Product demo,2026-10-09,Done`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า J,ที่ปรึกษาและพัฒนา,32
ลูกค้า K,ที่ปรึกษา/พัฒนา,24
ลูกค้า L,บำรุงรักษา,8
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า M,สาธิตผลิตภัณฑ์,2026-10-09,เสร็จแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶J | 32 | 4.0 |
| 顧問服務與開發 | 客戶K | 24 | 3.0 |
| 維護 | 客戶L | 8 | 1.0 |
| 合計 | — | 64 | 8.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶M 產品展示（10/09，已完成）
- **持續追蹤**：無
#### 待主管確認
- 客戶K 的專案類型寫成「顧問服務與開發」，和「顧問服務&開發」寫法不同，表格照原文分開列出；若是同一類，合計為 56 小時、7.0 人天，請確認並統一寫法。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client J | 32 | 4.0 |
| Consulting and development | Client K | 24 | 3.0 |
| Maintenance | Client L | 8 | 1.0 |
| Total | — | 64 | 8.0 |
#### Presales progress
- **This month**: Client M product demo (10/09, done)
- **Ongoing**: none
#### For the manager to confirm
- Client K's project type is written "Consulting and development", unlike "Consulting & development", so the table lists them separately as written. If they are the same category, together they come to 56 hours, 7.0 person-days; please confirm and standardise the name.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า J | 32 | 4.0 |
| ที่ปรึกษา/พัฒนา | ลูกค้า K | 24 | 3.0 |
| บำรุงรักษา | ลูกค้า L | 8 | 1.0 |
| รวม | — | 64 | 8.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า M สาธิตผลิตภัณฑ์ (10/09 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- ประเภทโครงการของลูกค้า K เขียนว่า "ที่ปรึกษา/พัฒนา" ต่างจาก "ที่ปรึกษาและพัฒนา" ตารางจึงแยกแสดงตามต้นฉบับ หากเป็นประเภทเดียวกัน รวมเป็น 56 ชั่วโมง 7.0 แมนเดย์ กรุณายืนยันและใช้ชื่อเดียวกัน` } }
);

window.PRESETS.cases.items.push(
 { label: { zh: "客戶反映看不懂", en: "Clients find the deck hard to follow", th: "ลูกค้าอ่านไม่เข้าใจ" },
   input: {
    zh: `O01 客戶甲 2026-05 保養健檢：客戶反映簡報用詞太專業，主管看不懂
O02 客戶乙 2026-07 Tableau 升級：客戶反映簡報用詞太專業，主管看不懂
O03 客戶丙 2026-09 保養健檢：客戶反映簡報用詞太專業，主管看不懂
O04 客戶丁 2026-10 Tableau 升級：客戶要求附上原始 log 檔`,
    en: `O01 Client A 2026-05 health check: client says the deck is too technical for their managers
O02 Client B 2026-07 Tableau upgrade: client says the deck is too technical for their managers
O03 Client C 2026-09 health check: client says the deck is too technical for their managers
O04 Client D 2026-10 Tableau upgrade: client asked for the original log files to be attached`,
    th: `O01 ลูกค้า A 2026-05 ตรวจสุขภาพระบบ: ลูกค้าแจ้งว่าสไลด์ใช้ศัพท์เทคนิคมากจนผู้บริหารอ่านไม่เข้าใจ
O02 ลูกค้า B 2026-07 อัปเกรด Tableau: ลูกค้าแจ้งว่าสไลด์ใช้ศัพท์เทคนิคมากจนผู้บริหารอ่านไม่เข้าใจ
O03 ลูกค้า C 2026-09 ตรวจสุขภาพระบบ: ลูกค้าแจ้งว่าสไลด์ใช้ศัพท์เทคนิคมากจนผู้บริหารอ่านไม่เข้าใจ
O04 ลูกค้า D 2026-10 อัปเกรด Tableau: ลูกค้าขอให้แนบไฟล์ log ต้นฉบับ` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 客戶反映用詞太專業 | O01、O02、O03 | 3 | 未涵蓋（節錄中未見針對非技術讀者的寫法） |
| 客戶要求附原始 log 檔 | O04 | 1 | 節錄中未見；單次，不算模式 |
#### 值得考慮寫進規則
- 摘要頁加一段給非技術主管看的白話結論（做了什麼、結果是否正常、需要客戶做什麼）。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Client says the deck is too technical | O01, O02, O03 | 3 | Not covered (nothing in the excerpt on writing for non-technical readers) |
| Client asked for original log files | O04 | 1 | Not in the excerpt; single case, not a pattern |
#### Worth adding to the rules
- Add a plain-language conclusion for non-technical managers on the summary page: what was done, whether the result is normal, and what the client needs to do.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ลูกค้าแจ้งว่าใช้ศัพท์เทคนิคมากเกินไป | O01, O02, O03 | 3 | ยังไม่ครอบคลุม (ไม่พบแนวทางการเขียนสำหรับผู้อ่านที่ไม่ใช่สายเทคนิคในข้อความที่ยกมา) |
| ลูกค้าขอให้แนบไฟล์ log ต้นฉบับ | O04 | 1 | ไม่พบในข้อความที่ยกมา ครั้งเดียว ไม่นับเป็นรูปแบบ |
#### ควรพิจารณาเพิ่มเป็นกฎ
- เพิ่มบทสรุปภาษาง่ายสำหรับผู้บริหารที่ไม่ใช่สายเทคนิคในหน้าสรุป: ทำอะไรไป ผลปกติหรือไม่ และลูกค้าต้องทำอะไรต่อ
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "交付時間拖延", en: "Late delivery", th: "ส่งมอบล่าช้า" },
   input: {
    zh: `P01 客戶甲 2026-04 Tableau 升級：簡報在現場作業後 5 天才交付
P02 客戶乙 2026-06 保養健檢：簡報在現場作業後 6 天才交付
P03 客戶丙 2026-08 保養健檢：等待內部複核，交付延後 3 天
P04 客戶丁 2026-09 Tableau 升級：等待內部複核，交付延後 3 天`,
    en: `P01 Client A 2026-04 Tableau upgrade: deck delivered 5 days after the on-site work
P02 Client B 2026-06 health check: deck delivered 6 days after the on-site work
P03 Client C 2026-08 health check: waiting for internal review delayed delivery by 3 days
P04 Client D 2026-09 Tableau upgrade: waiting for internal review delayed delivery by 3 days`,
    th: `P01 ลูกค้า A 2026-04 อัปเกรด Tableau: ส่งสไลด์หลังทำงานหน้างาน 5 วัน
P02 ลูกค้า B 2026-06 ตรวจสุขภาพระบบ: ส่งสไลด์หลังทำงานหน้างาน 6 วัน
P03 ลูกค้า C 2026-08 ตรวจสุขภาพระบบ: รอตรวจทานภายใน ทำให้ส่งช้าไป 3 วัน
P04 ลูกค้า D 2026-09 อัปเกรด Tableau: รอตรวจทานภายใน ทำให้ส่งช้าไป 3 วัน` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 現場作業後 5 天以上才交付 | P01、P02 | 2 | 未涵蓋（節錄中未見交付時限） |
| 等待內部複核造成延後 | P03、P04 | 2 | 未涵蓋（節錄中未見複核流程的規範） |
#### 值得考慮寫進規則
- 訂出現場作業後的交付時限，並在產出時提醒剩餘天數。
- 送內部複核前，先自動檢查已記錄的陷阱，減少複核來回修改的次數。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Delivered 5+ days after on-site work | P01, P02 | 2 | Not covered (no delivery deadline in the excerpt) |
| Delivery delayed by internal review | P03, P04 | 2 | Not covered (no review-process rule in the excerpt) |
#### Worth adding to the rules
- Set a delivery deadline after on-site work and show the days remaining when the deck is generated.
- Before internal review, automatically check the recorded pitfalls to cut down review back-and-forth.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ส่งมอบหลังทำงานหน้างาน 5 วันขึ้นไป | P01, P02 | 2 | ยังไม่ครอบคลุม (ไม่พบกำหนดเวลาส่งมอบในข้อความที่ยกมา) |
| รอตรวจทานภายในทำให้ส่งช้า | P03, P04 | 2 | ยังไม่ครอบคลุม (ไม่พบมาตรฐานขั้นตอนตรวจทานในข้อความที่ยกมา) |
#### ควรพิจารณาเพิ่มเป็นกฎ
- กำหนดเวลาส่งมอบหลังทำงานหน้างาน และแสดงจำนวนวันที่เหลือตอนสร้างสไลด์
- ก่อนส่งตรวจทานภายใน ให้ตรวจข้อควรระวังที่บันทึกไว้โดยอัตโนมัติ เพื่อลดการแก้ไขไปมา
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "這段期間都沒有問題", en: "No issues in this period", th: "ช่วงนี้ไม่มีปัญหา" },
   input: {
    zh: `Q01 客戶甲 2026-07 保養健檢：複核通過，沒有發現問題
Q02 客戶乙 2026-08 Tableau 升級：複核通過，沒有發現問題
Q03 客戶丙 2026-09 保養健檢：複核通過，沒有發現問題
Q04 客戶丁 2026-10 Tableau 升級：複核通過，沒有發現問題`,
    en: `Q01 Client A 2026-07 health check: passed review, no issues found
Q02 Client B 2026-08 Tableau upgrade: passed review, no issues found
Q03 Client C 2026-09 health check: passed review, no issues found
Q04 Client D 2026-10 Tableau upgrade: passed review, no issues found`,
    th: `Q01 ลูกค้า A 2026-07 ตรวจสุขภาพระบบ: ผ่านการตรวจทาน ไม่พบปัญหา
Q02 ลูกค้า B 2026-08 อัปเกรด Tableau: ผ่านการตรวจทาน ไม่พบปัญหา
Q03 ลูกค้า C 2026-09 ตรวจสุขภาพระบบ: ผ่านการตรวจทาน ไม่พบปัญหา
Q04 ลูกค้า D 2026-10 อัปเกรด Tableau: ผ่านการตรวจทาน ไม่พบปัญหา` },
   output: {
    zh: `#### 觀察到的重複模式
- 這段期間 4 個案子都通過複核，沒有發現問題，因此沒有重複模式。
#### 值得考慮寫進規則
- 目前規則運作正常，不建議修改；下次回顧時繼續觀察。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
- All four projects in this period passed review with no issues, so there are no recurring patterns.
#### Worth adding to the rules
- The current rules are working; no change is suggested. Keep watching at the next review.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
- ทั้ง 4 โปรเจกต์ในช่วงนี้ผ่านการตรวจทานและไม่พบปัญหา จึงไม่มีรูปแบบที่เกิดซ้ำ
#### ควรพิจารณาเพิ่มเป็นกฎ
- กฎปัจจุบันทำงานได้ดี ไม่แนะนำให้แก้ไข ให้ติดตามต่อในการทบทวนครั้งหน้า
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } }
);

window.PRESETS.gov.items.push(
 { label: { zh: "索取擴充報價", en: "Expansion quote request", th: "ขอใบเสนอราคาขยายผู้ใช้" },
   input: {
    zh: `霧川生技股份有限公司的周美華小姐想索取擴充 50 個使用者的報價單，
請寄到 meihua.chou@example.com，週三前需要。`,
    en: `Ms. May Chou from Wuchuan Biotech Co., Ltd. would like a quote for adding 50 users.
Please send it to may.chou@example.com; she needs it by Wednesday.`,
    th: `คุณรัตนา ศรีสุข จากบริษัท อู่ชวนไบโอเทค จำกัด ขอใบเสนอราคาสำหรับเพิ่มผู้ใช้ 50 คน
กรุณาส่งไปที่ rattana.s@example.com ภายในวันพุธ` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕想索取擴充 50 個使用者的報價單。
- 期限：週三前。
- 下一步：請業務窗口準備 50 個使用者的擴充報價，週三前寄到〔Email A〕。`,
    en: `- Issue: [Person A] from [Client A] wants a quote for adding 50 users.
- Deadline: by Wednesday.
- Next step: ask the sales contact to prepare the 50-user expansion quote and send it to [Email A] before Wednesday.`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] ขอใบเสนอราคาสำหรับเพิ่มผู้ใช้ 50 คน
- กำหนดเวลา: ภายในวันพุธ
- ขั้นตอนถัดไป: ให้ฝ่ายขายเตรียมใบเสนอราคาเพิ่มผู้ใช้ 50 คน แล้วส่งไปที่ [อีเมล A] ก่อนวันพุธ` } },

 { label: { zh: "教育訓練換場地", en: "Training venue change", th: "เปลี่ยนสถานที่อบรม" },
   input: {
    zh: `下週二的教育訓練地點改到：澄峰製藥股份有限公司三樓會議室。聯絡人是何建明先生，分機不通的話打 0921-456-789。`,
    en: `Next Tuesday's training moves to the 3rd-floor meeting room at Chengfeng Pharma Co., Ltd. The contact is Mr. Jimmy Ho; if his extension doesn't answer, call 0921-456-789.`,
    th: `การอบรมวันอังคารหน้าย้ายไปห้องประชุมชั้น 3 ของบริษัท เฉิงเฟิงฟาร์มา จำกัด ผู้ติดต่อคือคุณชัยวัฒน์ บุญมา โทร 092-145-6789` },
   output: {
    zh: `- 問題：下週二的教育訓練改到〔客戶A〕三樓會議室舉行。
- 期限：下週二上課前。
- 下一步：通知所有學員新地點，並在前一天透過〔電話A〕向聯絡人〔人員A〕確認場地與設備。`,
    en: `- Issue: next Tuesday's training moves to the 3rd-floor meeting room at [Client A].
- Deadline: before the class next Tuesday.
- Next step: tell all attendees the new venue, and the day before, confirm the room and equipment with the contact [Person A] via [Phone A].`,
    th: `- ปัญหา: การอบรมวันอังคารหน้าย้ายไปห้องประชุมชั้น 3 ของ [ลูกค้า A]
- กำหนดเวลา: ก่อนเริ่มอบรมวันอังคารหน้า
- ขั้นตอนถัดไป: แจ้งสถานที่ใหม่ให้ผู้เข้าอบรมทุกคน และวันก่อนอบรมให้ยืนยันห้องและอุปกรณ์กับผู้ติดต่อ [บุคคล A] ทาง [โทรศัพท์ A]` } },

 { label: { zh: "月底系統變慢", en: "Slow system at month end", th: "ระบบช้าช่วงสิ้นเดือน" },
   input: {
    zh: `青禾電機有限公司王建國經理說，月底結算時系統很慢，附上的截圖檔名是 IMG_0458.png。
回覆請寄 jianguo.wang@example.com，並打 0952-321-654 通知他。`,
    en: `Mr. Jason Wang from Qinghe Electric Ltd. says the system is very slow during month-end closing; the attached screenshot is IMG_0458.png.
Please reply to jason.wang@example.com and call 0952-321-654 to let him know.`,
    th: `คุณสมพร ใจงาม จากบริษัท ชิงเหอเทคโนโลยี จำกัด แจ้งว่าช่วงปิดยอดสิ้นเดือนระบบช้ามาก แนบภาพหน้าจอชื่อไฟล์ IMG_0458.png
กรุณาตอบกลับที่ somporn.j@example.com และโทรแจ้งที่ 095-232-1654` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕反映月底結算時系統很慢，附有截圖 IMG_0458.png。
- 期限：紀錄中沒有明確期限；月底結算期間影響較大，建議優先處理。
- 下一步：查看截圖與月底時段的效能紀錄，找出變慢的原因，回覆寄到〔Email A〕，並打〔電話A〕通知〔人員A〕。`,
    en: `- Issue: [Person A] from [Client A] says the system is very slow during month-end closing; screenshot IMG_0458.png attached.
- Deadline: none stated; month-end closing is when it hurts most, so prioritise it.
- Next step: review the screenshot and performance logs for the month-end period to find the cause, reply to [Email A], and call [Person A] at [Phone A].`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] แจ้งว่าระบบช้ามากช่วงปิดยอดสิ้นเดือน แนบภาพหน้าจอ IMG_0458.png
- กำหนดเวลา: ในบันทึกไม่ได้ระบุ แต่ช่วงปิดยอดสิ้นเดือนได้รับผลกระทบมาก ควรจัดการก่อน
- ขั้นตอนถัดไป: ดูภาพหน้าจอและบันทึกประสิทธิภาพช่วงสิ้นเดือนเพื่อหาสาเหตุ ตอบกลับที่ [อีเมล A] และโทรแจ้ง [บุคคล A] ที่ [โทรศัพท์ A]` } }
);

window.PRESETS.kb.items.push(
 { q: { zh: "PDF 匯不出來", en: "Can't export to PDF", th: "ส่งออก PDF ไม่ได้" },
   a: { zh: "先確認匯出元件的版本和系統版本一致【FAQ-012】。不一致的話，重新部署匯出元件後重啟服務【FAQ-012】。",
        en: "Check that the export component version matches the system version [FAQ-012]. If not, redeploy the export component and restart the service [FAQ-012].",
        th: "ให้ตรวจว่าเวอร์ชันคอมโพเนนต์ส่งออกตรงกับเวอร์ชันระบบ [FAQ-012] ถ้าไม่ตรง ให้ติดตั้งคอมโพเนนต์ส่งออกใหม่แล้วรีสตาร์ตเซอร์วิส [FAQ-012]" } },
 { q: { zh: "服務起不來", en: "The service won't start", th: "เซอร์วิสไม่ยอมเริ่มทำงาน" },
   a: { zh: "先檢查暫存目錄所在磁碟的剩餘空間是否低於 10 GB，清理後重新啟動【FAQ-027】。還是不行就收集 log 交給原廠【FAQ-027】。",
        en: "Check whether the disk holding the temp directory has less than 10 GB free, clean it up and restart [FAQ-027]. If it still fails, collect the logs and send them to the vendor [FAQ-027].",
        th: "ให้ตรวจว่าดิสก์ที่เก็บโฟลเดอร์ชั่วคราวเหลือพื้นที่น้อยกว่า 10 GB หรือไม่ ล้างแล้วรีสตาร์ต [FAQ-027] ถ้ายังไม่ได้ให้เก็บ log ส่งให้ผู้ผลิต [FAQ-027]" } },
 { q: { zh: "授權要續約要找誰？", en: "Who handles licence renewals?", th: "ต่ออายุไลเซนส์ต้องติดต่อใคร" },
   a: { zh: "續約由業務窗口提供報價【FAQ-031】。系統會在到期前 30 天於管理頁提醒【FAQ-031】。",
        en: "Renewals are quoted by the sales contact [FAQ-031]. The system shows a reminder on the admin page 30 days before expiry [FAQ-031].",
        th: "การต่ออายุให้ฝ่ายขายเป็นผู้เสนอราคา [FAQ-031] ระบบจะแจ้งเตือนในหน้าผู้ดูแล 30 วันก่อนหมดอายุ [FAQ-031]" } },
 { q: { zh: "外掛廠商還沒出支援新版的版本怎麼辦？", en: "The plug-in vendor hasn't released a compatible version yet. Now what?", th: "ผู้ผลิตปลั๊กอินยังไม่ออกเวอร์ชันที่รองรับ ต้องทำอย่างไร" },
   a: { zh: "不支援新版本的外掛要先停用，並持續和外掛廠商聯繫，取得相容的版本【FAQ-068】。",
        en: "Disable any plug-in that doesn't support the new release and keep in touch with the vendor for a compatible version [FAQ-068].",
        th: "ให้ปิดปลั๊กอินที่ไม่รองรับเวอร์ชันใหม่ไว้ก่อน และติดต่อผู้ผลิตเพื่อขอเวอร์ชันที่รองรับ [FAQ-068]" } },
 { q: { zh: "可以幫忙寫報表的計算公式嗎？", en: "Can you write report formulas for us?", th: "ช่วยเขียนสูตรคำนวณในรายงานให้ได้ไหม" },
   a: { zh: "部門 FAQ 目前沒有這筆記錄。建議到 FAQ 總表新增這個問題，先確認是否在部門的服務範圍內再回覆。",
        en: "The department FAQ has no record of this yet. Please add the question to the FAQ list and confirm whether it's within the department's service scope before replying.",
        th: "FAQ ของแผนกยังไม่มีบันทึกเรื่องนี้ แนะนำให้เพิ่มคำถามนี้ในรายการ FAQ และยืนยันว่าอยู่ในขอบเขตบริการของแผนกหรือไม่ก่อนตอบ" }, none: true }
);
/* ---- batch 8 ---- */
window.PRESETS.report.items.push(
 { label: { zh: "工時表空白", en: "Empty timesheet", th: "ตารางชั่วโมงงานว่าง" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
【協銷進度】客戶,活動,日期,狀態
客戶A,技術簡報,2026-10-06,已完成
客戶B,產品展示,2026-10-20,已完成`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
[Presales tracker] Client,Activity,Date,Status
Client A,Technical briefing,2026-10-06,Done
Client B,Product demo,2026-10-20,Done`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า A,บรรยายเทคนิค,2026-10-06,เสร็จแล้ว
ลูกค้า B,สาธิตผลิตภัณฑ์,2026-10-20,เสร็จแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 合計 | — | 0 | 0.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶A 技術簡報（10/06，已完成）；客戶B 產品展示（10/20，已完成）
- **持續追蹤**：無
#### 待主管確認
- 工時紀錄本月沒有任何資料，無法計算人天，請確認是否漏填。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Total | — | 0 | 0.0 |
#### Presales progress
- **This month**: Client A technical briefing (10/06, done); Client B product demo (10/20, done)
- **Ongoing**: none
#### For the manager to confirm
- The timesheet has no entries this month, so no person-days can be calculated; please confirm whether it hasn't been filled in.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| รวม | — | 0 | 0.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า A บรรยายเทคนิค (10/06 เสร็จแล้ว); ลูกค้า B สาธิตผลิตภัณฑ์ (10/20 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- เดือนนี้ไม่มีข้อมูลชั่วโมงงานเลย จึงคำนวณแมนเดย์ไม่ได้ กรุณายืนยันว่ายังไม่ได้กรอกหรือไม่` } },

 { label: { zh: "維護案分散在多個客戶", en: "Maintenance spread across many clients", th: "งานบำรุงรักษากระจายหลายลูกค้า" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶C,維護,4
客戶D,維護,8
客戶E,維護,12
客戶F,維護,4
客戶G,維護,20
【協銷進度】客戶,活動,日期,狀態
客戶H,報價追蹤,2026-10-30,等待客戶回覆`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client C,Maintenance,4
Client D,Maintenance,8
Client E,Maintenance,12
Client F,Maintenance,4
Client G,Maintenance,20
[Presales tracker] Client,Activity,Date,Status
Client H,Quote follow-up,2026-10-30,Waiting for client`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า C,บำรุงรักษา,4
ลูกค้า D,บำรุงรักษา,8
ลูกค้า E,บำรุงรักษา,12
ลูกค้า F,บำรุงรักษา,4
ลูกค้า G,บำรุงรักษา,20
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า H,ติดตามใบเสนอราคา,2026-10-30,รอลูกค้าตอบกลับ` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 維護 | 客戶C | 4 | 0.5 |
| 維護 | 客戶D | 8 | 1.0 |
| 維護 | 客戶E | 12 | 1.5 |
| 維護 | 客戶F | 4 | 0.5 |
| 維護 | 客戶G | 20 | 2.5 |
| 合計 | — | 48 | 6.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶H 報價追蹤（10/30，等待客戶回覆）
- **持續追蹤**：無
#### 待主管確認
- 本月工時與協銷資料都完整，沒有需要確認的項目。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Maintenance | Client C | 4 | 0.5 |
| Maintenance | Client D | 8 | 1.0 |
| Maintenance | Client E | 12 | 1.5 |
| Maintenance | Client F | 4 | 0.5 |
| Maintenance | Client G | 20 | 2.5 |
| Total | — | 48 | 6.0 |
#### Presales progress
- **This month**: Client H quote follow-up (10/30, waiting for client)
- **Ongoing**: none
#### For the manager to confirm
- Timesheet and presales data are complete this month; nothing to confirm.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| บำรุงรักษา | ลูกค้า C | 4 | 0.5 |
| บำรุงรักษา | ลูกค้า D | 8 | 1.0 |
| บำรุงรักษา | ลูกค้า E | 12 | 1.5 |
| บำรุงรักษา | ลูกค้า F | 4 | 0.5 |
| บำรุงรักษา | ลูกค้า G | 20 | 2.5 |
| รวม | — | 48 | 6.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า H ติดตามใบเสนอราคา (10/30 รอลูกค้าตอบกลับ)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- ข้อมูลชั่วโมงงานและ Presales เดือนนี้ครบถ้วน ไม่มีรายการที่ต้องยืนยัน` } },

 { label: { zh: "同一客戶一路從簡報走到報價", en: "One client from briefing to quote", th: "ลูกค้ารายเดียวจากบรรยายถึงใบเสนอราคา" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶I,顧問服務&開發,48
客戶J,教育訓練,24
【協銷進度】客戶,活動,日期,狀態
客戶K,技術簡報,2026-10-02,已完成
客戶K,POC 規劃,2026-10-16,進行中
客戶K,報價追蹤,2026-10-29,等待客戶回覆`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client I,Consulting & development,48
Client J,Training,24
[Presales tracker] Client,Activity,Date,Status
Client K,Technical briefing,2026-10-02,Done
Client K,POC planning,2026-10-16,In progress
Client K,Quote follow-up,2026-10-29,Waiting for client`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า I,ที่ปรึกษาและพัฒนา,48
ลูกค้า J,ฝึกอบรม,24
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า K,บรรยายเทคนิค,2026-10-02,เสร็จแล้ว
ลูกค้า K,วางแผน POC,2026-10-16,กำลังดำเนินการ
ลูกค้า K,ติดตามใบเสนอราคา,2026-10-29,รอลูกค้าตอบกลับ` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶I | 48 | 6.0 |
| 教育訓練 | 客戶J | 24 | 3.0 |
| 合計 | — | 72 | 9.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶K 技術簡報（10/02，已完成）；客戶K POC 規劃（10/16，進行中）；客戶K 報價追蹤（10/29，等待客戶回覆）
- **持續追蹤**：無
#### 待主管確認
- 本月工時與協銷資料都完整，沒有需要確認的項目。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client I | 48 | 6.0 |
| Training | Client J | 24 | 3.0 |
| Total | — | 72 | 9.0 |
#### Presales progress
- **This month**: Client K technical briefing (10/02, done); Client K POC planning (10/16, in progress); Client K quote follow-up (10/29, waiting for client)
- **Ongoing**: none
#### For the manager to confirm
- Timesheet and presales data are complete this month; nothing to confirm.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า I | 48 | 6.0 |
| ฝึกอบรม | ลูกค้า J | 24 | 3.0 |
| รวม | — | 72 | 9.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า K บรรยายเทคนิค (10/02 เสร็จแล้ว); ลูกค้า K วางแผน POC (10/16 กำลังดำเนินการ); ลูกค้า K ติดตามใบเสนอราคา (10/29 รอลูกค้าตอบกลับ)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- ข้อมูลชั่วโมงงานและ Presales เดือนนี้ครบถ้วน ไม่มีรายการที่ต้องยืนยัน` } }
);

window.PRESETS.cases.items.push(
 { label: { zh: "用到舊版範本", en: "Old template version used", th: "ใช้เทมเพลตเวอร์ชันเก่า" },
   input: {
    zh: `R01 客戶甲 2026-06 保養健檢：用到舊版範本，缺少新加的確認事項頁
R02 客戶乙 2026-07 Tableau 升級：用到舊版範本，缺少新加的確認事項頁
R03 客戶丙 2026-08 保養健檢：用到舊版範本，缺少新加的確認事項頁
R04 客戶丁 2026-09 Tableau 升級：封面日期沒有更新`,
    en: `R01 Client A 2026-06 health check: old template version used, missing the newly added confirmation page
R02 Client B 2026-07 Tableau upgrade: old template version used, missing the newly added confirmation page
R03 Client C 2026-08 health check: old template version used, missing the newly added confirmation page
R04 Client D 2026-09 Tableau upgrade: cover date not updated`,
    th: `R01 ลูกค้า A 2026-06 ตรวจสุขภาพระบบ: ใช้เทมเพลตเวอร์ชันเก่า ไม่มีหน้ารายการให้ลูกค้ายืนยันที่เพิ่มใหม่
R02 ลูกค้า B 2026-07 อัปเกรด Tableau: ใช้เทมเพลตเวอร์ชันเก่า ไม่มีหน้ารายการให้ลูกค้ายืนยันที่เพิ่มใหม่
R03 ลูกค้า C 2026-08 ตรวจสุขภาพระบบ: ใช้เทมเพลตเวอร์ชันเก่า ไม่มีหน้ารายการให้ลูกค้ายืนยันที่เพิ่มใหม่
R04 ลูกค้า D 2026-09 อัปเกรด Tableau: วันที่บนปกไม่ได้อัปเดต` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 用到舊版範本，缺少確認事項頁 | R01、R02、R03 | 3 | 部分涵蓋（規則要求異常放在最末確認事項，但節錄中未見範本版本的管理） |
| 封面日期沒有更新 | R04 | 1 | 節錄中未見；單次，不算模式 |
#### 值得考慮寫進規則
- 範本集中放在同一處管理，產出前檢查使用的是不是最新版範本。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Old template used, missing the confirmation page | R01, R02, R03 | 3 | Partly covered (anomalies must go in the final confirmation items, but the excerpt has nothing on template versions) |
| Cover date not updated | R04 | 1 | Not in the excerpt; single case, not a pattern |
#### Worth adding to the rules
- Keep templates in one managed place and check before output that the latest version is being used.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ใช้เทมเพลตเก่า ไม่มีหน้ารายการให้ลูกค้ายืนยัน | R01, R02, R03 | 3 | ครอบคลุมบางส่วน (กฎกำหนดให้ความผิดปกติอยู่ในรายการยืนยันท้ายเล่ม แต่ไม่พบการจัดการเวอร์ชันเทมเพลตในข้อความที่ยกมา) |
| วันที่บนปกไม่ได้อัปเดต | R04 | 1 | ไม่พบในข้อความที่ยกมา ครั้งเดียว ไม่นับเป็นรูปแบบ |
#### ควรพิจารณาเพิ่มเป็นกฎ
- เก็บเทมเพลตไว้ที่เดียวและตรวจก่อนส่งออกว่าใช้เวอร์ชันล่าสุด
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "確認事項寫得太模糊", en: "Vague confirmation items", th: "รายการยืนยันเขียนกว้างเกินไป" },
   input: {
    zh: `S01 客戶甲 2026-05 保養健檢：確認事項只寫「部分服務異常」，沒寫是哪個服務
S02 客戶乙 2026-07 保養健檢：確認事項只寫「部分服務異常」，沒寫是哪個服務
S03 客戶丙 2026-09 Tableau 升級：確認事項沒有附對應截圖的頁碼
S04 客戶丁 2026-10 Tableau 升級：確認事項沒有附對應截圖的頁碼`,
    en: `S01 Client A 2026-05 health check: confirmation item only says "some services abnormal", without naming the service
S02 Client B 2026-07 health check: confirmation item only says "some services abnormal", without naming the service
S03 Client C 2026-09 Tableau upgrade: confirmation items don't give the page number of the related screenshot
S04 Client D 2026-10 Tableau upgrade: confirmation items don't give the page number of the related screenshot`,
    th: `S01 ลูกค้า A 2026-05 ตรวจสุขภาพระบบ: รายการยืนยันเขียนแค่ "บางเซอร์วิสผิดปกติ" ไม่ระบุว่าเซอร์วิสใด
S02 ลูกค้า B 2026-07 ตรวจสุขภาพระบบ: รายการยืนยันเขียนแค่ "บางเซอร์วิสผิดปกติ" ไม่ระบุว่าเซอร์วิสใด
S03 ลูกค้า C 2026-09 อัปเกรด Tableau: รายการยืนยันไม่ระบุเลขหน้าของภาพที่เกี่ยวข้อง
S04 ลูกค้า D 2026-10 อัปเกรด Tableau: รายการยืนยันไม่ระบุเลขหน้าของภาพที่เกี่ยวข้อง` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 異常只寫「部分服務異常」 | S01、S02 | 2 | 部分涵蓋（規則規定異常放最末，但節錄中未見寫法要求） |
| 確認事項沒附截圖頁碼 | S03、S04 | 2 | 未涵蓋（節錄中未見） |
#### 值得考慮寫進規則
- 確認事項用固定格式：服務或項目名稱、看到的現象、對應截圖的頁碼。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Anomaly only says "some services abnormal" | S01, S02 | 2 | Partly covered (anomalies go at the end, but the excerpt has no wording requirement) |
| Confirmation items lack screenshot page numbers | S03, S04 | 2 | Not covered (not in the excerpt) |
#### Worth adding to the rules
- Use a fixed format for confirmation items: service or item name, what was observed, and the page number of the related screenshot.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ความผิดปกติเขียนแค่ "บางเซอร์วิสผิดปกติ" | S01, S02 | 2 | ครอบคลุมบางส่วน (กฎให้ความผิดปกติอยู่ท้ายเล่ม แต่ไม่พบข้อกำหนดการเขียนในข้อความที่ยกมา) |
| รายการยืนยันไม่ระบุเลขหน้าของภาพ | S03, S04 | 2 | ยังไม่ครอบคลุม (ไม่พบในข้อความที่ยกมา) |
#### ควรพิจารณาเพิ่มเป็นกฎ
- รายการยืนยันใช้รูปแบบตายตัว: ชื่อเซอร์วิสหรือรายการ สิ่งที่พบ และเลขหน้าของภาพที่เกี่ยวข้อง
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "客戶多了一個新環境", en: "A client added a new environment", th: "ลูกค้าเพิ่มสภาพแวดล้อมใหม่" },
   input: {
    zh: `T01 客戶戊 2026-10 Tableau 升級：客戶新增第四個環境（災備），範本只有三個環境的欄位
T02 客戶戊 2026-10 Tableau 升級：災備環境的截圖被放進正式環境的章節`,
    en: `T01 Client E 2026-10 Tableau upgrade: client added a fourth environment (disaster recovery), but the template only has fields for three
T02 Client E 2026-10 Tableau upgrade: disaster-recovery screenshots placed in the production section`,
    th: `T01 ลูกค้า E 2026-10 อัปเกรด Tableau: ลูกค้าเพิ่มสภาพแวดล้อมที่ 4 (สำรองกู้คืนระบบ) แต่เทมเพลตมีช่องแค่ 3 สภาพแวดล้อม
T02 ลูกค้า E 2026-10 อัปเกรด Tableau: ภาพของสภาพแวดล้อมสำรองไปอยู่ในส่วนของระบบจริง` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 範本只支援三個環境 | T01 | 1 | 未涵蓋（節錄中未見）；單次，不算模式 |
| 截圖放錯環境章節 | T02 | 1 | 已涵蓋（已記錄的陷阱：截圖錯位）；單次，不算模式 |
#### 值得考慮寫進規則
- 目前沒有重複模式。不過兩個問題都源自範本只有三個環境；如果之後還有客戶有災備環境，可以考慮讓範本依環境數量調整。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Template supports only three environments | T01 | 1 | Not covered (not in the excerpt); single case, not a pattern |
| Screenshots placed in the wrong environment's section | T02 | 1 | Covered (recorded pitfall: misplaced screenshots); single case, not a pattern |
#### Worth adding to the rules
- No recurring pattern yet. Both issues stem from the template having only three environments; if more clients add a disaster-recovery environment, consider making the template adjust to the number of environments.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| เทมเพลตรองรับแค่ 3 สภาพแวดล้อม | T01 | 1 | ยังไม่ครอบคลุม (ไม่พบในข้อความที่ยกมา) ครั้งเดียว ไม่นับเป็นรูปแบบ |
| ภาพอยู่ผิดส่วนของสภาพแวดล้อม | T02 | 1 | ครอบคลุมแล้ว (ข้อควรระวัง: ภาพหน้าจอผิดตำแหน่ง) ครั้งเดียว ไม่นับเป็นรูปแบบ |
#### ควรพิจารณาเพิ่มเป็นกฎ
- ยังไม่มีรูปแบบที่เกิดซ้ำ แต่ทั้งสองปัญหามาจากเทมเพลตที่มีแค่ 3 สภาพแวดล้อม หากมีลูกค้าเพิ่มสภาพแวดล้อมสำรองอีก ควรให้เทมเพลตปรับตามจำนวนสภาพแวดล้อมได้
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } }
);

window.PRESETS.gov.items.push(
 { label: { zh: "機房設備報修", en: "Server-room equipment fault", th: "แจ้งซ่อมอุปกรณ์ห้องเซิร์ฟเวอร์" },
   input: {
    zh: `霽光精工有限公司廠務課的江志明先生報修：機房 UPS 發出告警聲，請工程師今天下午到場。
現場電話 0919-876-543。`,
    en: `Mr. Tony Chiang from Jiguang Precision Ltd. (facilities) reports the server-room UPS is sounding an alarm and asks for an engineer on site this afternoon.
On-site phone: 0919-876-543.`,
    th: `คุณวีระ ทองคำ จากบริษัท จี้กวงพรีซิชั่น จำกัด ฝ่ายอาคาร แจ้งว่า UPS ในห้องเซิร์ฟเวอร์ส่งเสียงเตือน ขอให้วิศวกรเข้าหน้างานบ่ายนี้
เบอร์หน้างาน 091-987-6543` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕報修機房 UPS 發出告警聲。
- 期限：今天下午到場。
- 下一步：先透過〔電話A〕確認告警內容與現場狀況，再安排工程師今天下午到場檢查。`,
    en: `- Issue: [Person A] from [Client A] reports the server-room UPS is sounding an alarm.
- Deadline: on site this afternoon.
- Next step: call [Phone A] first to confirm the alarm details and site conditions, then send an engineer this afternoon.`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] แจ้งว่า UPS ในห้องเซิร์ฟเวอร์ส่งเสียงเตือน
- กำหนดเวลา: เข้าหน้างานบ่ายนี้
- ขั้นตอนถัดไป: โทร [โทรศัพท์ A] ก่อนเพื่อยืนยันรายละเอียดการแจ้งเตือนและสภาพหน้างาน แล้วส่งวิศวกรเข้าตรวจบ่ายนี้` } },

 { label: { zh: "管理員帳號交接", en: "Admin account handover", th: "โอนบัญชีผู้ดูแลระบบ" },
   input: {
    zh: `棠溪物產股份有限公司的蕭雅婷小姐月底離職，系統管理員帳號要交接給陳俊宏先生。
新管理員信箱 junhong.chen@example.com，請在月底前完成。`,
    en: `Ms. Tina Hsiao from Tangxi Trading Co., Ltd. leaves at the end of the month; her system admin account must be handed over to Mr. Ken Chen.
The new admin's email is ken.chen@example.com. Please finish before month end.`,
    th: `คุณจันทร์เพ็ญ ศรีทอง จากบริษัท ถังซีเทรดดิ้ง จำกัด จะลาออกสิ้นเดือนนี้ ต้องโอนบัญชีผู้ดูแลระบบให้ผู้ดูแลคนใหม่
อีเมลผู้ดูแลคนใหม่ newadmin.t@example.com กรุณาทำให้เสร็จก่อนสิ้นเดือน` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕月底離職，系統管理員帳號要交接給〔人員B〕。
- 期限：月底前完成。
- 下一步：確認交接的權限範圍，為〔人員B〕開立管理員權限並寄通知到〔Email A〕；交接完成後停用〔人員A〕的管理權限。`,
    en: `- Issue: [Person A] from [Client A] leaves at month end; the system admin account must be handed over to [Person B].
- Deadline: before month end.
- Next step: confirm the scope of the handover, grant [Person B] admin rights and notify [Email A]; once done, remove [Person A]'s admin rights.`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] จะลาออกสิ้นเดือน ต้องโอนบัญชีผู้ดูแลระบบให้ผู้ดูแลคนใหม่
- กำหนดเวลา: ก่อนสิ้นเดือน
- ขั้นตอนถัดไป: ยืนยันขอบเขตสิทธิ์ที่ต้องโอน ให้สิทธิ์ผู้ดูแลแก่ผู้ดูแลคนใหม่และแจ้งไปที่ [อีเมล A] เมื่อเสร็จแล้วให้ยกเลิกสิทธิ์ผู้ดูแลของ [บุคคล A]` } },

 { label: { zh: "稽核調閱權限紀錄", en: "Audit request for permission records", th: "ขอบันทึกสิทธิ์เพื่อการตรวจสอบ" },
   input: {
    zh: `因應稽核，岑岳投資股份有限公司的羅文傑先生申請匯出去年全年的權限異動紀錄。
申請人身分證字號 D134567890，結果請寄 wenjie.lo@example.com。`,
    en: `For an audit, Mr. Victor Lo from Cenyue Investment Co., Ltd. requests an export of last year's permission-change records.
Applicant ID D134567890; please send the result to victor.lo@example.com.`,
    th: `เพื่อการตรวจสอบ คุณธีรพงศ์ แสงดี จากบริษัท เฉินเยว่อินเวสต์เมนต์ จำกัด ขอส่งออกบันทึกการเปลี่ยนสิทธิ์ของทั้งปีที่แล้ว
เลขประจำตัวผู้ขอ 1-5566-77889-90-1 กรุณาส่งผลไปที่ teerapong.s@example.com` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕因應稽核，申請匯出去年全年的權限異動紀錄。
- 期限：紀錄中沒有明確期限。
- 下一步：先以〔身分證A〕確認申請人身分與調閱權限，核准後匯出紀錄，寄到〔Email A〕。`,
    en: `- Issue: [Person A] from [Client A] requests, for an audit, an export of last year's permission-change records.
- Deadline: none stated in the record.
- Next step: verify the applicant's identity and authorisation with [ID A]; once approved, export the records and send them to [Email A].`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] ขอส่งออกบันทึกการเปลี่ยนสิทธิ์ของทั้งปีที่แล้วเพื่อการตรวจสอบ
- กำหนดเวลา: ในบันทึกไม่ได้ระบุ
- ขั้นตอนถัดไป: ตรวจสอบตัวตนและสิทธิ์ของผู้ขอด้วย [เลขบัตร A] เมื่ออนุมัติแล้วให้ส่งออกบันทึกและส่งไปที่ [อีเมล A]` } }
);

window.PRESETS.kb.items.push(
 { q: { zh: "通知信寄不到客戶信箱", en: "Notifications aren't reaching the client's inbox", th: "อีเมลแจ้งเตือนไปไม่ถึงกล่องจดหมายของลูกค้า" },
   a: { zh: "先確認 SMTP 伺服器位址、連接埠與帳號沒有變更【FAQ-060】。如果客戶換了郵件伺服器，要在管理頁更新設定並寄測試信【FAQ-060】。",
        en: "Check that the SMTP server address, port and account haven't changed [FAQ-060]. If the client switched mail servers, update the settings on the admin page and send a test email [FAQ-060].",
        th: "ให้ตรวจว่าที่อยู่เซิร์ฟเวอร์ SMTP พอร์ต และบัญชีไม่ได้เปลี่ยน [FAQ-060] หากลูกค้าเปลี่ยนเมลเซิร์ฟเวอร์ ให้อัปเดตการตั้งค่าในหน้าผู้ดูแลแล้วส่งอีเมลทดสอบ [FAQ-060]" } },
 { q: { zh: "萃取要多久更新一次？", en: "How often should extracts refresh?", th: "Extract ควรรีเฟรชบ่อยแค่ไหน" },
   a: { zh: "記錄只建議資料量大的儀表板改用萃取並設定排程更新【FAQ-064】，沒有寫建議的更新頻率；這部分建議到 FAQ 總表補充。",
        en: "The record only advises switching large dashboards to extracts with a scheduled refresh [FAQ-064]; it doesn't give a recommended frequency, so consider adding that to the FAQ list.",
        th: "บันทึกแนะนำเพียงให้แดชบอร์ดที่ข้อมูลเยอะเปลี่ยนเป็น Extract และตั้งเวลารีเฟรช [FAQ-064] แต่ไม่ได้ระบุความถี่ที่แนะนำ ควรเพิ่มเรื่องนี้ในรายการ FAQ" } },
 { q: { zh: "新的憑證要跟誰拿？", en: "Who do we get the new certificate from?", th: "ใบรับรองใหม่ต้องขอจากใคร" },
   a: { zh: "新憑證要向客戶取得，拿到後在系統管理頁更新並重啟服務【FAQ-040】。",
        en: "Get the new certificate from the client, then update it on the system admin page and restart the service [FAQ-040].",
        th: "ต้องขอใบรับรองใหม่จากลูกค้า แล้วอัปเดตในหน้าผู้ดูแลระบบและรีสตาร์ตเซอร์วิส [FAQ-040]" } },
 { q: { zh: "升級可以排在白天上班時間嗎？", en: "Can the upgrade happen during office hours?", th: "อัปเกรดในเวลาทำงานได้ไหม" },
   a: { zh: "記錄建議把升級安排在非上班時段，因為一般會停機約 1～2 小時，並要提前一週通知使用者【FAQ-052】。",
        en: "The record recommends scheduling upgrades outside working hours, since there is usually about 1–2 hours of downtime, and notifying users a week ahead [FAQ-052].",
        th: "บันทึกแนะนำให้อัปเกรดนอกเวลาทำงาน เพราะปกติต้องหยุดระบบประมาณ 1–2 ชั่วโมง และต้องแจ้งผู้ใช้ล่วงหน้าหนึ่งสัปดาห์ [FAQ-052]" } },
 { q: { zh: "系統可以串接 LINE 通知嗎？", en: "Can the system send notifications to LINE?", th: "ระบบส่งแจ้งเตือนไปที่ LINE ได้ไหม" },
   a: { zh: "部門 FAQ 目前沒有這筆記錄。建議到 FAQ 總表新增這個問題，由負責的同事確認可行性後再回覆。",
        en: "The department FAQ has no record of this yet. Please add the question to the FAQ list so the responsible colleague can check feasibility before replying.",
        th: "FAQ ของแผนกยังไม่มีบันทึกเรื่องนี้ แนะนำให้เพิ่มคำถามนี้ในรายการ FAQ เพื่อให้ผู้รับผิดชอบตรวจสอบความเป็นไปได้ก่อนตอบ" }, none: true }
);
/* ---- batch 9 ---- */
window.PRESETS.report.items.push(
 { label: { zh: "客戶名稱寫法不一", en: "Client name written two ways", th: "เขียนชื่อลูกค้าสองแบบ" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶A,維護,16
A客戶,維護,8
客戶B,教育訓練,12
【協銷進度】客戶,活動,日期,狀態
客戶C,產品展示,2026-10-14,已完成`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client A,Maintenance,16
Client-A,Maintenance,8
Client B,Training,12
[Presales tracker] Client,Activity,Date,Status
Client C,Product demo,2026-10-14,Done`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า A,บำรุงรักษา,16
ลูกค้าA,บำรุงรักษา,8
ลูกค้า B,ฝึกอบรม,12
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า C,สาธิตผลิตภัณฑ์,2026-10-14,เสร็จแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 維護 | 客戶A | 16 | 2.0 |
| 維護 | A客戶 | 8 | 1.0 |
| 教育訓練 | 客戶B | 12 | 1.5 |
| 合計 | — | 36 | 4.5 |
#### 技術銷售・協銷進度
- **本月活動**：客戶C 產品展示（10/14，已完成）
- **持續追蹤**：無
#### 待主管確認
- 「A客戶」可能和「客戶A」是同一位客戶，表格照原文分開列出；若是同一位，客戶A 的維護合計為 24 小時、3.0 人天，請確認並統一寫法。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Maintenance | Client A | 16 | 2.0 |
| Maintenance | Client-A | 8 | 1.0 |
| Training | Client B | 12 | 1.5 |
| Total | — | 36 | 4.5 |
#### Presales progress
- **This month**: Client C product demo (10/14, done)
- **Ongoing**: none
#### For the manager to confirm
- "Client-A" may be the same client as "Client A"; the table lists them separately as written. If they are the same, Client A's maintenance comes to 24 hours, 3.0 person-days; please confirm and standardise the name.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| บำรุงรักษา | ลูกค้า A | 16 | 2.0 |
| บำรุงรักษา | ลูกค้าA | 8 | 1.0 |
| ฝึกอบรม | ลูกค้า B | 12 | 1.5 |
| รวม | — | 36 | 4.5 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า C สาธิตผลิตภัณฑ์ (10/14 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- "ลูกค้าA" อาจเป็นลูกค้ารายเดียวกับ "ลูกค้า A" ตารางแยกแสดงตามต้นฉบับ หากเป็นรายเดียวกัน งานบำรุงรักษาของลูกค้า A รวมเป็น 24 ชั่วโมง 3.0 แมนเดย์ กรุณายืนยันและใช้ชื่อเดียวกัน` } },

 { label: { zh: "日期已過但狀態沒更新", en: "Past date, status not updated", th: "เลยวันแล้วแต่สถานะไม่อัปเดต" },
   input: {
    zh: `【工時紀錄 2026-10】客戶,專案類型,工時(小時)
客戶E,顧問服務&開發,16
客戶F,維護,24
【協銷進度】客戶,活動,日期,狀態
客戶D,POC 執行,2026-10-05,已排定
客戶G,產品展示,2026-10-22,已完成`,
    en: `[Timesheet 2026-10] Client,Project type,Hours
Client E,Consulting & development,16
Client F,Maintenance,24
[Presales tracker] Client,Activity,Date,Status
Client D,POC run,2026-10-05,Scheduled
Client G,Product demo,2026-10-22,Done`,
    th: `[บันทึกชั่วโมงงาน 2026-10] ลูกค้า,ประเภทโครงการ,ชั่วโมง
ลูกค้า E,ที่ปรึกษาและพัฒนา,16
ลูกค้า F,บำรุงรักษา,24
[ความคืบหน้า Presales] ลูกค้า,กิจกรรม,วันที่,สถานะ
ลูกค้า D,ทำ POC,2026-10-05,กำหนดวันแล้ว
ลูกค้า G,สาธิตผลิตภัณฑ์,2026-10-22,เสร็จแล้ว` },
   output: {
    zh: `#### 專案執行（本月人天）
| 類型 | 客戶 | 工時 | 人天 |
|---|---|---|---|
| 顧問服務&開發 | 客戶E | 16 | 2.0 |
| 維護 | 客戶F | 24 | 3.0 |
| 合計 | — | 40 | 5.0 |
#### 技術銷售・協銷進度
- **本月活動**：客戶D POC 執行（10/05，已排定）；客戶G 產品展示（10/22，已完成）
- **持續追蹤**：無
#### 待主管確認
- 客戶D 的 POC 執行日期 10/05 已經過了，狀態仍是「已排定」，請確認是否已執行並更新狀態。`,
    en: `#### Project delivery (person-days this month)
| Type | Client | Hours | Person-days |
|---|---|---|---|
| Consulting & development | Client E | 16 | 2.0 |
| Maintenance | Client F | 24 | 3.0 |
| Total | — | 40 | 5.0 |
#### Presales progress
- **This month**: Client D POC run (10/05, scheduled); Client G product demo (10/22, done)
- **Ongoing**: none
#### For the manager to confirm
- Client D's POC run was dated 10/05, which has passed, but its status is still "Scheduled"; please confirm whether it happened and update the status.`,
    th: `#### การดำเนินโครงการ (แมนเดย์เดือนนี้)
| ประเภท | ลูกค้า | ชั่วโมง | แมนเดย์ |
|---|---|---|---|
| ที่ปรึกษาและพัฒนา | ลูกค้า E | 16 | 2.0 |
| บำรุงรักษา | ลูกค้า F | 24 | 3.0 |
| รวม | — | 40 | 5.0 |
#### ความคืบหน้างาน Presales
- **กิจกรรมเดือนนี้**: ลูกค้า D ทำ POC (10/05 กำหนดวันแล้ว); ลูกค้า G สาธิตผลิตภัณฑ์ (10/22 เสร็จแล้ว)
- **ติดตามต่อเนื่อง**: ไม่มี
#### รายการให้หัวหน้ายืนยัน
- ทำ POC ของลูกค้า D กำหนดไว้ 10/05 ซึ่งผ่านไปแล้ว แต่สถานะยังเป็น "กำหนดวันแล้ว" กรุณายืนยันว่าทำแล้วหรือยังและอัปเดตสถานะ` } }
);

window.PRESETS.cases.items.push(
 { label: { zh: "同一問題、不同寫法", en: "Same issue, different wording", th: "ปัญหาเดียวกัน เขียนต่างกัน" },
   input: {
    zh: `U01 客戶甲 2026-06 保養健檢：服務列表截圖缺了下半部
U02 客戶乙 2026-08 Tableau 升級：服務狀態畫面沒截完整
U03 客戶丙 2026-10 保養健檢：服務清單只截到前半段`,
    en: `U01 Client A 2026-06 health check: service list screenshot missing its lower half
U02 Client B 2026-08 Tableau upgrade: service status screen not fully captured
U03 Client C 2026-10 health check: service list only captured up to the middle`,
    th: `U01 ลูกค้า A 2026-06 ตรวจสุขภาพระบบ: ภาพรายการเซอร์วิสขาดครึ่งล่าง
U02 ลูกค้า B 2026-08 อัปเกรด Tableau: จับภาพหน้าจอสถานะเซอร์วิสไม่ครบ
U03 ลูกค้า C 2026-10 ตรวจสุขภาพระบบ: ภาพรายการเซอร์วิสจับได้แค่ครึ่งแรก` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 服務狀態截圖不完整（三筆用了不同寫法，描述的是同一個問題） | U01、U02、U03 | 3 | 未涵蓋（節錄中未見截圖完整性的檢查） |
#### 值得考慮寫進規則
- 把完整的服務狀態畫面列為必拍，並在產出前檢查截圖是否完整。
- 問題紀錄改用固定的分類用詞，之後統計同類問題會更準確。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| Service-status screenshot incomplete (three different wordings describing the same issue) | U01, U02, U03 | 3 | Not covered (no screenshot-completeness check in the excerpt) |
#### Worth adding to the rules
- Make a complete service-status screen a required shot and check completeness before output.
- Record issues with fixed category terms so similar problems can be counted accurately later.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ภาพสถานะเซอร์วิสไม่ครบ (เขียนต่างกัน 3 แบบ แต่เป็นปัญหาเดียวกัน) | U01, U02, U03 | 3 | ยังไม่ครอบคลุม (ไม่พบการตรวจความครบของภาพในข้อความที่ยกมา) |
#### ควรพิจารณาเพิ่มเป็นกฎ
- กำหนดให้หน้าจอสถานะเซอร์วิสแบบเต็มเป็นภาพบังคับ และตรวจความครบของภาพก่อนส่งออก
- บันทึกปัญหาด้วยคำจัดหมวดที่ตายตัว เพื่อให้นับปัญหาประเภทเดียวกันได้แม่นยำขึ้น
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } },

 { label: { zh: "升級後驗證漏拍", en: "Post-upgrade checks not captured", th: "ไม่ได้ถ่ายภาพการตรวจหลังอัปเกรด" },
   input: {
    zh: `V01 客戶甲 2026-05 Tableau 升級：升級後沒有附登入測試截圖
V02 客戶乙 2026-08 Tableau 升級：升級後沒有附登入測試截圖
V03 客戶丙 2026-09 Tableau 升級：升級後沒有附儀表板開啟測試截圖
V04 客戶丁 2026-10 Tableau 升級：升級後沒有附儀表板開啟測試截圖`,
    en: `V01 Client A 2026-05 Tableau upgrade: no post-upgrade login test screenshot
V02 Client B 2026-08 Tableau upgrade: no post-upgrade login test screenshot
V03 Client C 2026-09 Tableau upgrade: no post-upgrade dashboard-open test screenshot
V04 Client D 2026-10 Tableau upgrade: no post-upgrade dashboard-open test screenshot`,
    th: `V01 ลูกค้า A 2026-05 อัปเกรด Tableau: ไม่มีภาพทดสอบเข้าสู่ระบบหลังอัปเกรด
V02 ลูกค้า B 2026-08 อัปเกรด Tableau: ไม่มีภาพทดสอบเข้าสู่ระบบหลังอัปเกรด
V03 ลูกค้า C 2026-09 อัปเกรด Tableau: ไม่มีภาพทดสอบเปิดแดชบอร์ดหลังอัปเกรด
V04 ลูกค้า D 2026-10 อัปเกรด Tableau: ไม่มีภาพทดสอบเปิดแดชบอร์ดหลังอัปเกรด` },
   output: {
    zh: `#### 觀察到的重複模式
| 模式 | 案子 | 次數 | 目前規則是否涵蓋 |
|---|---|---|---|
| 升級後沒附登入測試截圖 | V01、V02 | 2 | 未涵蓋（節錄中未見升級後驗證清單） |
| 升級後沒附儀表板開啟測試截圖 | V03、V04 | 2 | 未涵蓋（節錄中未見升級後驗證清單） |
#### 值得考慮寫進規則
- 訂一份升級後驗證清單（至少包含登入測試、開啟儀表板），列為升級案的必拍截圖。
#### 說明
本報告只提出觀察，不會修改 Skill；是否更新規則由負責人決定。`,
    en: `#### Recurring patterns
| Pattern | Projects | Count | Covered by current rules? |
|---|---|---|---|
| No post-upgrade login test screenshot | V01, V02 | 2 | Not covered (no post-upgrade check list in the excerpt) |
| No post-upgrade dashboard-open test screenshot | V03, V04 | 2 | Not covered (no post-upgrade check list in the excerpt) |
#### Worth adding to the rules
- Define a post-upgrade check list (at least a login test and opening a dashboard) and make those required shots for upgrade projects.
#### Note
This report only records observations and does not modify the skill; the owner decides whether to update the rules.`,
    th: `#### รูปแบบที่เกิดซ้ำ
| รูปแบบ | โปรเจกต์ | จำนวน | กฎปัจจุบันครอบคลุมหรือไม่ |
|---|---|---|---|
| ไม่มีภาพทดสอบเข้าสู่ระบบหลังอัปเกรด | V01, V02 | 2 | ยังไม่ครอบคลุม (ไม่พบรายการตรวจหลังอัปเกรดในข้อความที่ยกมา) |
| ไม่มีภาพทดสอบเปิดแดชบอร์ดหลังอัปเกรด | V03, V04 | 2 | ยังไม่ครอบคลุม (ไม่พบรายการตรวจหลังอัปเกรดในข้อความที่ยกมา) |
#### ควรพิจารณาเพิ่มเป็นกฎ
- กำหนดรายการตรวจหลังอัปเกรด (อย่างน้อยทดสอบเข้าสู่ระบบและเปิดแดชบอร์ด) และให้เป็นภาพบังคับของงานอัปเกรด
#### หมายเหตุ
รายงานนี้บันทึกข้อสังเกตเท่านั้น ไม่แก้ไข Skill ผู้รับผิดชอบเป็นผู้ตัดสินใจว่าจะปรับกฎหรือไม่` } }
);

window.PRESETS.gov.items.push(
 { label: { zh: "保密協議簽回", en: "NDA to sign and return", th: "ลงนามสัญญารักษาความลับ" },
   input: {
    zh: `澐水系統有限公司法務部吳宗翰先生寄來保密協議，請在週五前簽回。
掃描檔請寄 zonghan.wu@example.com，正本寄到公司。`,
    en: `Mr. Zack Wu from Yunshui Systems Ltd. (legal) sent an NDA and asks for it to be signed and returned by Friday.
Email the scan to zack.wu@example.com and post the original to their office.`,
    th: `คุณสุรชัย มีสุข จากบริษัท อวิ๋นสุ่ยซิสเต็มส์ จำกัด ฝ่ายกฎหมาย ส่งสัญญารักษาความลับมา ขอให้ลงนามส่งกลับภายในวันศุกร์
ส่งไฟล์สแกนไปที่ surachai.m@example.com และส่งต้นฉบับไปที่บริษัท` },
   output: {
    zh: `- 問題：〔客戶A〕的〔人員A〕寄來保密協議，需要簽回。
- 期限：週五前。
- 下一步：先交法務或主管審閱內容，簽署後把掃描檔寄到〔Email A〕，正本寄回〔客戶A〕。`,
    en: `- Issue: [Person A] from [Client A] sent an NDA that needs to be signed and returned.
- Deadline: by Friday.
- Next step: have legal or a manager review it first; once signed, email the scan to [Email A] and post the original to [Client A].`,
    th: `- ปัญหา: [บุคคล A] จาก [ลูกค้า A] ส่งสัญญารักษาความลับมาให้ลงนามส่งกลับ
- กำหนดเวลา: ภายในวันศุกร์
- ขั้นตอนถัดไป: ให้ฝ่ายกฎหมายหรือหัวหน้าตรวจก่อน เมื่อลงนามแล้วส่งไฟล์สแกนไปที่ [อีเมล A] และส่งต้นฉบับไปที่ [ลูกค้า A]` } },

 { label: { zh: "多人會議邀請", en: "Meeting invitation, several attendees", th: "เชิญประชุมหลายคน" },
   input: {
    zh: `嶼森科技股份有限公司想在 12/3 下午開系統檢討會，與會者有黃美玲小姐（meiling.huang@example.com）、林冠宇先生（guanyu.lin@example.com），請回覆可否出席。`,
    en: `Yusen Tech Co., Ltd. would like a system review meeting on the afternoon of 12/3. Attendees: Ms. Mei Huang (mei.huang@example.com) and Mr. Gary Lin (gary.lin@example.com). Please reply whether we can attend.`,
    th: `บริษัท ยวี่เซินเทค จำกัด ต้องการประชุมทบทวนระบบบ่ายวันที่ 12/3 ผู้เข้าร่วมคือคุณเมษา ใจดี จากฝ่ายไอที (mesa.j@example.com) และ korn.p@example.com กรุณาตอบว่าเข้าร่วมได้หรือไม่` },
   output: {
    zh: `- 問題：〔客戶A〕想在 12/3 下午開系統檢討會，與會者有〔人員A〕與〔人員B〕。
- 期限：會議在 12/3 下午，需在那之前回覆是否出席。
- 下一步：確認我方出席人員與時間後，回信給〔Email A〕與〔Email B〕。`,
    en: `- Issue: [Client A] wants a system review meeting on the afternoon of 12/3, with [Person A] and [Person B] attending.
- Deadline: reply before the meeting on the afternoon of 12/3.
- Next step: confirm who from our side will attend and the time, then reply to [Email A] and [Email B].`,
    th: `- ปัญหา: [ลูกค้า A] ต้องการประชุมทบทวนระบบบ่ายวันที่ 12/3 ผู้เข้าร่วมคือ [บุคคล A] และอีกหนึ่งคน
- กำหนดเวลา: ต้องตอบก่อนการประชุมบ่ายวันที่ 12/3
- ขั้นตอนถัดไป: ยืนยันผู้เข้าร่วมและเวลาฝั่งเรา แล้วตอบกลับไปที่ [อีเมล A] และ [อีเมล B]` } }
);

window.PRESETS.kb.items.push(
 { q: { zh: "報表匯出時跳出錯誤訊息", en: "An error pops up when exporting a report", th: "ส่งออกรายงานแล้วมีข้อความแจ้งข้อผิดพลาด" },
   a: { zh: "如果是升級後才出現，先確認匯出元件版本和升級後的版本一致；不一致就重新部署匯出元件並重啟服務【FAQ-012】。",
        en: "If it started after an upgrade, check that the export component version matches the upgraded version; if not, redeploy the export component and restart the service [FAQ-012].",
        th: "ถ้าเกิดหลังอัปเกรด ให้ตรวจว่าเวอร์ชันคอมโพเนนต์ส่งออกตรงกับเวอร์ชันหลังอัปเกรด ถ้าไม่ตรงให้ติดตั้งคอมโพเนนต์ส่งออกใหม่แล้วรีสตาร์ตเซอร์วิส [FAQ-012]" } },
 { q: { zh: "磁碟空間不足會有什麼影響？", en: "What happens when disk space runs low?", th: "พื้นที่ดิสก์ไม่พอจะเกิดอะไรขึ้น" },
   a: { zh: "記錄裡有兩種情況：暫存目錄所在磁碟剩不到 10 GB 時，升級後服務可能啟動逾時【FAQ-027】；備份檔太大也會占滿磁碟，要清理 30 天以前的舊備份並至少保留最近 3 份【FAQ-056】。",
        en: "The records cover two cases: if the disk holding the temp directory has under 10 GB free, the service may time out on start after an upgrade [FAQ-027]; large backups can also fill the disk, so delete backups older than 30 days and keep at least the three most recent [FAQ-056].",
        th: "บันทึกมีสองกรณี: ถ้าดิสก์ที่เก็บโฟลเดอร์ชั่วคราวเหลือน้อยกว่า 10 GB เซอร์วิสอาจเริ่มทำงานไม่ทันหลังอัปเกรด [FAQ-027] และไฟล์สำรองที่ใหญ่ก็ทำให้ดิสก์เต็มได้ ให้ลบไฟล์สำรองที่เก่ากว่า 30 วันและเก็บล่าสุดไว้อย่างน้อย 3 ชุด [FAQ-056]" } },
 { q: { zh: "外掛的新版本要去哪裡拿？", en: "Where do we get a new plug-in version?", th: "เวอร์ชันใหม่ของปลั๊กอินต้องเอาจากที่ไหน" },
   a: { zh: "要向外掛廠商取得相容的版本；在拿到之前，先停用不支援新版本的外掛【FAQ-068】。",
        en: "Get a compatible version from the plug-in vendor; until then, disable any plug-in that doesn't support the new release [FAQ-068].",
        th: "ต้องขอเวอร์ชันที่รองรับจากผู้ผลิตปลั๊กอิน ระหว่างนั้นให้ปิดปลั๊กอินที่ไม่รองรับเวอร์ชันใหม่ไว้ก่อน [FAQ-068]" } },
 { q: { zh: "授權到期了會怎樣？", en: "What happens when the licence expires?", th: "ไลเซนส์หมดอายุแล้วจะเป็นอย่างไร" },
   a: { zh: "記錄只寫到系統會在到期前 30 天於管理頁提醒、續約由業務窗口報價【FAQ-031】，沒有寫到期後的影響；這部分建議到 FAQ 總表補充。",
        en: "The record only says the system reminds admins 30 days before expiry and the sales contact quotes the renewal [FAQ-031]; it doesn't say what happens after expiry, so consider adding that to the FAQ list.",
        th: "บันทึกระบุเพียงว่าระบบจะแจ้งเตือนในหน้าผู้ดูแล 30 วันก่อนหมดอายุ และฝ่ายขายเป็นผู้เสนอราคาต่ออายุ [FAQ-031] ไม่ได้บอกว่าหลังหมดอายุจะเป็นอย่างไร ควรเพิ่มเรื่องนี้ในรายการ FAQ" } },
 { q: { zh: "排程失敗要去哪裡看？", en: "Where do I check why a scheduled job failed?", th: "งานตามกำหนดเวลาล้มเหลว ต้องดูที่ไหน" },
   a: { zh: "先看排程紀錄有沒有失敗【FAQ-044】。常見原因是來源資料庫備份時鎖表，可以把排程時間往後調 1 小時【FAQ-044】。",
        en: "Check the scheduled job's log for failures first [FAQ-044]. A common cause is the source database locking tables during its backup; moving the schedule an hour later helps [FAQ-044].",
        th: "ให้ดูบันทึกงานตามกำหนดเวลาก่อนว่าล้มเหลวหรือไม่ [FAQ-044] สาเหตุที่พบบ่อยคือฐานข้อมูลต้นทางล็อกตารางระหว่างสำรองข้อมูล ให้เลื่อนเวลางานออกไป 1 ชั่วโมง [FAQ-044]" } },
 { q: { zh: "可以遠端幫客戶重灌整台系統嗎？", en: "Can we remotely reinstall the client's whole system?", th: "เราติดตั้งระบบใหม่ทั้งเครื่องให้ลูกค้าจากระยะไกลได้ไหม" },
   a: { zh: "部門 FAQ 目前沒有這筆記錄。建議到 FAQ 總表新增這個問題，先確認服務範圍與風險再回覆客戶。",
        en: "The department FAQ has no record of this yet. Please add the question to the FAQ list and confirm the service scope and risks before replying to the client.",
        th: "FAQ ของแผนกยังไม่มีบันทึกเรื่องนี้ แนะนำให้เพิ่มคำถามนี้ในรายการ FAQ และยืนยันขอบเขตบริการและความเสี่ยงก่อนตอบลูกค้า" }, none: true }
);
