const mongoose = require("mongoose");
const StateSchema = new mongoose.Schema({
  state:String

});


module.exports = mongoose.model("state", StateSchema);