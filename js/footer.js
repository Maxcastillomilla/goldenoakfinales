function createFooter() {
  const footerHTML = `<div id="piepag" style="width: 100%; height: 95px; background-color: #bbe1ea;"><h1 class="piepagina"> <b>Copyright © 2025. Todos los derechos reservados GoldenOak®  • contacto@goldenoak.cl  •  Magnere 1540, Piso 8, Providencia, Santiago.</b></h1></div>`;
  const footerElement = document.createElement("footer");
  footerElement.innerHTML = footerHTML;
  document.body.insertAdjacentElement("beforeend", footerElement);
}

createFooter();