const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);

routes.get("/ttech", myController.tooeleTech);

routes.get("/students", myController.getAllStudents);

// custom route stealth
routes.get("/gives", myController.gives);
module.exports = routes;
