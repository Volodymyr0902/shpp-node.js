import { Review } from "./Review.js";

/**
 * This constructs a product with already set bunch of properties.
 * Some of these are getters/setters and additional methods, which are 
 * own 'ad hoc' as long as are common for every constructed object.
 * Others are passed in as arguments and encapsulate particular object.
 * 
 * @param {string} id Unique identifier 
 * @param {string} name Product's name
 * @param {string} description Short info about a product
 * @param {number} price Product's price
 * @param {string} brand Product's producer
 * @param {string} activeSize Product's active size
 * @param {string} quantity Number of available products 
 * @param {Date} date Date of product's first release
 * @param {Array} reviews Reviews on a product
 * @param {Array} images Images of a product
 */
export function Product(id,
                        name,
                        description,
                        price,
                        brand,
                        activeSize,
                        quantity,
                        date,
                        reviews,
                        images) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.reviews = reviews;
    this.images = images;

    /**
     * Available sizes list.
     */
    this.sizes = ["XS", "S", "M", "L", "XL", "XXL"];

    // Gettters.
    this.getId = () => this.id;
    this.getName = () => this.name;
    this.getDescription = () => this.description;
    this.getPrice = () => this.price;
    this.getBrand = () => this.brand;
    this.getActiveSize = () => this.activeSize;
    this.getQuantity = () => this.quantity;
    this.getDate = () => this.getFormattedDate(this.date);
    this.getReviews = () => this.reviews;
    this.getImages = () => this.images;
    this.getSizes = () => this.sizes;

    // Setters.
    this.setId = (newId) => this.id = newId;
    this.setName = (newName) => this.name = newName;
    this.setDescription = (newDescription) => this.description = newDescription;
    this.setPrice = (newPrice) => this.price = newPrice;
    this.setBrand = (newBrand) => this.brand = newBrand;
    this.setActiveSize = (newActiveSize) => this.activeSize = newActiveSize;
    this.setQuantity = (newQuantity) => this.quantity = newQuantity;
    this.setDate = (newDate) => this.date = newDate;
    this.setReviews = (newReviews) => this.reviews = newReviews;
    this.setImages = (newImages) => this.images = newImages;
    this.setSizes = (newSizes) => this.sizes = newSizes;

    /**
     * Retrieves particulair review on a product.
     * 
     * @param {string} idReview Queried review's ID.
     * @returns Corresponding review object | null if such wasn't found.
     */
    this.getReviewById = function(idReview) {
      for (let review of this.reviews) {
        if (review.id === idReview) {
          return review;
        }
      }
      return null;
    }

    /**
     * Retrieves a product's image of queried index 
     * (as long as it's the only appropriate parameter).
     * 
     * @param {number} param Index of the queried image
     * @returns Queried image element | null if queried index is undefined or isn't passed in.
     */
    this.getImage = function(param) {
      return this.images[param] || this.images[0];
    }

    /**
     * Add new size to available sizes list, if it doesn't contain such.
     * 
     * @param {string} newSize Size to be added
     */
    this.addSize = function(newSize) {
      if (!this.sizes.includes(newSize)) {
        this.sizes.push(newSize);
      }
    }

    /**
     * Deletes size from sizes list.
     * 
     * @param {string} key Size to be deleted
     */
    this.deleteSize = function(key) {
      this.sizes.splice(this.sizes.indexOf(key), 1);
    }

    /**
     * Add new review to the end of the review's list.
     * 
     * @param {Review} newReview Review to be added
     */
    this.addReview = function(newReview) {
      this.reviews.push(newReview);
    }

    /**
     * Deletes a review from the review's list.
     * 
     * @param {string} idReview ID of the review to be deleted
     */
    this.deleteReview = function(idReview) {
      for (let review of this.reviews) {
        if (review.id === idReview)
          this.reviews.splice(this.reviews.indexOf(review), 1);
      }
    }

    /**
     * @returns Average product's rating
     */
    this.getAverageRating = function() {
      let allRatingsAveragesSum = 0;

      for (let review of this.reviews) {
        let singleRatingSum = 0;

        for (let ratingKey in review.rating) {
          singleRatingSum += review.rating[ratingKey];
        }
        allRatingsAveragesSum += singleRatingSum / Object.keys(review.rating).length;
      }

      return allRatingsAveragesSum / this.reviews.length;
    }

    /**
     * @param {Date} date Original data
     * @returns Date string representation according to the template (YYYY-MM-dd hh:mm:ss)
     */
    this.getFormattedDate = function(date) {
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
}
