

// GRUPO 1 DE IMÁGENES
const imagenes1 = [
    "images/kirby.gif",
    "images/kirby.gif",
    "images/kirby.gif",
    "images/kirby.gif"
];

// GRUPO 2 DE IMÁGENES (OTRA CARPETA O OTRO NOMBRE)
const imagenes2 = [
    "images/happy.gif",
    "images/happy.gif",
    "images/happy.gif"
];

// ---- FUNCIÓN PARA ACTUALIZAR EL CONTADOR ----
function actualizarContador() {
    const cantidad = document.querySelectorAll(".floating").length;
    document.getElementById("contador").textContent = "Imágenes: " + cantidad;
}

// ---- FUNCIÓN GENERAL PARA CREAR UNA IMAGEN ----
function creaImagen(listaImagenes) {
    const div = document.createElement("div");
    div.className = "floating";

    const img = document.createElement("img");
    img.src = listaImagenes[Math.floor(Math.random() * listaImagenes.length)];
    div.appendChild(img);

    div.style.top = Math.random() * (window.innerHeight - 60) + "px";
    div.style.left = Math.random() * (window.innerWidth - 60) + "px";

    // velocidad aumentada
    const dx = (Math.random() - 0.5) * 12;
    const dy = (Math.random() - 0.5) * 12;

    setInterval(() => {
        const x = (parseFloat(div.style.left) + dx + window.innerWidth) % window.innerWidth;
        const y = (parseFloat(div.style.top) + dy + window.innerHeight) % window.innerHeight;

        div.style.left = x + "px";
        div.style.top = y + "px";
    }, 30);

    // Al hacer clic, genera otra del MISMO tipo
    div.addEventListener("click", () => creaImagen(listaImagenes));

    document.body.appendChild(div);
    actualizarContador();
}

// ------------ EVENTOS DE LOS DOS BOTONES ------------



document.getElementById("bigButton").addEventListener("click", () => {
    for (let i = 0; i < 1; i++) creaImagen(imagenes1);
});

document.getElementById("happyButton").addEventListener("click", () => {
    for (let i = 0; i < 1; i++) creaImagen(imagenes2);
});