const path = require('path')
const webpack = require('webpack')

// 排除一些不会使用到的node模块
const nodeExternals = require('webpack-node-externals')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  target: "node",
  mode: "development",
  entry: {
    server: path.join(__dirname, "src/index.js")
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, "./dist")
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.{js|jsx}/,
        use: {
          loader: "babel-loader"
        },
        exclude: [path.join(__dirname, "./node_modules")]
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ?
          "'production'" : "'development'"
      }
    })
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true

  }
}

//调试webpack配置
console.log(config)

module.exports = config