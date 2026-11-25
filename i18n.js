/* Language layer for AI Lab: zh-Hant (base), English, Thai.
   Choice is remembered (localStorage, or window.name when storage is blocked). */
(function(){
"use strict";
const LANGS=[["zh","中文"],["en","EN"],["th","ไทย"]];
function readStore(){
  try{const v=localStorage.getItem("ailab.lang");if(v)return v}catch(e){}
  try{const o=JSON.parse(window.name||"{}");if(o&&o.lang)return o.lang}catch(e){}
  return null;
}
function guess(){const n=(navigator.language||"zh").toLowerCase();if(n.startsWith("zh"))return"zh";if(n.startsWith("th"))return"th";return"en"}
let lang=readStore()||guess();if(!LANGS.some(l=>l[0]===lang))lang="zh";
let skip=false;try{const o=JSON.parse(window.name||"{}");skip=!!o.skipIntro;if(skip){o.skipIntro=false;window.name=JSON.stringify(o)}}catch(e){}
document.documentElement.lang=lang==="zh"?"zh-Hant":lang;
document.documentElement.dataset.lang=lang;

const D={
/* ---------- carousel / home ---------- */
"title":{zh:"AI 應用實驗室",en:"AI Application Lab",th:"ห้องแล็บแอปพลิเคชัน AI"},
"tabs.aria":{zh:"主題",en:"Topics",th:"หัวข้อ"},
"status.connecting":{zh:"正在連接 AI…",en:"Connecting to AI…",th:"กำลังเชื่อมต่อ AI…"},
"status.on":{zh:"AI 已連線：實驗台會即時呼叫 Claude",en:"AI connected: the benches call Claude live",th:"เชื่อมต่อ AI แล้ว: แต่ละสถานีทดลองเรียกใช้ Claude แบบเรียลไทม์"},
"status.off":{zh:"目前環境未開啟即時 AI：實驗台顯示預先產生的範例結果",en:"Live AI is off here: benches show pre-generated sample results",th:"สภาพแวดล้อมนี้ไม่มี AI แบบเรียลไทม์: แสดงผลลัพธ์ตัวอย่างที่เตรียมไว้"},
"home.label":{zh:"首頁",en:"Home",th:"หน้าแรก"},
"home.h1":{zh:"把 AI 用進<em>真實工作流程</em>的 8 個實驗",en:"8 experiments that put AI into <em>real workflows</em>",th:"8 การทดลองที่นำ AI เข้าสู่<em>งานจริง</em>"},
"home.lede":{zh:"從文件、報告、知識庫，到 OCR 與資料治理，這裡收錄我實際做過的 AI 應用。每一項都附用途、做法與成效，實驗台可以直接輸入資料，交給 AI 當場處理。",
  en:"From documents, reports and knowledge bases to OCR and data governance, these are AI applications I have actually built. Each one shows its purpose, approach and results, and its bench lets you enter data and have AI process it on the spot.",
  th:"ตั้งแต่เอกสาร รายงาน คลังความรู้ ไปจนถึง OCR และการกำกับดูแลข้อมูล ที่นี่รวบรวมแอปพลิเคชัน AI ที่ผมทำจริง แต่ละรายการมีวัตถุประสงค์ วิธีการ และผลลัพธ์ และสามารถป้อนข้อมูลในสถานีทดลองให้ AI ประมวลผลได้ทันที"},
"home.swipe":{zh:"← 左右拖曳或滑動切換主題，也可以點下方任一卡片 <b>→</b>",en:"← Drag or swipe to switch topics, or tap any card below <b>→</b>",th:"← ลากหรือปัดเพื่อเปลี่ยนหัวข้อ หรือแตะการ์ดด้านล่าง <b>→</b>"},
"home.index":{zh:"實驗目錄",en:"Experiments",th:"รายการการทดลอง"},
"demos.label":{zh:"AI 檢測 Demo",en:"AI inspection demo",th:"เดโมตรวจจับด้วย AI"},
"demos.eyebrow":{zh:"AI 影像檢測 Demo · 可直接操作",en:"AI visual inspection demo · hands-on",th:"เดโมตรวจจับภาพด้วย AI · ทดลองใช้ได้จริง"},
"demos.h":{zh:"從訓練到判讀，一個完整可操作的 AI 檢測流程",en:"From training to diagnosis: a complete AI inspection flow you can run",th:"ตั้งแต่ฝึกโมเดลจนถึงวิเคราะห์ผล: ขั้นตอนตรวจจับด้วย AI ที่ลองใช้ได้ครบ"},
"demo1.role":{zh:"製造業 AI 視覺／AOI 應用",en:"AI vision / AOI for manufacturing",th:"AI Vision / AOI สำหรับงานผลิต"},
"demo1.t":{zh:"PCB 外觀瑕疵 AI 檢測站",en:"PCB Defect AI Inspection Station",th:"สถานีตรวจจับตำหนิ PCB ด้วย AI"},
"demo1.p":{zh:"只用良品訓練異常偵測模型，看熱力圖、調門檻值、自己畫瑕疵考模型，再請 Claude 判讀製程原因。",en:"Train an anomaly model on good boards only, inspect heatmaps, tune the threshold, draw your own defects to test it, then ask Claude for the likely process cause.",th:"ฝึกโมเดลตรวจจับความผิดปกติด้วยบอร์ดดีเท่านั้น ดูฮีตแมป ปรับเกณฑ์ วาดตำหนิเองเพื่อทดสอบ แล้วให้ Claude วิเคราะห์สาเหตุในกระบวนการผลิต"},
"demo.go":{zh:"進入 Demo →",en:"Open demo →",th:"เปิดเดโม →"},
"demo.soon":{zh:"製作中",en:"In progress",th:"กำลังพัฒนา"},
"demo2.role":{zh:"產線數據 × AI 分析",en:"Line data × AI analysis",th:"ข้อมูลสายการผลิต × การวิเคราะห์ด้วย AI"},
"demo2.t":{zh:"PCB 產線即時儀表板＋AI 分析助手",en:"Live PCB Line Dashboard + AI Analyst",th:"แดชบอร์ดสายการผลิต PCB แบบเรียลไทม์ + ผู้ช่วยวิเคราะห์ AI"},
"demo2.p":{zh:"串接 MES、IoT、SPC、AOI、客訴 5 個資料來源，點紅燈由 AI 追根因並產生 8D 草稿。",en:"Joins 5 sources (MES, IoT, SPC, AOI, complaints); click a red light and AI traces the root cause and drafts an 8D report.",th:"เชื่อม 5 แหล่งข้อมูล (MES, IoT, SPC, AOI, ข้อร้องเรียน) คลิกไฟแดงแล้ว AI จะหาสาเหตุรากและร่างรายงาน 8D"},
"demo3.role":{zh:"AI 導入／AI Agent 應用工程師",en:"AI adoption / AI Agent application engineer",th:"การนำ AI มาใช้ / วิศวกรแอปพลิเคชัน AI Agent"},
"demo3.t":{zh:"企業 Agent 工作台",en:"Enterprise Agent Workbench",th:"เวิร์กเบนช์ Agent สำหรับองค์กร"},
"demo3.p":{zh:"從需求盤點、Skill 設計、治理關卡到成效量測，完整走一次 AI Agent 導入。",en:"A full AI Agent rollout: needs inventory, skill design, governance gates and impact measurement.",th:"เส้นทางนำ AI Agent มาใช้ครบวงจร: สำรวจความต้องการ ออกแบบ Skill จุดกำกับดูแล และวัดผล"},
"footer.note":{zh:"工作相關的資料一律使用去識別化的模擬資料。AI 由 Claude 即時執行；在未開啟 AI 的環境，實驗台會改顯示預先產生的範例結果，並清楚標示。",en:"All work-related data is de-identified mock data. AI runs live on Claude; where live AI is unavailable, benches show clearly labelled pre-generated samples.",th:"ข้อมูลที่เกี่ยวกับงานทั้งหมดเป็นข้อมูลจำลองที่ปกปิดตัวตนแล้ว AI ทำงานแบบเรียลไทม์ผ่าน Claude หากไม่มี AI แบบเรียลไทม์ สถานีทดลองจะแสดงผลลัพธ์ตัวอย่างที่ระบุไว้ชัดเจน"},
/* section labels & bench */
"cue":{zh:"向下捲動進入 · SCROLL TO ENTER",en:"SCROLL TO ENTER",th:"เลื่อนลงเพื่อเข้า · SCROLL TO ENTER"},
"proj.open":{zh:"開啟網站",en:"Open live site",th:"เปิดเว็บไซต์"},
"proj.see":{zh:"看實驗",en:"See the experiment",th:"ดูการทดลอง"},
"card.n":{zh:"Scott H. 的作品集",en:"Scott H. · Portfolio",th:"พอร์ตโฟลิโอของ Scott H."},
"card.p":{zh:"這份作品集收錄我已經上線的 AI Agent 應用，也包括用 AI 開發的工具與作品，以及一個可以直接操作的 AI 影像檢測 Demo。每個案例都從痛點講起，附上實際產出的畫面；走進實驗室，就能親手操作。",en:"This portfolio gathers the AI agent applications I have put into production, along with tools and projects I built with AI and a hands-on AI visual inspection demo. Each case starts from the pain point and shows real output. Step into the lab to try them yourself.",th:"พอร์ตโฟลิโอนี้รวบรวม AI Agent ที่ผมนำไปใช้งานจริง รวมถึงเครื่องมือและผลงานที่พัฒนาด้วย AI และเดโมตรวจจับภาพด้วย AI ที่ทดลองใช้ได้จริง ทุกเคสเริ่มจากปัญหาและแสดงผลลัพธ์จริง เดินเข้าห้องแล็บเพื่อทดลองใช้ได้ด้วยตัวเอง"},
"card.mk":{zh:"帶來的效益",en:"Impact so far",th:"ผลลัพธ์ที่ได้"},
"ev.run":{zh:"執行過程",en:"How it runs",th:"ขั้นตอนการทำงาน"},
"ev.runNote":{zh:"以模擬資料重現一次 Skill 的執行過程；公司、客戶與內部路徑都已移除。畫面文字為中文。",en:"A replay of one skill run on mock data, with company, client and internal path names removed. On-screen text is in Chinese.",th:"การจำลองการทำงานของ Skill หนึ่งรอบด้วยข้อมูลจำลอง ตัดชื่อบริษัท ลูกค้า และพาธภายในออกแล้ว ข้อความบนหน้าจอเป็นภาษาจีน"},
"hint.drag":{zh:"可拖曳",en:"Drag",th:"ลากได้"},
"blk.what":{zh:"這是什麼",en:"What it is",th:"นี่คืออะไร"},
"blk.pain":{zh:"為了解決什麼痛點",en:"The pain it solves",th:"ปัญหาที่แก้"},
"blk.gain":{zh:"帶來的效益",en:"What it delivered",th:"ผลลัพธ์ที่ได้"},
"blk.look":{zh:"實際樣貌",en:"What it really looks like",th:"หน้าตาจริง"},
"blk.out":{zh:"實際產出",en:"Real output",th:"ผลงานจริง"},
"blk.case":{zh:"痛點與解法",en:"Problem & solution",th:"ปัญหาและทางแก้"},
"blk.res":{zh:"成效與技術",en:"Results & tech",th:"ผลลัพธ์และเทคโนโลยี"},
"blk.lab":{zh:"親手試試（Live Lab）",en:"Try it yourself (Live Lab)",th:"ลองใช้เอง (Live Lab)"},
"sh.title":{zh:"AI 截圖判讀台",en:"AI screenshot reader",th:"เครื่องอ่านภาพหน้าจอด้วย AI"},
"sh.hint":{zh:"選一張模擬的現場截圖（或上傳你自己的），AI 會看懂畫面、對到檢查項目、讀出數值，直接排成紀錄簡報的一頁，並提醒有哪裡怪怪的。最後一張是故意沒截完整的例子。",en:"Pick a mock on-site screenshot (or upload your own). The AI reads the screen, maps it to a check item, reads the values, lays it out as a page of the record deck and flags anything that looks off. The last one is deliberately cut off.",th:"เลือกภาพหน้าจอจำลองจากหน้างาน (หรืออัปโหลดของคุณเอง) AI จะอ่านหน้าจอ จับคู่กับรายการตรวจ และเขียนคำอธิบายจากค่าที่เห็น ซึ่งเป็นส่วนที่วิศวกรไม่ต้องพิมพ์เองอีกต่อไป"},
"sh.pick":{zh:"現場截圖（模擬資料）",en:"On-site screenshots (mock data)",th:"ภาพหน้าจอหน้างาน (ข้อมูลจำลอง)"},
"sh.upload":{zh:"上傳截圖",en:"Upload",th:"อัปโหลด"},
"sh.run":{zh:"讓 AI 判讀",en:"Let AI read it",th:"ให้ AI อ่าน"},
"sh.reading":{zh:"AI 判讀中…",en:"Reading the screenshot…",th:"กำลังอ่านภาพ…"},
"sh.noai":{zh:"這個環境無法即時呼叫 AI 看圖，先顯示預先產生的結果。",en:"Live image reading isn't available here, so this shows a pre-generated result.",th:"ที่นี่ใช้ AI อ่านภาพแบบเรียลไทม์ไม่ได้ จึงแสดงผลที่สร้างไว้ล่วงหน้า"},
"sh.noex":{zh:"上傳的截圖沒有範例結果，需要即時 AI 才能判讀。",en:"There's no pre-generated result for an uploaded image; it needs live AI.",th:"ภาพที่อัปโหลดไม่มีผลตัวอย่าง ต้องใช้ AI แบบเรียลไทม์"},
"sh.fail":{zh:"判讀失敗，先顯示範例結果。",en:"Couldn't read it, showing the example instead.",th:"อ่านไม่สำเร็จ แสดงผลตัวอย่างแทน"},
"lab.done":{zh:"完成。可以換一張截圖再試。",en:"Done. Try another screenshot.",th:"เสร็จแล้ว ลองภาพอื่นได้"},
"sh.screen":{zh:"AI 判斷的畫面",en:"Screen detected",th:"หน้าจอที่ AI ระบุ"},
"sh.item":{zh:"對應檢查項目",en:"Check item",th:"รายการตรวจ"},
"sh.slide":{zh:"產出的簡報頁",en:"Generated slide",th:"สไลด์ที่สร้าง"},
"sh.foot":{zh:"系統升級紀錄手冊 · AI 生成",en:"Upgrade record · AI generated",th:"บันทึกการอัปเกรด · สร้างโดย AI"},
"sh.warnT":{zh:"需要你確認的地方",en:"Please check",th:"สิ่งที่ควรตรวจ"},
"sh.okT":{zh:"檢查結果",en:"Check result",th:"ผลการตรวจ"},
"sh.ok":{zh:"沒有發現問題，這頁可以直接使用。",en:"Nothing looks off; this page is ready to use.",th:"ไม่พบปัญหา ใช้หน้านี้ได้เลย"},
"lg.hint":{zh:"這是 LineageGoblin 實際使用的資料（L1Justice 官方資料庫）。打中文或英文、拼錯或只打一部分都能找到；點藍字可以看怪物掉落、商人販售；打「@地圖名」看那張地圖有哪些怪。",en:"This runs on LineageGoblin's real data (the L1Justice database). Type Chinese or English, partial or misspelled; click blue links to see monster drops and merchant stock; type @map to list a map's monsters.",th:"ทำงานบนข้อมูลจริงของ LineageGoblin (ฐานข้อมูล L1Justice) พิมพ์จีนหรืออังกฤษ สะกดผิดหรือพิมพ์บางส่วนก็หาเจอ คลิกลิงก์สีฟ้าเพื่อดูของดรอปและร้านค้า พิมพ์ @ชื่อแผนที่ เพื่อดูมอนสเตอร์"},
"lg.loading":{zh:"載入道具資料中…",en:"Loading item data…",th:"กำลังโหลดข้อมูล…"},
"lg.fail":{zh:"資料載入失敗，請重新整理。",en:"Couldn't load the data; please refresh.",th:"โหลดข้อมูลไม่สำเร็จ กรุณารีเฟรช"},
"lg.fuzzy":{zh:"沒有完全相符，以下是模糊比對結果：",en:"No exact match; closest fuzzy matches:",th:"ไม่ตรงทั้งหมด ผลที่ใกล้เคียง:"},
"lg.stats":{zh:"素質",en:"Stats",th:"ค่าสถานะ"},
"lg.drops":{zh:"掉落的怪物",en:"Dropped by",th:"ดรอปจาก"},
"lg.sells":{zh:"有賣的商人",en:"Sold by",th:"ร้านที่ขาย"},
"lg.opens":{zh:"可從這些道具開出",en:"Opened from",th:"เปิดได้จาก"},
"lg.maps":{zh:"出沒地圖",en:"Found on",th:"พบที่"},
"lg.monDrops":{zh:"會掉的道具",en:"Drops",th:"ของดรอป"},
"lg.merchSells":{zh:"販售的道具",en:"Stock",th:"สินค้า"},
"lg.meta":{zh:"資料：道具 {i}、怪物 {m}、掉落 {d} 筆、商人販售 {s} 筆（2026/11/11 抓取）。查詢在你的瀏覽器裡離線完成。",en:"Data: {i} items, {m} monsters, {d} drops, {s} merchant listings (fetched 2026/11/11). Lookups run offline in your browser.",th:"ข้อมูล: ไอเท็ม {i} มอนสเตอร์ {m} ดรอป {d} รายการขาย {s} (ดึงเมื่อ 2026/11/11) ค้นหาแบบออฟไลน์ในเบราว์เซอร์"},
"ev.runNoteOcr":{zh:"依工具 README 的操作流程重現，道具、怪物與商人資料取自工具實際使用的資料庫；畫面是示意，不是程式的實際介面。",en:"Re-created from the tool's README; item, monster and merchant data come from the database the tool actually uses. The screens are illustrative, not the program's real interface.",th:"จำลองตามขั้นตอนใน README ของเครื่องมือ ข้อมูลไอเท็ม มอนสเตอร์ และร้านค้ามาจากฐานข้อมูลที่เครื่องมือใช้จริง หน้าจอเป็นภาพประกอบ ไม่ใช่หน้าตาจริงของโปรแกรม"},
"card.k":{zh:"AI 導入 · 資料 · 系統整合",en:"AI adoption · Data · Systems integration",th:"การนำ AI มาใช้ · ข้อมูล · บูรณาการระบบ"},
"card.role":{zh:"11 年 IT 系統與資料經驗，現在專注把 AI 導入真實工作流程，做成可上線、可治理的 AI Agent。",en:"11+ years in IT systems and data, now focused on bringing AI into real workflows as governed AI agents that actually go live.",th:"ประสบการณ์ระบบไอทีและข้อมูลกว่า 11 ปี ปัจจุบันมุ่งนำ AI เข้าสู่งานจริง เป็น AI Agent ที่ใช้งานได้จริงและกำกับดูแลได้"},
"card.m1":{zh:"<b>1 天 → 30 分</b>紀錄簡報製作時間縮短約 94%",en:"<b>1 day → 30 min</b>record-deck time cut by about 94%",th:"<b>1 วัน → 30 นาที</b>ลดเวลาทำสไลด์บันทึกลงราว 94%"},
"card.m2":{zh:"<b>半天 → 15 分</b>主管月會報告簡報製作時間縮短約 94%",en:"<b>Half a day → 15 min</b>managers' monthly report deck, about 94% faster",th:"<b>ครึ่งวัน → 15 นาที</b>ลดเวลาทำสไลด์รายงานประจำเดือนของหัวหน้าลงราว 94%"},
"card.m3":{zh:"<b>5 支</b>AI Agent Skill 上線",en:"<b>5</b>AI agent skills live",th:"<b>5</b>AI Agent Skill ใช้งานจริง"},
"card.quick":{zh:"1 分鐘看重點",en:"1-minute overview",th:"ภาพรวม 1 นาที"},
"card.lab":{zh:"進入實驗室看證據",en:"Enter the lab for proof",th:"เข้าห้องแล็บดูหลักฐาน"},
"sec.impact":{zh:"效益",en:"Impact",th:"ผลลัพธ์"},
"sec.pain":{zh:"痛點",en:"Pain point",th:"ปัญหา"},
"sec.solution":{zh:"解法",en:"Solution",th:"ทางแก้"},
"fz.textMode":{zh:"文字查詢",en:"Type to search",th:"ค้นด้วยข้อความ"},
"fz.scanMode":{zh:"畫面掃描（OCR）",en:"Scan screen (OCR)",th:"สแกนหน้าจอ (OCR)"},
"fz.scanBtn":{zh:"掃描辨識",en:"Scan & recognise",th:"สแกนและจดจำ"},
"fz.upload":{zh:"上傳截圖",en:"Upload screenshot",th:"อัปโหลดภาพหน้าจอ"},
"fz.sampleImg":{zh:"範例：遊戲道具說明框",en:"Sample: in-game item tooltip",th:"ตัวอย่าง: กล่องคำอธิบายไอเท็มในเกม"},
"fz.scanning":{zh:"Claude 正在讀取畫面文字…",en:"Claude is reading the screen…",th:"Claude กำลังอ่านข้อความบนหน้าจอ…"},
"fz.scanRead":{zh:"OCR 讀到：",en:"OCR read: ",th:"OCR อ่านได้: "},
"fz.scanNoAI":{zh:"此環境沒有即時 AI，顯示範例截圖預先辨識的文字。",en:"No live AI here; showing the text pre-read from the sample screenshot.",th:"ไม่มี AI แบบเรียลไทม์ จึงแสดงข้อความที่อ่านไว้ล่วงหน้าจากภาพตัวอย่าง"},
"fz.scanNeedSample":{zh:"上傳的截圖需要即時 AI 才能辨識，已改用範例截圖。",en:"Uploaded screenshots need live AI; using the sample instead.",th:"ภาพที่อัปโหลดต้องใช้ AI แบบเรียลไทม์ จึงใช้ภาพตัวอย่างแทน"},
"fz.scanFail":{zh:"辨識失敗，請換一張比較清楚的截圖。",en:"Couldn't read it; try a clearer screenshot.",th:"อ่านไม่สำเร็จ ลองใช้ภาพที่ชัดกว่านี้"},
"sec.purpose":{zh:"用途",en:"Purpose",th:"วัตถุประสงค์"},
"sec.how":{zh:"做法",en:"How it works",th:"วิธีการ"},
"sec.effect":{zh:"成效",en:"Results",th:"ผลลัพธ์"},
"sec.tech":{zh:"技術",en:"Tech",th:"เทคโนโลยี"},
"lab.ai":{zh:"AI 實驗台",en:"AI bench",th:"สถานีทดลอง AI"},
"lab.gov":{zh:"去識別化實驗台",en:"De-identification bench",th:"สถานีปกปิดข้อมูลส่วนบุคคล"},
"lab.fuzzy":{zh:"模糊比對實驗台",en:"Fuzzy-matching bench",th:"สถานีจับคู่แบบคลุมเครือ"},
"lab.projects":{zh:"作品清單",en:"Projects",th:"รายการผลงาน"},
"lab.docs":{zh:"查看知識庫文件（3 份模擬 SOP）",en:"View knowledge-base documents (3 mock SOPs)",th:"ดูเอกสารคลังความรู้ (SOP จำลอง 3 ฉบับ)"},
"lab.question":{zh:"你的問題",en:"Your question",th:"คำถามของคุณ"},
"lab.input":{zh:"輸入資料（可直接修改）",en:"Input (editable)",th:"ข้อมูลนำเข้า (แก้ไขได้)"},
"lab.masked":{zh:"遮罩後（實際送給 AI 的內容）",en:"Masked (what is actually sent to AI)",th:"หลังปกปิด (สิ่งที่ส่งให้ AI จริง)"},
"lab.example":{zh:"看範例結果",en:"Show sample",th:"ดูผลลัพธ์ตัวอย่าง"},
"tag.example":{zh:"範例結果（預先產生）",en:"Sample result (pre-generated)",th:"ผลลัพธ์ตัวอย่าง (สร้างไว้ล่วงหน้า)"},
"tag.live":{zh:"Claude 即時輸出",en:"Claude, live",th:"Claude แบบเรียลไทม์"},
"note.noai":{zh:"此環境沒有即時 AI，已顯示範例結果。",en:"No live AI here, showing the sample result.",th:"ไม่มี AI แบบเรียลไทม์ จึงแสดงผลลัพธ์ตัวอย่าง"},
"note.empty":{zh:"請先輸入內容。",en:"Please enter something first.",th:"กรุณาป้อนข้อมูลก่อน"},
"note.busy":{zh:"AI 處理中…",en:"AI is working…",th:"AI กำลังประมวลผล…"},
"note.done":{zh:"完成。可以修改輸入再試一次。",en:"Done. Edit the input and try again.",th:"เสร็จแล้ว ลองแก้ไขข้อมูลแล้วทำอีกครั้งได้"},
"note.denied":{zh:"未授權使用 AI，已改顯示範例結果。",en:"AI access was not granted, showing the sample result.",th:"ไม่ได้รับอนุญาตให้ใช้ AI จึงแสดงผลลัพธ์ตัวอย่าง"},
"note.rate":{zh:"使用次數暫時達上限，請稍後再試。",en:"Usage limit reached for now, please try again later.",th:"ถึงขีดจำกัดการใช้งานชั่วคราว กรุณาลองใหม่ภายหลัง"},
"note.fail":{zh:"AI 暫時無法回應，已改顯示範例結果。",en:"AI is unavailable right now, showing the sample result.",th:"AI ไม่สามารถตอบได้ในขณะนี้ จึงแสดงผลลัพธ์ตัวอย่าง"},
/* fuzzy */
"fz.read":{zh:"OCR 讀到的文字",en:"Text read by OCR",th:"ข้อความที่ OCR อ่านได้"},
"fz.enter":{zh:"請輸入文字。",en:"Please enter some text.",th:"กรุณาป้อนข้อความ"},
"fz.clean":{zh:"清理後",en:"Cleaned",th:"หลังทำความสะอาด"},
"fz.result":{zh:"比對結果",en:"Best match",th:"ผลการจับคู่"},
"fz.none":{zh:"找不到相符道具",en:"No matching item",th:"ไม่พบไอเท็มที่ตรงกัน"},
"fz.empty":{zh:"（空）",en:"(empty)",th:"(ว่าง)"},
"fz.enchant":{zh:"移除強化值",en:"enchant level removed",th:"ลบค่าตีบวกแล้ว"},
"fz.blessedFound":{zh:"偵測到祝福",en:"blessed detected",th:"พบสถานะ blessed"},
"fz.cursedFound":{zh:"偵測到受詛咒",en:"cursed detected",th:"พบสถานะ cursed"},
"fz.blessed":{zh:"（祝福）",en:" (blessed)",th:" (blessed)"},
"fz.cursed":{zh:"（受詛咒）",en:" (cursed)",th:" (cursed)"},
"sep":{zh:"、",en:", ",th:", "},
/* governance */
"gov.count":{zh:"已遮罩 {n} 項：",en:"{n} items masked: ",th:"ปกปิดแล้ว {n} รายการ: "},
"gov.none":{zh:"無",en:"none",th:"ไม่มี"},
"gov.local":{zh:"（對照表只留在本機，不外送）",en:" (the lookup table stays in your browser and is never sent)",th:" (ตารางอ้างอิงอยู่ในเบราว์เซอร์เท่านั้น ไม่ถูกส่งออก)"},
"code.email":{zh:"Email ",en:"Email ",th:"อีเมล "},
"code.phone":{zh:"電話",en:"Phone ",th:"โทรศัพท์ "},
"code.id":{zh:"身分證",en:"ID ",th:"เลขบัตร "},
"code.client":{zh:"客戶",en:"Client ",th:"ลูกค้า "},
"code.person":{zh:"人員",en:"Person ",th:"บุคคล "},
/* AI output language */
"out.note":{zh:"",en:"\n\nIMPORTANT: Write the entire answer in English, including table headers and section headings.",th:"\n\nสำคัญ: เขียนคำตอบทั้งหมดเป็นภาษาไทย รวมถึงหัวตารางและหัวข้อ"},
/* ---------- 3D house ---------- */
"ld.sub":{zh:"AI 應用實驗室",en:"AI Application Lab",th:"ห้องแล็บแอปพลิเคชัน AI"},
"ld.msg":{zh:"正在佈置實驗室",en:"Getting the lab ready",th:"กำลังจัดห้องแล็บ"},
"ld.done":{zh:"打開實驗室大門",en:"Opening the lab doors",th:"กำลังเปิดประตูห้องแล็บ"},
"menu":{zh:"網站地圖",en:"Site map",th:"แผนผังเว็บไซต์"},
"entry.h":{zh:"AI 導入 &amp; <u>AI 產品開發</u>",en:"AI adoption &amp; <u>AI product building</u>",th:"การนำ AI มาใช้ &amp; <u>การสร้างผลิตภัณฑ์ AI</u>"},
"entry.side":{zh:"點門進入 · Click to enter",en:"Click the door to enter",th:"คลิกที่ประตูเพื่อเข้า · Click to enter"},
"entry.badge":{zh:"CLICK TO ENTER · 點擊進入 ·",en:"CLICK TO ENTER · STEP INSIDE ·",th:"CLICK TO ENTER · คลิกเพื่อเข้า ·"},
"entry.explore":{zh:"看看門口",en:"Explore the entrance",th:"ชมทางเข้า"},
"entry.enter":{zh:"進入實驗室",en:"Enter the lab",th:"เข้าห้องแล็บ"},
"hint.k":{zh:"Tips",en:"Tips",th:"Tips"},
"hint.t":{zh:"點任一塊標示牌或物件，就能打開那個主題；拖曳可以轉動視角，← → 逐一參觀，Esc 回到房間。",en:"Click any sign or object to open that topic. Drag to look around, use ← → to tour, Esc to step back.",th:"คลิกป้ายหรือวัตถุใดก็ได้เพื่อเปิดหัวข้อนั้น ลากเพื่อหมุนมุมมอง ใช้ ← → เพื่อเดินชม และ Esc เพื่อกลับ"},
"cap.open":{zh:"打開",en:"Open",th:"เปิด"},
"badge":{zh:"OPEN TO WORK · AI 導入 · AI AGENT · ",en:"OPEN TO WORK · AI ADOPTION · AI AGENT · ",th:"OPEN TO WORK · AI · AI AGENT · "},
"panel.close":{zh:"返回房間 Esc",en:"Back to room  Esc",th:"กลับห้อง Esc"},
"panel.about":{zh:"關於這間實驗室",en:"About this lab",th:"เกี่ยวกับห้องแล็บนี้"},
"menu.close":{zh:"關閉 Esc",en:"Close  Esc",th:"ปิด Esc"},
"menu.k":{zh:"網站地圖",en:"Site map",th:"แผนผังเว็บไซต์"},
"menu.about":{zh:"關於",en:"About",th:"เกี่ยวกับ"},
"menu.aboutSub":{zh:"8 個實驗總覽與說明",en:"Overview of all 8 experiments",th:"ภาพรวมของ 8 การทดลอง"},
"menu.door":{zh:"回到門口",en:"Back to the door",th:"กลับไปที่ประตู"},
"menu.doorSub":{zh:"重新走一次入口",en:"Walk in again",th:"เดินเข้ามาใหม่อีกครั้ง"},
"lang.aria":{zh:"切換語言",en:"Change language",th:"เปลี่ยนภาษา"},
/* vision page */
"v.title":{zh:"PCB 瑕疵 AI 檢測站",en:"PCB Defect AI Inspection",th:"ตรวจจับตำหนิ PCB ด้วย AI"}
};

/* station names: wall/floor arc label, nav label */
const STN={
  demos:{zh:["AI 檢測 DEMO","AI Demo"],en:["AI INSPECTION DEMO","AI Demo"],th:["เดโมตรวจจับด้วย AI","AI เดโม"]},
  manual:{zh:["AI 紀錄簡報","AI 簡報"],en:["AI RECORD DECKS","AI Decks"],th:["AI สไลด์บันทึก","AI สไลด์"]},
  report:{zh:["AI 月會報告","AI 報告"],en:["AI MONTHLY REPORT","AI Report"],th:["AI รายงานรายเดือน","AI รายงาน"]},
  maint:{zh:["AI 檔案歸檔","AI 歸檔"],en:["AI FILING RULES","AI Filing"],th:["AI จัดเก็บไฟล์","AI จัดเก็บ"]},
  kb:{zh:["AI FAQ 問答","AI FAQ"],en:["AI FAQ ASSISTANT","AI FAQ"],th:["AI ถาม-ตอบ FAQ","AI FAQ"]},
  cases:{zh:["AI 學習稽核","AI 稽核"],en:["AI LEARNING AUDIT","AI Audit"],th:["AI ตรวจสอบบทเรียน","AI ตรวจสอบ"]},
  ocr:{zh:["AI 開發 OCR","AI OCR"],en:["AI-BUILT OCR","AI OCR"],th:["OCR สร้างด้วย AI","AI OCR"]},
  gov:{zh:["AI 導入治理","AI 治理"],en:["AI GOVERNANCE","AI Governance"],th:["กำกับดูแล AI","AI กำกับ"]},
  build:{zh:["AI 協作開發","AI 作品"],en:["AI-BUILT PROJECTS","AI Builds"],th:["ผลงานสร้างด้วย AI","AI ผลงาน"]}
};

/* ---------- experiment content overlays (zh is the base in index.html) ---------- */
const X={en:{},th:{}};
X.en.manual={facet:"Document automation",title:"Upgrade Record Manual Generator",gain:"~8 hours → <strong>30 minutes</strong>",
  purpose:"After upgrading a client's system on site, engineers leave only screenshots and short notes. This agent first reviews the draft against a checklist, flags typos and notes that don't match their screenshots, stops to ask a person when unsure, and then outputs the formal manual in the company template.",
  steps:["Read the on-site draft (screenshots + short notes)","Review it item by item against a YAML checklist and list questions for a person to confirm","Apply the company deck template: cover, summary, section dividers and step slides"],
  effect:{type:"bar",before:["Manual",480,"~8 hours"],after:["Agent",30,"30 min"],note:"Went live after 14 iterations"},
  tech:["Agent Skill","Python → PPTX","YAML rules","Human checkpoint"],
  lab:{hint:"Paste the step notes from an on-site draft. AI reviews them and turns them into a formal step outline.",
    input:`01 Log in to Tablaeu Server admin page
02 Stop services tsm stop
03 Run installer screenshot shows version 2025.1
04 Install done confirm version 2025.3
05 tsm start to start services
06 Check background processes all ok`,
    btn:"Review & format",
    example:`#### Review questions
- Step 01: ==Tablaeu== should be "Tableau" (spelling).
- Step 03 screenshot shows ==2025.1== but step 04 says the upgrade finished at ==2025.3==. The versions don't match; please confirm which version was installed and whether the screenshot is correct.
- Step 06 "all ok" doesn't say how it was checked. Add the command (e.g. tsm status -v) or a screenshot.
#### Formal step outline
| Step | Title | Description |
|---|---|---|
| 1 | Log in to the admin page | Sign in to the Tableau Server admin page as an administrator. |
| 2 | Stop services | Run tsm stop to stop Tableau Server services. |
| 3 | Run the installer | Run the new installer to upgrade. (To confirm: screenshot shows 2025.1) |
| 4 | Confirm the version | Check the version number after installation. (To confirm: differs from step 3) |
| 5 | Start services | Run tsm start to start Tableau Server services. |
| 6 | Check background processes | Confirm all background processes are healthy. (To confirm: add how it was checked) |`}};
X.th.manual={facet:"เอกสารอัตโนมัติ",title:"ตัวสร้างคู่มือบันทึกการอัปเกรดระบบ",gain:"ประมาณ 8 ชม. → <strong>30 นาที</strong>",
  purpose:"หลังอัปเกรดระบบที่หน้างานลูกค้า วิศวกรมักเหลือเพียงภาพหน้าจอและหมายเหตุสั้น ๆ Agent นี้จะตรวจร่างตามเช็กลิสต์ก่อน หาคำผิดและหมายเหตุที่ไม่ตรงกับภาพหน้าจอ หากไม่แน่ใจจะหยุดถามคน จากนั้นจึงสร้างคู่มือฉบับทางการตามเทมเพลตของบริษัท",
  steps:["อ่านร่างจากหน้างาน (ภาพหน้าจอ + หมายเหตุสั้น)","ตรวจทีละข้อตามเช็กลิสต์ YAML และระบุจุดที่ต้องให้คนยืนยัน","ใช้เทมเพลตสไลด์ของบริษัท: หน้าปก สรุป หน้าแบ่งบท และหน้าขั้นตอน"],
  effect:{type:"bar",before:["คนทำ",480,"ประมาณ 8 ชม."],after:["Agent",30,"30 นาที"],note:"ใช้งานจริงหลังปรับปรุง 14 รอบ"},
  tech:["Agent Skill","Python สร้าง PPTX","กฎ YAML","จุดตรวจโดยคน"],
  lab:{hint:"วางหมายเหตุขั้นตอนจากร่างหน้างาน AI จะตรวจและจัดเป็นโครงร่างขั้นตอนฉบับทางการ",
    input:`01 ล็อกอินหน้าแอดมิน Tablaeu Server
02 หยุดเซอร์วิส tsm stop
03 รันตัวติดตั้ง ภาพหน้าจอแสดงเวอร์ชัน 2025.1
04 ติดตั้งเสร็จ ยืนยันเวอร์ชัน 2025.3
05 tsm start เปิดเซอร์วิส
06 ตรวจโปรเซสเบื้องหลัง ปกติทั้งหมด`,
    btn:"ตรวจและจัดรูปแบบ",
    example:`#### จุดที่ต้องตรวจสอบ
- ขั้นตอน 01: ==Tablaeu== ควรเป็น "Tableau" (สะกดผิด)
- ขั้นตอน 03 ภาพหน้าจอแสดง ==2025.1== แต่ขั้นตอน 04 ระบุว่าอัปเกรดเสร็จเป็น ==2025.3== เวอร์ชันไม่ตรงกัน กรุณายืนยันเวอร์ชันที่ติดตั้งจริงและภาพหน้าจอ
- ขั้นตอน 06 "ปกติทั้งหมด" ไม่ได้ระบุวิธีตรวจ ควรเพิ่มคำสั่ง (เช่น tsm status -v) หรือภาพหน้าจอ
#### โครงร่างขั้นตอนฉบับทางการ
| ขั้นตอน | หัวข้อ | คำอธิบาย |
|---|---|---|
| 1 | ล็อกอินหน้าแอดมิน | เข้าสู่หน้าแอดมิน Tableau Server ด้วยสิทธิ์ผู้ดูแลระบบ |
| 2 | หยุดเซอร์วิส | รัน tsm stop เพื่อหยุดเซอร์วิสของ Tableau Server |
| 3 | รันตัวติดตั้ง | รันตัวติดตั้งเวอร์ชันใหม่เพื่ออัปเกรด (รอยืนยัน: ภาพหน้าจอเป็น 2025.1) |
| 4 | ยืนยันเวอร์ชัน | ตรวจเลขเวอร์ชันหลังติดตั้ง (รอยืนยัน: ไม่ตรงกับขั้นตอน 3) |
| 5 | เปิดเซอร์วิส | รัน tsm start เพื่อเปิดเซอร์วิสของ Tableau Server |
| 6 | ตรวจโปรเซสเบื้องหลัง | ยืนยันว่าโปรเซสเบื้องหลังทั้งหมดทำงานปกติ (รอยืนยัน: เพิ่มวิธีตรวจ) |`}};

X.en.report={facet:"Automated reporting",title:"Monthly Meeting Report Generator",gain:"<strong>17 pages</strong> in one run",
  purpose:"Every month someone pulled ticket volumes, turnaround times and key incidents from the ticketing system and built the deck page by page. The agent reads the month's data, calculates the metrics, writes the highlights and lays everything into the fixed monthly report template.",
  steps:["Import the month's ticket data","Calculate volume, closure rate, average handling time and other metrics","Write highlights and exception notes, then lay them into the report template"],
  effect:{type:"kpi",items:[["17 pages","generated in one run"],["Manual → automated","how the report is made"]]},
  tech:["Agent Skill","Data aggregation","Summary generation"],
  lab:{hint:"Below are mock monthly ticket statistics. AI writes the meeting summary for management.",
    input:`Month,Category,Tickets,Closed,AvgHours
Oct,System error,42,40,3.5
Oct,Account access,65,65,0.8
Oct,Report request,18,12,26.0
Oct,Upgrade/maintenance,6,6,7.2
Sep,System error,30,30,4.1
Sep,Account access,61,61,0.9
Sep,Report request,15,13,20.5
Sep,Upgrade/maintenance,4,4,6.8`,
    btn:"Write summary",
    example:`#### This month at a glance
| Category | This month | vs last month | Closure rate | Avg hours |
|---|---|---|---|---|
| System error | 42 | +12 | 95% | 3.5 |
| Account access | 65 | +4 | 100% | 0.8 |
| Report request | 18 | +3 | 67% | 26.0 |
| Upgrade/maintenance | 6 | +2 | 100% | 7.2 |
| Total | 131 | +21 | 94% | — |
#### Key observations
- System errors rose by 12 tickets (+40%), the biggest increase this month.
- Report requests closed at only 67%, and average handling time grew from 20.5 to 26.0 hours.
- Account access has the most tickets but is fast and fully closed; the process is stable.
#### Recommended actions
- Investigate what the extra system errors have in common, e.g. a specific system or upgrade.
- Prioritise report requests and consider self-service reports to divert simple ones.`}};
X.th.report={facet:"รายงานอัตโนมัติ",title:"สร้างรายงานประชุมประจำเดือนอัตโนมัติ",gain:"สร้าง <strong>17 หน้า</strong> ในครั้งเดียว",
  purpose:"ทุกเดือนต้องดึงจำนวนเคส เวลาดำเนินการ และเหตุการณ์สำคัญจากระบบแจ้งงาน แล้วทำสไลด์ทีละหน้า Agent จะอ่านข้อมูลของเดือน คำนวณตัวชี้วัด เขียนสรุปประเด็นสำคัญ และจัดลงเทมเพลตรายงานประจำเดือน",
  steps:["นำเข้าข้อมูลเคสประจำเดือน","คำนวณจำนวนเคส อัตราปิดเคส เวลาดำเนินการเฉลี่ย และตัวชี้วัดอื่น","เขียนสรุปและคำอธิบายความผิดปกติ แล้วจัดลงเทมเพลตรายงาน"],
  effect:{type:"kpi",items:[["17 หน้า","สร้างในครั้งเดียว"],["คนทำ → อัตโนมัติ","วิธีทำรายงาน"]]},
  tech:["Agent Skill","รวบรวมข้อมูล","สร้างบทสรุป"],
  lab:{hint:"ด้านล่างคือสถิติเคสประจำเดือน (ข้อมูลจำลอง) AI จะเขียนสรุปการประชุมสำหรับผู้บริหาร",
    input:`เดือน,ประเภท,จำนวนเคส,ปิดแล้ว,ชั่วโมงเฉลี่ย
ต.ค.,ระบบขัดข้อง,42,40,3.5
ต.ค.,สิทธิ์บัญชี,65,65,0.8
ต.ค.,ขอรายงาน,18,12,26.0
ต.ค.,อัปเกรด/บำรุงรักษา,6,6,7.2
ก.ย.,ระบบขัดข้อง,30,30,4.1
ก.ย.,สิทธิ์บัญชี,61,61,0.9
ก.ย.,ขอรายงาน,15,13,20.5
ก.ย.,อัปเกรด/บำรุงรักษา,4,4,6.8`,
    btn:"สร้างสรุปการประชุม",
    example:`#### ภาพรวมเดือนนี้
| ประเภท | เดือนนี้ | เทียบเดือนก่อน | อัตราปิดเคส | ชั่วโมงเฉลี่ย |
|---|---|---|---|---|
| ระบบขัดข้อง | 42 | +12 | 95% | 3.5 |
| สิทธิ์บัญชี | 65 | +4 | 100% | 0.8 |
| ขอรายงาน | 18 | +3 | 67% | 26.0 |
| อัปเกรด/บำรุงรักษา | 6 | +2 | 100% | 7.2 |
| รวม | 131 | +21 | 94% | — |
#### ประเด็นสำคัญ
- ระบบขัดข้องเพิ่มขึ้น 12 เคส (+40%) เพิ่มมากที่สุดของเดือนนี้
- คำขอรายงานปิดได้เพียง 67% และเวลาเฉลี่ยเพิ่มจาก 20.5 เป็น 26.0 ชั่วโมง
- สิทธิ์บัญชีมีเคสมากที่สุด แต่ดำเนินการเร็วและปิดครบ กระบวนการมีเสถียรภาพ
#### ข้อเสนอแนะ
- ตรวจหาสาเหตุร่วมของระบบขัดข้องที่เพิ่มขึ้น เช่น เกี่ยวกับระบบหรือการอัปเกรดใด
- จัดลำดับความสำคัญคำขอรายงาน และพิจารณารายงานแบบบริการตนเองเพื่อแบ่งเบาภาระ`}};

X.en.maint={facet:"Structured records",title:"Maintenance Log Organizer",gain:"Free text → <strong>structured table</strong>",
  purpose:"Technicians write maintenance logs in casual language and inconsistent formats, which makes them hard to search or count later. The agent splits the free text into fixed fields, flags anomalies and next-service dates, and writes an importable table.",
  steps:["Read the casual maintenance notes","Extract date, equipment, task, result and next service","Flag anomalies and output a table in one standard format"],
  effect:{type:"kpi",items:[["6 fixed columns","one standard format"],["Auto-flagged anomalies","nothing slips through"]]},
  tech:["Agent Skill","Information extraction","Data normalization"],
  lab:{hint:"Paste a few casual maintenance notes. AI turns them into a table and flags anomalies.",
    input:`11/3 checked the server room this morning, DB host fan a bit noisy, cleaned the dust, look again next month
11/5 UPS battery test ok, discharged to 80% normally, retest in six months
11/12 backup host disk SMART warning, reallocated sectors increasing, asked vendor for a replacement quote
11/12 also checked the AC, 22°C normal`,
    btn:"Make the table",
    example:`| Date | Equipment | Task | Result | Status | Next service |
|---|---|---|---|---|---|
| 2026/11/03 | DB host | Fan cleaning | Fan noisy, dust cleaned | Watch | 2026/12/03 |
| 2026/11/05 | UPS | Battery discharge test | Discharged to 80%, normal | OK | 2027/05/05 |
| 2026/11/12 | Backup host | Disk health check | SMART warning, reallocated sectors rising | ==Anomaly== | — |
| 2026/11/12 | Server-room AC | Temperature check | 22°C, normal | OK | — |
#### Follow-up
- Backup host disk: vendor quote requested; confirm the replacement date and make sure backups are complete first.
- DB host fan: recheck in December and replace the fan if the noise continues.`}};
X.th.maint={facet:"ข้อมูลมีโครงสร้าง",title:"จัดระเบียบบันทึกการบำรุงรักษา",gain:"ข้อความอิสระ → <strong>ตารางมีโครงสร้าง</strong>",
  purpose:"ช่างมักเขียนบันทึกบำรุงรักษาเป็นภาษาพูดและรูปแบบไม่เหมือนกัน ทำให้ค้นหาและสรุปภายหลังได้ยาก Agent จะแยกข้อความเป็นช่องข้อมูลคงที่ ทำเครื่องหมายความผิดปกติและวันบำรุงรักษาครั้งถัดไป แล้วสร้างเป็นตารางที่นำเข้าระบบได้",
  steps:["อ่านบันทึกบำรุงรักษาแบบภาษาพูด","แยกวันที่ อุปกรณ์ งาน ผลลัพธ์ และการบำรุงรักษาครั้งถัดไป","ทำเครื่องหมายรายการผิดปกติ แล้วส่งออกเป็นตารางรูปแบบเดียวกัน"],
  effect:{type:"kpi",items:[["6 คอลัมน์คงที่","รูปแบบเดียวกัน"],["ทำเครื่องหมายอัตโนมัติ","ไม่พลาดความผิดปกติ"]]},
  tech:["Agent Skill","สกัดข้อมูล","ปรับข้อมูลให้เป็นมาตรฐาน"],
  lab:{hint:"วางบันทึกบำรุงรักษาแบบภาษาพูด AI จะจัดเป็นตารางและทำเครื่องหมายความผิดปกติ",
    input:`3/11 เช้าเข้าไปดูห้องเซิร์ฟเวอร์ พัดลมเครื่อง DB เสียงดังนิดหน่อย ทำความสะอาดฝุ่นแล้ว เดือนหน้าดูอีกที
5/11 ทดสอบแบตเตอรี่ UPS ปกติ คายประจุถึง 80% ปกติ อีกครึ่งปีทดสอบใหม่
12/11 ฮาร์ดดิสก์เครื่องสำรองข้อมูล SMART เตือน reallocated sector เพิ่มขึ้น แจ้งผู้ขายขอใบเสนอราคาเปลี่ยนแล้ว
12/11 ตรวจแอร์ด้วย อุณหภูมิ 22 องศา ปกติ`,
    btn:"จัดเป็นตาราง",
    example:`| วันที่ | อุปกรณ์ | งานบำรุงรักษา | ผลลัพธ์ | สถานะ | ครั้งถัดไป |
|---|---|---|---|---|---|
| 2026/11/03 | เครื่อง DB | ทำความสะอาดพัดลม | พัดลมเสียงดัง ทำความสะอาดฝุ่นแล้ว | เฝ้าดู | 2026/12/03 |
| 2026/11/05 | UPS | ทดสอบคายประจุแบตเตอรี่ | คายประจุถึง 80% ปกติ | ปกติ | 2027/05/05 |
| 2026/11/12 | เครื่องสำรองข้อมูล | ตรวจสุขภาพฮาร์ดดิสก์ | SMART เตือน reallocated sector เพิ่มขึ้น | ==ผิดปกติ== | — |
| 2026/11/12 | แอร์ห้องเซิร์ฟเวอร์ | ตรวจอุณหภูมิ | 22°C ปกติ | ปกติ | — |
#### ต้องติดตาม
- ฮาร์ดดิสก์เครื่องสำรองข้อมูล: ขอใบเสนอราคาแล้ว ควรยืนยันกำหนดเปลี่ยนและตรวจว่าข้อมูลสำรองครบก่อน
- พัดลมเครื่อง DB: ตรวจซ้ำในเดือนธันวาคม หากยังมีเสียงดังควรเปลี่ยนพัดลม`}};

X.en.kb={facet:"Knowledge Q&A",title:"Enterprise Knowledge-Base Q&A",gain:"Digging through files → <strong>just ask</strong>",
  purpose:"Company SOPs and technical documents are scattered across SharePoint and new staff can't find them. The agent answers only from company documents and cites its sources; if a document doesn't cover it, it says so instead of making something up.",
  steps:["Connect SharePoint documents and databases","Find the relevant passages for the question","Answer only from what was found and cite it; say clearly when nothing was found"],
  effect:{type:"kpi",items:[["Cited sources","every answer can be checked"],["Says when unknown","no made-up answers"]]},
  tech:["Document retrieval","Grounded answers","SharePoint integration"],
  lab:{hint:"Below are three mock SOPs. Try one question they cover and one they don't.",
    docs:`[SOP-01 Account request] A new hire's account is requested by their manager in the HR system; IT activates it within 1 working day. Permissions follow the role template; special permissions need a separate "permission request form" signed by the department head and the security contact.
[SOP-02 VPN] Remote access requires a company laptop and FortiClient VPN. First login requires MFA enrolment (Microsoft Authenticator). Five wrong passwords in a row lock the account for 30 minutes; IT can unlock it.
[SOP-03 Report requests] File new report requests in the ticketing system under "Report request" with field definitions and the use case. Normal requests are done within 10 working days; urgent ones need director approval.`,
    input:"I got locked out of the VPN after typing the wrong password. What now?",
    btn:"Ask the knowledge base",
    example:`After 5 wrong passwords in a row the account is locked for 30 minutes. You can wait for the lock to expire or ask IT to unlock it [SOP-02]. When you log in again, use your company laptop with FortiClient VPN and verify with your enrolled MFA [SOP-02].`}};
X.th.kb={facet:"ถาม-ตอบคลังความรู้",title:"ถาม-ตอบคลังความรู้องค์กร",gain:"ค้นเอกสารเอง → <strong>ถามได้เลย</strong>",
  purpose:"SOP และเอกสารเทคนิคของบริษัทกระจายอยู่ใน SharePoint หลายที่ พนักงานใหม่มักหาไม่เจอ Agent ตอบจากเอกสารของบริษัทเท่านั้นและระบุแหล่งที่มา หากเอกสารไม่มีข้อมูลก็จะบอกตรง ๆ ไม่แต่งขึ้นเอง",
  steps:["เชื่อมต่อเอกสาร SharePoint และฐานข้อมูล","ค้นหาข้อความที่เกี่ยวข้องกับคำถาม","ตอบจากข้อมูลที่พบเท่านั้นพร้อมระบุแหล่งที่มา หากไม่พบให้บอกชัดเจน"],
  effect:{type:"kpi",items:[["ระบุแหล่งที่มา","ตรวจสอบย้อนกลับได้ทุกคำตอบ"],["ไม่มีข้อมูลก็บอก","ไม่ให้ AI แต่งเอง"]]},
  tech:["ค้นคืนเอกสาร","คำตอบมีหลักฐานอ้างอิง","เชื่อมต่อ SharePoint"],
  lab:{hint:"ด้านล่างคือ SOP จำลอง 3 ฉบับ ลองถามทั้งคำถามที่เอกสารมีคำตอบและที่ไม่มี",
    docs:`[SOP-01 ขอบัญชีผู้ใช้] หัวหน้างานส่งคำขอบัญชีของพนักงานใหม่ในระบบ HR และฝ่าย IT จะเปิดใช้งานภายใน 1 วันทำการ สิทธิ์เป็นไปตามเทมเพลตตำแหน่งงาน สิทธิ์พิเศษต้องกรอก "แบบฟอร์มขอสิทธิ์" และได้รับการอนุมัติจากหัวหน้าแผนกและผู้ประสานงานด้านความปลอดภัย
[SOP-02 VPN] การเชื่อมต่อระยะไกลต้องใช้โน้ตบุ๊กของบริษัทและ FortiClient VPN การล็อกอินครั้งแรกต้องผูก MFA (Microsoft Authenticator) ใส่รหัสผ่านผิด 5 ครั้งติดต่อกันบัญชีจะถูกล็อก 30 นาที สามารถให้ IT ปลดล็อกได้
[SOP-03 ขอรายงาน] คำขอรายงานใหม่ให้เปิดในระบบแจ้งงานหมวด "ขอรายงาน" พร้อมนิยามฟิลด์และกรณีใช้งาน คำขอทั่วไปเสร็จภายใน 10 วันทำการ คำขอเร่งด่วนต้องได้รับอนุมัติจากผู้อำนวยการ`,
    input:"ใส่รหัสผ่าน VPN ผิดจนโดนล็อก ต้องทำอย่างไร",
    btn:"ถามคลังความรู้",
    example:`เมื่อใส่รหัสผ่านผิด 5 ครั้งติดต่อกัน บัญชีจะถูกล็อก 30 นาที คุณสามารถรอให้หมดเวลาล็อกแล้วลองใหม่ หรือขอให้ IT ปลดล็อกให้ได้【SOP-02】 เมื่อล็อกอินอีกครั้งให้ใช้โน้ตบุ๊กของบริษัทกับ FortiClient VPN และยืนยันตัวตนด้วย MFA ที่ผูกไว้【SOP-02】`}};

X.en.cases={facet:"Knowledge mining",title:"Learning from Past Cases",gain:"Scattered tickets → <strong>insight report</strong>",
  purpose:"Past support and operations tickets hold a lot of experience, but nobody has time to go back through them. The agent scans historical cases, groups recurring problems, likely root causes and prevention ideas, and turns them into a team knowledge base.",
  steps:["Read past case records","Group them by problem type and root cause","Write an insight report: recurring problems, root causes, prevention"],
  effect:{type:"kpi",items:[["Patterns surface","from single cases to trends"],["Prevention ideas","from firefighting to fire prevention"]]},
  tech:["Agent Skill","Clustering","Root-cause analysis"],
  lab:{hint:"Below are 8 mock historical cases. AI finds the patterns that keep coming back.",
    input:`C01 Monday morning dashboard not refreshed, scheduled extract failed. Cause: weekend DB backup locked tables
C02 User can't see report. Cause: AD group not synced
C03 Dashboard loads slowly. Cause: extract too large, not partitioned
C04 Monday data not refreshed, extract timed out. Cause: weekend backup overlaps extract schedule
C05 New hire can't log in. Cause: not added to AD group
C06 Report numbers don't match. Cause: source column definition changed without notice
C07 Monday morning schedule failed. Cause: DB backup locked tables
C08 Department head can't see new report. Cause: permission group not synced`,
    btn:"Write insight report",
    example:`#### Recurring problems
| Pattern | Cases | Count | Root cause |
|---|---|---|---|
| Monday data not refreshed / schedule failed | C01, C04, C07 | 3 | Weekend DB backup locks tables and overlaps the extract schedule |
| Can't see report or log in | C02, C05, C08 | 3 | AD permission group not synced or user not added |
| Slow dashboard | C03 | 1 | Extract too large, not partitioned |
| Numbers don't match | C06 | 1 | Source column definition changed without notice |
#### Prevention
- Schedule conflict: move weekend extracts after the backup finishes and add an alert when an extract fails.
- Permission sync: add an "AD group check" step for new hires and new reports, or sync groups automatically.
#### One-line takeaway
75% of cases come from two preventable process issues; fixing scheduling and permission sync removes most Monday firefighting.`}};
X.th.cases={facet:"สกัดความรู้",title:"เรียนรู้จากเคสในอดีต",gain:"เคสกระจัดกระจาย → <strong>รายงานข้อสังเกต</strong>",
  purpose:"เคสบริการและงานปฏิบัติการในอดีตมีประสบการณ์สะสมมาก แต่ไม่มีใครมีเวลากลับไปทบทวน Agent จะสแกนเคสย้อนหลัง จัดกลุ่มปัญหาที่เกิดซ้ำ สาเหตุที่เป็นไปได้ และข้อเสนอการป้องกัน เพื่อเป็นคลังประสบการณ์ของทีม",
  steps:["อ่านบันทึกเคสในอดีต","จัดกลุ่มตามประเภทปัญหาและสาเหตุราก","เขียนรายงานข้อสังเกต: ปัญหาที่เกิดซ้ำ สาเหตุราก และการป้องกัน"],
  effect:{type:"kpi",items:[["เห็นรูปแบบปัญหา","จากเคสเดี่ยวสู่แนวโน้ม"],["ข้อเสนอป้องกัน","จากดับไฟสู่ป้องกันไฟ"]]},
  tech:["Agent Skill","จัดกลุ่มข้อมูล","วิเคราะห์สาเหตุราก"],
  lab:{hint:"ด้านล่างคือเคสจำลอง 8 รายการ AI จะหารูปแบบที่เกิดซ้ำ",
    input:`C01 เช้าวันจันทร์แดชบอร์ดไม่อัปเดต ดึงข้อมูลตามกำหนดล้มเหลว สาเหตุ: สำรอง DB วันหยุดล็อกตาราง
C02 ผู้ใช้มองไม่เห็นรายงาน สาเหตุ: กลุ่ม AD ไม่ซิงก์
C03 แดชบอร์ดโหลดช้า สาเหตุ: ไฟล์ extract ใหญ่เกินไม่ได้แบ่ง
C04 ข้อมูลวันจันทร์ไม่อัปเดต ดึงข้อมูลหมดเวลา สาเหตุ: สำรองข้อมูลวันหยุดทับเวลาดึงข้อมูล
C05 พนักงานใหม่ล็อกอินไม่ได้ สาเหตุ: ไม่ได้เพิ่มในกลุ่ม AD
C06 ตัวเลขรายงานไม่ตรง สาเหตุ: นิยามคอลัมน์ต้นทางเปลี่ยนโดยไม่แจ้ง
C07 เช้าวันจันทร์งานตามกำหนดล้มเหลว สาเหตุ: สำรอง DB ล็อกตาราง
C08 หัวหน้าแผนกมองไม่เห็นรายงานใหม่ สาเหตุ: กลุ่มสิทธิ์ไม่ซิงก์`,
    btn:"สร้างรายงานข้อสังเกต",
    example:`#### ปัญหาที่เกิดซ้ำ
| รูปแบบปัญหา | เคส | จำนวน | สาเหตุราก |
|---|---|---|---|
| ข้อมูลวันจันทร์ไม่อัปเดต/งานตามกำหนดล้มเหลว | C01, C04, C07 | 3 | สำรอง DB วันหยุดล็อกตารางและทับเวลาดึงข้อมูล |
| มองไม่เห็นรายงานหรือล็อกอินไม่ได้ | C02, C05, C08 | 3 | กลุ่มสิทธิ์ AD ไม่ซิงก์หรือไม่ได้เพิ่มผู้ใช้ |
| แดชบอร์ดโหลดช้า | C03 | 1 | ไฟล์ extract ใหญ่เกินไม่ได้แบ่ง |
| ตัวเลขไม่ตรง | C06 | 1 | นิยามคอลัมน์ต้นทางเปลี่ยนโดยไม่แจ้ง |
#### ข้อเสนอการป้องกัน
- เวลาชนกัน: ย้ายการดึงข้อมูลวันหยุดไปหลังสำรองข้อมูลเสร็จ และตั้งการแจ้งเตือนเมื่อดึงข้อมูลล้มเหลว
- ซิงก์สิทธิ์: เพิ่มขั้นตอน "ตรวจกลุ่ม AD" เมื่อมีพนักงานใหม่หรือรายงานใหม่ หรือซิงก์กลุ่มอัตโนมัติ
#### สรุปสั้น
75% ของเคสมาจากปัญหากระบวนการ 2 เรื่องที่ป้องกันได้ แก้เรื่องตารางเวลาและการซิงก์สิทธิ์จะลดงานดับไฟวันจันทร์ได้มาก`}};

X.en.ocr={facet:"Vision · OCR",title:"OCR Item Recognition with Fuzzy Matching",gain:"Failed reads → <strong>error-tolerant matching</strong>",
  purpose:"OCR on game screenshots often merges words, misspells them, or reads the + sign as t or 4. This tool strips noise such as enchant levels, then uses edit distance to find the closest name in the item database, so OCR mistakes don't break recognition.",
  steps:["Screenshot → OCR reads the text","Strip enchant levels (+7, t7, ＋9), prices and other noise","Match against the item database by edit distance and return the closest Chinese name"],
  effect:{type:"kpi",items:[["8 kinds","of OCR errors tolerated"],["English → Chinese","names mapped automatically"]]},
  tech:["OCR","Fuzzy matching","Levenshtein distance","C# desktop tool"],
  lab:{hint:"Type text that OCR got wrong and watch the matcher recover the right item. This bench runs in your browser; no AI needed."}};
X.th.ocr={facet:"ภาพ · OCR",title:"OCR จดจำไอเท็มพร้อมจับคู่แบบคลุมเครือ",gain:"อ่านผิด → <strong>จับคู่แบบทนต่อความผิดพลาด</strong>",
  purpose:"OCR จากภาพหน้าจอเกมมักอ่านคำติดกัน สะกดผิด หรืออ่านเครื่องหมาย + เป็น t หรือ 4 เครื่องมือนี้จะลบสัญญาณรบกวนอย่างค่าตีบวกก่อน แล้วใช้ระยะแก้ไข (edit distance) หาชื่อที่ใกล้ที่สุดในฐานข้อมูลไอเท็ม ทำให้ความผิดพลาดของ OCR ไม่กระทบการจดจำ",
  steps:["ภาพหน้าจอ → OCR อ่านข้อความ","ลบค่าตีบวก (+7, t7, ＋9) ราคา และสัญญาณรบกวนอื่น","จับคู่กับฐานข้อมูลไอเท็มด้วยระยะแก้ไข แล้วคืนชื่อภาษาจีนที่ใกล้ที่สุด"],
  effect:{type:"kpi",items:[["8 แบบ","ข้อผิดพลาด OCR ที่รับมือได้"],["อังกฤษ → จีน","จับคู่ชื่ออัตโนมัติ"]]},
  tech:["OCR","จับคู่แบบคลุมเครือ","ระยะ Levenshtein","เครื่องมือเดสก์ท็อป C#"],
  lab:{hint:"พิมพ์ข้อความที่ OCR อ่านผิด แล้วดูว่าอัลกอริทึมหาไอเท็มที่ถูกต้องได้อย่างไร สถานีนี้ทำงานในเบราว์เซอร์ ไม่ต้องใช้ AI"}};

X.en.gov={facet:"AI governance",title:"De-identification Gate",gain:"<strong>Mask first</strong>, then send",
  purpose:"Before company data goes to a cloud AI, names, phone numbers, emails, ID numbers and client company names are masked locally, and a masking log is kept. The AI only sees the masked text. This is the first gate in the five-layer governance plan I designed.",
  steps:["Detect personal data and client names locally","Replace them with codes and keep the lookup table (never sent)","Send only the masked text to the AI"],
  effect:{type:"kpi",items:[["5 layers","of governance"],["0 records","of raw personal data sent"]]},
  tech:["De-identification","Read-only principle","Human sign-off","Audit log"],
  lab:{hint:"The masking happens in your browser. When you press \"Summarize with AI\", only the masked text is sent.",
    input:`Mr. David Wang from Lianfeng Precision Co., Ltd. called: report export stopped working after last week's upgrade.
Phone 0912-345-678, email daming.wang@example.com.
Applicant ID A123456789. Please reply by Friday.`,
    btn:"Summarize with AI",
    example:`- Issue: [Client A] reports that report export has failed since last week's system upgrade.
- Deadline: reply to [Person A] by Friday.
- Next step: check export permissions and component versions after the upgrade; if needed, contact them via [Phone A] or [Email A] to confirm the error screen.`}};
X.th.gov={facet:"การกำกับดูแล AI",title:"ด่านปกปิดข้อมูลส่วนบุคคล",gain:"<strong>ปกปิดก่อน</strong> แล้วจึงส่ง",
  purpose:"ก่อนส่งข้อมูลบริษัทให้ AI บนคลาวด์ จะปกปิดชื่อ เบอร์โทร อีเมล เลขบัตรประชาชน และชื่อบริษัทลูกค้าในเครื่องก่อน พร้อมเก็บบันทึกการปกปิด AI จะเห็นเฉพาะข้อความที่ปกปิดแล้ว นี่คือด่านแรกของแผนการกำกับดูแล 5 ชั้นที่ผมออกแบบ",
  steps:["ตรวจหาข้อมูลส่วนบุคคลและชื่อลูกค้าในเครื่อง","แทนที่ด้วยรหัสและเก็บตารางอ้างอิงไว้ (ไม่ส่งออก)","ส่งเฉพาะข้อความที่ปกปิดแล้วให้ AI"],
  effect:{type:"kpi",items:[["5 ชั้น","แผนการกำกับดูแล"],["0 รายการ","ข้อมูลส่วนบุคคลดิบที่ส่งออก"]]},
  tech:["ปกปิดข้อมูล","หลักการอ่านอย่างเดียว","ยืนยันโดยคน","บันทึกตรวจสอบ"],
  lab:{hint:"การปกปิดทำในเบราว์เซอร์ของคุณ เมื่อกด \"ให้ AI สรุป\" จะส่งเฉพาะข้อความที่ปกปิดแล้ว",
    input:`คุณสมชาย ใจดี จากบริษัท สยามพรีซิชั่น จำกัด โทรมาแจ้งว่าหลังอัปเกรดสัปดาห์ที่แล้ว ส่งออกรายงานไม่ได้
เบอร์ติดต่อ 081-234-5678 อีเมล somchai.j@example.com
เลขประจำตัวผู้ยื่นคำขอ 1-2345-67890-12-3 กรุณาตอบกลับภายในวันศุกร์`,
    btn:"ให้ AI สรุป",
    example:`- ปัญหา: [ลูกค้า A] แจ้งว่าหลังอัปเกรดระบบเมื่อสัปดาห์ที่แล้ว ไม่สามารถส่งออกรายงานได้
- กำหนดเวลา: ต้องตอบกลับ [บุคคล A] ภายในวันศุกร์
- ขั้นตอนถัดไป: ตรวจสิทธิ์การส่งออกและเวอร์ชันคอมโพเนนต์หลังอัปเกรด หากจำเป็นให้ติดต่อผ่าน [โทรศัพท์ A] หรือ [อีเมล A] เพื่อยืนยันหน้าจอข้อผิดพลาด`}};

X.en.build={facet:"Building with AI",title:"Other Projects Built with AI",gain:"Idea → <strong>live product</strong>",
  purpose:"Outside work I use AI agents to turn ideas straight into working websites and tools, practising how to break down requirements, direct an agent and verify the result. This lab itself was built the same way. The OCR item finder is a fuller case, so it has its own entry as experiment 08.",
  steps:["Break the idea into small, testable steps","Direct the agent to build, testing and fixing step by step","Deploy and keep iterating"],
  effect:{type:"kpi",items:[["7","GitHub projects"],["3D · web · audio","different stacks"]]},
  tech:["Three.js","Web Audio","GitHub Pages","Agent collaboration"],
  lab:{items:[["3D role-playing game","A browser 3D RPG: village, characters and 48 models, 107 files in total."],["Okinawa road-trip site","7-day itinerary, intro animation and ocean sounds, deployed on GitHub Pages."]]}};
X.th.build={facet:"สร้างงานร่วมกับ AI",title:"ผลงานอื่นที่พัฒนาด้วย AI",gain:"ไอเดีย → <strong>ผลงานที่ใช้งานจริง</strong>",
  purpose:"นอกเวลางาน ผมใช้ AI Agent เปลี่ยนไอเดียเป็นเว็บไซต์และเครื่องมือที่ใช้ได้จริง เพื่อฝึกแยกความต้องการ สั่งงาน Agent และตรวจสอบผลลัพธ์ ห้องแล็บนี้ก็สร้างด้วยวิธีเดียวกัน ส่วนเครื่องมือ OCR ค้นหาไอเท็มมีรายละเอียดมากกว่า จึงแยกเป็นการทดลองที่ 08",
  steps:["แยกไอเดียเป็นขั้นตอนเล็ก ๆ ที่ตรวจสอบได้","สั่ง Agent ลงมือทำ ทดสอบและแก้ไขทีละขั้น","ปรับใช้จริงและพัฒนาต่อเนื่อง"],
  effect:{type:"kpi",items:[["7","โปรเจกต์บน GitHub"],["3D · เว็บ · เสียง","เทคโนโลยีหลากหลาย"]]},
  tech:["Three.js","Web Audio","GitHub Pages","ทำงานร่วมกับ Agent"],
  lab:{items:[["เกมเล่นตามบทบาท 3D","เกม RPG 3D บนเบราว์เซอร์: หมู่บ้าน ตัวละคร และโมเดล 48 ชิ้น รวม 107 ไฟล์"],["เว็บไซต์ทริปขับรถเที่ยวโอกินาวา","แผนเที่ยว 7 วัน แอนิเมชันเปิด และเสียงคลื่น ใช้งานบน GitHub Pages"]]}};


/* pain point → solution framing */
const PS={
 en:{
  manual:["After every on-site upgrade, engineers had to turn a hundred-plus screenshots into a formal upgrade manual for the client. Each one took a full day, and typos or notes that didn't match their screenshots meant checking everything again before delivery.","I packaged the company's manual format and checklist into an Agent Skill. It checks every screenshot against its note, fixes typos, stops to ask a person when unsure, then renders the formal manual in the company template."],
  report:["Before each monthly meeting someone pulled data from the ticketing system, calculated volumes and turnaround, and built a 17-page deck page by page. It was repetitive and slow, and any data update meant redoing several pages.","The agent reads the month's data, calculates the metrics, writes highlights and exception notes, and lays everything into the fixed monthly template in one run."],
  maint:["Everyone wrote maintenance logs differently, from one line to a whole paragraph. Checking one machine's history or counting anomalies meant reading entry by entry, and real problems got buried in the text.","The agent splits casual notes into 6 fixed fields (date, equipment, task, result, status, next service), flags anomalies automatically, and writes an importable table."],
  kb:["SOPs and technical documents were scattered across SharePoint. New staff couldn't find them and kept asking senior colleagues, while a general-purpose AI might invent rules the company never had.","The agent answers only from company documents and cites them; if the documents don't cover it, it says so instead of making something up."],
  cases:["The same problems kept coming back and were investigated from scratch each time. The know-how lived in individual heads and left when people changed roles.","The agent scans historical cases, groups recurring problems, root causes and prevention ideas, and turns them into a shared team knowledge base."],
  ocr:["Asian players on international English servers often can't read item names and descriptions. Looking things up means typing English, a single typo returns nothing, and stopping to search breaks the flow of the game.","A desktop tool with two ways in: type an item name, even misspelled, and fuzzy matching finds it; or scan the game screen with OCR to recognise the item and show its Chinese name and details."],
  gov:["We wanted to use cloud AI at work, but company data contains client names and personal data, and security policy forbids sending it out. AI adoption stalled at step one.","A local de-identification gate before anything leaves: names, phone numbers, emails, ID numbers and client company names become codes, with a log kept, so the AI only ever sees masked text. It is the first of the five governance layers I designed."],
  build:["Plenty of ideas, no engineering team. Normally you'd hire developers and wait, so small ideas quietly died.","I use AI agents to turn ideas into working websites and tools myself: breaking down requirements, directing the agent, and verifying each step until it ships. This lab was built the same way."]},
 th:{
  manual:["ทุกครั้งที่อัปเกรดระบบที่หน้างานลูกค้า วิศวกรต้องจัดภาพหน้าจอนับร้อยภาพให้เป็นคู่มือการอัปเกรดฉบับทางการ ใช้เวลาทั้งวันต่อฉบับ และมักมีคำผิดหรือหมายเหตุไม่ตรงกับภาพ ต้องตรวจซ้ำก่อนส่งมอบ","ผมนำรูปแบบคู่มือและเช็กลิสต์ของบริษัทมาทำเป็น Agent Skill ซึ่งจะตรวจภาพหน้าจอเทียบกับหมายเหตุทีละภาพ แก้คำผิด หยุดถามคนเมื่อไม่แน่ใจ แล้วสร้างคู่มือฉบับทางการตามเทมเพลตของบริษัท"],
  report:["ก่อนประชุมประจำเดือนทุกครั้ง ต้องดึงข้อมูลจากระบบแจ้งงาน คำนวณจำนวนเคสและเวลาดำเนินการ แล้วทำสไลด์ 17 หน้าทีละหน้า งานซ้ำซากและใช้เวลานาน ข้อมูลเปลี่ยนเมื่อไรก็ต้องแก้หลายหน้า","Agent อ่านข้อมูลของเดือน คำนวณตัวชี้วัด เขียนสรุปและคำอธิบายความผิดปกติ แล้วจัดลงเทมเพลตรายงานประจำเดือนในครั้งเดียว"],
  maint:["แต่ละคนเขียนบันทึกบำรุงรักษาไม่เหมือนกัน บางคนเขียนประโยคเดียว บางคนเขียนยาวทั้งย่อหน้า เวลาจะดูประวัติเครื่องหรือสรุปความผิดปกติต้องอ่านทีละรายการ และปัญหาจริงมักถูกซ่อนอยู่ในข้อความ","Agent แยกบันทึกภาษาพูดเป็น 6 ช่องคงที่ (วันที่ อุปกรณ์ งาน ผลลัพธ์ สถานะ ครั้งถัดไป) ทำเครื่องหมายความผิดปกติอัตโนมัติ และสร้างเป็นตารางที่นำเข้าระบบได้"],
  kb:["SOP และเอกสารเทคนิคกระจายอยู่ใน SharePoint หลายที่ พนักงานใหม่หาไม่เจอจึงต้องถามรุ่นพี่อยู่เรื่อย ๆ ส่วน AI ทั่วไปก็อาจแต่งกฎที่บริษัทไม่เคยมีขึ้นมาเอง","Agent ตอบจากเอกสารของบริษัทเท่านั้นพร้อมระบุแหล่งที่มา หากเอกสารไม่มีข้อมูลก็บอกตรง ๆ ไม่แต่งขึ้นเอง"],
  cases:["ปัญหาเดิมเกิดซ้ำและต้องไล่ตรวจใหม่ทุกครั้ง ประสบการณ์อยู่ในหัวของแต่ละคน เมื่อคนเปลี่ยนงานความรู้ก็หายไปด้วย","Agent สแกนเคสย้อนหลัง จัดกลุ่มปัญหาที่เกิดซ้ำ สาเหตุราก และข้อเสนอการป้องกัน แล้วรวมเป็นคลังประสบการณ์ที่ทีมใช้ร่วมกัน"],
  ocr:["ผู้เล่นชาวเอเชียบนเซิร์ฟเวอร์ภาษาอังกฤษมักอ่านชื่อและคำอธิบายไอเท็มไม่เข้าใจ การค้นข้อมูลต้องพิมพ์ภาษาอังกฤษเอง พิมพ์ผิดนิดเดียวก็ไม่เจอ และการหยุดค้นระหว่างเล่นก็ทำให้เสียจังหวะ","เครื่องมือเดสก์ท็อปที่ค้นหาได้ 2 แบบ: พิมพ์ชื่อไอเท็มแม้สะกดผิดก็หาเจอด้วยการจับคู่แบบคลุมเครือ หรือสแกนหน้าจอเกมด้วย OCR เพื่อจดจำไอเท็มและแสดงชื่อภาษาจีนพร้อมรายละเอียด"],
  gov:["อยากใช้ AI บนคลาวด์ในงาน แต่ข้อมูลบริษัทมีชื่อลูกค้าและข้อมูลส่วนบุคคล นโยบายความปลอดภัยไม่อนุญาตให้ส่งออกโดยตรง การนำ AI มาใช้จึงติดอยู่ตั้งแต่ขั้นแรก","เพิ่มด่านปกปิดข้อมูลในเครื่องก่อนส่งออก: ชื่อ เบอร์โทร อีเมล เลขบัตรประชาชน และชื่อบริษัทลูกค้าจะถูกแทนด้วยรหัสพร้อมเก็บบันทึก AI จะเห็นเฉพาะข้อความที่ปกปิดแล้ว นี่คือชั้นแรกของการกำกับดูแล 5 ชั้นที่ผมออกแบบ"],
  build:["มีไอเดียมากมายแต่ไม่มีทีมวิศวกร ปกติต้องจ้างคนพัฒนาและรอนาน ไอเดียเล็ก ๆ จึงมักหายไป","ผมใช้ AI Agent เปลี่ยนไอเดียเป็นเว็บไซต์และเครื่องมือที่ใช้งานได้ด้วยตัวเอง ตั้งแต่แยกความต้องการ สั่งงาน Agent และตรวจสอบทีละขั้นจนใช้งานจริง ห้องแล็บนี้ก็สร้างด้วยวิธีเดียวกัน"]}};
for(const l of ["en","th"])for(const id in PS[l]){X[l][id]=X[l][id]||{};X[l][id].pain=PS[l][id][0];X[l][id].purpose=PS[l][id][1]}
Object.assign(X.en.ocr,{title:"AI-built Item Finder for International Servers (OCR + Fuzzy Search)",gain:"Unreadable English → <strong>item details in Chinese</strong>",
  purpose:"I built a portable Windows tool: a draggable floating goblin window with two ways to look things up. Typed search is fully offline and handles Chinese or English, partial or misspelled names. In game, Alt+Q lets you box the item name and a Chinese pop-up appears in about 3 seconds, listing stats, monsters that drop it, merchants and boxes it comes from, with blue links to dig further. Data comes from the L1Justice database: 3,299 items, 1,982 monsters, 11,778 drops and 14,654 merchant listings, with hand-translated Chinese names and the English originals kept.",
  steps:["Text search: Chinese or English, partial or misspelled, across 3,299 items, fully offline","Click an item for a Chinese pop-up: stats, monsters that drop it, merchant prices, boxes it comes from; blue links lead to the monster or merchant","In game, press Alt+Q: the screen freezes, you box the item name, the text is read, enchant levels and noise are stripped, then fuzzy-matched","Type @map name to list the monsters on that map"],
  effect:{type:"kpi",items:[["2 ways","type or scan"],["8 kinds","of OCR/spelling errors tolerated"]]}});
X.en.ocr.lab={hint:"Try both: type a name (typos welcome), or scan the sample game screen below or upload your own screenshot."};
Object.assign(X.th.ocr,{title:"ตัวช่วยค้นหาไอเท็มเซิร์ฟเวอร์อินเตอร์ที่พัฒนาด้วย AI (OCR + ค้นหาแบบคลุมเครือ)",gain:"อ่านอังกฤษไม่ออก → <strong>ข้อมูลไอเท็มภาษาจีน</strong>",
  purpose:"ผมสร้างเครื่องมือ Windows แบบไม่ต้องติดตั้ง: หน้าต่างก็อบลินลอยที่ลากได้ ค้นได้สองแบบ พิมพ์ค้นหาแบบออฟไลน์ รองรับจีนหรืออังกฤษ สะกดผิดหรือบางส่วนก็ได้ ในเกมกด Alt+Q ครอบชื่อไอเท็ม ประมาณ 3 วินาทีจะแสดงหน้าต่างภาษาจีน มีค่าสถานะ มอนสเตอร์ที่ดรอป ร้านค้า และกล่องที่เปิดได้ ลิงก์สีฟ้าคลิกต่อได้ ข้อมูลจากฐานข้อมูล L1Justice: ไอเท็ม 3,299 มอนสเตอร์ 1,982 ดรอป 11,778 รายการขาย 14,654 ชื่อจีนแปลด้วยมือและเก็บชื่ออังกฤษไว้",
  steps:["ค้นด้วยข้อความ: จีนหรืออังกฤษ สะกดผิดหรือบางส่วนก็ได้ จาก 3,299 ไอเท็ม ทำงานออฟไลน์","คลิกไอเท็มเพื่อดูหน้าต่างภาษาจีน: ค่าสถานะ มอนสเตอร์ที่ดรอป ราคาร้านค้า และกล่องที่เปิดได้ ลิงก์สีฟ้าคลิกต่อได้","ในเกมกด Alt+Q: หน้าจอหยุด ครอบชื่อไอเท็ม อ่านข้อความ ตัดค่าตีบวกและสัญญาณรบกวน แล้วจับคู่แบบคลุมเครือ","พิมพ์ @ชื่อแผนที่ เพื่อดูมอนสเตอร์ในแผนที่นั้น"],
  effect:{type:"kpi",items:[["2 วิธี","พิมพ์หรือสแกน"],["8 แบบ","ข้อผิดพลาด OCR/การสะกดที่รับมือได้"]]}});
X.th.ocr.lab={hint:"ลองทั้ง 2 แบบ: พิมพ์ชื่อ (สะกดผิดได้) หรือสแกนภาพหน้าจอเกมตัวอย่างด้านล่าง หรืออัปโหลดภาพหน้าจอของคุณเอง"};

function merge(base,over){if(over===undefined)return base;if(Array.isArray(over)||typeof over!=="object"||over===null)return over;const o=Object.assign({},base);for(const k in over)o[k]=merge(base?base[k]:undefined,over[k]);return o}

const I18N={
  lang,langs:LANGS,skipIntro:skip,
  t(k,vars){const e=D[k];let s=e?(e[lang]!==undefined?e[lang]:e.zh):k;if(vars)for(const v in vars)s=s.replace("{"+v+"}",vars[v]);return s},
  station(id){const e=STN[id];return e?(e[lang]||e.zh):null},
  localizeExps(list){if(lang==="zh")return list;return list.map(x=>merge(x,X[lang][x.id]))},
  apply(root){(root||document).querySelectorAll("[data-i18n]").forEach(el=>{el.innerHTML=I18N.t(el.dataset.i18n)});(root||document).querySelectorAll("[data-i18n-aria]").forEach(el=>el.setAttribute("aria-label",I18N.t(el.dataset.i18nAria)))},
  set(l){
    if(l===lang)return;
    try{localStorage.setItem("ailab.lang",l)}catch(e){}
    try{const o=JSON.parse(window.name||"{}");o.lang=l;o.skipIntro=true;window.name=JSON.stringify(o)}catch(e){window.name=JSON.stringify({lang:l,skipIntro:true})}
    location.reload();
  },
  switcher(cls){return `<div class="langsw ${cls||""}" role="group" aria-label="${I18N.t("lang.aria")}">${LANGS.map(([k,n])=>`<button type="button" data-lang="${k}" aria-pressed="${k===lang}">${n}</button>`).join("")}</div>`}
};
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest(".langsw button[data-lang]");if(b){e.preventDefault();I18N.set(b.dataset.lang)}},true);
document.title=I18N.t(document.documentElement.dataset.titleKey||"title");
window.I18N=I18N;
})();
