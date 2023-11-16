"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = require("../controllers/auth.controller");
var _middlewares = require("../middlewares");
var router = (0, _express.Router)();
router.post('/signin', _auth.signin);
router.post('/signup', [_middlewares.checkDuplicateUsername, _middlewares.checkDuplicateEmail], _auth.signup);
var _default = exports["default"] = router;