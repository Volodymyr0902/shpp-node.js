enum Sign {
  PLUS,
  MINUS,
}

const plusButton = document.querySelector(".plus-wrap button");
const minusButton = document.querySelector(".minus-wrap button");
const plusField = document.querySelector(".plus-wrap h3 span");
const minusField = document.querySelector(".minus-wrap h3 span");

const incCounter = (sign: Sign) => {
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

plusButton?.addEventListener("click", () => {
  incCounter(Sign.PLUS);
});

minusButton?.addEventListener("click", () => {
  incCounter(Sign.MINUS);
});
