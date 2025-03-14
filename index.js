function iniciarSesion() {
    alert("Redirigiendo a Iniciar Sesión...");
}

function registrarse() {
    alert("Redirigiendo a Registro...");
}

// modal
function abrirModal() {
    document.getElementById("modalRegistro").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modalRegistro").style.display = "none";
}

//modal iniciar secion
function abrirModalSesion() {
    document.getElementById("modalSesion1").style.display = "flex";
}

function cerrarModalSesion() {
    document.getElementById("modalSesion1").style.display = "none";
}

//musica principal fondo
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("audioFondo");
    let boton = document.getElementById("btnMusica");

    boton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play().catch(error => console.log("Error al reproducir: ", error));
            boton.textContent = "🔇 Desactivar Música";
        } else {
            audio.pause();
            boton.textContent = "🔊 Activar Música";
        }
    });
});