/* 
   // Siempre colocar el ('./mensaje.js')
   Esto es gracias a webpack
*/

/* var funcitonMensaje = require('./mensaje.js');
const mensaje = 'Hola mundo';

alert(funcitonMensaje(mensaje)); */

// alert(mensaje);

const personas = require('./mensaje.js');

const $ = require('jquery');

// console.log(personas);

$('body').append(`<h1>${personas[0].name}</h1>`);