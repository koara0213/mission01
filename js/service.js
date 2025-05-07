const hamburger = document.querySelector('.hamburger');
    const body = document.body;

    hamburger.addEventListener('click', () => {
    body.classList.toggle('drawer-open');
});