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

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
console.dir(divBoxes.children.length);

function createBoxes(amount) {
  amount = Number(colorGenerator.value);
  // if (amount === 0) {
  //   return alert("Задайте кількість блоків для створення!");
  // }
  for (let i = 0; i < amount; i += 1) {
    const squareDiv = document.createElement("div");
    squareDiv.style.backgroundColor = getRandomHexColor();

    const size = 30 + 10 * i;
    squareDiv.style.width = `${size}px`;
    squareDiv.style.height = `${size}px`;

    divBoxes.append(squareDiv);
    console.dir(divBoxes.children.length);
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  colorGenerator.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
