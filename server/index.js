const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const messageModel = require("./models/message")
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/messages")

app.post("/messages", (req, res) => {
    messageModel.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


app.listen(3001, () => {
    console.log("Server is running on Port 3001")
})