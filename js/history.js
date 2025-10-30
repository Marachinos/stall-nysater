
const horses = [
  
  {
    year: 1996,
    name: "Capon",
    image: "pictures/historia/fun.jpg",
    memory: "Änglagårds Capones Girl - vår allra första shettis som, tillsammans med sin son Zingo, flyttade in hos oss augusti 2005."
  },
  {
    year: 2003,
    name: "Zingo",
    image: "pictures/historia/fun.jpg",
    memory: "Zingo, flyttade hit, i augusti 2005, tillsammans med sin mamma Capon."
  },
  {
    year: 2020,
    name: "Ior",
    image: "pictures/historia/fun.jpg",
    memory: "SuperIor Noir flyttade in hos oss xxxx. Med Ior vann Eve sitt allra första ponnylopp, som pris var det dessutom ett LILA täcke."
  },
  {
    year: 2023,
    name: "Luna",
    image: "pictures/historia/fun.jpg",
    memory: "Luna är vår nuvarande häst – mjuk, social och älskar att bli kliad."
  }
];

const treeGrid = document.getElementById("treeGrid");

horses.forEach((horse, index) => {
  const branch = document.createElement("div");
  branch.classList.add("branch");
  branch.classList.add(index % 2 === 0 ? "left" : "right");

  const img = document.createElement("img");
  img.src = horse.image;
  img.alt = horse.name;

  const year = document.createElement("div");
  year.classList.add("year");
  year.textContent = horse.year;

  const name = document.createElement("div");
  name.classList.add("name");
  name.textContent = horse.name;

  const memoryBox = document.createElement("div");
  memoryBox.classList.add("memory");
  memoryBox.textContent = horse.memory;
  memoryBox.style.display = "none"; // gömd från början

  branch.appendChild(img);
  branch.appendChild(year);
  branch.appendChild(name);
  branch.appendChild(memoryBox);
  treeGrid.appendChild(branch);

  branch.addEventListener("click", () => {
    memoryBox.style.display = memoryBox.style.display === "none" ? "block" : "none";
  });
});