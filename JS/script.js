//bienvenida
let bienvenida = alert('¡Bienvenido/a al catálogo de JoyeríaIan!'); 

//nombre y apellido del usuario
let nombre = prompt('Ingresa tu nombre');
let apellido = prompt('Ingresa tu apellido');
let nombreCompleto = nombre + " " + apellido;
console.log('Bienvenido/a' + " " + nombreCompleto);

//si el usuario quiere o no ver el catálogo de precio
let catalogoPrecios = prompt('¿Deseas ver nuestro catálogo de joyas?');
if (catalogoPrecios === "si") {
    const productos = ['Anillos', 'Collares', 'Aros'];
    console.log(productos.sort());
} else if (catalogoPrecios === "no") {
    alert('Gracias por llegar hasta acá!');
} else {
    alert('Respuesta no válida. Por favor, responde con "si" o "no".');
}

//precio de los productos
let productoElegido = prompt('¿De qué producto te gustaría saber el precio?');
if (productoElegido === "Anillos") {
    const anilloProductos = [
        {id: 1, nombre: 'Anillo Esmeralda', precio: 'Ocho mil pesos'},
        {id: 2, nombre: 'Anillo Jazmín', precio: 'Dieciocho mil pesos'},
        {id: 3, nombre: 'Anillo Merlí', precio: 'Veintiséis mil pesos'},
    ];
    for (const anillo of anilloProductos) {
        console.log(anillo);
    }
} else if (productoElegido === "Collares") {
    const collarProductos = [
        {id: 1, nombre: 'Collar Dorado', precio: 'Diez mil pesos'},
        {id: 2, nombre: 'Collar Esperanza', precio: 'Cinco mil pesos'},
        {id: 3, nombre: 'Collar Tabú', precio: 'Diecisiete mil pesos'},
    ];
    for (const collar of collarProductos) {
        console.log(collar);
    }
} else if (productoElegido === "Aros") {
    const arosProductos = [
        {id: 1, nombre: 'Aros Circular', precio: 'Ocho mil pesos'},
        {id: 2, nombre: 'Aros Gota', precio: 'Diez mil pesos'},
        {id: 3, nombre: 'Aros Fantasia', precio: 'Quince mil pesos'},
    ];
    for (const aro of arosProductos) {
        console.log(aro);
    }
} else {
    console.log('Producto no encontrado');
}