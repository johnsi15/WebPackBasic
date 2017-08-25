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

// Cargar files de css en el app.js sin necesidad de agregan un link en el html
// require('!style-loader!css-loader!../css/style.css');
// Con los loaders configurados en el webpack.config.js no es necesario darle toda la path
require('../css/style.css');

// console.log(personas);

// $('body').append(`<h1>${personas[0].name}</h1>`);

// Con la function map
/* personas.map((data) => {
  $('#h1').append(` Nombre: ${data.name} Edad: ${data.age} `);
  // console.log(data)
}); */

// Con jquery
$.each(personas, function (key, value) {
  // console.log(value)
  $('body').append(` ${value.name} ${value.age} `);
});

/* 
  Nota: recordar siempre correr webpack.
  File que se esta editando o principal y el file que va devolver webpack bundle.js

  webpack app.js bundle.js --watch
  webpack app.js bundle.js -w

*/