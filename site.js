const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = mainNav?.classList.toggle("is-open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector(".inquiry-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  const status = document.querySelector(".form-status");
  if (status) status.textContent = "Sample received — no message was sent.";
});
