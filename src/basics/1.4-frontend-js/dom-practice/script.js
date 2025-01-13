//--------------------PARTS-1-2-------------------//

function removeWithCSS() {
  document.getElementById("square-black").style.display = "none";
}

function removeWithJS() {
  document.getElementById("square-black").remove();
}

function removeWithCSSnJS() {
  // Both add append classname to an element
  // document.getElementById("square-black").className = "hidden";
  document.getElementById("square-black").classList.toggle("hidden");
}

function removeOrAdd() {
  const squareBlack = document.getElementById("square-black");
  const displayProperty = squareBlack.style.display;
  squareBlack.style.display = displayProperty === "block" ? "none" : "block";
}

//-----------------PARTS-3-4---------------------//

function removeOrAddAll() {
  const squaresBlack = document.getElementsByClassName("square-black");
  for (let square of squaresBlack) {
    const displayProperty = square.style.display;
    square.style.display =
      displayProperty === "inline-block" ? "none" : "inline-block";
  }
}

function manipulateWithSelector() {
  const inputSelector = document.getElementById("selector").value;
  if (inputSelector !== "") {
    const queriedElements = document.querySelectorAll(inputSelector);
    for (el of queriedElements) {
      const displayProperty = el.style.display;
      el.style.display =
        displayProperty === "inline-block" ? "none" : "inline-block";
    }
  }
}

//----------------PARTS-5-7-------------------//

const yellowSquare = document.getElementById("yellow-square");

function yellowOnClick() {
  alert("Hello!");
  yellowSquare.removeEventListener("click", yellowOnClick);
  yellowSquare.addEventListener("click", () => {
    yellowSquare.remove();
  });
}

yellowSquare.addEventListener("click", yellowOnClick);

const redSquare = document.getElementById("red-square-controls");

redSquare.addEventListener("mouseover", () => {
  document.getElementById("red-square").style.display = "block";
});

redSquare.addEventListener("mouseout", () => {
  document.getElementById("red-square").style.display = "none";
});

const greenRect = document.getElementById("green-rect");
const greenInput = document.getElementById("green-input");
greenInput.addEventListener("focus", () => (greenRect.style.display = "block"));
greenInput.addEventListener("input", () => (greenRect.style.display = "none"));

//---------------PARTS-8-9-----------------//
/**
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWkRLNexjjEUrf0biCHM0T0xSs5iybueBWNY4BbkHh9ajIYFff9Up8u3ql4hO3Ndz5T8&usqp=CAU
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_OlHEe2L-0VtexCxjIV5tc0dLor3wd57Yg&s
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadPwZgah-uHLeV0hRbLbc8NbChYjIRHeg5w&s
 */

const imgGetter = document.getElementById("img-getter");

imgGetter.addEventListener("click", () => {
  let input = document.getElementById("img-input").value;
  // console.log(typeof input.value)
  if (input.value !== "") {
    input = input.split("\n");
    for (let link of input) {
      const img = document.createElement("img");
      img.src = link;
      Object.assign(img.style, {
        display: "block",
        width: "300px",
        margin: "10px",
      });
      imgGetter.parentNode.appendChild(img);
    }
  }
});

//------------PARTS-10-12---------------//

document.addEventListener("mousemove", () => {
  document.getElementById("cursor-x").innerHTML = window.event.pageX;
  document.getElementById("cursor-y").innerHTML = window.event.pageY;
});

document.getElementById("client-lang").innerHTML = window.navigator.language;

window.navigator.geolocation.watchPosition(
  (pos) => {
    document.getElementById("latitude").innerHTML = pos.coords.latitude;
    document.getElementById("longitude").innerHTML = pos.coords.longitude;
  },
  (err) => console.log(err)
);

//---------PART-13--------------//

const localStorageInput = document.getElementById("input-local-storage");
const cookiesInput = document.getElementById("input-cookies");
const sessionStorageInput = document.getElementById("input-session-storage");

localStorageInput.addEventListener("input", () => {
  localStorage.setItem("locStorInput", localStorageInput.innerHTML);
});

cookiesInput.addEventListener("input", () => {
  document.cookie = `input=${encodeURIComponent(
    cookiesInput.innerHTML
  )}; path=/`;
});

sessionStorageInput.addEventListener("input", () => {
  sessionStorage.setItem("sessStorInput", sessionStorageInput
  .innerHTML)
})

window.addEventListener("DOMContentLoaded", () => {
  localStorageInput.innerHTML = localStorage.getItem("locStorInput");
  cookiesInput.innerHTML = getCookieData();
  sessionStorageInput.innerHTML = sessionStorage.getItem("sessStorInput");
});

function getCookieData() {
  return decodeURIComponent(
    document.cookie
      .split(";")
      .find((el) => el.startsWith("input="))
      .split("=")[1]
  );
}

//---------PART-14-------------//

const topButton = document.getElementById("to-top-button");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
})

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

//-----------PART-15----------//

document.getElementById("outer-div").addEventListener("click", () => alert("From outer div"))

document.getElementById("inner-div").addEventListener("click", (event) => {
  alert("From inner div");
  event.stopPropagation();
})

//--------PART-16--------//

const grayBlock = document.getElementById("fade-block");

document.getElementById("fade-button").addEventListener("click", () => {
  grayBlock.style.display = "block";
  document.body.style.overflow = "hidden";
})

grayBlock.addEventListener("click", () => {
  grayBlock.style.display = "none";
  document.body.style.overflow = "auto";
})

//---------PART-17-----------//

document.getElementById("ban-reload").addEventListener("submit", (event) => {
  event.preventDefault();
})

//------PART-18--------//

const drag = document.getElementById("drag");
const inputWrapper = document.getElementById("file-input");
const infoInput = document.getElementById("info-input")

inputWrapper.addEventListener("dragover", (event) => {
  event.preventDefault();
  inputWrapper.classList.add('drag-over');
})

inputWrapper.addEventListener("dragleave", () => {
  inputWrapper.classList.remove('drag-over');
})

inputWrapper.addEventListener("drop", (event) => {
  event.preventDefault();
  inputWrapper.classList.remove('drag-over');
  inputWrapper.classList.add('file-in');
  infoInput.innerHTML = event.dataTransfer.files[0].name;
})


