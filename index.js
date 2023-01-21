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

console.log(countRefItem);

// console.log(`Number of categories: ${}`);

// console.log(`Category:: ${}`);
// console.log(`Elements: ${}`);

// console.log(`Category:: ${}`);
// console.log(`Elements: ${}`);

// console.log(`Category:: ${}`);
// console.log(`Elements: ${}`);
