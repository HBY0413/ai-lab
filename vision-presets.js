/* Pre-run Claude judgements for the PCB demo, one per drawing tool plus "no defect".
   Used when there is no live AI: the result matches what the visitor drew. */
window.VPRE = {
 kindName: {
  copper: { zh: "短路", en: "short-circuit", th: "ลัดวงจร" },
  cut: { zh: "斷路", en: "open circuit", th: "วงจรขาด" },
  dirt: { zh: "異物", en: "foreign material", th: "สิ่งแปลกปลอม" } },
 tag: {
  kind: { zh: "預跑判讀（事先用 Claude 跑好，對應你畫的「{k}」瑕疵）", en: "Pre-run judgement (generated in advance by Claude for the {k} defect you drew)", th: "ผลวิเคราะห์ที่รันไว้ล่วงหน้าด้วย Claude (ตรงกับตำหนิ \"{k}\" ที่คุณวาด)" },
  ok: { zh: "預跑判讀（事先用 Claude 跑好，對應沒有偵測到瑕疵的情況）", en: "Pre-run judgement (generated in advance by Claude for a board with no defect detected)", th: "ผลวิเคราะห์ที่รันไว้ล่วงหน้าด้วย Claude (กรณีไม่พบตำหนิ)" } },
 note: {
  pre: { zh: "這裡沒有即時 AI，顯示的是事先用 Claude 跑好、對應你畫的瑕疵類型的判讀。", en: "There's no live AI here; this is a judgement pre-run by Claude for the defect type you drew.", th: "ที่นี่ไม่มี AI แบบเรียลไทม์ ผลนี้รันไว้ล่วงหน้าด้วย Claude ตามประเภทตำหนิที่คุณวาด" },
  mixed: { zh: "你畫了不只一種瑕疵，這裡顯示筆畫最多的那一種（{k}）的預跑判讀。", en: "You drew more than one defect type; this shows the pre-run judgement for the one with the most strokes ({k}).", th: "คุณวาดตำหนิมากกว่าหนึ่งประเภท ผลนี้แสดงประเภทที่วาดมากที่สุด ({k})" } },
 copper: null, /* the page's built-in short-circuit example */
 cut: {
  zh: `#### 判讀結果
- **瑕疵類型**：斷路（Open），一條線路中段被截斷，兩端不再相連。
- **位置**：熱力圖最高點落在線路的缺口上，與框選位置一致。
#### 可能的製程原因
- 蝕刻過度或線路上有針孔，細線被咬斷。
- 搬運或治具刮傷，把線路刮斷。
#### 建議處置
- 此片判 NG，送人工複判，並以電測確認是否開路。
- 若同批多片在相近位置出現斷路，回查蝕刻參數與搬運治具，必要時暫停該站。`,
  en: `#### Assessment
- **Defect type**: Open. A trace is cut partway, so its two ends are no longer connected.
- **Location**: the heatmap peak sits on the gap in the trace, matching the boxed area.
#### Likely process causes
- Over-etching or pinholes in the trace eating through a thin line.
- Scratches from handling or fixtures cutting the trace.
#### Recommended action
- Mark this board NG, send it to manual re-inspection and confirm the open with an electrical test.
- If several boards in the lot show opens in a similar spot, check the etch parameters and handling fixtures, and pause the station if needed.`,
  th: `#### ผลการวิเคราะห์
- **ประเภทตำหนิ**: วงจรขาด (Open) ลายวงจรเส้นหนึ่งขาดกลางเส้น ปลายทั้งสองไม่เชื่อมกันแล้ว
- **ตำแหน่ง**: จุดสูงสุดของฮีตแมปอยู่ที่รอยขาดของลายวงจร ตรงกับกรอบที่ระบุ
#### สาเหตุที่น่าจะเกิดในกระบวนการ
- กัดลายมากเกินไปหรือมีรูเข็มบนลายวงจร ทำให้เส้นเล็กขาด
- รอยขีดข่วนจากการขนย้ายหรือจิ๊กทำให้ลายวงจรขาด
#### ข้อเสนอการจัดการ
- ตัดสินบอร์ดนี้เป็น NG ส่งตรวจซ้ำด้วยคน และยืนยันการขาดด้วยการทดสอบทางไฟฟ้า
- หากหลายแผ่นในล็อตเดียวกันขาดในตำแหน่งใกล้กัน ให้ตรวจพารามิเตอร์การกัดลายและจิ๊กขนย้าย และหยุดสถานีหากจำเป็น` },
 dirt: {
  zh: `#### 判讀結果
- **瑕疵類型**：異物，板面上有深色的外來物附著。
- **位置**：熱力圖最高點在深色斑點處，與框選位置一致；需要確認是否壓在線路或焊墊上。
#### 可能的製程原因
- 生產環境落塵，或手套、包材的纖維掉落。
- 防焊印刷前清潔不完全，雜質被封在油墨下。
#### 建議處置
- 先判斷能否清除：可清除就清潔後重檢；封在防焊下的則判 NG，送人工複判。
- 檢查該站的潔淨度與清潔紀錄；若同批多片出現，加強進料前的清潔。`,
  en: `#### Assessment
- **Defect type**: Foreign material. A dark foreign particle is stuck to the board surface.
- **Location**: the heatmap peak is on the dark spot, matching the boxed area; check whether it sits on a trace or pad.
#### Likely process causes
- Airborne dust in production, or fibres from gloves or packaging.
- Incomplete cleaning before solder-mask printing, sealing debris under the ink.
#### Recommended action
- First decide whether it can be removed: if so, clean and re-inspect; if it is sealed under the solder mask, mark NG and send to manual re-inspection.
- Check the station's cleanliness and cleaning records; if several boards in the lot show it, tighten pre-process cleaning.`,
  th: `#### ผลการวิเคราะห์
- **ประเภทตำหนิ**: สิ่งแปลกปลอม มีวัตถุสีเข้มจากภายนอกติดอยู่บนผิวบอร์ด
- **ตำแหน่ง**: จุดสูงสุดของฮีตแมปอยู่ที่จุดสีเข้ม ตรงกับกรอบที่ระบุ ต้องตรวจว่าทับลายวงจรหรือแพดหรือไม่
#### สาเหตุที่น่าจะเกิดในกระบวนการ
- ฝุ่นในพื้นที่ผลิต หรือเส้นใยจากถุงมือหรือวัสดุบรรจุภัณฑ์
- ทำความสะอาดไม่ทั่วถึงก่อนพิมพ์โซลเดอร์มาสก์ ทำให้สิ่งสกปรกถูกเคลือบไว้ใต้หมึก
#### ข้อเสนอการจัดการ
- ประเมินก่อนว่าเอาออกได้หรือไม่ ถ้าได้ให้ทำความสะอาดแล้วตรวจใหม่ ถ้าถูกเคลือบใต้โซลเดอร์มาสก์ให้ตัดสินเป็น NG และส่งตรวจซ้ำด้วยคน
- ตรวจความสะอาดและบันทึกการทำความสะอาดของสถานี หากพบหลายแผ่นในล็อตเดียวกัน ให้เพิ่มการทำความสะอาดก่อนเข้ากระบวนการ` },
 ok: {
  zh: `#### 判讀結果
- **瑕疵類型**：無瑕疵。異常分數低於門檻，熱力圖沒有明顯的高異常區域。
- **位置**：無。
#### 可能的製程原因
- 不適用。
#### 建議處置
- 此片判 OK，可以放行。
- 如果你在這片上畫了瑕疵卻仍判 OK，代表瑕疵太小或門檻偏高，可以調低門檻再試一次。`,
  en: `#### Assessment
- **Defect type**: none. The anomaly score is below the threshold and the heatmap has no clear hot spot.
- **Location**: none.
#### Likely process causes
- Not applicable.
#### Recommended action
- Mark this board OK and release it.
- If you drew a defect but it still reads OK, the defect is too small or the threshold too high; lower the threshold and try again.`,
  th: `#### ผลการวิเคราะห์
- **ประเภทตำหนิ**: ไม่มีตำหนิ คะแนนความผิดปกติต่ำกว่าเกณฑ์ และฮีตแมปไม่มีจุดผิดปกติชัดเจน
- **ตำแหน่ง**: ไม่มี
#### สาเหตุที่น่าจะเกิดในกระบวนการ
- ไม่เกี่ยวข้อง
#### ข้อเสนอการจัดการ
- ตัดสินบอร์ดนี้เป็น OK และปล่อยผ่านได้
- ถ้าคุณวาดตำหนิไว้แต่ยังได้ผล OK แปลว่าตำหนิเล็กเกินไปหรือเกณฑ์สูงเกินไป ลองลดเกณฑ์แล้วลองใหม่` }
};
