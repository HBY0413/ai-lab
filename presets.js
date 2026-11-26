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
    zh: `華星科技有限公司的林小美小姐來信，說儀表板從昨天開始資料沒有更新。
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
    zh: `宏達物流股份有限公司陳志明經理來電：升級停機時間要改到下週六晚上。
連絡手機 0933-123-456，另一位窗口張美玲小姐的信箱是 meiling.chang@example.com。`,
    en: `Mr. Kevin Chen from Hongda Logistics Co., Ltd. called: the upgrade downtime should move to next Saturday night.
Mobile 0933-123-456. The other contact, Ms. Mei Chang, can be reached at mei.chang@example.com.`,
    th: `คุณวิชัย มั่นคง จากบริษัท ฮงต้าโลจิสติกส์ จำกัด โทรมาแจ้งว่าขอเลื่อนเวลาหยุดระบบเพื่ออัปเกรดเป็นคืนวันเสาร์หน้า
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
公司名稱：遠景資訊股份有限公司，聯絡信箱 datong.lee@example.com，月底前需要。`,
    en: `Applicant Mr. Daniel Lee (ID B234567890) requests last month's system login records.
Company: Vision Info Corp., email daniel.lee@example.com. Needed by month end.`,
    th: `ผู้ยื่นคำขอ คุณประเสริฐ ดีงาม จากบริษัท วิชั่นอินโฟ จำกัด ขอดูบันทึกการเข้าสู่ระบบของเดือนที่แล้ว
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
