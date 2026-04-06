// ============================================================
// script.js — Interactividad básica para CONTROL Fandom
// Curso: CLV-0062 | Universidad Fidélitas
// Herramientas: jQuery (ya cargado desde index.html)
// ============================================================

// $(document).ready(): espera a que el HTML esté completamente cargado
// antes de ejecutar cualquier código jQuery
// Buena práctica: SIEMPRE envolver el código jQuery aquí dentro
$(document).ready(function () {

  // ----------------------------------------------------------
  // 1. MENSAJE DE BIENVENIDA AL CARGAR LA PÁGINA
  // ----------------------------------------------------------

  // alert(): muestra un cuadro de diálogo con un mensaje al usuario
  // Se ejecuta una sola vez cuando la página termina de cargar
  // alert("¡Bienvenido a la página de CONTROL Fandom!");

  // ----------------------------------------------------------
  // 2. EFECTO AL HACER CLIC EN UN ARTÍCULO
  // ----------------------------------------------------------

  // $("selector"): selecciona elementos del HTML con jQuery
  // "section article": selecciona todos los <article> dentro de <section>
  // .on("click", function): asigna una función al evento clic
  $("section article").on("click", function () {

    // $(this): hace referencia al artículo específico que se hizo clic
    // .find("h2"): busca el elemento <h2> dentro de ese artículo
    // .text(): obtiene el texto del elemento encontrado
    var titulo = $(this).find("h2").text();
    // var: declara una variable para guardar el título del artículo

    // alert(): muestra el título del artículo clicado en un cuadro de diálogo
    // alert("Seleccionaste: " + titulo);
    // El operador + concatena (une) el texto fijo con el valor de la variable
  });

  // ----------------------------------------------------------
  // 3. CAMBIO DE COLOR AL PASAR EL MOUSE POR EL HEADER
  // ----------------------------------------------------------

  // $("header"): selecciona el elemento <header> del HTML
  // .on("mouseenter"): evento que se activa cuando el cursor entra al elemento
  $("header").on("mouseenter", function () {

    // $(this): el header que disparó el evento
    // .css(): cambia estilos CSS directamente desde JavaScript
    // Cambia el color de fondo del header al pasar el mouse
    $(this).css("background-color", "#333333");
  });

  // .on("mouseleave"): evento que se activa cuando el cursor sale del elemento
  $("header").on("mouseleave", function () {

    // Restaura el color de fondo original del header
    $(this).css("background-color", "#0b0b0b");
    // "#0b0b0b" es el color original definido en style.css
  });

  // ----------------------------------------------------------
  // 4. MOSTRAR CUÁNTOS ARTÍCULOS HAY EN LA PÁGINA
  // ----------------------------------------------------------

  // $("section article"): selecciona todos los artículos
  // .length: propiedad que devuelve la cantidad de elementos encontrados
  var totalArticulos = $("section article").length;
  // var: guarda el número total de artículos en una variable

  // console.log(): imprime un mensaje en la consola del navegador
  // Útil para depurar (debuggear) sin mostrar alertas al usuario
  // Para verlo: clic derecho → Inspeccionar → pestaña "Console"
  console.log("Total de artículos en la página: " + totalArticulos);

}); // Fin de $(document).ready()

// ============================================================
// FIN DE script.js
// ============================================================