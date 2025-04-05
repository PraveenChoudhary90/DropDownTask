const mongoose = require("mongoose");
const StateSchema = new mongoose.Schema({
    state:String,
    countryId:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"country"
        }
    ]
})

module.exports = mongoose.model("state", StateSchema);