const btn = document.getElementById("btn");
const titulo = document.getElementById("titulo");

btn.addEventListener("click", () => {
    titulo.textContent = "Texto cambiado con JavaScript 🚀";
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .then(() => console.log("Service Worker registrado correctamente"))
            .catch((error) => console.log("Error al registrar SW:", error));
    });
}