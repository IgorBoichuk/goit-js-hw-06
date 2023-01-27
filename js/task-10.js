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

const colorGenerator = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

const squareDiv = `<div class="div-color"></div>`;

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  if (Number(colorGenerator.value) === 0) {
    return alert("Задайте кількість блоків для створення!");
  }
  // console.log(Number(colorGenerator.value));

  for (let item of colorGenerator.value) {
    console.log(item);
    divBoxes.insertAdjacentHTML("afterbegin", squareDiv);
    divBoxes.style.backgroundColor = getRandomHexColor();
    divBoxes.style.width = "30px";
    divBoxes.style.height = "30px";
  }
}

function destroyBoxes() {
  const removeSquareDiv = document.querySelector(".div-color");
  removeSquareDiv.remove();
  // removeSquareDiv.reset();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
