


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConfigs = require("./configs/db.config")
const serverConfig = require("./configs/server.config")

const app = express();

// register the body parser middleware to express

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// conect to mongoDB
mongoose.connect(dbConfigs.DB_URL, ()=>{
    console.log("MongoDB connected")
}, err=>{
    console.log("Error while connecting", err)
})


// switching the routes
require('./routes/notification.route')(app);

// start the server

app.listen(serverConfig.PORT, ()=>{
    console.log("Application has started on port", serverConfig.PORT)
})