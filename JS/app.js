const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    if (boton.id === "c") {
      pantalla.textContent = "0";
    } else if (boton.id === "borrar") {
      pantalla.textContent = pantalla.textContent.length === 1 || pantalla.textContent === "Error"
        ? "0"
        : pantalla.textContent.slice(0, -1);
    } else if (boton.id === "igual") {
      try {
        const resultado = eval(pantalla.textContent);
        pantalla.textContent = Number.isFinite(resultado) ? resultado : "Error";
      } catch (error) {
        pantalla.textContent = "Error";
      }
    } else if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
});