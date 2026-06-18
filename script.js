// ─── NAV SCROLL ─────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// ─── BURGER MENU ────────────────────────────────────────
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ─── REVEAL ON SCROLL ───────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// ─── PORTFOLIO FILTER ───────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ─── FORM SUBMIT ────────────────────────────────────────
function submitForm() {
  const nome = document.getElementById('nome').value;
  const tel = document.getElementById('tel').value;
  const servico = document.getElementById('servico').value;
  const msg = document.getElementById('msg').value;
  
  if (!nome || !tel) {
    alert('Por favor, preencha seu nome e WhatsApp.');
    return;
  }
  
  const text = encodeURIComponent(
    `Olá! Me chamo *${nome}*\nWhatsApp: ${tel}\nServiço: ${servico || 'a definir'}\n\n${msg}`
  );
  
  window.open(`https://wa.me/${CONFIG.contact.whatsapp}?text=${text}`, '_blank');
}