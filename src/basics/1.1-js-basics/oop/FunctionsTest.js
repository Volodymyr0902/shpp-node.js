import { Clothes } from "./Clothes.js";
import { Electronics } from "./Electronics.js";
import { searchProducts } from "./Functions.js";
import { sortProducts } from "./Functions.js";

// List of Clothes to be tested in both functions.
let clothesSet = [
  new Clothes(3821, "Chino pants", "Classic casual pants for everyday", 34.99),
  new Clothes(9843, "Rugby boots", "Hard shoes resistant to any match!", 119.99),
  new Clothes(4647, "Baseball cap", "Protects your hair from ugly weather", 7.99),
  new Clothes(2404, "Aviator sunglasses", "With these every date becomes a cool match!", 5.99),
  new Clothes(7726, "Basic T-shirt", "Fits anybody, comes perfect with chino", 12.99),
  new Clothes(2678, "Knitted pullover", "Designed for cool weather", 27.99),
  new Clothes(9176, "Runner sneakers", "Best shoes for your morning activities", 84.99),
  new Clothes(4432, "Artificial necklace", "Great option for classic evening", 4.99),
  new Clothes(3065, "Fleece pants", "Stay warm during the coolest walks", 22.99),
  new Clothes(2199, "Non-iron shirt", "Get rid of annoying morning routines!", 8.99)
];

// List of Electronics to be tested in both functions.
let electronicsSet = [
  new Electronics(6895, "Apple iPhone 14", "Still modern Apple's portable", 700),
  new Electronics(2012, "Bluetooth headphones", "Sehnnheiser classics", 100),
  new Electronics(9176, "Micro SD", "Outdated thing", 8),
  new Electronics(4396, "Samsung Galaxy S24", "Korean flagman phone", 680),
  new Electronics(2892, "PlayStation 5", "Best option for games with friends", 650),
  new Electronics(5533, "Lenovo ThinkPad", "Modern gadgets for everyday", 1300),
  new Electronics(8390, "Hisense TV", "Watch your favorite movies with friends", 450),
  new Electronics(6132, "Xbox Series S", "Play games like in childhood", 380),
  new Electronics(8405, "Apple Watch SE", "Some people find this useful", 280),
  new Electronics(3755, "AirPods", "Nice headphones for everyday use", 220)
]

// Search test for Clothes.
console.log(searchProducts(clothesSet, 'cool'));
console.log(searchProducts(clothesSet, 'morning'));
console.log(searchProducts(clothesSet, 'pan'));
console.log(searchProducts(clothesSet, 'CLASSIC'));
console.log(searchProducts(clothesSet, 'Weather'));
console.log(searchProducts(clothesSet, 'bas'));

// Search test for Electronics.
// console.log(searchProducts(electronicsSet, 'apple'));
// console.log(searchProducts(electronicsSet, 'headphones'));
// console.log(searchProducts(electronicsSet, 'friends'));
// console.log(searchProducts(electronicsSet, 'everyday'));

// Sort test for Clothes.
// let sortRule1 = "name"; // "name" ^ "id" ^ "price"
// clothesSet = sortProducts(clothesSet, sortRule1);
// for (let product of clothesSet) {
//   console.log(`id: ${product.getId()}, name: ${product.getName()}, price: ${product.getPrice()}`);
// }

// Sort test for Electronics.
// let sortRule2 = "name"; // "name" ^ "id" ^ "price"
// electronicsSet = sortProducts(electronicsSet, sortRule2);
// for (let product of electronicsSet) {
//   console.log(`id: ${product.getId()}, name: ${product.getName()}, price: ${product.getPrice()}`);
// }


