"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _initialUsers = require("./libs/initialUsers");
var _package = _interopRequireDefault(require("../package.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// librerias externas

// rutas

var app = (0, _express["default"])();
(0, _initialUsers.createUsers)();
app.set('pkg', _package["default"]);
app.use(_express["default"].json());

//middlewares
app.use((0, _morgan["default"])('dev'));

//routes
app.get('/', function (req, res) {
  res.json({
    autor: app.get('pkg').author,
    name: app.get('pkg').name,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});
app.use('/products', _products["default"]);
app.use('/auth', _auth["default"]);
app.use('/users', _user["default"]);
var _default = exports["default"] = app;