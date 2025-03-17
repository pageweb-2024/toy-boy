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

//muestra de producto
document.addEventListener("DOMContentLoaded", function() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contenedor = document.getElementById('carrito-container');

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>No hay productos en el carrito</p>";
        return;
    }

    carrito.forEach(producto => {
        let productoHTML = `
            <div class="producto" data-id="${producto.id}">
                <img class="imagen-producto" src="${producto.imagen}" alt="${producto.nombre}">
                <h3 class="nombre-producto">${producto.nombre}</h3>
                <p class="precio-producto"><strong>${producto.precio}</strong></p>
            </div>
        `;
        contenedor.innerHTML += productoHTML;
    });
});

// compras
document.addEventListener("DOMContentLoaded", function () {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contenedorCarrito = document.getElementById("carrito-container");
    const precioTotal = document.getElementById("precio-total");

    function actualizarCarrito() {
        contenedorCarrito.innerHTML = "";
        let total = 0;

        carrito.forEach((producto, index) => {
            const item = document.createElement("div");
            item.classList.add("producto");
            item.innerHTML = `
                <img src="${producto.imagen}" class="imagen-producto">
                <h3 class="nombre-producto">${producto.nombre}</h3>
                <p class="precio-producto"><strong>${producto.precio}</strong></p>
                <button class="btn-eliminar" data-index="${index}">🗑️</button>
            `;
            contenedorCarrito.appendChild(item);
            total += parseInt(producto.precio.replace("$", ""));
        });

        precioTotal.textContent = `$${total}`;
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    contenedorCarrito.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-eliminar")) {
            const index = e.target.getAttribute("data-index");
            carrito.splice(index, 1);
            actualizarCarrito();
        }
    });

    document.getElementById("btn-comprar").addEventListener("click", function () {
        alert("Compra realizada con éxito 🎉");
        localStorage.removeItem("carrito");
        carrito = [];
        actualizarCarrito();
    });

    actualizarCarrito();
});

//modal pagos
document.addEventListener("DOMContentLoaded", function () {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const precioTotal = document.getElementById("precio-total");
    const modal = document.getElementById("modal-pago");
    const cerrarModal = document.querySelector(".cerrar");
    const botonesPago = document.querySelectorAll(".btn-pago");
    const codigoPago = document.getElementById("codigo-pago");

    // Mostrar el modal al presionar "Comprar"
    document.getElementById("btn-comprar").addEventListener("click", function () {
        if (carrito.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }
        modal.style.display = "block";
    });

    // Cerrar el modal al presionar la "X"
    cerrarModal.addEventListener("click", function () {
        modal.style.display = "none";
        codigoPago.style.display = "none"; // Oculta el código de pago al cerrar
    });

    // Cerrar modal si se hace clic fuera de él
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            codigoPago.style.display = "none";
        }
    });

    // Manejar selección de método de pago
    botonesPago.forEach(boton => {
        boton.addEventListener("click", function () {
            const metodo = this.getAttribute("data-metodo");

            if (metodo === "efectivo") {
                // Generar un código de pago aleatorio
                const codigo = "COD-" + Math.floor(100000 + Math.random() * 900000);
                codigoPago.textContent = "Código de pago: " + codigo;
                codigoPago.style.display = "block";
            } else {
                alert(`Has seleccionado ${metodo.toUpperCase()}. Procesando pago...`);
                modal.style.display = "none";
            }
        });
    });
});
