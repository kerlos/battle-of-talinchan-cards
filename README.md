# Battle of Talinchan Cards

ข้อมูลการ์ดและฟังก์ชันช่วยเหลือสำหรับเกมการ์ดสะสม Battle of Talinchan

## ข้อความปฏิเสธความรับผิดชอบ

โปรเจกต์นี้จัดทำขึ้นโดยแฟนคลับ (Fan-made) เพื่อรวบรวมข้อมูลการ์ดเท่านั้น ไม่มีความเกี่ยวข้อง สนับสนุน หรือได้รับอนุญาตอย่างเป็นทางการจาก บริษัท พสุโลล จำกัด / บริษัท ไลอ้อน เฮ้าส์ จำกัด รูปภาพและข้อความบนการ์ดเป็นลิขสิทธิ์ของ © บริษัท พสุโลล จำกัด / บริษัท ไลอ้อน เฮ้าส์ จำกัด ซอร์สโค้ดของโปรเจกต์นี้อยู่ภายใต้สัญญาอนุญาตแบบ MIT License

## การติดตั้ง

โปรเจกต์นี้ใช้ [pnpm](https://pnpm.io/) เป็นตัวจัดการแพ็กเกจ

### ความต้องการเบื้องต้น

- Node.js (แนะนำเวอร์ชัน v18 หรือสูงกว่า)
- pnpm (ติดตั้งแบบ global: `npm install -g pnpm`)

### การตั้งค่า

1. ติดตั้ง dependencies:
```bash
pnpm install
```

2. Build โปรเจกต์ (ไม่บังคับ):
```bash
pnpm build
```

## การใช้งาน

### นำเข้า Helper Functions

```typescript
import {
  getAllCards,
  getCardsBySet,
  searchCards,
  filterCards,
  getCardByPrint,
  getUniqueCards,
  getAvailableSetCodes,
} from './src/utils/cardHelpers';
```

### API ของ Helper Functions

#### `getAllCards()`

คืนค่าการ์ดทั้งหมดจากทุกเซ็ต

```typescript
const allCards = getAllCards();
console.log(`Total cards: ${allCards.length}`);
```

#### `getCardsBySet(setCode: string)`

ดึงการ์ดจากเซ็ตที่ระบุ

**พารามิเตอร์:**
- `setCode` - รหัสเซ็ต (เช่น 'BT01', 'BT02', 'SD01')

**คืนค่า:** อาร์เรย์ของการ์ดจากเซ็ตที่ระบุ

```typescript
const bt01Cards = getCardsBySet('BT01');
console.log(`BT01 has ${bt01Cards.length} cards`);
```

#### `searchCards(query: string)`

ค้นหาการ์ดตามชื่อ (ไม่สนใจตัวพิมพ์ใหญ่-เล็ก, รองรับการค้นหาแบบบางส่วน)

**พารามิเตอร์:**
- `query` - ข้อความค้นหา

**คืนค่า:** อาร์เรย์ของการ์ดที่ตรงกับคำค้นหา

```typescript
const results = searchCards('นนทก');
console.log(`Found ${results.length} cards`);
```

#### `filterCards(filters: FilterOptions)`

กรองการ์ดตามเกณฑ์ต่างๆ

**ตัวเลือกการกรอง:**
- `type?: CardType | CardType[]` - กรองตามประเภทการ์ด ('Avatar', 'Magic', 'Life', 'Construct')
- `color?: CardColor | CardColor[]` - กรองตามสี ('แดง', 'ฟ้า', 'เขียว', 'ม่วง', 'ไม่มีสี')
- `rarity?: Rarity | Rarity[]` - กรองตามความหายาก ('SR', 'UR', 'PR', 'CBR', 'C', 'SCR', 'R', 'USEC')
- `symbol?: Symbol | Symbol[]` - กรองตามสัญลักษณ์
- `cost?: number | { min?: number; max?: number }` - กรองตามค่าใช้จ่าย (ระบุค่าหรือช่วง)
- `gem?: number | { min?: number; max?: number }` - กรองตามอัญมณี (ระบุค่าหรือช่วง)
- `power?: number | { min?: number; max?: number }` - กรองตามพลัง (ระบุค่าหรือช่วง)
- `setCode?: string | string[]` - กรองตามรหัสเซ็ต
- `name?: string` - กรองตามชื่อ (รองรับการค้นหาแบบบางส่วน)

**คืนค่า:** อาร์เรย์ของการ์ดที่ตรงกับเกณฑ์การกรองทั้งหมด

```typescript
// กรองตามประเภท
const avatarCards = filterCards({ type: 'Avatar' });

// กรองตามสี
const redCards = filterCards({ color: 'แดง' });

// กรองตามช่วงค่าใช้จ่าย
const midCostCards = filterCards({ cost: { min: 2, max: 4 } });

// กรองหลายเกณฑ์พร้อมกัน
const complexFilter = filterCards({
  type: 'Avatar',
  color: 'แดง',
  cost: 3,
});
```

#### `getCardByPrint(printCode: string)`

ดึงการ์ดเฉพาะตามรหัสการ์ด

**พารามิเตอร์:**
- `printCode` - รหัสการ์ด (เช่น 'BT01-001')

**คืนค่า:** การ์ดที่ตรงกับรหัสการ์ด หรือ `undefined` ถ้าไม่พบ

```typescript
const card = getCardByPrint('BT01-001');
if (card) {
  console.log(card.name);
}
```

#### `getUniqueCards()`

ดึงการ์ดที่ไม่ซ้ำกัน (ลบการ์ดที่ซ้ำตามชื่อ/รหัสการ์ด โดยเก็บไว้เพียงตัวแปรเดียว)

**คืนค่า:** อาร์เรย์ของการ์ดที่ไม่ซ้ำกัน

```typescript
const uniqueCards = getUniqueCards();
console.log(`Unique cards: ${uniqueCards.length}`);
```

#### `getAvailableSetCodes()`

ดึงรหัสเซ็ตทั้งหมดที่มี

**คืนค่า:** อาร์เรย์ของรหัสเซ็ต

```typescript
const setCodes = getAvailableSetCodes();
console.log('Available sets:', setCodes);
```

## สคริปต์ตัวอย่าง

โปรเจกต์นี้มีสคริปต์ตัวอย่างที่แสดงวิธีการใช้ฟังก์ชันช่วยเหลือ

### รันตัวอย่าง

```bash
# รันตัวอย่างการค้นหา
pnpm example:search

# รันตัวอย่างการกรอง
pnpm example:filter

# รันตัวอย่างเซ็ต
pnpm example:set

# รันตัวอย่างทั้งหมด
pnpm example:all
```

### สคริปต์ตัวอย่าง

- **`examples/search-example.ts`** - แสดงการค้นหาการ์ดตามชื่อและการดึงการ์ดตามรหัสการ์ด
- **`examples/filter-example.ts`** - แสดงการกรองการ์ดตามเกณฑ์ต่างๆ
- **`examples/set-example.ts`** - แสดงการทำงานกับเซ็ตการ์ด

## โครงสร้างข้อมูลการ์ด

การ์ดถูกจัดระเบียบตามเซ็ต:
- **BT01-BT08**: เซ็ตบูสเตอร์
- **SD01-SD07**: สตรัคเจอร์เด็ค
- **CC01-CC02**: เซ็ตคอลเลกชัน
- **ODY1**: เซ็ต Odyssey
- **PRE0**: เซ็ต Pre-release
- **PRMO**: เซ็ตโปรโมชัน
- **SL01**: เซ็ตพิเศษ

การ์ดแต่ละใบมีโครงสร้างดังนี้:

```typescript
interface Card {
  name: string;
  type: 'Avatar' | 'Magic' | 'Life' | 'Construct';
  print: string; // เช่น 'BT01-001'
  rare: Rarity;
  soi: number;
  mainEffect: string;
  // ... ฟิลด์เพิ่มเติมตามประเภทการ์ด
}
```

## การพัฒนา

### Build

```bash
pnpm build
```

### รันไฟล์ TypeScript โดยตรง

```bash
pnpm dev <file.ts>
```

## การมีส่วนร่วม

เรายินดีต้อนรับการมีส่วนร่วมจากทุกคน! หากคุณต้องการเพิ่มหรืออัปเดตข้อมูลการ์ด กรุณาดำเนินการดังนี้:

### การเพิ่มหรืออัปเดตข้อมูลการ์ด

1. **เปิด Issue**: ก่อนเริ่มทำงาน กรุณาเปิด issue ใหม่พร้อมกับ tag ที่เหมาะสม (เช่น `card-data`, `new-card`, `update-card`, `bug-fix`) เพื่อแจ้งให้ทีมทราบว่าคุณกำลังจะทำอะไร
2. **อธิบายรายละเอียด**: ใน issue กรุณาระบุ:
   - การ์ดที่ต้องการเพิ่มหรืออัปเดต
   - รหัสการ์ด (print code) หรือเซ็ตที่เกี่ยวข้อง
   - ข้อมูลที่ต้องการเปลี่ยนแปลง (ถ้ามี)
3. **รอการอนุมัติ**: รอให้ maintainer ตรวจสอบและอนุมัติก่อนเริ่มทำงาน
4. **สร้าง Pull Request**: หลังจากที่ได้รับการอนุมัติแล้ว สร้าง pull request พร้อมกับอ้างอิงถึง issue ที่เกี่ยวข้อง

สำหรับรายละเอียดเพิ่มเติมเกี่ยวกับรูปแบบข้อมูลการ์ดและขั้นตอนการมีส่วนร่วม กรุณาอ่าน [CONTRIBUTING.md](CONTRIBUTING.md)

## สัญญาอนุญาต

MIT
