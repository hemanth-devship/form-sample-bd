var express = require("express");
var processFile = require("../upload/processFile");
// var User = require("../models/register.model");
const router = require("../controller/register")();
const loginRouter = require("../controller/login")();
var appRouter = express.Router();

/* GET users listing. */
appRouter.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

appRouter.post("/register", processFile, router.register);

module.exports = appRouter;
