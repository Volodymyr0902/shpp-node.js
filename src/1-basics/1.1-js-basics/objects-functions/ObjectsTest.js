import { Review } from "./Review.js";
import { Product } from "./Product.js";

/*---------------------------DATA---------------------------*/

// Reviews objects.
let samReview = new Review(
  1544,
  "Sam Jackson",
  new Date(2024, 8, 25, 12, 51, 18),
  "Highly recommend this product",
  4,
  4,
  5,
  5
);

let miaReview = new Review(
  6292,
  "Mia Stone",
  new Date(2024, 11, 4, 17, 59, 8),
  "Just average jeans, nothing too special",
  4,
  3,
  4,
  4
);

let ginaReview = new Review(
  5893,
  "Gina Crawler",
  new Date(2024, 8, 29, 18, 11, 3),
  "Material is too thin",
  5,
  4,
  3,
  3
);

let helenReview = new Review(
  6925,
  "Helen Smith",
  new Date(2024, 10, 29, 22, 3, 31),
  "This stuff is just perfect!",
  5,
  5,
  5,
  5
);

let peterReview = new Review(
  3421,
  "Peter Parker",
  new Date(2024, 10, 14, 21, 17, 49),
  "Literally worst jeans ever, service is fine",
  4,
  3,
  1,
  1
);

// Images sources
let jeansOrigImages = ["./img1.img", "./img2.img", "./img3.img"];
let jeansAlterImages = ["./img4.img", "./img5.img", "./img6.img"];

// Product object.
let jeans = new Product(
  11,
  "Regular jeans",
  "Great classic item",
  50,
  "Levi's",
  "M",
  43,
  new Date(2024, 8, 18, 15, 31, 24),
  [samReview, miaReview],
  jeansOrigImages
);

/*------------------------TESTS-----------------------*/

console.log(jeans);

// Getters testing.
console.log(jeans.getId());
console.log(jeans.getName());
console.log(jeans.getDescription());
console.log(jeans.getPrice());
console.log(jeans.getBrand());
console.log(jeans.getActiveSize());
console.log(jeans.getQuantity());
console.log(jeans.getDate());
console.log(jeans.getReviews());
console.log(jeans.getImages());
console.log(jeans.getSizes());

// Setters testing.
jeans.setId(22);
jeans.setDescription("Perfect product for freaks");
jeans.setPrice(200);
jeans.setBrand("Gucci");
jeans.setActiveSize("L");
jeans.setQuantity(25);
jeans.setDate(new Date(2024, 4, 12, 11, 45, 19));
jeans.setReviews([peterReview, ginaReview, helenReview]);
jeans.setImages(jeansAlterImages);
jeans.setSizes(["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"]);

// Check changes.
console.log(jeans);

// Product object's methods.
console.log(jeans.getReviewById(5893)); // ginaReview

console.log(jeans.getImage(2)); // img6
console.log(jeans.getImage()); // img4

jeans.addSize("XXXXXXXXXXXXXXXL");
console.log(jeans.getSizes());

jeans.deleteSize("XS");
console.log(jeans.getSizes());

jeans.addReview(
  new Review(
    6490,
    "Mary Jardin",
    new Date(2024, 9, 5, 14, 22, 33),
    "Hope this lasts long",
    3,
    4,
    3,
    4
  )
);
console.log(jeans.getReviews());

jeans.deleteReview(6925); // helenReview
console.log(jeans.getReviews());

console.log(jeans.getAverageRating()); // 3.1666666666666665