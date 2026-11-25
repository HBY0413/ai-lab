/* Translations for vision.html, keyed by the original Chinese text. */
window.VD={
"← 回到 AI 實驗室":{en:"← Back to the AI Lab",th:"← กลับห้องแล็บ AI"},
"/ 專屬 Demo":{en:"/ Role demo",th:"/ เดโมตามตำแหน่ง"},
"Target role · 製造業 AI 視覺／AOI 應用":{en:"Target role · AI vision / AOI for manufacturing",th:"ตำแหน่งเป้าหมาย · AI Vision / AOI สำหรับงานผลิต"},
"PCB 外觀瑕疵 AI 檢測站":{en:"PCB Defect AI Inspection Station",th:"สถานีตรวจจับตำหนิ PCB ด้วย AI"},
"工廠的瑕疵品很少，很難收集到大量「壞的」樣本。這個 Demo 只用良品訓練異常偵測模型，看到跟良品不一樣的地方就標出來。訓練、推論、門檻值調整都在你的瀏覽器裡即時運算，你也可以自己在板子上畫瑕疵來考它。":{en:"Factories have few defective parts, so collecting lots of \"bad\" samples is hard. This demo trains an anomaly-detection model on good boards only and flags anything that looks different. Training, inference and threshold tuning all run live in your browser, and you can draw your own defects on a board to test it.",th:"ในโรงงานมีชิ้นงานเสียน้อย จึงเก็บตัวอย่าง \"เสีย\" จำนวนมากได้ยาก เดโมนี้ฝึกโมเดลตรวจจับความผิดปกติด้วยบอร์ดดีเท่านั้น แล้วทำเครื่องหมายจุดที่ต่างจากบอร์ดดี การฝึก การอนุมาน และการปรับเกณฑ์ทำงานแบบเรียลไทม์ในเบราว์เซอร์ และคุณวาดตำหนิบนบอร์ดเพื่อทดสอบได้เอง"},
"職缺需求":{en:"Job requirement",th:"คุณสมบัติที่ต้องการ"},
"這個 Demo 怎麼證明":{en:"How this demo shows it",th:"เดโมนี้แสดงอย่างไร"},
"位置":{en:"Where",th:"ส่วน"},
"只用 40 片良品學習每個位置的正常樣貌，推論時計算偏離程度並畫成熱力圖":{en:"Learns what each position normally looks like from 40 good boards, then scores deviations and draws a heatmap",th:"เรียนรู้ลักษณะปกติของแต่ละตำแหน่งจากบอร์ดดี 40 แผ่น แล้วคำนวณความเบี่ยงเบนและวาดเป็นฮีตแมป"},
"模型優化":{en:"Model optimisation",th:"ปรับแต่งโมเดล"},
"用門檻值在「漏放」和「過殺」之間取捨，即時看攔截率與過殺率":{en:"Trade off escapes against overkill with the threshold and watch catch rate and overkill rate live",th:"ปรับเกณฑ์เพื่อชั่งน้ำหนักระหว่างหลุดและคัดทิ้งเกิน ดูอัตราตรวจจับและอัตราคัดทิ้งเกินแบบเรียลไทม์"},
"深度學習模型訓練":{en:"Deep-learning model training",th:"ฝึกโมเดล Deep Learning"},
"正式版用 anomalib 的 PatchCore 在 Colab GPU 訓練，匯出 ONNX、用 OpenVINO 加速":{en:"Production version: anomalib PatchCore trained on a Colab GPU, exported to ONNX and accelerated with OpenVINO",th:"เวอร์ชันใช้งานจริง: ฝึก PatchCore ของ anomalib บน GPU ของ Colab ส่งออก ONNX และเร่งด้วย OpenVINO"},
"定義標註規範":{en:"Define labelling standards",th:"กำหนดมาตรฐานการติดป้ายกำกับ"},
"5 類瑕疵的定義、判定標準與標註方式":{en:"Definitions, pass/fail criteria and labelling method for 5 defect types",th:"นิยาม เกณฑ์ตัดสิน และวิธีติดป้ายของตำหนิ 5 ประเภท"},
"規劃 AI 視覺實驗室":{en:"Plan an AI vision lab",th:"วางแผนห้องแล็บ AI Vision"},
"從取像、訓練、部署到產線回饋的完整架構":{en:"End-to-end architecture from image capture and training to deployment and line feedback",th:"สถาปัตยกรรมครบวงจรตั้งแต่ถ่ายภาพ ฝึกโมเดล ใช้งานจริง จนถึงการป้อนกลับจากสายการผลิต"},
"只用良品訓練":{en:"Train on good boards only",th:"ฝึกด้วยบอร์ดดีเท่านั้น"},
"產線上的同一個料號，每一片的位置都一樣。模型把板子切成 8×8 像素的小區塊，記下每個位置在良品上的顏色與邊緣特徵分布（平均值與變異），這就是它對「正常」的認識。":{en:"Every board of the same part number has the same layout. The model splits the board into 8×8-pixel patches and records the colour and edge-feature distribution (mean and variance) of each position on good boards; that is its idea of \"normal\".",th:"บอร์ดรุ่นเดียวกันมีเลย์เอาต์เหมือนกันทุกแผ่น โมเดลแบ่งบอร์ดเป็นช่องขนาด 8×8 พิกเซล และบันทึกการกระจายของสีและขอบ (ค่าเฉลี่ยและความแปรปรวน) ของแต่ละตำแหน่งบนบอร์ดดี นี่คือสิ่งที่โมเดลเข้าใจว่า \"ปกติ\""},
"開始訓練（40 片良品）":{en:"Start training (40 good boards)",th:"เริ่มฝึก (บอร์ดดี 40 แผ่น)"},
"尚未訓練":{en:"Not trained yet",th:"ยังไม่ได้ฝึก"},
"檢測 40 片測試板":{en:"Inspect 40 test boards",th:"ตรวจบอร์ดทดสอบ 40 แผ่น"},
"測試板有一半是良品，另一半混入短路、斷路、缺孔、刮傷、異物等 5 類瑕疵。點任何一片看熱力圖；框線綠色是判定 OK，紅色是判定 NG，標籤反白的是判錯的。":{en:"Half the test boards are good; the other half contain 5 defect types: short, open, missing hole, scratch and contamination. Click any board to see its heatmap. Green borders mean OK, red mean NG, and a highlighted tag marks a wrong call.",th:"บอร์ดทดสอบครึ่งหนึ่งเป็นบอร์ดดี อีกครึ่งมีตำหนิ 5 ประเภท: ลัดวงจร วงจรขาด รูหาย รอยขีดข่วน และสิ่งปนเปื้อน คลิกบอร์ดใดก็ได้เพื่อดูฮีตแมป กรอบเขียว = OK กรอบแดง = NG ป้ายที่ไฮไลต์คือการตัดสินผิด"},
"原始影像":{en:"Original image",th:"ภาพต้นฉบับ"},
"異常熱力圖":{en:"Anomaly heatmap",th:"ฮีตแมปความผิดปกติ"},
"調整門檻值：漏放與過殺的取捨":{en:"Tune the threshold: escapes vs overkill",th:"ปรับเกณฑ์: หลุด vs คัดทิ้งเกิน"},
"門檻值越低，越不會放過瑕疵，但會把良品誤判為 NG（過殺），增加人工複判的負擔。門檻值越高則反過來。預設值只用良品的分數決定（取良品分數的最大值再留 10% 餘裕），不偷看瑕疵品答案。":{en:"A lower threshold lets fewer defects through but flags more good boards as NG (overkill), adding manual re-inspection. A higher threshold does the opposite. The default comes from good-board scores only (the highest good score plus a 10% margin), without peeking at the defect answers.",th:"เกณฑ์ต่ำจะปล่อยตำหนิหลุดน้อยลง แต่จะตัดสินบอร์ดดีเป็น NG มากขึ้น (คัดทิ้งเกิน) ทำให้ต้องตรวจซ้ำด้วยคนมากขึ้น เกณฑ์สูงจะตรงกันข้าม ค่าเริ่มต้นคำนวณจากคะแนนของบอร์ดดีเท่านั้น (คะแนนสูงสุดของบอร์ดดีบวกเผื่อ 10%) โดยไม่ดูคำตอบของบอร์ดเสีย"},
"門檻值":{en:"Threshold",th:"เกณฑ์"},
"回到預設":{en:"Reset",th:"คืนค่าเริ่มต้น"},
"正確攔截瑕疵":{en:"Defects caught",th:"ตรวจจับตำหนิได้ถูกต้อง"},
"漏放（瑕疵被判 OK）":{en:"Escapes (defect judged OK)",th:"หลุด (ตำหนิถูกตัดสินว่า OK)"},
"過殺（良品被判 NG）":{en:"Overkill (good judged NG)",th:"คัดทิ้งเกิน (บอร์ดดีถูกตัดสินว่า NG)"},
"正確放行良品":{en:"Good boards passed",th:"ปล่อยบอร์ดดีถูกต้อง"},
"瑕疵攔截率（Recall）":{en:"Catch rate (Recall)",th:"อัตราตรวจจับ (Recall)"},
"判 NG 中真的有瑕疵（Precision）":{en:"NG calls that are real defects (Precision)",th:"NG ที่เป็นตำหนิจริง (Precision)"},
"過殺率":{en:"Overkill rate",th:"อัตราคัดทิ้งเกิน"},
"自己製造瑕疵，考考模型":{en:"Make your own defect and test the model",th:"สร้างตำหนิเองแล้วทดสอบโมเดล"},
"在良品上畫出瑕疵，放開滑鼠就會立刻檢測。接著可以把影像和熱力圖交給 Claude，請它判讀瑕疵類型、可能的製程原因與處置建議。":{en:"Draw a defect on a good board; it is inspected as soon as you release. Then hand the image and heatmap to Claude for the defect type, likely process cause and recommended action.",th:"วาดตำหนิบนบอร์ดดี ปล่อยเมาส์แล้วจะตรวจทันที จากนั้นส่งภาพและฮีตแมปให้ Claude วิเคราะห์ประเภทตำหนิ สาเหตุที่น่าจะเกิดในกระบวนการ และข้อเสนอการจัดการ"},
"銅屑（短路）":{en:"Copper (short)",th:"เศษทองแดง (ลัดวงจร)"},
"刮斷線路（斷路）":{en:"Cut a trace (open)",th:"ตัดลายวงจร (วงจรขาด)"},
"異物":{en:"Contamination",th:"สิ่งปนเปื้อน"},
"換一片良品":{en:"New good board",th:"เปลี่ยนบอร์ดดีใหม่"},
"滑鼠或手指在板子上拖曳作畫。":{en:"Drag on the board with a mouse or finger to draw.",th:"ลากเมาส์หรือนิ้วบนบอร์ดเพื่อวาด"},
"即時熱力圖":{en:"Live heatmap",th:"ฮีตแมปแบบเรียลไทม์"},
"請 Claude 判讀":{en:"Ask Claude to assess",th:"ให้ Claude วิเคราะห์"},
"瑕疵標註規範（草案）":{en:"Defect labelling standard (draft)",th:"มาตรฐานการติดป้ายตำหนิ (ฉบับร่าง)"},
"模型好不好，取決於標註是否一致。下表是我跟視覺工程師協作時會先對齊的定義，標註工具使用 CVAT 或 Label Studio。":{en:"A model is only as good as the consistency of its labels. These are the definitions I align on first with vision engineers; labelling is done in CVAT or Label Studio.",th:"โมเดลจะดีแค่ไหนขึ้นกับความสม่ำเสมอของการติดป้าย ตารางนี้คือนิยามที่ผมตกลงกับวิศวกร Vision ก่อนเริ่ม ใช้ CVAT หรือ Label Studio ในการติดป้าย"},
"類別":{en:"Type",th:"ประเภท"},"定義":{en:"Definition",th:"นิยาม"},"判定標準（示意）":{en:"Criteria (illustrative)",th:"เกณฑ์ (ตัวอย่าง)"},"標註方式":{en:"Labelling",th:"วิธีติดป้าย"},
"短路 Short":{en:"Short",th:"ลัดวงจร Short"},"不該相連的兩條線路或焊墊之間有銅相連":{en:"Copper connects two traces or pads that should be separate",th:"มีทองแดงเชื่อมลายวงจรหรือแผ่นบัดกรีที่ไม่ควรต่อกัน"},
"任何可見的導通殘銅即 NG":{en:"Any visible conductive residue is NG",th:"มีเศษทองแดงนำไฟฟ้าที่มองเห็นได้ = NG"},"矩形框，涵蓋兩端導體":{en:"Box covering both conductors",th:"กรอบสี่เหลี่ยมครอบตัวนำทั้งสองด้าน"},
"斷路 Open":{en:"Open",th:"วงจรขาด Open"},"線路中斷或寬度明顯縮減":{en:"Trace broken or clearly narrowed",th:"ลายวงจรขาดหรือแคบลงอย่างชัดเจน"},
"缺口寬度超過線寬 1/3 即 NG":{en:"Gap wider than 1/3 of trace width is NG",th:"รอยแหว่งกว้างเกิน 1/3 ของความกว้างลาย = NG"},"矩形框，框住缺口":{en:"Box around the gap",th:"กรอบสี่เหลี่ยมครอบรอยแหว่ง"},
"缺孔 Missing hole":{en:"Missing hole",th:"รูหาย Missing hole"},"應鑽孔位置未鑽孔或孔偏":{en:"Hole not drilled or off position",th:"ไม่ได้เจาะรูหรือรูเยื้องตำแหน่ง"},
"孔位偏移超過孔徑 1/4 即 NG":{en:"Offset over 1/4 of hole diameter is NG",th:"เยื้องเกิน 1/4 ของเส้นผ่านศูนย์กลางรู = NG"},"以孔位中心框選":{en:"Box centred on the hole",th:"กรอบโดยมีจุดศูนย์กลางที่รู"},
"刮傷 Scratch":{en:"Scratch",th:"รอยขีดข่วน Scratch"},"防焊層表面的線狀損傷":{en:"Linear damage on the solder mask",th:"รอยเสียหายเป็นเส้นบนชั้นโซลเดอร์มาสก์"},
"露銅即 NG；未露銅依長度判定":{en:"Exposed copper is NG; otherwise judged by length",th:"เห็นทองแดง = NG หากไม่เห็นให้ตัดสินตามความยาว"},"多邊形，沿刮痕描繪":{en:"Polygon traced along the scratch",th:"รูปหลายเหลี่ยมลากตามรอยขีดข่วน"},
"異物 Contamination":{en:"Contamination",th:"สิ่งปนเปื้อน Contamination"},"板面附著的粉塵、毛屑、殘膠":{en:"Dust, fibres or adhesive residue on the board",th:"ฝุ่น เส้นใย หรือคราบกาวติดบนบอร์ด"},
"位於焊墊上即 NG":{en:"NG if on a pad",th:"อยู่บนแผ่นบัดกรี = NG"},"矩形框":{en:"Box",th:"กรอบสี่เหลี่ยม"},
"判定數值為示意，實際依客戶規格與 IPC-A-600 等級訂定。":{en:"Values are illustrative; real limits follow the customer spec and IPC-A-600 class.",th:"ค่าเป็นตัวอย่าง เกณฑ์จริงขึ้นกับสเปกของลูกค้าและระดับ IPC-A-600"},
"從 Demo 到產線：AI 視覺實驗室架構":{en:"From demo to production line: AI vision lab architecture",th:"จากเดโมสู่สายการผลิต: สถาปัตยกรรมห้องแล็บ AI Vision"},
"這頁的模型是在瀏覽器裡跑的輕量統計版（概念近似 PaDiM：逐位置建立良品特徵分布），用來讓你直接操作。導入產線時，我會用下面的流程，把模型換成深度學習版本。":{en:"The model on this page is a lightweight statistical version that runs in the browser (similar in concept to PaDiM: a per-position distribution of good-board features), so you can try it directly. On a real line I would follow the flow below and replace it with a deep-learning model.",th:"โมเดลในหน้านี้เป็นเวอร์ชันสถิติขนาดเบาที่รันในเบราว์เซอร์ (แนวคิดคล้าย PaDiM: สร้างการกระจายคุณลักษณะของบอร์ดดีทีละตำแหน่ง) เพื่อให้ทดลองได้ทันที เมื่อใช้งานจริงในสายการผลิต ผมจะทำตามขั้นตอนด้านล่างและเปลี่ยนเป็นโมเดล Deep Learning"},
"① 取像":{en:"① Capture",th:"① ถ่ายภาพ"},"AOI 相機定位、固定光源、統一解析度，影像依料號歸檔":{en:"Position the AOI camera, fix lighting and resolution, file images by part number",th:"ติดตั้งกล้อง AOI ควบคุมแสงและความละเอียด จัดเก็บภาพตามรหัสชิ้นงาน"},
"② 標註":{en:"② Label",th:"② ติดป้าย"},"依 STEP 5 規範，在 CVAT 標註少量瑕疵作為驗證集":{en:"Label a small set of defects in CVAT per STEP 5 as the validation set",th:"ติดป้ายตำหนิจำนวนน้อยใน CVAT ตาม STEP 5 เพื่อใช้เป็นชุดตรวจสอบ"},
"③ 訓練":{en:"③ Train",th:"③ ฝึก"},"anomalib PatchCore／PaDiM，在 Colab 或廠內 GPU 只用良品訓練":{en:"anomalib PatchCore / PaDiM on Colab or an in-plant GPU, trained on good boards only",th:"anomalib PatchCore / PaDiM บน Colab หรือ GPU ในโรงงาน ฝึกด้วยบอร์ดดีเท่านั้น"},
"④ 優化":{en:"④ Optimise",th:"④ ปรับแต่ง"},"匯出 ONNX，用 OpenVINO 加速推論；以驗證集決定門檻值":{en:"Export to ONNX and accelerate with OpenVINO; set the threshold on the validation set",th:"ส่งออก ONNX และเร่งด้วย OpenVINO กำหนดเกณฑ์จากชุดตรวจสอบ"},
"⑤ 部署":{en:"⑤ Deploy",th:"⑤ ใช้งานจริง"},"產線邊緣電腦推論，NG 送人工複判站":{en:"Inference on line-side edge PCs; NG boards go to manual re-inspection",th:"อนุมานบนคอมพิวเตอร์ข้างสายการผลิต บอร์ด NG ส่งไปตรวจซ้ำด้วยคน"},
"⑥ 回饋":{en:"⑥ Feedback",th:"⑥ ป้อนกลับ"},"複判結果回流成新的訓練與驗證資料，定期重訓":{en:"Re-inspection results flow back as new training and validation data; retrain regularly",th:"ผลตรวจซ้ำกลับมาเป็นข้อมูลฝึกและตรวจสอบใหม่ และฝึกใหม่เป็นระยะ"},
"所有影像都由程式即時產生，模擬同一料號 PCB 的良品與 5 類瑕疵，不含任何真實客戶資料。訓練與推論都在你的瀏覽器中執行；只有「請 Claude 判讀」會把該片影像與熱力圖送給 AI。":{en:"All images are generated on the fly to simulate good boards and 5 defect types of one part number; no real customer data is used. Training and inference run in your browser; only \"Ask Claude to assess\" sends that board's image and heatmap to AI.",th:"ภาพทั้งหมดสร้างขึ้นทันทีเพื่อจำลองบอร์ดดีและตำหนิ 5 ประเภทของชิ้นงานรุ่นเดียว ไม่มีข้อมูลลูกค้าจริง การฝึกและการอนุมานทำในเบราว์เซอร์ มีเพียงปุ่ม \"ให้ Claude วิเคราะห์\" ที่ส่งภาพและฮีตแมปของบอร์ดนั้นให้ AI"},
/* dynamic */
"良品":{en:"Good",th:"ดี"},"短路":{en:"Short",th:"ลัดวงจร"},"斷路":{en:"Open",th:"วงจรขาด"},"缺孔":{en:"Missing hole",th:"รูหาย"},"刮傷":{en:"Scratch",th:"รอยขีดข่วน"},
"瑕疵品":{en:"Defective",th:"บอร์ดเสีย"},"異常分數 →":{en:"Anomaly score →",th:"คะแนนความผิดปกติ →"},"門檻 ":{en:"Threshold ",th:"เกณฑ์ "},
"等待訓練":{en:"Waiting to train",th:"รอการฝึก"},"重新訓練":{en:"Retrain",th:"ฝึกใหม่"},
"請先完成 STEP 1 訓練。":{en:"Please finish STEP 1 training first.",th:"กรุณาฝึกใน STEP 1 ให้เสร็จก่อน"},
"異常分數":{en:"Anomaly score",th:"คะแนนความผิดปกติ"},"門檻":{en:"threshold",th:"เกณฑ์"},"實際答案":{en:"Ground truth",th:"คำตอบจริง"},
"完成：{a} 片良品、{b} 個區塊 × {c} 維特徵，含 40 片推論共 {d} 秒":{en:"Done: {a} good boards, {b} patches × {c} features, incl. 40 inferences in {d} s",th:"เสร็จแล้ว: บอร์ดดี {a} แผ่น {b} ช่อง × {c} คุณลักษณะ รวมอนุมาน 40 แผ่นใน {d} วินาที"},
"會送出這一片的影像與熱力圖":{en:"This board's image and heatmap will be sent",th:"จะส่งภาพและฮีตแมปของบอร์ดนี้"},
"此環境的 AI 不支援圖片，將只送出檢測數據":{en:"AI here can't take images; only the inspection numbers will be sent",th:"AI ในที่นี้รับภาพไม่ได้ จะส่งเฉพาะข้อมูลการตรวจ"},
"此環境未開啟即時 AI，按下會顯示範例判讀":{en:"Live AI is off here; pressing shows a sample assessment",th:"ไม่มี AI แบบเรียลไทม์ กดแล้วจะแสดงผลวิเคราะห์ตัวอย่าง"},
"Claude 判讀中…":{en:"Claude is assessing…",th:"Claude กำลังวิเคราะห์…"},"Claude 即時判讀":{en:"Claude, live",th:"Claude แบบเรียลไทม์"},
"完成。再畫一個瑕疵試試看。":{en:"Done. Draw another defect and try again.",th:"เสร็จแล้ว ลองวาดตำหนิอีกจุด"},
"使用次數暫時達上限，請稍後再試。":{en:"Usage limit reached for now, please try again later.",th:"ถึงขีดจำกัดการใช้งานชั่วคราว กรุณาลองใหม่ภายหลัง"},
"AI 暫時無法回應，已改顯示範例判讀。":{en:"AI is unavailable right now, showing the sample assessment.",th:"AI ไม่สามารถตอบได้ในขณะนี้ จึงแสดงผลวิเคราะห์ตัวอย่าง"},
"範例判讀（預先產生，對應一片短路瑕疵）":{en:"Sample assessment (pre-generated, for a short defect)",th:"ผลวิเคราะห์ตัวอย่าง (สร้างไว้ล่วงหน้า สำหรับตำหนิลัดวงจร)"}
};
window.VEX={en:`#### Assessment
- **Defect type**: Short. Copper residue connects two adjacent traces.
- **Location**: the heatmap peak sits between two horizontal traces in the upper left, matching the boxed area.
#### Likely process causes
- Under-etching: etchant concentration or time too low, leaving copper in the spacing.
- Dry-film exposure fault: debris on the phototool or dry film protected copper that should have been removed.
#### Recommended action
- Mark this board NG and send it to manual re-inspection to confirm continuity.
- Check the etch line's chemistry and conveyor speed records for this lot; if several boards show it, hold the lot and open a deviation report (this assessment can serve as the 8D D2 problem description).`,
th:`#### ผลการวิเคราะห์
- **ประเภทตำหนิ**: ลัดวงจร (Short) มีเศษทองแดงเชื่อมลายวงจรสองเส้นที่อยู่ติดกัน
- **ตำแหน่ง**: จุดสูงสุดของฮีตแมปอยู่ระหว่างลายวงจรแนวนอนสองเส้นด้านซ้ายบน ตรงกับกรอบที่ทำเครื่องหมาย
#### สาเหตุที่น่าจะเกิดในกระบวนการ
- กัดลายไม่พอ: ความเข้มข้นหรือเวลาของน้ำยากัดไม่พอ ทำให้มีทองแดงค้างในช่องว่างระหว่างลาย
- การฉายแสงดรายฟิล์มผิดปกติ: มีสิ่งแปลกปลอมบนฟิล์มต้นแบบหรือดรายฟิล์ม ทำให้ทองแดงที่ควรถูกกัดยังคงอยู่
#### ข้อเสนอการจัดการ
- ตัดสินบอร์ดนี้เป็น NG และส่งตรวจซ้ำด้วยคนเพื่อยืนยันการนำไฟฟ้า
- ตรวจบันทึกน้ำยาและความเร็วสายพานของสายกัดลายในล็อตนี้ หากพบหลายแผ่นให้กักล็อตและเปิดรายงานความผิดปกติ (ใช้ผลวิเคราะห์นี้เป็น D2 ของ 8D ได้)`};
function tv(zh,vars){const L=(window.I18N&&I18N.lang)||"zh";const e=window.VD[zh];let s=(L!=="zh"&&e&&e[L])||zh;if(vars)for(const k in vars)s=s.replace("{"+k+"}",vars[k]);return s}
function translatePage(){
  if(!window.I18N||I18N.lang==="zh")return;
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(w.nextNode())nodes.push(w.currentNode);
  nodes.forEach(n=>{const t=n.nodeValue.trim();if(t&&window.VD[t]){n.nodeValue=n.nodeValue.replace(t,tv(t))}});
}
