import { Clothes } from "./Clothes.js";
import { Electronics } from "./Electronics.js";
import { Review } from "./Review.js";

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

let kyleReview = new Review(
  4392,
  "Kyle Simpson",
  new Date(2024, 11, 2, 17, 44, 29),
  "Long lasting battery, screen resolution is great",
  4,
  5,
  4,
  5
);
let andrewReview = new Review(
  5803,
  "Andrew Crieg",
  new Date(2024, 9, 10, 7, 44, 5),
  "Average brick for nerds",
  4,
  3,
  3,
  4
);

// Images sources
let origImages = ["./img1.img", "./img2.img", "./img3.img"];
let alterImages = ["./img4.img", "./img5.img", "./img6.img"];

// Clothes object.
let jeans = new Clothes(
  11,
  "Regular jeans",
  "Great classic item",
  50,
  43,
  [samReview, miaReview],
  origImages,
  new Date(2024, 8, 18, 15, 31, 24),
  "Levi's",
  "M",
  "Jeans cotton",
  "Dark blue"
);

// Electronics object.
let hpLaptop = new Electronics(
  34,
  "Laptop",
  "Efficient device for work, studies end entertainment",
  67,
  1200,
  [kyleReview, andrewReview],
  origImages,
  new Date(2024, 5, 18, 10, 45, 22),
  "Hewlett Packard",
  2,
  10_000
);

console.log("/*------------------------TEST CLOTHES-----------------------*/");

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
console.log(jeans.getMaterial());
console.log(jeans.getColor());
console.log();

// Setters testing.
jeans.setId(22);
jeans.setDescription("Perfect product for freaks");
jeans.setPrice(200);
jeans.setBrand("Gucci");
jeans.setActiveSize("L");
jeans.setQuantity(25);
jeans.setDate(new Date(2024, 4, 12, 11, 45, 19));
jeans.setReviews([peterReview, ginaReview, helenReview]);
jeans.setImages(alterImages);
jeans.setSizes(["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"]);
jeans.setMaterial("Faux jeans cotton");
jeans.setColor("Noir");

// Check changes.
console.log(jeans);
console.log();

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

console.log();
jeans.deleteReview(6925); // helenReview
console.log(jeans.getReviews());

console.log();
console.log(jeans.getAverageRating()); // 3.1666666666666665
console.log();

jeans.getOrSet("brand", "H&M");
jeans.getOrSet("reviews", [ginaReview, miaReview, peterReview]);
jeans.getOrSet("price", 24.99);
console.log(jeans.getOrSet("brand"));
console.log(jeans.getOrSet("reviews"));
console.log(jeans.getOrSet("price"));
console.log();

console.log(jeans.getFullInformation());
console.log();

console.log(jeans.getPriceForQuantity(8));

console.log("//--------------------TEST ELECTRONICS----------------------//");

// Getters testing.
console.log(hpLaptop.getId());
console.log(hpLaptop.getName());
console.log(hpLaptop.getDescription());
console.log(hpLaptop.getPrice());
console.log(hpLaptop.getBrand());
console.log(hpLaptop.getQuantity());
console.log(hpLaptop.getDate());
console.log(hpLaptop.getReviews());
console.log(hpLaptop.getImages());
console.log(hpLaptop.getWarranty());
console.log(hpLaptop.getPower());
console.log();

// Setters testing.
hpLaptop.setId(22);
hpLaptop.setDescription("Nice gadget for many tasks");
hpLaptop.setPrice(800);
hpLaptop.setBrand("Asus");
hpLaptop.setQuantity(92);
hpLaptop.setDate(new Date(2024, 7, 4, 18, 28, 33));
hpLaptop.setReviews([peterReview, ginaReview]);
hpLaptop.setImages(alterImages);
hpLaptop.setWarranty(5);
hpLaptop.setPower(15_000);

// Check changes.
console.log(hpLaptop);
console.log();

// Product object's methods.
console.log(hpLaptop.getReviewById(5893)); // ginaReview

console.log(hpLaptop.getImage(2)); // img6
console.log(hpLaptop.getImage()); // img4

hpLaptop.addReview(
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
console.log(hpLaptop.getReviews());

console.log();
hpLaptop.deleteReview(3421); // peterReview
console.log(hpLaptop.getReviews());

console.log();
console.log(hpLaptop.getAverageRating()); // 3.625
console.log();

hpLaptop.getOrSet("brand", "Apple");
hpLaptop.getOrSet("reviews", [kyleReview, miaReview]);
hpLaptop.getOrSet("price", 1500);
console.log(hpLaptop.getOrSet("brand"));
console.log(hpLaptop.getOrSet("reviews"));
console.log(hpLaptop.getOrSet("price"));
console.log();

console.log(hpLaptop.getFullInformation());
console.log();

console.log(hpLaptop.getPriceForQuantity(8)); // 12000

