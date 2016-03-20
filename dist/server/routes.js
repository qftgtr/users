/**
 * Main application routes
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _componentsErrors = require('./components/errors');

var _componentsErrors2 = _interopRequireDefault(_componentsErrors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

exports['default'] = function (app) {
  // Insert routes below
  app.use('/api/users', require('./api/user'));
  app.use('/auth', require('./auth'));

  app.route('/*').get(_componentsErrors2['default'][404]);
};

module.exports = exports['default'];
//# sourceMappingURL=routes.js.map
