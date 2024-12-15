import { Review } from "./Review.js";

/**
 * This function is a template for other constructors representing specific product types.
 * It only has properties and methods common for all the constructors extending this.
 * This itself must never be used a constructor.
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
 */
export function AbstractProduct(
  id,
  name,
  description,
  price,
  quantity,
  reviews,
  images,
  date,
  brand
) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.price = price;
  this.quantity = quantity;
  this.reviews = reviews;
  this.images = images;
  this.date = date;
  this.brand = brand;
}

Object.assign(AbstractProduct.prototype, {
  // Getters.
  getId() {
    return this.id;
  },
  getName() {
    return this.name;
  },
  getDescription() {
    return this.description;
  },
  getPrice() {
    return this.price;
  },
  getQuantity() {
    return this.quantity;
  },
  getReviews() {
    return this.reviews;
  },
  getImages() {
    return this.images;
  },
  getDate() {
    return this.getFormattedDate(this.date);
  },
  getBrand() {
    return this.brand;
  },

  // Setters.
  setId(newId) {
    return (this.id = newId);
  },
  setName(newName) {
    return (this.name = newName);
  },
  setDescription(newDescription) {
    return (this.description = newDescription);
  },
  setPrice(newPrice) {
    return (this.price = newPrice);
  },
  setBrand(newBrand) {
    return (this.brand = newBrand);
  },
  setQuantity(newQuantity) {
    return (this.quantity = newQuantity);
  },
  setDate(newDate) {
    return (this.date = newDate);
  },
  setReviews(newReviews) {
    return (this.reviews = newReviews);
  },
  setImages(newImages) {
    return (this.images = newImages);
  },

  /**
   * @param {Date} date Original data
   * @returns Date string representation according to the template (YYYY-MM-dd hh:mm:ss)
   */
  getFormattedDate(date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  },

  /**
   * Retrieves particulair review on a product.
   *
   * @param {string} idReview Queried review's ID.
   * @returns Corresponding review object | null if such wasn't found.
   */
  getReviewById(idReview) {
    for (let review of this.reviews) {
      if (review.id === idReview) {
        return review;
      }
    }
    return null;
  },

  /**
   * Retrieves a product's image of queried index
   * (as long as it's the only appropriate parameter).
   *
   * @param {number} param Index of the queried image
   * @returns Queried image element | null if queried index is undefined or isn't passed in.
   */
  getImage(param) {
    return this.images[param] || this.images[0];
  },

  /**
   * Add new review to the end of the review's list.
   *
   * @param {Review} newReview Review to be added
   */
  addReview(newReview) {
    this.reviews.push(newReview);
  },

  /**
   * Deletes a review from the review's list.
   *
   * @param {string} idReview ID of the review to be deleted
   */
  deleteReview(idReview) {
    for (let review of this.reviews) {
      if (review.id === idReview)
        this.reviews.splice(this.reviews.indexOf(review), 1);
    }
  },

  /**
   * @returns Average product's rating
   */
  getAverageRating() {
    let allRatingsAveragesSum = 0;

    for (let review of this.reviews) {
      let singleRatingSum = 0;

      for (let ratingKey in review.rating) {
        singleRatingSum += review.rating[ratingKey];
      }
      allRatingsAveragesSum +=
        singleRatingSum / Object.keys(review.rating).length;
    }

    return allRatingsAveragesSum / this.reviews.length;
  },

  /**
   * @returns Stringified object in format: key - value.
   */
  getFullInformation() {
    let fullInfo = "";
    for (let property in this) {
      if (this.hasOwnProperty(property)) {
        fullInfo += `${property} - ${this[property]}\n`;
      }
    }
    return fullInfo;
  },

  /**
   * @param {number} int Products number.
   * @returns Price for int number products of this type.
   */
  getPriceForQuantity(int) {
    return `$${this.price * int}`;
  },

  /**
   * Gets and sets product's any property value.
   * In case new value is passed in acts as a setter, else
   * only retrieves value of a queried property.
   *
   * @param {string} propertyName To be get/set.
   * @param {*} newValue Must be ignored for getter and passed in for setter (of a relevant type).
   * @returns Passed in property's value or nothing if new one wasn't passed in.
   */
  getOrSet(propertyName, newValue) {
    if (newValue === undefined) {
      return this[propertyName];
    } else {
      this[propertyName] = newValue;
    }
  },
});
