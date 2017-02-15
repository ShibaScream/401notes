const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './app',
  output: {
    filename: 'bundle.js',
    path: './build',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // this is a webpack 2 feature
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`,
    }),
  ],
}
