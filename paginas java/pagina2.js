
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


//pasar producto a padres
function agregarAlCarrito(boton) {
    let producto = boton.closest('.producto'); // Encuentra el contenedor del producto
    let id = producto.getAttribute('data-id');
    let imagen = producto.querySelector('.imagen-producto').src;
    let nombre = producto.querySelector('.nombre-producto').textContent;
    let precio = producto.querySelector('.precio-producto').textContent;

    let productoCarrito = { id, imagen, nombre, precio }; // Crea un objeto con la info del producto

    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Obtiene los productos en el carrito
    carrito.push(productoCarrito); // Agrega el nuevo producto
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guarda en localStorage

    window.location.href = "padres.html"; // Redirige a la página de padres
}
