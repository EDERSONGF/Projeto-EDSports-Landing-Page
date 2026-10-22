
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");
const linksMenu = document.querySelectorAll("#menu-principal a");

// Abre e fecha o menu em telas pequenas
botaoMenu.addEventListener("click", () => {
  const menuEstaAberto = menu.classList.toggle("aberto");

  botaoMenu.setAttribute("aria-expanded", menuEstaAberto);

  botaoMenu.setAttribute(
    "aria-label",
    menuEstaAberto ? "Fechar menu" : "Abrir menu"
  );

  botaoMenu.textContent = menuEstaAberto ? "×" : "☰";
});

// Fecha o menu depois que o usuário escolhe uma seção
linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
    botaoMenu.textContent = "☰";
  });
});

// Atualiza o ano automaticamente no rodapé
document.querySelector("#ano-atual").textContent =
  new Date().getFullYear();
