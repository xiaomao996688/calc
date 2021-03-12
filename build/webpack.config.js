const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  entry : resolve('../src/index.js'),
  output: {
    path: resolve('../dist'),
    filename: 'calc.js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}