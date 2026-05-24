// Blue Valley Home Improvement — main.js

// ── Mobile hamburger menu ──────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
}

// ── Scroll: shrink / highlight nav ──────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(10,42,74,0.99)';
  } else {
    nav.style.background = 'rgba(10,42,74,0.96)';
  }
});

// ── Fade-in on scroll ────────────────────────────────────
const fadeEls = document.querySelectorAll(
  '.service-card, .why-item, .review-card, .service-section, .contact-item, .trust-badge, .guarantee-card'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

// ── Contact form ─────────────────────────────────────────
const quoteForm = document.getElementById('quoteForm');
const formSuccess = document.getElementById('formSuccess');

if (quoteForm) {
  quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = quoteForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    const data = new FormData(quoteForm);

    try {
      const res = await fetch(quoteForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        quoteForm.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
      } else {
        btn.textContent = 'Send My Quote Request →';
        btn.disabled = false;
        alert('There was a problem sending your request. Please call us directly at 778-986-1726.');
      }
    } catch (err) {
      btn.textContent = 'Send My Quote Request →';
      btn.disabled = false;
      alert('Network error. Please try again or call us at 778-986-1726.');
    }
  });
}

// ── Smooth anchor scrolling for service links ────────────
document.querySelectorAll('a[href*="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const hash = link.getAttribute('href').split('#')[1];
    const target = document.getElementById(hash);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
