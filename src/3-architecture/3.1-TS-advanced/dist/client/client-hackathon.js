"use strict";
var Sign;
(function (Sign) {
    Sign[Sign["PLUS"] = 0] = "PLUS";
    Sign[Sign["MINUS"] = 1] = "MINUS";
})(Sign || (Sign = {}));
const plusButton = document.querySelector(".plus-wrap button");
const minusButton = document.querySelector(".minus-wrap button");
const plusField = document.querySelector(".plus-wrap h3 span");
const minusField = document.querySelector(".minus-wrap h3 span");
const incCounter = (sign) => {
    fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ sign }),
    })
        .then((res) => res.json())
        .then((json) => {
        switch (sign) {
            case Sign.PLUS:
                if (plusField) {
                    plusField.innerHTML = json.plus;
                }
                break;
            case Sign.MINUS:
                if (minusField) {
                    minusField.innerHTML = json.minus;
                }
        }
    });
};
plusButton === null || plusButton === void 0 ? void 0 : plusButton.addEventListener("click", () => {
    incCounter(Sign.PLUS);
});
minusButton === null || minusButton === void 0 ? void 0 : minusButton.addEventListener("click", () => {
    incCounter(Sign.MINUS);
});
