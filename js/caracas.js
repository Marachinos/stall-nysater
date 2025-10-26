document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".image-and-news");

  const newsBox = document.createElement("div");
  newsBox.classList.add("news-box");
  newsBox.innerHTML = `
      <h2>Livsstarter:</h2>
        <p>46 starter<br>
        130 300 kr <br>
        1-0-1<br>
        16,6m 14,2ak 16,2am</p>

      
    `;

  container.appendChild(newsBox);
});