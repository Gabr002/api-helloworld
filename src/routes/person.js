const express = require("express");
const ApiPerson = require("../api/person");
const routes = express.Router();

routes.get('/', ApiPerson.FindAll);
routes.get('/:id', ApiPerson.FindById);
routes.post('/', ApiPerson.Create);
routes.put('/:id', ApiPerson.Update);
routes.delete('/:id', ApiPerson.Delete);

module.exports = routes;