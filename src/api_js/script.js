window.addEventListener("load", () => {

  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const startCounters = () => {
    counters.forEach(counter => {

      const target = parseInt(counter.getAttribute('data-target'));
      let current = 0;

      const increment = Math.ceil(target / 50);

      const updateCounter = () => {
        current += increment;

        if (current < target) {
          counter.innerText = current;
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  };

  const statsSection = document.querySelector('.stats-compact');

  // IMPORTANT SAFETY CHECK
  if (statsSection) {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting && !animated) {
          animated = true;
          startCounters();
        }

      });

    }, { threshold: 0.3 });

    observer.observe(statsSection);
  }

  counters.forEach(counter => {
    counter.innerText = '0';
  });

});


window.addEventListener("load", () => {

  // Tech category tabs
  const tabBtns = document.querySelectorAll('.tech-tab-btn');
  const categoryContents = document.querySelectorAll('.tech-category-content');

  tabBtns.forEach(btn => {

    btn.addEventListener('click', () => {

      const category = btn.getAttribute('data-category');

      tabBtns.forEach(b => b.classList.remove('active'));

      btn.classList.add('active');

      categoryContents.forEach(content => {

        content.classList.remove('active');

        if (content.id === category) {
          content.classList.add('active');
        }

      });

    });

  });

  // Create floating particles
  function createParticles() {

    const container = document.getElementById('particleField');

    // IMPORTANT CHECK
    if (!container) return;

    for (let i = 0; i < 60; i++) {

      const particle = document.createElement('div');

      particle.classList.add('particle');

      const size = Math.random() * 4 + 2;

      particle.style.width = size + 'px';
      particle.style.height = size + 'px';

      particle.style.left = Math.random() * 100 + '%';

      particle.style.animationDuration =
        Math.random() * 15 + 8 + 's';

      particle.style.animationDelay =
        Math.random() * 5 + 's';

      container.appendChild(particle);
    }
  }

  createParticles();

});


window.addEventListener("load", () => {
  const container = document.getElementById('ctaParticles');
  if (!container) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('cta-particle');

    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 15 + 10 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';

    container.appendChild(particle);
  }
});


