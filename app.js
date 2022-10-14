// import { morseCodeData } from "./morse_code_info.js";

const englishToMorseBtn = document.querySelector("#englishToMorse");

const morseCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};
let inputTextValue;
const multiply = (numberOne, numberTwo) => {
  return numberOne * numberTwo;
};

const printValue = () => {
  const tempVal = document.getElementById("Enter_sentence").value;
  inputTextValue = tempVal;
  console.log(inputTextValue);
};

console.log(morseCode.a);
console.log(Object.keys(morseCode));
console.log(Object.values(morseCode));

englishToMorseBtn.addEventListener("click", printValue);

//module.exports = { multiply };
