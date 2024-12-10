/**
 * @param {Array} products Product's list to be searched for pattern matches.
 * @param {*} search Pattern to be searched.
 * @returns List of products, whose name or description contain specific pattern.
 */
export function searchProducts(products, search) {
  let matchingProducts = [];

  for (let product of products) {
    if (
      product.getName().toLowerCase().includes(search.toLowerCase()) ||
      product.getDescription().toLowerCase().includes(search.toLowerCase())
    ) {
      matchingProducts.push(product);
    }
  }

  return matchingProducts;
}

/**
 * Sorts list of products by queried property in an ascending order. Uses bubble sort algorithm.
 * 
 * @param {Array} products List of products to be sorted.
 * @param {string} sortRule Property to be used as comparator (must be id ^ name ^ price).
 * @returns List of products sorted by queried rule.
 */
export function sortProducts(products, sortRule) {
  for (let i = 0; i < products.length - 1; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      if (products[j][sortRule] > products[j + 1][sortRule]) {
        let buffer = products[j];
        products[j] = products[j + 1];
        products[j + 1] = buffer;
      }
    }
  }

  return products;
}
