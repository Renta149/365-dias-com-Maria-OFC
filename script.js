// Configuração do Pixel e Utilitários
window.pixelId = "6963e7338865dfc533dac328";

// Lazy load do Pixel da UTMify (o loader principal está no index.html agora)
(function () {
  if (window.pixelId) {
    const p = document.createElement("script");
    p.async = true;
    p.defer = true;
    p.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";

    // Adiar carregamento do Pixel para não competir com LCP
    window.addEventListener('load', function () {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => document.head.appendChild(p));
      } else {
        setTimeout(() => document.head.appendChild(p), 1500);
      }
    });
  }
})();

// Função para formatar a data atual e manter o DOM estável
function updateCurrentDate() {
  const dateElements = document.querySelectorAll('.current-date-display');
  const now = new Date().toLocaleDateString('pt-BR');
  dateElements.forEach(el => {
    if (el.textContent !== now) {
      el.textContent = now;
    }
  });
}

// Inicialização imediata se o DOM já estiver pronto, senão aguarda
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateCurrentDate);
} else {
  updateCurrentDate();
}