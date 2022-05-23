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

  let red = ["diamond", "heart"];

  function randomcard(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  let numeros = randomcard(numbers);
  let pintas = randomcard(suits);

  console.log(numeros);
  console.log(pintas);
};
