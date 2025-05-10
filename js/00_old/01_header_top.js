/* ハンバーガーボタン押下 → ドロワーメニュー表示・非表示 */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.mv-header__hamburger-button');
    const header = document.querySelector('.mv-header');
  
    hamburger.addEventListener('click', () => {
      header.classList.toggle('drawer-open');
    });
  });

/* ドロワーメニュー内「＋／ー」ボタン押下 → サブメニュー表示・非表示 */
  document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.mv-header__nav-toggle');
  
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const submenu = toggle.closest('.mv-header__nav-item').querySelector('.mv-header__submenu');
        submenu.classList.toggle('is-open');
  
        // 表示切替記号も一緒に
        toggle.textContent = submenu.classList.contains('is-open') ? '－' : '＋';
        toggle.setAttribute('aria-expanded', submenu.classList.contains('is-open'));
      });
    });
  });