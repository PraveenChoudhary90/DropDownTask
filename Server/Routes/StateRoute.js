const express= require("express");
const route = express.Router();
const StateController = require("../Controller/StateConroller");




route.post("/insertstate", StateController.StateInsert);
route.get("/showstate",StateController.ShowState)
route.post("/city",StateController.InsertCity)
route.post("/showcity",StateController.ShowCityname)
route.post("/name",StateController.EnterName);
route.get("/ShowAllData",StateController.ShowAllData);
route.post("/delete",StateController.DeletePage)
route.post("/editSearch",StateController.SearchEditPage)
route.post("/editit",StateController.EditData)









module.exports = route;