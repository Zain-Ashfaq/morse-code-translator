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
  " ": "/",
};

let morseCodeAnsArray = [];

const multiply = (numberOne, numberTwo) => {
  return numberOne * numberTwo;
};

const getValue = () => {
  const tempVal = document.getElementById("Enter_sentence").value;
  console.log("this is temp val", tempVal);

  const inputTextValueChars = tempVal.split("");
  console.log("this is input text value chars", inputTextValueChars);

  translate(inputTextValueChars, morseCode);
};
const translate = (sentence, morseCodeObj) => {
  console.log("this is sentence param", sentence);
  for (let i = 0; i < sentence.length; i++) {
    for (arr in Object.keys(morseCodeObj)) {
      if (Object.keys(morseCodeObj)[arr] == sentence[i]) {
        console.log("this is morse code obj", Object.values(morseCodeObj)[arr]);
        morseCodeAnsArray.push(Object.values(morseCodeObj)[arr]);
      }
    }
  }
  let zain = morseCodeAnsArray;

  console.log(
    "this is morse code answer array",
    zain.join().replaceAll(",", " ")
  );
};
// console.log(morseCode.a);
// console.log(Object.keys(morseCode));
// console.log(Object.values(morseCode));

englishToMorseBtn.addEventListener("click", getValue);

//module.exports = { multiply };
