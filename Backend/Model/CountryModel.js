const mongoose = require("mongoose");
const CountrySchema = new mongoose.Schema({
    country:String
})

module.exports = mongoose.model("country", CountrySchema);