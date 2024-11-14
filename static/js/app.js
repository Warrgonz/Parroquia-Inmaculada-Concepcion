// Funcion para abrir el menu hamburguesa.

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(
    '[data-collapse-toggle="navbar-sticky"]'
  );
  const navbarMenu = document.getElementById("navbar-sticky");

  toggleButton.addEventListener("click", () => {
    navbarMenu.classList.toggle("hidden");
  });
});
