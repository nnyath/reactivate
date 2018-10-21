const
  path = require('path')

module.exports = {
  context: path.resolve(__dirname, `../../`),
  resolve: {
    modules: ['node_modules'].concat(
      path
        .join(__dirname, '../../src')
        .split(path.delimiter)
        .filter(Boolean)
    ),
  },
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../../dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: 'src/',
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    compress: true,
    port: 3000
  }
}