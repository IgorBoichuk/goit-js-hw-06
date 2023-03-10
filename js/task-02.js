// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй
// метод document.createElement().

// Додасть назву інгредієнта як його текстовий вміст.

// Додасть елементу клас item.

// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");
const ingradsArray = [];

ingredients.forEach((elem) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = elem;
  ingradsArray.push(li);
  // ulIngredients.append(li);
  // ulIngredients.insertAdjacentElement("beforeend", li);
});
ulIngredients.append(...ingradsArray);
console.log(ulIngredients);
