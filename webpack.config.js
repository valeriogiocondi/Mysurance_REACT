var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '');
var APP_DIR = path.resolve(__dirname, '')+'/js/';

const ConcatPlugin = require('webpack-concat-plugin');

var config = {
  entry: {
    app: [
      APP_DIR+'components/Main.jsx',
      APP_DIR+'components/Home.jsx',
      APP_DIR+'components/Header.jsx',
      APP_DIR+'components/AddInsurance.jsx',
      APP_DIR+'components/InsuranceRow.jsx',
      APP_DIR+'components/RemovePopup.jsx',
      APP_DIR+'actions/index.js',
      APP_DIR+'reducers/index.js',
      APP_DIR+'reducers/insurance-list-reducer.js',
      APP_DIR+'reducers/reducer-counter.js',
      APP_DIR+'reducers/insurance-to-remove.js',
      APP_DIR+'library.js'
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ],
  },
  resolve: {
      extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    new ConcatPlugin({
        uglify: false, 
        fileName: 'style.css',
        filesToConcat: [
          './css/reset.css', 
          './css/components/header.css', 
          './css/components/popup.css', 
          './css/components/home.css', 
          './css/components/add-insurance.css', 
          './css/responsive.css'
        ]
    })
  ]
};

module.exports = config;