const mongoose = require("mongoose")
const waterSchema = mongoose.Schema({
    types: String,
    capacity:  { type: Number, min: 3, max: 45, default: 0 },
    cost: { type: Number, min: 3, max: 45, default: 0 }
})

module.exports = mongoose.model("water", waterSchema)