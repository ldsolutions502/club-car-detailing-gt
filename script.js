// Club Car Detailing GT V2
const WHATSAPP_NUMBER = "";

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

function openWhatsApp() {
  if (!WHATSAPP_NUMBER) {
    alert("El número de WhatsApp todavía no está configurado. Lo agregaremos cuando tengas el número definitivo.");
    return;
  }
  const message = "Hola, Club Car Detailing GT. Quisiera conocer más sobre sus productos y novedades.";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

document.getElementById("whatsappButton")?.addEventListener("click", e => {
  e.preventDefault();
  openWhatsApp();
});

document.getElementById("year").textContent = new Date().getFullYear();
