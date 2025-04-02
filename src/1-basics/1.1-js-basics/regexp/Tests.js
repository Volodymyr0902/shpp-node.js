import { Validator } from "./RegExp.js";

// Create an instance of utility.
const myValidator = new Validator();

console.log("Validating emails:\nAssert valid:");
console.log(
  "fi@secondpart.end: is " + myValidator.validateEmail("fi@secondpart.end")
);
console.log(
  "first-part@.se=cond%p.art.end: is " +
    myValidator.validateEmail("first-part@.se=cond%p.art.end")
);
console.log(
  "first.part@se=cond%part.r is " +
    myValidator.validateEmail("first.part@se=cond%part.r")
);
console.log(
  "MY-EMAIL37.49@.!$%&’*+/=?^_-.dom is " +
    myValidator.validateEmail("MY-EMAIL37.49@.!$%&’*+/=?^_-.dom")
);
console.log(
  "tHis+MUst.PASS-@d0ma1N*.COM is " +
    myValidator.validateEmail("tHis+MUst.PASS-@d0ma1N*.COM")
);

console.log("\nValidating emails:\nAssert invalid:");
console.log(
  "f@secondart.end, is " + myValidator.validateEmail("f@secondart.end,")
);
console.log(
  "first-part@.se=cond@part.end is " +
    myValidator.validateEmail("first-part@.se=cond@part.end")
);
console.log(
  "-firstpart@.se=cond%.enddeded is " +
    myValidator.validateEmail("-firstpart@.se=cond%.enddeded")
);
console.log(
  "firs_tpart@.se.en is " + myValidator.validateEmail("firs_tpart@.se.en")
);
console.log(
  "firstpart@.se.enddeded is " +
    myValidator.validateEmail("firstpart@.se.enddeded")
);
console.log(
  "+badplus@domain.ua is " + myValidator.validateEmail("+badplus@domain.ua")
);
console.log(
  "thisfine111@thistoo.thisnot is " +
    myValidator.validateEmail("thisfine111@thistoo.thisnot")
);

console.log("\nValidating phones:\nAssert valid:");
console.log(
  "+38 (099) 567 8901 is " + myValidator.validatePhone("+38 (099) 567 8901")
);
console.log(
  "+38 099 5 6 7 8 9  01 is " +
    myValidator.validatePhone("+38 099 5 6 7 8 9  01")
);
console.log(
  "(09-9) 567-890-1 is " + myValidator.validatePhone("(09-9) 567-890-1")
);
console.log(
  "--  (099) 567 890-1 is " + myValidator.validatePhone("--  (099) 567 890-1")
);
console.log("+380995678901 is " + myValidator.validatePhone("+380995678901"));
console.log(
  "+38-(099)-567-89-01 is " + myValidator.validatePhone("+38-(099)-567-89-01")
);
console.log("066 567-89 01 is " + myValidator.validatePhone("066 567-89 01"));

console.log("\nValidating phones:\nAssert invalid:");
console.log(
  "+38 (099) 567 8901 0 is " + myValidator.validatePhone("+38 (099) 567 8901 0")
);
console.log(
  "+38 099 a0000000 is " + myValidator.validatePhone("+38 099 a0000000")
);
console.log(
  "+38 (0989) 567 8901 is " + myValidator.validatePhone("+38 (0989) 567 8901")
);
console.log(
  "+48 (0989) 567 8901 is " + myValidator.validatePhone("+48 (0989) 567 8901")
);
console.log(
  "+3 099 567 8901 is " + myValidator.validatePhone("+3 099 567 8901")
);
console.log(
  "099     567     89     01-- is " +
    myValidator.validatePhone("099     567     89     01--")
);

console.log("\nValidating passwords:\nAssert valid:");
console.log("C00l_Pass is " + myValidator.validatePassword("C00l_Pass"));
console.log("SupperPas1 is " + myValidator.validatePassword("SupperPas1"));
console.log("11111PASSword is " + myValidator.validatePassword("11111PASSword"));
console.log("Pw1_____ is " + myValidator.validatePassword("Pw1_____"));

console.log("\nValidating passwords:\nAssert invalid:");
console.log("Cool_pass is " + myValidator.validatePassword("Cool_pass"));
console.log("C00l is " + myValidator.validatePassword("C00l"));
console.log("passw0rd is " + myValidator.validatePassword("passw0rd"));
console.log("Passme0 is " + myValidator.validatePassword("Passme0"));

