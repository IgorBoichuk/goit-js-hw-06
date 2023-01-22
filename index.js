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

// const countRefItem = document.querySelector("ul>li>ul");
// const countRef = document.querySelectorAll("#categories");
// const countRef = document.querySelectorAll("#categories");

// console.log(document.querySelector("ul>li>ul"));

// const categoriesEl = document.querySelectorAll('.item');
// console.log(Number of categories: ${categoriesEl.length});

// for (const el of categoriesEl) {
//   console.log(Category: ${ el.firstElementChild.textContent });
//   console.log(Elements: ${ el.lastElementChild.children.length });
// }

const catNum = document.querySelectorAll(".item");
console.log(`Number of categories: ${catNum.length}`);

const countAnimslsCats = document.querySelectorAll("ul>li");

for (const cats of catNum) {
  console.log(`Category: ${cats.firstElementChild.textContent}`);
  console.log(`Elements: ${cats.lastElementChild.children.length}`);
}
