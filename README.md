# Battle of Talinchan Cards

Card data and helper functions for Battle of Talinchan trading card game.

## Legal Disclaimer

**English:**

This project is a fan-made database and is not affiliated with, endorsed, or sponsored by PASULOL CO., LTd. / LION HOUSE Co.,Ltd. The card images and text are copyright © PASULOL CO., LTd. / LION HOUSE Co.,Ltd. The source code of this project is licensed under the MIT License.

**Thai:**

ข้อความปฏิเสธความรับผิดชอบ (Disclaimer) โปรเจกต์นี้จัดทำขึ้นโดยแฟนคลับ (Fan-made) เพื่อรวบรวมข้อมูลการ์ดเท่านั้น ไม่มีความเกี่ยวข้อง สนับสนุน หรือได้รับอนุญาตอย่างเป็นทางการจาก บริษัท พสุโลล จำกัด / บริษัท ไลอ้อน เฮ้าส์ จำกัด รูปภาพและข้อความบนการ์ดเป็นลิขสิทธิ์ของ © บริษัท พสุโลล จำกัด / บริษัท ไลอ้อน เฮ้าส์ จำกัด ซอร์สโค้ดของโปรเจกต์นี้อยู่ภายใต้สัญญาอนุญาตแบบ MIT License

## Installation

This project uses [pnpm](https://pnpm.io/) as the package manager.

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (install globally: `npm install -g pnpm`)

### Setup

1. Install dependencies:
```bash
pnpm install
```

2. Build the project (optional):
```bash
pnpm build
```

## Usage

### Import Helper Functions

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

Get cards from a specific set.

**Parameters:**
- `setCode` - Set code (e.g., 'BT01', 'BT02', 'SD01')

**Returns:** Array of cards from the specified set

```typescript
const bt01Cards = getCardsBySet('BT01');
console.log(`BT01 has ${bt01Cards.length} cards`);
```

#### `searchCards(query: string)`

Search cards by name (case-insensitive, partial match).

**Parameters:**
- `query` - Search query string

**Returns:** Array of cards matching the query

```typescript
const results = searchCards('นนทก');
console.log(`Found ${results.length} cards`);
```

#### `filterCards(filters: FilterOptions)`

Filter cards by various criteria.

**Filter Options:**
- `type?: CardType | CardType[]` - Filter by card type ('Avatar', 'Magic', 'Life', 'Construct')
- `color?: CardColor | CardColor[]` - Filter by color ('แดง', 'ฟ้า', 'เขียว', 'ม่วง', 'ไม่มีสี')
- `rarity?: Rarity | Rarity[]` - Filter by rarity ('SR', 'UR', 'PR', 'CBR', 'C', 'SCR', 'R', 'USEC')
- `symbol?: Symbol | Symbol[]` - Filter by symbol
- `cost?: number | { min?: number; max?: number }` - Filter by cost (exact or range)
- `gem?: number | { min?: number; max?: number }` - Filter by gem (exact or range)
- `power?: number | { min?: number; max?: number }` - Filter by power (exact or range)
- `setCode?: string | string[]` - Filter by set code(s)
- `name?: string` - Filter by name (partial match)

**Returns:** Array of cards matching all filter criteria

```typescript
// Filter by type
const avatarCards = filterCards({ type: 'Avatar' });

// Filter by color
const redCards = filterCards({ color: 'แดง' });

// Filter by cost range
const midCostCards = filterCards({ cost: { min: 2, max: 4 } });

// Multiple filters
const complexFilter = filterCards({
  type: 'Avatar',
  color: 'แดง',
  cost: 3,
});
```

#### `getCardByPrint(printCode: string)`

Get a specific card by print code.

**Parameters:**
- `printCode` - Print code (e.g., 'BT01-001')

**Returns:** Card with matching print code, or `undefined` if not found

```typescript
const card = getCardByPrint('BT01-001');
if (card) {
  console.log(card.name);
}
```

#### `getUniqueCards()`

Get unique cards (deduplicated by name/print, keeping one variant).

**Returns:** Array of unique cards

```typescript
const uniqueCards = getUniqueCards();
console.log(`Unique cards: ${uniqueCards.length}`);
```

#### `getAvailableSetCodes()`

Get all available set codes.

**Returns:** Array of set codes

```typescript
const setCodes = getAvailableSetCodes();
console.log('Available sets:', setCodes);
```

## Example Scripts

The project includes example scripts demonstrating how to use the helper functions.

### Run Examples

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

- **`examples/search-example.ts`** - Demonstrates searching cards by name and getting cards by print code
- **`examples/filter-example.ts`** - Demonstrates filtering cards by various criteria
- **`examples/set-example.ts`** - Demonstrates working with card sets

## Card Data Structure

Cards are organized by sets:
- **BT01-BT08**: Booster sets
- **SD01-SD07**: Structure decks
- **CC01-CC02**: Collection sets
- **ODY1**: Odyssey set
- **PRE0**: Pre-release set
- **PRMO**: Promo set
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

## Development

### Build

```bash
pnpm build
```

### Run TypeScript files directly

```bash
pnpm dev <file.ts>
```

## License

MIT

