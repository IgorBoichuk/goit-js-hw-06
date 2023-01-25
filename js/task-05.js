// Напиши скрипт, який під час набору тексту в інпуті
// input#name-input (подія input), підставляє його поточне
// значення в span#name-output. Якщо інпут порожній, у спані
// повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputName = document.querySelector("#name-input");
const nameString = document.querySelector("#name-output");

console.dir(inputName);
console.log(nameString);

inputName.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (nameString.textContent = "Anonymous");
  }
  nameString.textContent = event.currentTarget.value;
});
