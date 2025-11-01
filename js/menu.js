

fetch("menu.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("menu").innerHTML = data;

    // 🔹 När menyn är inladdad: markera aktuell sida
    const currentPage = window.location.pathname.split("/").pop(); // t.ex. "index.html"
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        // Gör länken oklickbar
        link.classList.add("active");
        link.removeAttribute("href"); // gör så man inte kan klicka
      }
    });
  });
