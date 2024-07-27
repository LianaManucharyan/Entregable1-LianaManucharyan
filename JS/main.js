// Bienvenida
let bienvenida = alert('¡Bienvenido/a al catálogo de JoyeríaIan!'); 

// Nombre y Apellido del usuario
let nombre = prompt('Ingresa tu nombre');
let apellido = prompt('Ingresa tu apellido');
let nombreCompleto = nombre + " " + apellido;
console.log('Bienvenido/a' + " " + nombreCompleto); 

// Si el usuario quiere o no ver el catálogo de precios
let catalogoJoyas = [
    { nombre: "Anillos"},
    { nombre: "Pulsera"},
    { nombre: "Aros"}
    ];

function mostrarCatalogoJoyas() {
    console.log(catalogoJoyas);
}

let respuesta = 0;
while (respuesta < 1 || respuesta > 2) {
    respuesta = parseInt(prompt('¿Deseas ver nuestro catálogo de joyas? Ingresa el número correspondiente: 1-Si  2-No'));
    if (respuesta === 1) {
    mostrarCatalogoJoyas();
    } else if (respuesta === 2) {
        console.log("Gracias por tu visita.");
        break;
    } else {
        alert('Respuesta no válida. Por favor, responde con "1" o "2".');
    }
}

// Si es usuario quiere ver los precios de los productos
const productos = {
    anillos: [
        { nombre: 'Anillo de oro', precio: 150 },
        { nombre: 'Anillo de plata', precio: 80 },
        { nombre: 'Anillo de diamantes', precio: 500 }
    ],
    aros: [
        { nombre: 'Aros de oro', precio: 120 },
        { nombre: 'Aros de plata', precio: 60 },
        { nombre: 'Aros de perlas', precio: 90 }
    ],
    collares: [
        { nombre: 'Collar de perlas', precio: 200 },
        { nombre: 'Collar de oro', precio: 300 },
        { nombre: 'Collar de plata', precio: 100 }
    ]
};

function mostrarProductos() {
    console.log(productos);
}
  
let respuestaProductos = 0;
  
  while (respuestaProductos < 1 || respuestaProductos > 2) {
    respuestaProductos = parseInt(prompt('¿Desea acceder a los precios de nuestros productos? 1-Si 2-No'));

    if (respuestaProductos === 1) {
      mostrarProductos();
      break;
    } else if (respuestaProductos === 2) {
      console.log("Gracias por tu visita.");
      break; 
    } else {
      alert('Respuesta no válida. Por favor, responde con "1" o "2".');
    }
  }

// Despedida
function despedida () {
    alert("Gracias por llegar hasta acá" + " " + nombre + " " + apellido + "!!");
}
despedida();
