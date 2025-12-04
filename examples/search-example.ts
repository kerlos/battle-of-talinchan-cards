import {
  searchCards,
  getCardByPrint,
  getAllCards,
} from '../src/utils/cardHelpers';

console.log('=== Search Example ===\n');

// Example 1: Search cards by name
console.log('1. Searching for cards with "นนทก" in the name:');
const searchResults = searchCards('นนทก');
console.log(`Found ${searchResults.length} cards:`);
searchResults.slice(0, 5).forEach((card) => {
  console.log(`  - ${card.name} (${card.print}) [${card.rare}]`);
});
if (searchResults.length > 5) {
  console.log(`  ... and ${searchResults.length - 5} more`);
}
console.log();

// Example 2: Get a specific card by print code
console.log('2. Getting card by print code "BT01-001":');
const cardByPrint = getCardByPrint('BT01-001');
if (cardByPrint) {
  console.log(`  Name: ${cardByPrint.name}`);
  console.log(`  Type: ${cardByPrint.type}`);
  console.log(`  Print: ${cardByPrint.print}`);
  console.log(`  Rarity: ${cardByPrint.rare}`);
  if ('cost' in cardByPrint) {
    console.log(`  Cost: ${cardByPrint.cost}`);
  }
  if ('power' in cardByPrint) {
    console.log(`  Power: ${cardByPrint.power}`);
  }
} else {
  console.log('  Card not found');
}
console.log();

// Example 3: Get total number of cards
console.log('3. Total number of cards in database:');
const allCards = getAllCards();
console.log(`  Total cards: ${allCards.length}`);
console.log();

// Example 4: Search for cards with partial name match
console.log('4. Searching for cards with "เทพ" in the name:');
const symbolSearch = searchCards('เทพ');
console.log(`Found ${symbolSearch.length} cards`);
symbolSearch.slice(0, 3).forEach((card) => {
  console.log(`  - ${card.name} (${card.print})`);
});
if (symbolSearch.length > 3) {
  console.log(`  ... and ${symbolSearch.length - 3} more`);
}

