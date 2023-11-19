function scrollToSection(targetId) {
  if (!targetId || targetId.trim() === '') {
    console.error('A target azonosítója nincs definiálva, vagy üres.');
    return;
  }

  const targetSection = document.getElementById(targetId);

  if (!targetSection) {
    console.error(`A(z) "${targetId}" szekció nem található.`);
    return;
  }

  if (targetId.toLowerCase() === 'fooldal') {

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  } else {
    
    const offset = targetSection.getBoundingClientRect().top;
    window.scrollBy({ top: offset, left: 0, behavior: 'smooth' });
  }
}

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.dataset.target;
    scrollToSection(targetId);
  });
});

const footerNavbar = document.querySelector('.footer-navbar');
const body = document.body;

function checkBottom() {
  const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
  body.classList.toggle('at-bottom', isBottom);
}

window.addEventListener('scroll', () => {
  body.classList.add('scrolled');
  checkBottom();
});

window.addEventListener('load', () => {
  checkBottom();
});

window.addEventListener('resize', () => {
  checkBottom();
});


const nightModeToggle = document.getElementById('nightModeToggle');

const navbar = document.querySelector('.navbar');

nightModeToggle.addEventListener('change', () => {
  if (nightModeToggle.checked) {
    navbar.classList.add('night-mode');
    document.body.classList.add('night-mode');
  } else {
    navbar.classList.remove('night-mode');
    document.body.classList.remove('night-mode');
  }
});
