const express = require('express');
const userIDRoute = express.Router();
const { getUserInfo } = require('./mongoose');

userIDRoute.get('/:param1', (req, res) => getUserInfo())

module.exports = userIDRoute;