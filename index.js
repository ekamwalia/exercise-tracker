require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

const routes = require('./routes')
const responseWriter = require('./utils/responseWriter')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser : true});
const db = mongoose.connection; 
db.once('open', ()=> {
    console.log('[INFO] mLab DB Connected')
});

const app = express()
app.use(express.static(path.join(__dirname, '/public')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(responseWriter)
app.use("/", routes)

app.listen(process.env.PORT, (err) => {
    if(err) 
        return console.log("[ERROR]", err)
    console.log("[INFO] App started on port", process.env.PORT)
});