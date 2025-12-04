import { filterCards } from '../src/utils/cardHelpers';
import type { CardType, CardColor, Rarity } from '../src/types/cards';

console.log('=== Filter Example ===\n');

// Example 1: Filter by type
console.log('1. Filtering Avatar cards:');
const avatarCards = filterCards({ type: 'Avatar' });
console.log(`Found ${avatarCards.length} Avatar cards`);
avatarCards.slice(0, 3).forEach((card) => {
  console.log(`  - ${card.name} (${card.print})`);
});
if (avatarCards.length > 3) {
  console.log(`  ... and ${avatarCards.length - 3} more`);
}
console.log();

// Example 2: Filter by color
console.log('2. Filtering red (แดง) cards:');
const redCards = filterCards({ color: 'แดง' });
console.log(`Found ${redCards.length} red cards`);
redCards.slice(0, 3).forEach((card) => {
  console.log(`  - ${card.name} (${card.print})`);
});
if (redCards.length > 3) {
  console.log(`  ... and ${redCards.length - 3} more`);
}
console.log();

// Example 3: Filter by rarity
console.log('3. Filtering UR (Ultra Rare) cards:');
const urCards = filterCards({ rarity: 'UR' });
console.log(`Found ${urCards.length} UR cards`);
urCards.slice(0, 3).forEach((card) => {
  console.log(`  - ${card.name} (${card.print})`);
});
if (urCards.length > 3) {
  console.log(`  ... and ${urCards.length - 3} more`);
}
console.log();

// Example 4: Filter by cost range
console.log('4. Filtering cards with cost between 2 and 4:');
const costRangeCards = filterCards({ cost: { min: 2, max: 4 } });
console.log(`Found ${costRangeCards.length} cards`);
costRangeCards.slice(0, 3).forEach((card) => {
  if ('cost' in card) {
    console.log(`  - ${card.name} (${card.print}) - Cost: ${card.cost}`);
  }
});
if (costRangeCards.length > 3) {
  console.log(`  ... and ${costRangeCards.length - 3} more`);
}
console.log();

// Example 5: Filter by multiple criteria
console.log('5. Filtering red Avatar cards with cost 3:');
const complexFilter = filterCards({
  type: 'Avatar',
  color: 'แดง',
  cost: 3,
});
console.log(`Found ${complexFilter.length} cards`);
complexFilter.slice(0, 5).forEach((card) => {
  if ('cost' in card && 'power' in card) {
    console.log(
      `  - ${card.name} (${card.print}) - Cost: ${card.cost}, Power: ${card.power}`
    );
  }
});
if (complexFilter.length > 5) {
  console.log(`  ... and ${complexFilter.length - 5} more`);
}
console.log();

// Example 6: Filter by symbol
console.log('6. Filtering cards with symbol "เทพ" (God):');
const godCards = filterCards({ symbol: 'เทพ' });
console.log(`Found ${godCards.length} cards`);
godCards.slice(0, 3).forEach((card) => {
  console.log(`  - ${card.name} (${card.print})`);
});
if (godCards.length > 3) {
  console.log(`  ... and ${godCards.length - 3} more`);
}
console.log();

// Example 7: Filter by multiple types
console.log('7. Filtering Avatar and Magic cards:');
const avatarAndMagic = filterCards({ type: ['Avatar', 'Magic'] });
console.log(`Found ${avatarAndMagic.length} cards`);
console.log(
  `  Avatar: ${avatarAndMagic.filter((c) => c.type === 'Avatar').length}`
);
console.log(
  `  Magic: ${avatarAndMagic.filter((c) => c.type === 'Magic').length}`
);

