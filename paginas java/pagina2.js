
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


//categorias
function redirigirCategoria(categoria) {
    if (categoria === "ninos") {
        window.location.href = "../paginas alternas/ninos.html"; 
    } else if (categoria === "ninas") {
        window.location.href = "../paginas alternas/ninas.html";
    }
}

//carrito
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los botones del carrito
    const botonesCarrito = document.querySelectorAll(".btn-carrito");
    
    botonesCarrito.forEach(boton => {
        boton.addEventListener("click", function () {
            // Redirige a la página del carrito
            window.location.href = "carrito.html";
        });
    });
});

