const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  const body = document.querySelector("body");
  const p = document.createElement("p");
  body.appendChild(p);
  p.textContent = "Bonjour, vous avez cliqué sur le bouton !";
  console.log("Bouton cliqué et message affiché !");
});
