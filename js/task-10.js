// Напиши скрипт створення і очищення колекції елементів.

// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб
// видаляючи всі створені елементи.

const colorGenerator = document.querySelector("#controls");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

console.log(divBoxes);

const squareDiv = `<div class="div-color">
<style>
  .div-color {
    background-color: red;
    width: 30px;
    height: 30px;
  }
</style>
</div>`;

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

// colorGenerator.addEventListener("input", () => {
//   console.log(colorGenerator.value);
// });

function createBoxes(amount) {
  divBoxes.insertAdjacentHTML("afterbegin", squareDiv);
}

function destroyBoxes() {
  console.log("destroy!!!!!!!!!!!!!!!!!!!!");
  // divBoxes.remove(squareDiv);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
