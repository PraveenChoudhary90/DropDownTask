const express = require("express");
const route = express.Router();
const TaskConroller  =require("../Controller/TaskController");




route.post("/insertcountry", TaskConroller.InsertCountry);
route.get("/showcountry", TaskConroller.ShowCountry);
route.post("/insertstate", TaskConroller.InsertState);
route.get("/showcountrystate", TaskConroller.ShowCountryState);
route.post("/insertcity", TaskConroller.InsertCity);
route.get("/DisplayData", TaskConroller.DisplayData);
route.post("/DeleteData", TaskConroller.DeleteData);
route.post("/ShoWFromData", TaskConroller.ShoWFromData);
route.post("/UpdateData", TaskConroller.UpdateData);







module.exports = route;