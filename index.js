// script.js

document.addEventListener("DOMContentLoaded", function () {
  const enlaces = document.querySelectorAll(".proyecto-item a");
  const detalles = document.querySelectorAll(".proyecto-detalle");

  enlaces.forEach(enlace => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();

      // Ocultar todos los detalles
      detalles.forEach(d => {
        d.classList.add("oculto");
        d.classList.remove("animar");
      });

      // Mostrar el detalle correspondiente
      const id = this.getAttribute("href").substring(1);
      const seccion = document.getElementById(id);
      if (seccion) {
        seccion.classList.remove("oculto");
        seccion.classList.add("animar");
        seccion.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

// Botón de TEMA oscuro
const toggle = document.getElementById("toggleTema");
const label = document.getElementById("themeLabel");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");

  if (document.body.classList.contains("modo-oscuro")) {
    label.textContent = "Modo Oscuro";
  } else {
    label.textContent = "Modo Claro";
  }
});

// Animar elementos al hacer scroll
const animados = document.querySelectorAll('.animado');

const mostrarAnimados = () => {
  animados.forEach(elemento => {
    const top = elemento.getBoundingClientRect().top;
    const visible = window.innerHeight * 0.9;

    if (top < visible) {
      elemento.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', mostrarAnimados);
window.addEventListener('load', mostrarAnimados);

// Animación de escritura
const texto = "Estudiante de Programación 📚 | Desarrollador en crecimiento 🚀";
const contenedor = document.getElementById("escritura");
let i = 0;

function escribir() {
  if (i < texto.length) {
    contenedor.textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 50);
  }
}

window.addEventListener("load", escribir);
