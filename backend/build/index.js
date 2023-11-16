"use strict";

var _common = require("./constants/common.constants");
var _app = _interopRequireDefault(require("./app"));
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen(_common.PORT);
console.log('Server listener on port [', _common.PORT, ']');