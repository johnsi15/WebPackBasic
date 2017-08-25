/* 
   // Siempre colocar el ('./mensaje.js')
   Esto es gracias a webpack
*/

/* var funcitonMensaje = require('./mensaje.js');
const mensaje = 'Hola mundo';

alert(funcitonMensaje(mensaje)); */

// alert(mensaje);

/* 
  Cargando jquery.
*/
const personas = require('./mensaje.js');
const $ = require('jquery');

// console.log(personas);

// $('body').append(`<h1>${personas[0].name}</h1>`);
$('#h1').html(`${personas[1].name}`);

/* 
  Nota: recordar siempre correr webpack.
  File que se esta editando o principal y el file que va devolver webpack bundle.js

  webpack app.js bundle.js --watch
  webpack app.js bundle.js -w

*/