



function createFooter() {
  const footerHTML = `<div id="piepag" style="width: 100%; height: 95px; background-color: #bbe1ea;"><h1 class="piepagina"> <b>Copyright © <span id="year"></span>. Todos los derechos reservados GoldenOak®  • contacto@goldenoak.cl  •  Avenida Vitacura 3535, Piso 7, Vitacura, Santiago.</b></h1></div>`;
  const footerElement = document.createElement("footer");
  footerElement.innerHTML = footerHTML;
  document.body.insertAdjacentElement("beforeend", footerElement);
}

createFooter();

document.getElementById("year").textContent = new Date().getFullYear();