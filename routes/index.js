const routes = require("express").Router();
const myController = require("../controllers/index");

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", myController.tooeleTech);

routes.use("/students", require("./students"));

module.exports = routes;
