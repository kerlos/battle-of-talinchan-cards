import {
  getCardsBySet,
  getAvailableSetCodes,
  getAllCards,
} from '../src/utils/cardHelpers';

console.log('=== Set Example ===\n');

// Example 1: Get available set codes
console.log('1. Available set codes:');
const setCodes = getAvailableSetCodes();
console.log(`  Total sets: ${setCodes.length}`);
setCodes.forEach((code) => {
  const cards = getCardsBySet(code);
  console.log(`  - ${code}: ${cards.length} cards`);
});
console.log();

// Example 2: Get cards from a specific set
console.log('2. Getting cards from BT01 set:');
const bt01Cards = getCardsBySet('BT01');
console.log(`Found ${bt01Cards.length} cards in BT01`);
console.log('First 5 cards:');
bt01Cards.slice(0, 5).forEach((card) => {
  console.log(`  - ${card.print}: ${card.name} [${card.rare}]`);
});
console.log();

// Example 3: Get cards from multiple sets
console.log('3. Getting cards from SD01 and SD02 sets:');
const sd01Cards = getCardsBySet('SD01');
const sd02Cards = getCardsBySet('SD02');
console.log(`SD01: ${sd01Cards.length} cards`);
console.log(`SD02: ${sd02Cards.length} cards`);
console.log(`Total: ${sd01Cards.length + sd02Cards.length} cards`);
console.log();

// Example 4: Compare card counts across sets
console.log('4. Card distribution across sets:');
const allCards = getAllCards();
const setDistribution: Record<string, number> = {};

allCards.forEach((card) => {
  const setCode = card.print.split('-')[0];
  setDistribution[setCode] = (setDistribution[setCode] || 0) + 1;
});

const sortedSets = Object.entries(setDistribution).sort(
  (a, b) => b[1] - a[1]
);

console.log('Sets sorted by card count:');
sortedSets.forEach(([setCode, count]) => {
  console.log(`  ${setCode}: ${count} cards`);
});
console.log();

// Example 5: Get unique cards from a set
console.log('5. Getting unique card names from BT01:');
const uniqueBt01Names = new Set(bt01Cards.map((card) => card.name));
console.log(`BT01 has ${bt01Cards.length} total cards`);
console.log(`BT01 has ${uniqueBt01Names.size} unique card names`);
console.log('Sample unique names:');
Array.from(uniqueBt01Names).slice(0, 5).forEach((name) => {
  console.log(`  - ${name}`);
});

