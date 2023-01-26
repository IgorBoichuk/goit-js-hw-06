// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", submitOnForm);

function submitOnForm(event) {
  event.preventDefault();

  console.dir(event.currentTarget.elements);

  const formData = new FormData(event.currentTarget);

