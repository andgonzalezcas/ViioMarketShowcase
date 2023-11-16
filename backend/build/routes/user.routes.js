"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middlewares = require("../middlewares");
var _user = require("../controllers/user.controller");
var router = (0, _express.Router)();
router.get('/', _middlewares.verifyToken, _user.getUsers);
var _default = exports["default"] = router;