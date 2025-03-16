//menu desplegable
function toggleMenu() {
    let menu = document.getElementById("menuUsuario");
    menu.classList.toggle("mostrar"); 
}


document.addEventListener("click", function(event) {
    let perfil = document.getElementById("perfilUsuario");
    let menu = document.getElementById("menuUsuario");

    if (!perfil.contains(event.target)) {
        menu.classList.remove("mostrar"); 
    }
});

function cerrarSesion() {
    alert("Cerraste sesión");
    location.reload(); 
}