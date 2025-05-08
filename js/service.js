// 帯のスライドイン //
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
