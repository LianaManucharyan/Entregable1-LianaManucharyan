const cartContainer = document.getElementById("cart-section");

    // Función para obtener el producto con descuento desde el localStorage
    function obtenerProductosDescuento() {
        return JSON.parse(localStorage.getItem('productosDescuento')) || [];
    }

    function renderCarrito(cartItems) {
        const productosDescuento = obtenerProductosDescuento(); // Obtén los productos con descuento
        cartContainer.innerHTML = ''; 
        cartItems.forEach(producto => {
            // Busca el producto con descuento en la lista de productos con descuento
            const productoConDescuento = productosDescuento.find(p => p.id === producto.id);
            const precioMostrar = productoConDescuento ? productoConDescuento.precioDescuento : producto.precio;
            
            const cart = document.createElement("div");
            cart.className = "cart-item"; 
            cart.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${precioMostrar}</p>
                <button class="remove-btn" data-id="${producto.id}">Eliminar</button>
            `;
            cartContainer.appendChild(cart);
        });
        addRemoveFromCartButton(); 
    }

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

    // Inicializar el carrito
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    renderCarrito(cartProducts);
