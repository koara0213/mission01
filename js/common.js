document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.mv-header__hamburger-button');
  const header = document.querySelector('.mv-header');

  hamburger.addEventListener('click', () => {
    header.classList.toggle('drawer-open');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.mv-header__nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const submenu = item.querySelector('.mv-header__submenu');
      const toggle = item.querySelector('.mv-header__nav-toggle');
      const icon = toggle.querySelector('i');

      const isOpen = submenu.classList.toggle('is-open');

      if (icon) {
        icon.classList.toggle('bi-plus-lg', !isOpen);
        icon.classList.toggle('bi-dash-lg', isOpen);
      }

      toggle.setAttribute('aria-expanded', isOpen);
    });
  });

  const toggleButtons = document.querySelectorAll('.mv-header__navsublabel .mv-header__nav-toggle');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); 
    });
  }); 
});

const fadeElemsDevelop = document.querySelectorAll('.fadeinLefttoRight');

const observerDevelop = new IntersectionObserver(entriesDevelop => {
  entriesDevelop.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observerDevelop.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeElemsDevelop.forEach(el => {
  observerDevelop.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.imgbox');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('slide-in');
        }, index * 300);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  boxes.forEach(box => {
    observer.observe(box);
  });
});

document.querySelectorAll('.js-clickbox').forEach(function (box) {
  box.style.cursor = 'pointer';
  box.addEventListener('click', function () {
    window.location.href = 'javascript:void(0)';
  });
});

const fadeElemsService = document.querySelectorAll('.fadeinRighttoLeft');

const observerService = new IntersectionObserver(entriesService => {
  entriesService.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observerService.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeElemsService.forEach(el => {
  observerService.observe(el);
});
