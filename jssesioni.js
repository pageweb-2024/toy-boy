document.addEventListener("DOMContentLoaded", () => {
    actualizarInterfaz();
});

function registrarUsuario() {
    let nombre = document.getElementById("nombreRegistro").value;
    let correo = document.getElementById("correoRegistro").value;
    let password = document.getElementById("passwordRegistro").value;

    if (nombre && correo && password) {
        let usuario = { nombre, correo };
        localStorage.setItem("usuario", JSON.stringify(usuario));
        actualizarInterfaz();
        alert("Registro exitoso");
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function iniciarSesion() {
    let correo = document.getElementById("correoSesion").value;
    let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioGuardado && usuarioGuardado.correo === correo) {
        alert("Inicio de sesión exitoso");
        actualizarInterfaz();
    } else {
        alert("Correo o contraseña incorrectos");
    }
}

function actualizarInterfaz() {
    let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    
    let navSesion = document.getElementById("navSesion");
    let perfilUsuario = document.getElementById("perfilUsuario");

    if (usuarioGuardado) {
        // Ocultar los botones de sesión
        if (navSesion) navSesion.style.display = "none";
        // Mostrar perfil del usuario
        if (perfilUsuario) perfilUsuario.classList.remove("oculto");
        document.getElementById("nombreUsuario").textContent = usuarioGuardado.nombre;
    } else {
        // Mostrar los botones de sesión si no hay usuario
        if (navSesion) navSesion.style.display = "flex";
        if (perfilUsuario) perfilUsuario.classList.add("oculto");
    }
}

function cerrarSesion() {
    localStorage.removeItem("usuario");
    location.reload();
}
