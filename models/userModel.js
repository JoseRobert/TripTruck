// userModel.js
 let mongoose = require('mongoose');
 let Schema = mongoose.Schema;

//  username: {type: String, required: true, unique: true},
 let user_schema = new Schema({
    username: String,
    fullname: String,
    role: String,
    password: String,
    mobile: String,
    active: { type: Boolean, default: true },
    created: {
        username: String,
        date: { type: Date, default: Date.now }
    },
    update: {
        username: String,
        date: { type: Date, default: Date.now }
    }
 });

 user_schema.methods.verifica = function(){

    
 }
 let User = mongoose.model("User", user_schema);

 module.exports.User = User;
