const { Router } = require("express");
const DevController = require("./controllers/DevController");
const FindController = require("./controllers/FindController");

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.storeDevs);

routes.get('/find', FindController.index);

module.exports = routes;