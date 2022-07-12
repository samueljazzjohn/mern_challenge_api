var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel')

/* Add data to the data base. */
router.post('/add_data', function(req, res, next) {
  UserModel.create(req.body).then((doc)=>{
    res.status(200).json({"Message":"Success"})
  }).catch((err)=>{
    res.status(400).json({"Message":"Code already exists"})
  })
});

/* update the data */
  
router.patch('/update_data',(req,res,next)=>{
  UserModel.findOneAndUpdate({code:req.body.code},req.body).then((doc)=>{
    if(!doc) return res.status(400).json({"Message":"Code not found"})
    res.status(200).json({"Message":"Success"})
  }).catch((err)=>{
    res.status(400).json({"Message":"Code not found"})
  })
})

module.exports = router;
