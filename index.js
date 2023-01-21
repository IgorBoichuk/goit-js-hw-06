// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і
// виведе в консоль текст заголовку елемента(тегу < h2 >) і
// кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const countRefItem = document.querySelectorAll(".item");
// const countRef = document.querySelectorAll("#categories");
// const countRef = document.querySelectorAll("#categories");

// console.log(countRefItem.length);

console.log(
  `Number of categories: ${document.querySelectorAll(".item").length}`
);

console.log(`Category:: ${document.querySelector("h2").textContent}`);
console.log(`Elements: ${document.querySelectorAll("li.item")}`);

// console.log(`Category:: ${}`);
// console.log(`Elements: ${document.querySelectorAll("li").length}`);

// console.log(`Category:: ${}`);
// console.log(`Elements: ${document.querySelectorAll("ul").length}`);
