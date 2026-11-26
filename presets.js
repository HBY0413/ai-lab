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
    zh: `鼎新電子股份有限公司的黃俊傑先生反映，早上連續輸錯密碼後帳號被鎖住，影響整個部門結帳。
請盡快回電 0918-222-333，或寄信到 junjie.huang@example.com。`,
    en: `Mr. Jason Huang from Dingxin Electronics Co., Ltd. reports his account was locked this morning after several wrong passwords, blocking his department's month-end closing.
Please call back on 0918-222-333 or email jason.huang@example.com as soon as possible.`,
    th: `คุณสุดา วงศ์ทอง จากบริษัท ดิงซินอิเล็กทรอนิกส์ จำกัด แจ้งว่าเช้านี้ใส่รหัสผ่านผิดหลายครั้งจนบัญชีถูกล็อก ทำให้ทั้งแผนกปิดบัญชีไม่ได้
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
    zh: `致遠系統有限公司採購部吳佩珊小姐詢問：明年一月授權到期，想先拿續約報價。
請寄到 peishan.wu@example.com，並副本給主管周建宏協理。`,
    en: `Ms. Grace Wu from Zhiyuan Systems Ltd. (purchasing) asks for a renewal quote: their licence expires next January.
Please send it to grace.wu@example.com and cc her manager, Mr. Henry Chou.`,
    th: `คุณพิมพ์ชนก รุ่งเรือง จากบริษัท จื้อหยวนซิสเต็มส์ จำกัด ฝ่ายจัดซื้อ ขอใบเสนอราคาต่ออายุ เพราะไลเซนส์จะหมดอายุเดือนมกราคมปีหน้า
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
    zh: `明天早上 9 點，工程師到客戶遠東紡織股份有限公司機房做保養，現場聯絡人是趙文華先生，手機 0922-555-666。
門禁需要提前登記工程師身分證字號：A198765432。`,
    en: `Tomorrow at 9 a.m. an engineer goes to Fareast Textile Co., Ltd. for on-site maintenance. The on-site contact is Mr. Peter Chao, mobile 0922-555-666.
Site access must be registered in advance with the engineer's ID: A198765432.`,
    th: `พรุ่งนี้ 9 โมงเช้า วิศวกรต้องไปบำรุงรักษาห้องเซิร์ฟเวอร์ที่บริษัท ฟาร์อีสท์เท็กซ์ไทล์ จำกัด ผู้ติดต่อหน้างานคือคุณธนา ใจกล้า โทร 092-555-6666
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
