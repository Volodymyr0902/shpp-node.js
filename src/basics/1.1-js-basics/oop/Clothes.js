import { AbstractProduct } from "./AbstractProduct.js";

/**
 * This constructs a product specified as a clothes item with additional properties and methods.
 * 
 * @param {number} id Unique identifier
 * @param {string} name Product's name
 * @param {string} description Short info about a product
 * @param {number} price Product's price
 * @param {number} quantity Number of available products
 * @param {Array} reviews Reviews on a product
 * @param {Array} images Images of a product
 * @param {Date} date Date of product's first release
 * @param {string} brand Product's producer
 * @param {string} activeSize Product's active size
 * @param {string} material Product's material
 * @param {string} color Product's color
 */
export function Clothes(
  id,
  name,
  description,
  price,
  quantity,
  reviews,
  images,
  date,
  brand,
  activeSize,
  material,
  color
) {
  AbstractProduct.call(
    this,
    id,
    name,
    description,
    price,
    quantity,
    reviews,
    images,
    date,
    brand
  );
  this.activeSize = activeSize;
  this.material = material;
  this.color = color;
  this.sizes = ["XS", "S", "M", "L", "XL", "XXL"];
}

// So that extension includes ancestor's methods and constructor is specified.
Clothes.prototype = Object.create(AbstractProduct.prototype);
Clothes.prototype.constructor = Clothes;

Object.assign(Clothes.prototype, {
  // Getters
  getActiveSize() {
    return this.activeSize;
  },
  getSizes() {
    return this.sizes;
  },
  getMaterial() {
    return this.material;
  },
  getColor() {
    return this.color;
  },

  // Setters
  setActiveSize(newActiveSize) {
    return (this.activeSize = newActiveSize);
  },
  setSizes(newSizes) {
    return (this.sizes = newSizes);
  },
  setMaterial(newMaterial) {
    this.material = newMaterial;
  },
  setColor(newColor) {
    this.color = newColor;
  },

  /**
   * Add new size to available sizes list, if it doesn't contain such.
   *
   * @param {string} newSize Size to be added
   */
  addSize(newSize) {
    if (!this.sizes.includes(newSize)) {
      this.sizes.push(newSize);
    }
  },

  /**
   * Deletes size from sizes list.
   *
   * @param {string} key Size to be deleted
   */
  deleteSize(key) {
    this.sizes.splice(this.sizes.indexOf(key), 1);
  },
});
