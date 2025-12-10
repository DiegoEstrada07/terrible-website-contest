const mensajes = [
    "¿Por qué hiciste clic?",
    "¡Deja de tocar!",
    "Eso no va a funcionar.",
    "¡JAJA! Otra ventana.",
    "Mi botón no te pertenece."
];

// Crear cajas flotantes al azar
function creaCaja() {
    const div = document.createElement("div");
    div.className = "floating";
    div.textContent = mensajes[Math.floor(Math.random()*mensajes.length)];

    div.style.top = Math.random() * (window.innerHeight - 50) + "px";
    div.style.left = Math.random() * (window.innerWidth - 200) + "px";

    // Mover ligeramente la caja cada cierto tiempo
    const dx = (Math.random() - 0.5) * 4;
    const dy = (Math.random() - 0.5) * 4;

    setInterval(() => {
        const x = parseFloat(div.style.left) + dx;
        const y = parseFloat(div.style.top) + dy;
        div.style.left = (x % window.innerWidth) + "px";
        div.style.top = (y % window.innerHeight) + "px";
    }, 30);

    // Al hacer clic crea más cajas
    div.addEventListener("click", creaCaja);

    document.body.appendChild(div);
}

document.getElementById("bigButton").addEventListener("click", () => {
    for (let i = 0; i < 5; i++) creaCaja();
    alert("¡Te lo advertí!");
});