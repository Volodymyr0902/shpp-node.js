import { AbstractProduct } from "./AbstractProduct.js";

/**
 * This constructs a product specified as an electronics item with additional properties and methods.
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
 * @param {number} warranty Warranty duration, in years
 * @param {number} power Item's power, in mAh.
 */
export function Electronics(
  id,
  name,
  description,
  price,
  quantity,
  reviews,
  images,
  date,
  brand,
  warranty,
  power
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
  this.warranty = warranty;
  this.power = power;
}

Electronics.prototype = Object.create(AbstractProduct.prototype);
Electronics.prototype.constructor = Electronics;

Object.assign(Electronics.prototype, {
  // Getters
  getWarranty() {
    return this.warranty;
  },
  getPower() {
    return this.power;
  },

  // Setters
  setWarranty(newWarranty) {
    this.warranty = newWarranty;
  },
  setPower(newPower) {
    this.power = newPower;
  },
});
