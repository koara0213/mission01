document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("business");
  
    if (target) {
      fetch("../slideband.html")
        .then(response => response.text())
        .then(html => {
          target.innerHTML = html;
        })
        .catch(error => {
          console.error("ヘッダーの読み込みに失敗しました:", error);
        });
    }
  });
  