var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var app = express();
var cors=require('cors')

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect('mongodb+srv://jazzjohn:Jazz2%401999@where2buy.qgezx.mongodb.net/mern_challenge?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true },(err,db)=>{
    if(err) throw err;
    console.log('Database Created Successfully')
})

app.use('/', indexRouter);

module.exports = app;
