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
if (productoElegido === "Anillos" || productoElegido === "anillos" ) {
    const anillo1 = {
        id: 1,
        nombre: 'Anillo Esmeralda',
        precio: 8.000
    }
    const anillo2 = {
        id: 2,
        nombre: 'Anillo Jazmín',
        precio: 18.000
    }
    const anillo3 = {
        id: 3,
        nombre: 'Anillo Merlí',
        precio: 26.000
    }
    const anillosProductos = [anillo1, anillo2, anillo3]
    for(const anillo of anillosProductos) {
        console.log(anillo)
    }
} else if (productoElegido === "Collares" || productoElegido === "collares") {
    const collar1 = {
        id: 1,
        nombre: 'Collar Dorado',
        precio: 10.000
    }
    const collar2 = {
        id: 2,
        nombre: 'Collar Esperanza',
        precio: 5.000
    }
    const collar3 = {
        id: 3,
        nombre: 'Collar Tulúm',
        precio: 17.000
    }
    const collaresProductos = [collar1, collar2, collar3]
    for(const collar of collaresProductos) {
        console.log(collar)
    }
} else if (productoElegido === "Aros" || productoElegido === "aros") {
    const aro1 = {
        id: 1,
        nombre: 'Aros Circular',
        precio: 18.000
    }
    const aro2 = {
        id: 2,
        nombre: 'Aros Gota',
        precio: 10.000
    }
    const aro3 = {
        id: 3,
        nombre: 'Aros Fantasia',
        precio: 15.000
    }
    const arosProductos = [aro1, aro2, aro3]
    for(const aro of arosProductos) {
        console.log(aro)
    }
} else {
    console.log('Producto no encontrado');
}
//despedida
let despedida = alert('¡Gracias por llegar hasta acá!'); 