/* 
  module.exports -> Esto es gracias a webpack 
  Mopode mos exportar texto, objects, functions, arrays etc... 
*/
// module.exports = 'Hola mundo';

/* module.exports = {
  name: 'John Serrano',
  age: 24
} */


/* function HolaMundo(mensaje) {
  return mensaje;
}

module.exports = HolaMundo; */

const Personas = [
  {
    name: 'John',
    age: 24
  },
  {
    name: 'Andrey',
    age: 25
  }
]

module.exports = Personas;