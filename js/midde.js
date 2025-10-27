document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".image-and-news");

  const newsBox = document.createElement("div");
  newsBox.classList.add("news-boxen");
  newsBox.innerHTML = `
      <h2>Oktober -25</h2>
      <p>Midde är nu satt i vagn och är så duktig.</p>
    `;

  container.appendChild(newsBox);
});