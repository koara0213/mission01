/* ヘッダーメニュー
--------------------- */
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

/* 事業内容
--------------------- */
// 帯のスライドイン //
const fadeElemsDevelop = document.querySelectorAll('.fadeinLefttoRight');

const observerDevelop = new IntersectionObserver(entriesDevelop => {
  entriesDevelop.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observerDevelop.unobserve(entry.target); // 一度だけ実行
    }
  });
}, {
  threshold: 0.1 // 10%見えたらトリガー
});

fadeElemsDevelop.forEach(el => {
  observerDevelop.observe(el);
});

// 3カラムを順番に下からスライドイン //
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.imgbox');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // 順番にアニメーション
        setTimeout(() => {
          entry.target.classList.add('slide-in');
        }, index * 300); // 各要素に300msの遅延
        observer.unobserve(entry.target); // 一度だけ実行
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
    // 実運用ではリンク先URLを入れる
  });
});


/* サービス事業
--------------------- */
const fadeElemsService = document.querySelectorAll('.fadeinRighttoLeft');

const observerService = new IntersectionObserver(entriesService => {
  entriesService.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observerService.unobserve(entry.target); // 一度だけ実行
    }
  });
}, {
  threshold: 0.1 // 10%見えたらトリガー
});

fadeElemsService.forEach(el => {
  observerService.observe(el);
});
