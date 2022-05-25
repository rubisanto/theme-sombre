// Selecteurs
let button = document.querySelector("button");
let span = document.querySelector("span");

// addeventListener et localStorage
button.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.className = "";
    span.textContent = "Thème sombre ";
    localStorage.setItem("theme", "clair");
  } else {
    modeSombre();
  }
});

// Fonction
function modeSombre() {
  document.body.classList.add("dark");
  span.textContent = "Thème clair ";
  localStorage.setItem("theme", "sombre");
}

if (localStorage.getItem("theme") == "sombre") {
  modeSombre();
}
