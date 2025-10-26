document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".image-and-news");

    const newsBox = document.createElement("div");
    newsBox.classList.add("news-box");
    newsBox.innerHTML = `
      <h3>Senaste nytt</h3>
      <p>Helios storebror Hackels Lumiere VANN i sin 10:e start den 25/10-25 på Bergsåker! 12.000 kr och nytt rekord på 1.17,9</p>
      
    `;

    container.appendChild(newsBox);
  });