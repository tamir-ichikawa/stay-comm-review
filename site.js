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

document.querySelector("[data-copy-email]")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const email = button.getAttribute("data-copy-email");
  const status = document.querySelector(".copy-status");
  if (!email) return;

  try {
    await navigator.clipboard.writeText(email);
    button.textContent = "Email copied";
    if (status) status.textContent = "Address copied to your clipboard.";
    window.setTimeout(() => {
      button.textContent = "Copy email";
      if (status) status.textContent = "";
    }, 2400);
  } catch {
    if (status) status.textContent = "Copy unavailable — select the email address above.";
  }
});
