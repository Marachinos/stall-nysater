document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".image-and-news");

    const newsBox = document.createElement("div");
    newsBox.classList.add("news-boxen");
    newsBox.innerHTML = `
      <h2>Senaste nytt</h2>
      <p>19/6-25: Helios gör ett Godkänt Premielopp på tiden 1.32,9</p>
    `;

    container.appendChild(newsBox);
  });