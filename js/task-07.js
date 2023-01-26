// Напиши скрипт, який реагує на зміну значення
// input#font-size-control (подія input) і змінює
// інлайн-стиль span#text, оновлюючи властивість
// font-size. В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// text.style.fontSize = "30px";

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = fontSizeControl.value + "px";
  console.log(fontSizeControl.value);
  console.log(text.style.fontSize);
  return;
});
