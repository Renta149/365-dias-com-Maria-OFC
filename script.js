// Configuração do Pixel
window.pixelId = "6963e7338865dfc533dac328";
(function() {
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
})();

// Função para formatar a data atual
function updateCurrentDate() {
  const dateElements = document.querySelectorAll('.current-date-display');
  const now = new Date().toLocaleDateString('pt-BR');
  dateElements.forEach(el => {
    el.textContent = now;
  });
}

document.addEventListener('DOMContentLoaded', updateCurrentDate);