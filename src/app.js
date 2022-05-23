import "./style.css";

window.onload = function() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let suits = ["diamond", "heart", "club", "spade"];

  function randomcard(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  let numeros = randomcard(numbers);
  let pintas = randomcard(suits);

  document.querySelector(".card").classList.add(pintas);
  document.querySelector(".number").innerHTML = numeros;

  console.log(numeros);
  console.log(pintas);
};
