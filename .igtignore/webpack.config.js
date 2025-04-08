const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Use 'production' for builds
  entry: './src/index.js',
  devtool: 'inline-source-map', // For better debugging
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Path to your template
      title: 'Restaurant Page',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the dist folder before each build
    publicPath: '/' // Remove the specific path to make it work from root
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Loader for images
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', // Loader for fonts
      },
    ],
  },
};
