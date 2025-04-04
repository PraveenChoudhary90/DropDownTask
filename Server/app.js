const express  =require ("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const StateRoute = require("./Routes/StateRoute");

app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/taskstate").then(()=>{
    console.log("DATABASE IS CONNECTED");
})


app.use("/state", StateRoute);

app.listen(8000, ()=>{
    console.log("Server is running on 8000 port");
})