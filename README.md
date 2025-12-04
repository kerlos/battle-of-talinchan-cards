# Battle of Talinchan Cards

ข้อมูลการ์ดและฟังก์ชันช่วยเหลือสำหรับเกมการ์ดสะสม Battle of Talinchan

## ข้อความปฏิเสธความรับผิดชอบ

โปรเจกต์นี้จัดทำขึ้นโดยแฟนคลับ (Fan-made) เพื่อรวบรวมข้อมูลการ์ดเท่านั้น ไม่มีความเกี่ยวข้อง สนับสนุน หรือได้รับอนุญาตอย่างเป็นทางการจาก บริษัท พสุโลล จำกัด / บริษัท ไลอ้อน เฮ้าส์ จำกัด รูปภาพและข้อความบนการ์ดเป็นลิขสิทธิ์ของ © บริษัท พสุโลล จำกัด / บริษัท ไลอ้อน เฮ้าส์ จำกัด ซอร์สโค้ดของโปรเจกต์นี้อยู่ภายใต้สัญญาอนุญาตแบบ MIT License

## การมีส่วนร่วม

เรายินดีต้อนรับการมีส่วนร่วมจากทุกคน! หากคุณต้องการเพิ่มหรืออัปเดตข้อมูลการ์ด กรุณาดำเนินการดังนี้:

### การเพิ่มหรืออัปเดตข้อมูลการ์ด

1. **เปิด Issue**: ก่อนเริ่มทำงาน กรุณา[เปิด issue ใหม่](https://github.com/kerlos/battle-of-talinchan-cards/issues/new)พร้อมกับ tag ที่เหมาะสม (เช่น `card-data`, `new-card`, `update-card`, `bug-fix`) เพื่อแจ้งให้ทีมทราบว่าคุณกำลังจะทำอะไร
2. **อธิบายรายละเอียด**: ใน issue กรุณาระบุ:
   - การ์ดที่ต้องการเพิ่มหรืออัปเดต
   - รหัสการ์ด (print code) หรือเซ็ตที่เกี่ยวข้อง
   - ข้อมูลที่ต้องการเปลี่ยนแปลง (ถ้ามี)
3. **รอการอนุมัติ**: รอให้ maintainer ตรวจสอบและอนุมัติก่อนเริ่มทำงาน
4. **สร้าง Pull Request**: หลังจากที่ได้รับการอนุมัติแล้ว สร้าง pull request พร้อมกับอ้างอิงถึง issue ที่เกี่ยวข้อง

สำหรับรายละเอียดเพิ่มเติมเกี่ยวกับรูปแบบข้อมูลการ์ดและขั้นตอนการมีส่วนร่วม กรุณาอ่าน [CONTRIBUTING.md](CONTRIBUTING.md)

## Setup

This project uses [pnpm](https://pnpm.io/) as the package manager.

### Prerequisites

- Node.js (recommended version v18 or higher)
- pnpm (install globally: `npm install -g pnpm`)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Build the project (optional):
```bash
pnpm build
```

## Usage

### Importing Helper Functions

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

### Helper Functions API

#### `getAllCards()`

Returns all cards from all sets.

```typescript
const allCards = getAllCards();
console.log(`Total cards: ${allCards.length}`);
```

#### `getCardsBySet(setCode: string)`

Retrieves cards from the specified set.

**Parameters:**
- `setCode` - Set code (e.g., 'BT01', 'BT02', 'SD01')

**Returns:** Array of cards from the specified set

```typescript
const bt01Cards = getCardsBySet('BT01');
console.log(`BT01 has ${bt01Cards.length} cards`);
```

#### `searchCards(query: string)`

Searches for cards by name (case-insensitive, supports partial matching).

**Parameters:**
- `query` - Search query

**Returns:** Array of cards matching the search query

```typescript
const results = searchCards('นนทก');
console.log(`Found ${results.length} cards`);
```

#### `filterCards(filters: FilterOptions)`

Filters cards based on various criteria.

**Filter Options:**
- `type?: CardType | CardType[]` - Filter by card type ('Avatar', 'Magic', 'Life', 'Construct')
- `color?: CardColor | CardColor[]` - Filter by color ('แดง', 'ฟ้า', 'เขียว', 'ม่วง', 'ไม่มีสี')
- `rarity?: Rarity | Rarity[]` - Filter by rarity ('SR', 'UR', 'PR', 'CBR', 'C', 'SCR', 'R', 'USEC')
- `symbol?: Symbol | Symbol[]` - Filter by symbol
- `cost?: number | { min?: number; max?: number }` - Filter by cost (specify value or range)
- `gem?: number | { min?: number; max?: number }` - Filter by gem (specify value or range)
- `power?: number | { min?: number; max?: number }` - Filter by power (specify value or range)
- `setCode?: string | string[]` - Filter by set code
- `name?: string` - Filter by name (supports partial matching)

**Returns:** Array of cards matching all filter criteria

```typescript
// Filter by type
const avatarCards = filterCards({ type: 'Avatar' });

// Filter by color
const redCards = filterCards({ color: 'แดง' });

// Filter by cost range
const midCostCards = filterCards({ cost: { min: 2, max: 4 } });

// Filter by multiple criteria
const complexFilter = filterCards({
  type: 'Avatar',
  color: 'แดง',
  cost: 3,
});
```

#### `getCardByPrint(printCode: string)`

Retrieves a specific card by its print code.

**Parameters:**
- `printCode` - Card print code (e.g., 'BT01-001')

**Returns:** Card matching the print code, or `undefined` if not found

```typescript
const card = getCardByPrint('BT01-001');
if (card) {
  console.log(card.name);
}
```

#### `getUniqueCards()`

Retrieves unique cards (removes duplicate cards by name/print code, keeping only one instance).

**Returns:** Array of unique cards

```typescript
const uniqueCards = getUniqueCards();
console.log(`Unique cards: ${uniqueCards.length}`);
```

#### `getAvailableSetCodes()`

Retrieves all available set codes.

**Returns:** Array of set codes

```typescript
const setCodes = getAvailableSetCodes();
console.log('Available sets:', setCodes);
```

## Example Scripts

This project includes example scripts demonstrating how to use the helper functions.

### Running Examples

```bash
# Run search example
pnpm example:search

# Run filter example
pnpm example:filter

# Run set example
pnpm example:set

# Run all examples
pnpm example:all
```

### Example Scripts

- **`examples/search-example.ts`** - Demonstrates searching cards by name and retrieving cards by print code
- **`examples/filter-example.ts`** - Demonstrates filtering cards by various criteria
- **`examples/set-example.ts`** - Demonstrates working with card sets

## Card Data Structure

Cards are organized by set:
- **BT01-BT08**: Booster sets
- **SD01-SD07**: Structure decks
- **CC01-CC02**: Collection sets
- **ODY1**: Odyssey set
- **PRE0**: Pre-release set
- **PRMO**: Promotion set
- **SL01**: Special set

Each card has the following structure:

```typescript
interface Card {
  name: string;
  type: 'Avatar' | 'Magic' | 'Life' | 'Construct';
  print: string; // e.g., 'BT01-001'
  rare: Rarity;
  soi: number;
  mainEffect: string;
  // ... additional fields based on card type
}
```