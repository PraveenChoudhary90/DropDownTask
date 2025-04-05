const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const TaskRoutes = require("./Routes/Taskroute");



app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb://127.0.0.1:27017/Fullmern").then(()=>{
    console.log("DB Is Connectd");
})




app.use("/Task", TaskRoutes);








app.listen(8000, ()=>{
    console.log("Server is running on 8000 port");
})