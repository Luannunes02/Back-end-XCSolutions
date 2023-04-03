const express = require('express');
const routes = express.Router();

const personController = require('../controllers/personController');

routes.post(`/persons`, personController.insert);

routes.get("/persons", personController.index);

routes.get("/persons/:id", personController.detail);

routes.put("/persons/:id", personController.update);

routes.delete("/persons/:id", personController.delete);

module.exports = routes;