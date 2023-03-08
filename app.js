// CARD PARTS
let cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let pintas = ["♦", "♥", "♠", "♣"];
let tableOfCard = document.getElementById("card-container")
let table = document.body
//STYLES
table.style.backgroundColor = "grey"
tableOfCard.style.backgroundColor = "green";
tableOfCard.style.padding ="20px";
tableOfCard.style.height ="100vw"
tableOfCard.style.display = "flex";
tableOfCard.style.justifyContent = "center";
card.style.display = "flex";
card.style.justifyContent = "space-between";
card.style.color = "grey";
card.style.padding = "3vw";
card.style.fontSize = "30px"
card.style.borderRadius = "15px";
card.style.border = "2px solid grey";
card.style.height = "300px";
card.style.width = "200px";
card.style.backgroundColor = "black";

function generateRandomValue (variable) {
    let randomValue = variable [Math.floor(Math.random() * variable.length)]
    return randomValue
}

let upICon = document.createElement("h1");
upICon.innerHTML = generateRandomValue(pintas);
if (upICon.innerHTML === "♥" || upICon.innerHTML === "♦") {
    upICon.style.color = "red";
    card.style.border = "2px solid red";
}
let valorDeCarta = document.createElement("h1");
valorDeCarta.innerHTML = generateRandomValue(cardValues);
if (upICon.innerHTML === "♥" || upICon.innerHTML === "♦") {
    valorDeCarta.style.color = "red"
}
let downICon = document.createElement("h1");
downICon.innerHTML = upICon.innerHTML ;
if (upICon.innerHTML === "♥" || upICon.innerHTML === "♦") {
    downICon.style.color = "red"
}
upICon.style.marginTop = "0px"
valorDeCarta.style.marginTop = "120px"
downICon.style.transform = "rotate(180deg)"
downICon.style.marginBottom = "0px"
card.appendChild(upICon)
card.appendChild(valorDeCarta)
card.appendChild(downICon)
