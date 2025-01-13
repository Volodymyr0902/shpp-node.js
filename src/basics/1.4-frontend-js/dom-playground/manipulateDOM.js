document.getElementById("para1").innerHTML = "Hey guys!";

console.log(document.getElementsByTagName("p"))

let paras = document.getElementsByTagName("p");
for (let para of paras) {
  Object.assign(para.style, {
    "font-size": "25px",
    "color": "blue",
    "background-color": "lightgray",
    "width": "max-content"
  })
}

setInterval(() => {
  document.getElementById("para2").innerHTML = "Date: " + new Date().toLocaleString();
}, 1000)

document.getElementById("para1").onmousemove

let newPara = document.createElement("p");
let textNode = document.createTextNode("Inserted paragraph")
newPara.appendChild(textNode)

document.body.appendChild(newPara)

paras.namedItem("para2").style.border = "2px solid red"

console.log(document.getElementById("inner-span").parentNode)
console.log(document.getElementById("inner-span").parentElement)

console.log(document.getElementById("outer").childNodes)

