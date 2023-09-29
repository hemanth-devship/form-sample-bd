var express = require("express");
const loginRouter = require("../controller/login")();
var appRouter = express.Router();


appRouter.post("/", loginRouter.login);


module.exports = appRouter;
