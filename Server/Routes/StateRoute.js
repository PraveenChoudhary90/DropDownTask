const express= require("express");
const route = express.Router();
const StateController = require("../Controller/StateConroller");




route.post("/insertstate", StateController.StateInsert);









module.exports = route;