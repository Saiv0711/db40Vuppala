const mongoose = require("mongoose") 
const waterSchema = mongoose.Schema({ 
    types: String, 
    capacity: Number, 
    cost: Number 
}) 
 
module.exports = mongoose.model("water", waterSchema) 