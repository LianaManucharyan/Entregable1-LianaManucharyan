// Variables
const productosJoyas = [
    { id: 1, 
        nombre: 'Aros Miranda Dorados', 
        precio: 60000, 
        imagen: './IMG/producto5.jpg' },
    { id: 2, 
        nombre: 'Anillo Tabú Dorados', 
        precio: 60000, 
        imagen: './IMG/producto9.jpg' },
    { id: 3, 
        nombre: 'Aros Adá Dorados', 
        precio: 75000, 
        imagen: './IMG/producto10.jpg' },
    { id: 4, 
        nombre: 'Aros Colgante Plateados', 
        precio: 80000, 
        imagen: './IMG/producto11.jpg' },
    { id: 5, 
        nombre: 'Pulsera Cadena Dorada', 
        precio: 65000, 
        imagen: './IMG/producto12.jpg' },
    { id: 6, 
        nombre: 'Aros Gota Dorados', 
        precio: 40000, 
        imagen: './IMG/producto13.jpg' },
    { id: 7, 
        nombre: 'Collar Fino Dorado', 
        precio: 40000, 
        imagen: './IMG/producto14.jpg' },
    { id: 8, 
        nombre: 'Pulsera Amistad Dorada', 
        precio: 50000, 
        imagen: './IMG/producto15.jpg' },
    { id: 9, 
        nombre: 'Pulsera Circuitos Dorada', 
        precio: 50000, 
        imagen: './IMG/producto4.jpg' },
];

const productosDescuento = productosJoyas.map(producto => {
    const precioDescuento = producto.precio - (producto.precio * 20 / 100);
    return {
        id: producto.id,
        nombre: producto.nombre,
        imagen: producto.imagen,
        precioOriginal: producto.precio,
        precioDescuento: precioDescuento
    };
});

// Guardar productos con descuento en localStorage
localStorage.setItem('productosDescuento', JSON.stringify(productosDescuento));

// Cargar productos desde localStorage
function cargarProductosDesdeLocalStorage() {
    const storedProducts = JSON.parse(localStorage.getItem('productosDescuento'));
    return storedProducts ? storedProducts : productosDescuento;
}

// Función para renderizar productos con descuento
function renderProductosConDescuento() {
    const contenedorDescuento = document.getElementById('productos-con-descuento');
    const productosDescuentoHTML = cargarProductosDesdeLocalStorage().map(producto => {
        return `
            <div class="productosDescuento">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <strong>${producto.nombre} - 20% off</strong><br>
                Precio Original: $${producto.precioOriginal}<br>
                Precio con Descuento: $${producto.precioDescuento}
                <button class="productoAgregar" id="${producto.id}">Agregar</button>
            </div>
        `;
    });
    contenedorDescuento.innerHTML = productosDescuentoHTML.join('');
    addToCartButton(); 
}

// Función para renderizar carrito de compras
function renderCarrito(cartItems) {
    const cartContainer = document.getElementById('cart-section');
    cartContainer.innerHTML = ''; 
    cartItems.forEach(producto => {
        const cart = document.createElement('div');
        cart.className = 'cart-item'; 
        // Encuentra el producto con descuento desde el localStorage
        const productoConDescuento = cargarProductosDesdeLocalStorage().find(p => p.id === producto.id);
        const precioMostrar = productoConDescuento ? productoConDescuento.precioDescuento : producto.precio;
        cart.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${precioMostrar}</p>
            <button class="remove-btn" data-id="${producto.id}">Eliminar</button>
        `;
        cartContainer.appendChild(cart);
    });
    addRemoveFromCartButton(); 
}

// Función para agregar productos al carrito
function addToCartButton() {
    const addButton = document.querySelectorAll(".productoAgregar");
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id;
            const selectedProduct = productosDescuento.find(producto => producto.id == productId); // Obtener producto con descuento
            if (selectedProduct) {
                let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
                cartProducts.push(selectedProduct);
                localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
                renderCarrito(cartProducts); // Volver a renderizar el carrito
            }
        }
    });
}

// Función para eliminar productos del carrito
function removeProduct(id) {
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    cartProducts = cartProducts.filter(producto => producto.id !== id);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    renderCarrito(cartProducts); 
}

function addRemoveFromCartButton() {
    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach(button => {
        button.onclick = (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            removeProduct(id);
        }
    });
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    renderProductosConDescuento();
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    renderCarrito(cartProducts);
});