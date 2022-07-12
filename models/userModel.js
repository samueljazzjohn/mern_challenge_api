const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {type:String,required:true },
    code : {type:String,required:true,unique:true},
    phone : {type:String,required:true}
},{collection:'Users'}
);

module.exports = mongoose.model('UserModel',UserSchema)