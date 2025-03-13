const express = require("express");
const ApiUser = require("../api/user");
const routes = express.Router();

routes.get('/', ApiUser.FindAll);
routes.get('/:id', ApiUser.FindById);
// routes.post('/', ApiUser.Create);
routes.put('/:id', ApiUser.Update);
routes.delete('/:id', ApiUser.Delete);

module.exports = routes;