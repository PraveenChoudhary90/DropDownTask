const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({

  name:String,
    stateinfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"state"
    },
    cityInfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"city"
    }
});


module.exports = mongoose.model("name", EmployeeSchema);