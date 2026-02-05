const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Funkcia na presun tlačidla
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Čo sa stane po kliknutí na ÁNO
yesBtn.addEventListener("click", () => {
    alert("Vedel som to! ❤️ Vidíme sa na Valentína!");
    // Tu môžeš pridať presmerovanie na inú stránku alebo zmeniť text
});
