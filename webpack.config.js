var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: {
	    home: './enter.js',
        about: './entry.js',
		register:'./register.js'
 },
 output: { path: __dirname, filename: './static/[name].js' },
 
 
 module: {
  loaders: [
   {
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node-modules/,
    query: {
     presets: ['es2015', 'react']
    }
   }
  ]
 },
};﻿
