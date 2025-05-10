// 帯のスライドイン //
const fadeElems = document.querySelectorAll('.fadeinLefttoRight');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // 一度だけ実行
    }
  });
}, {
  threshold: 0.1 // 10%見えたらトリガー
});

fadeElems.forEach(el => {
  observer.observe(el);
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
