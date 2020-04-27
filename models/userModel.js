// userModel.js

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//  username: {type: String, required: true, unique: true},
let user_schema = new Schema({
    username: String,
    fullname: String,
    role: String,
    password: String,
    // password: { type: String, select: false},
    // password: {type: String, required, match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/, minlength: 8}
    mobile: String,
    active: { type: Boolean, default: true },
    // email: {type: String, required: true, match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i },
    created: {
        username: String,
        date: { type: Date, default: Date.now }
    },
    update: {
        username: String,
        date: { type: Date, default: Date.now }
    }
}, { collection: 'users' });

 user_schema.methods.verifica = function(){
 
 }
 let User = mongoose.model("User", user_schema);    // Asocia coleccion "Users" a un schema "Estructura"

 module.exports.User = User;
