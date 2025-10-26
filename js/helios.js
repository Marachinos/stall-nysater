document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".image-and-news");

    const newsBox = document.createElement("div");
    newsBox.classList.add("news-box");
    newsBox.innerHTML = `
      <h2>Senaste nytt</h2>
      <p>Helios storebror Hackels Lumiere VANN i sin 10:e start! 12.000 kr och nytt rekord på 1.17,9</p>
      
    `;

    container.appendChild(newsBox);
  });