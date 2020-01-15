const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect('mongodb+srv://wagnernoise:omnistack10@cluster0-x0g8q.mongodb.net/devfinder?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true });


app.use(express.json());
app.use(routes);

app.listen(3333);