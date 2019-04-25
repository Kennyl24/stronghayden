
var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,      
        query: {
          'presets': ['@babel/preset-react'],
          'plugins': [
            [
              '@babel/plugin-transform-runtime',
              {
                'absoluteRuntime': true,
                'corejs': false,
                'helpers': true,
                'regenerator': true,
                'useESModules': true
              }
            ]
          ]
        }
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(png|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
    ]
  }
};