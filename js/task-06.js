// Напиши скрипт, який під час втрати фокусу на інпуті
// (подія blur), перевіряє його вміст щодо правильної
// кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в
// його атрибуті data-length.
// Якщо введена правильна кількість символів, то border
// інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const input = document.querySelector("#validation-input");

// input.setAttribute("data-length", 16);
input.addEventListener("blur", (event) => {
  //   console.log(event);
  const dataLength = input.getAttribute("data - length");
  console.log(dataLength);
  if (Number(dataLength) < 6) {
    input.classList.add("invalid");
  } else if (input.data - length >= 6) {
    input.classList.add("valid");
  }
});

// console.dir(input);
