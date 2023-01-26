const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", submitOnForm);

function submitOnForm(event) {
  event.preventDefault();

  console.dir(event.currentTarget.elements);

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log(value, name);
  });
}
// https://youtu.be/iJq-NwbZL84?t=2268
