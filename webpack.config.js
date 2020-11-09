const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve('src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }, 
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
