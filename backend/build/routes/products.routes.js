"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middlewares = require("../middlewares");
var _products = require("../controllers/products.controller");
var router = (0, _express.Router)();
router.get('/', _middlewares.verifyToken, _products.getProducts);
router.get('/:productId', _middlewares.verifyToken, _products.getProductById);
var _default = exports["default"] = router;