const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: {
    'calc': resolve('../src/index.js'),
    'calc.min': resolve('../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: "calc",
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: { 
      minimize: true, 
      minimizer: [new TerserPlugin({
          test: /\.min.js/
      })]
  }
}