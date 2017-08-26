/* 
  Indicamos el file de entrada app.js
  Indicamos la path o ruta donde se va generar el file,
  El name del file bundle.js que se va generar.
*/
module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'es2016']
        }
      }
    ]
  }
}