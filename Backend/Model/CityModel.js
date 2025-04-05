const mongoose = require("mongoose");
const CitySchema = new mongoose.Schema({
    city:String,
    countryinfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"country"
    },
    stateinfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"state"
    }

})

module.exports = mongoose.model("city", CitySchema);