const cors = require('cors')
const express = require("express")

const messagesRouter = require("./routers/messagesRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use(messagesRouter);


module.exports = app;