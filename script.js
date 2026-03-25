// SCROLL SUAVE NO MENU
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    
    const destino = document.querySelector(this.getAttribute("href"));
    
    destino.scrollIntoView({
      behavior: "smooth"
    });
  });
});


// ALERTA AO ENVIAR FORMULÁRIO
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Mensagem enviada com sucesso, Marcelo! 🚀");

  form.reset();
});