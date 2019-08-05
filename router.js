const express = require("express");
const userIDRoute = express.Router();
const { getUserInfo } = require("./mongoose");

userIDRoute.get("/:id", (req, res) => getUserInfo(req, res));

module.exports = userIDRoute;
