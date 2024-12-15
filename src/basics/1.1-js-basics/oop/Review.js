/**
 * This constructs a review on a product.
 * 
 * @param {string} id Unique product's identifier
 * @param {string} author Review author's name
 * @param {Date} date Date and time when a review was created
 * @param {string} comment Additional info
 * @param {number} serviceRating Customer's estimation of service
 * @param {number} priceRating Customer's estimation of price
 * @param {number} valueRating Customer's estimation of value
 * @param {number} qualityRating Customer's estimation of quality
 */
export function Review(id,
                      author,
                      date,
                      comment,
                      serviceRating,
                      priceRating,
                      valueRating,
                      qualityRating
                    ) {
    this.id = id;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = {
      service: serviceRating,
      price: priceRating,
      value: valueRating,
      quality: qualityRating,
    };
}
