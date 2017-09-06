/* 
  Indicamos el file de entrada app.js puede tener varios files en el entry:
  Indicamos la path o ruta donde se va generar el file,
  El name del file bundle.js que se va generar.
*/

const path = require('path');
/* 
  Con esta configuracion podemos correr npm start para correr webpack-dev-server,
  "start": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js",
*/
// module.exports = {
//   entry: './src/js/app.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.css$/,
//         loader: "style-loader!css-loader"
//       },
//       {
//         test: /\.jsx?$/,
//         loader: "babel-loader",
//         exclude: /node_modules/,
//         query: {
//           presets: ['es2015', 'es2016']
//         }
//       }
//     ]
//   }
// };

// Example 2 y es la mejor opcion hasta el momento.
/* 
  En esta configuración agregamos publicPath para correr en el start webpack-dev-server,
  "start": "webpack-dev-server",
  La parte de los modules se maneja por rules ya en la version 2.x de webpack

  Con el test: .jsx?$ podemos traspilar files de js y de jxs.
*/
/* module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'es2016'],
            plugins: []
          }
        }
      }
    ]
  }
}; */


// Example 3
/* 
  Otra forma de exportar la config de webpak es de la siguiente forma,
  no olvidarse del path que se require en la parte superior del código,
  Nota: Recordar que el publicPath se usa para correr el webpack-dev-server 
*/

/* 
  No necesito indicarle el file en el entry porque node reconoce que es un index.js
  Nota si fuera otro nombre si ay que expecificarlo ./src/app.js example 
  devtool: 'source-map' se usa para ver donde estan los errores no crea un file y no indica donde estan los errores.

  En esta configuración usamos webpack con express es casi lo mismo que webpack-dev-server
*/

// revisar porque no me deja colocar otra ruta diferente a la de la raiz.
const config = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'es2016'],
            plugins: []
          }
        }
      }
    ]
  }
};

module.exports = config;