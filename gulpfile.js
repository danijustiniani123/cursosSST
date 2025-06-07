'use strict';

const build = require('@microsoft/sp-build-web');
const path = require('path');

build.configureWebpack.mergeConfig({
  additionalConfiguration: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@components': path.resolve(__dirname, 'src/webparts/cursosSst/components/')
    };
    config.resolve.extensions = [...(config.resolve.extensions || []), '.js', '.jsx', '.ts', '.tsx', '.json'];
    return config;
  }
});

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set('serve', result.get('serve-deprecated'));

  return result;
};

build.initialize(require('gulp'));