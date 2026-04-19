/* ═══════════════════════════════════════════════════════════
   KUTEESA MERCYLINA — PORTFOLIO SCRIPTS
   ═══════════════════════════════════════════════════════════ */

// ── Preloader ──
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('done');
  }, 1800);
});

// ── Mobile Navigation Toggle ──
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

// ── Navbar Scroll Effects ──
let lastScrollY = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;

  // Add background on scroll
  nav.classList.toggle('scrolled', currentY > 80);

  // Hide/show nav on scroll direction
  if (currentY > lastScrollY && currentY > 300) {
    nav.style.transform = 'translateY(-100%)';
    nav.style.transition = 'transform 0.4s';
  } else {
    nav.style.transform = 'translateY(0)';
  }

  lastScrollY = currentY;
});

// ── Scroll Reveal Animation ──
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
);

document.querySelectorAll('.rv, .skill-card').forEach(el => {
  revealObserver.observe(el);
});

// ── CV Download Button ──
document.getElementById('cvBtn').addEventListener('click', (e) => {
  e.preventDefault();
  // Replace the line below with your actual CV link:
  // window.open("mercylina-cv.pdf", "_blank");
  alert('📄 To enable CV download, replace this with your CV link:\nwindow.open("mercylina-cv.pdf", "_blank")');
});

// ── Contact Form Submission ──
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = e.target.querySelector('.form-submit');
  const originalText = btn.textContent;

  // Show success state
  btn.textContent = '✓ Message Sent!';
  btn.style.background = 'var(--teal)';

  // Reset after 2.5 seconds
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    e.target.reset();
  }, 2500);

  // TODO: Connect to a backend service like Formspree or EmailJS
  // Example with Formspree:
  // fetch('https://formspree.io/f/YOUR_ID', {
  //   method: 'POST',
  //   body: new FormData(e.target),
  //   headers: { 'Accept': 'application/json' }
  // });
});

// ── Showcase Parallax Effect ──
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY < window.innerHeight) {
    const images = document.querySelectorAll('.showcase-img img');
    images.forEach((img, i) => {
      const scale = 1.15 - scrollY * 0.0001;
      const translateY = scrollY * (0.1 + i * 0.03);
      img.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    });
  }
});
