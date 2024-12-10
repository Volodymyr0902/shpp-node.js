import { Product } from "./Product.js";
import { searchProducts } from "./Functions.js";
import { sortProducts } from "./Functions.js";

// List of products to be tested in both functions.
let products = [
  new Product(3821, "Chino pants", "Classic casual pants for everyday", 34.99),
  new Product(9843, "Rugby boots", "Hard shoes resistant to any match!", 119.99),
  new Product(4647, "Baseball cap", "Protects your hair from ugly weather", 7.99),
  new Product(2404, "Aviator sunglasses", "With these every date becomes a cool match!", 5.99),
  new Product(7726, "Basic T-shirt", "Fits anybody, comes perfect with chino", 12.99),
  new Product(2678, "Knitted pullover", "Designed for cool weather", 27.99),
  new Product(9176, "Runner sneakers", "Best shoes for your morning activities", 84.99),
  new Product(4432, "Artificial necklace", "Great option for classic evening", 4.99),
  new Product(3065, "Fleece pants", "Stay warm during the coolest walks", 22.99),
  new Product(2199, "Non-iron shirt", "Get rid of annoying morning routines!", 8.99),
];

// Search test.
// console.log(searchProducts(products, 'cool'));
// console.log(searchProducts(products, 'morning'));
// console.log(searchProducts(products, 'pan'));
// console.log(searchProducts(products, 'CLASSIC'));
// console.log(searchProducts(products, 'Weather'));
// console.log(searchProducts(products, 'bas'));

// Sort test.
let sortRule = "name"; // "name" ^ "id" ^ "price"
products = sortProducts(products, sortRule);
for (let product of products) {
  console.log(`id: ${product.getId()}, name: ${product.getName()}, price: ${product.getPrice()}`);
}


