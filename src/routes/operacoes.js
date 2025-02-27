const express = require("express");
const ApiUser = require("../api/user");
const routes = express.Router();

routes.get('/', ApiUser.FindAll);
routes.get('/:index', ApiUser.FindByIndex);
routes.post('/', ApiUser.Create);
routes.put('/:index', ApiUser.Update);
routes.delete('/:index', ApiUser.Delete);

module.exports = routes;