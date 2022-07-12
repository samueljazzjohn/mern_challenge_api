var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var app = express();
var cors=require('cors')
const dotenv = require('dotenv');
dotenv.config();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const uri = process.env.MONGODB_URI

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true },(err,db)=>{
    if(err) throw err;
    console.log('Database Created Successfully')
})

app.use('/', indexRouter);

module.exports = app;
