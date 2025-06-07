'use strict';

const path = require('path');

module.exports = function (config) {
  // Asegura que config.resolve exista
  config.resolve = config.resolve || {};

  // Asegura que config.resolve.alias exista
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    '@components': path.resolve(__dirname, '../src/webparts/cursosSst/components'),
    // Agrega más alias si los necesitas
    '@utils': path.resolve(__dirname, '../src/webparts/cursosSst/utils'),
    '@styles': path.resolve(__dirname, '../src/webparts/cursosSst/styles'),
    '@assets': path.resolve(__dirname, '../src/webparts/cursosSst/assets')
  };

  return config;
};