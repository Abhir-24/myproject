const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
})

const MessageModel = mongoose.model("msg", MessageSchema)

module.exports = MessageModel