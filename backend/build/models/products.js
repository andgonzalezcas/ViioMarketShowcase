"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var productSchema = new _mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  imageUrl: String,
  rate: Number
}, {
  timestamp: true,
  versionKey: false
});
var _default = exports["default"] = (0, _mongoose.model)('Product', productSchema);