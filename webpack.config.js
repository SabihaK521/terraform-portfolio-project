const path = require('path');

module.exports = {
  entry: './src/index.js', // Path to your entry file
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'production', // or 'development'
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
    ],
  },
};
