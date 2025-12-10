const imagenes = [
    "images/jueves-de-racismo.gif",
    "images/jueves-de-racismo.gif",
    "images/jueves-de-racismo.gif",
    "images/jueves-de-racismo.gif"
];

// Crear imágenes flotantes
function creaImagen() {
    const div = document.createElement("div");
    div.className = "floating";

    const img = document.createElement("img");
    img.src = imagenes[Math.floor(Math.random() * imagenes.length)];

    div.appendChild(img);

    // Posición inicial aleatoria
    div.style.top = Math.random() * (window.innerHeight - 120) + "px";
    div.style.left = Math.random() * (window.innerWidth - 120) + "px";

    // Movimiento aleatorio
    const dx = (Math.random() - 0.5) * 4;
    const dy = (Math.random() - 0.5) * 4;

    setInterval(() => {
        const x = (parseFloat(div.style.left) + dx + window.innerWidth) % window.innerWidth;
        const y = (parseFloat(div.style.top) + dy + window.innerHeight) % window.innerHeight;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }, 30);

    // Al hacer clic, crea más imágenes
    div.addEventListener("click", creaImagen);

    document.body.appendChild(div);
}

// Botón principal
document.getElementById("bigButton").addEventListener("click", () => {
    for (let i = 0; i < 5; i++) creaImagen();
    alert("¡Imágenes locales activadas!");
});