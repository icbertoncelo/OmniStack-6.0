const express = require("express");
const routes = express.Router();

const BoxController = require("./controllers/BoxController");

routes.post("/boxes", BoxController.store);

module.exports = routes;
