"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].connect("mongodb://mongo/viio_market_showcase").then(function (db) {
  return console.log('Db is connected');
})["catch"](function (error) {
  return console.log(error);
});