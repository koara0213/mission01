const fadeElems = document.querySelectorAll('.fadein');

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