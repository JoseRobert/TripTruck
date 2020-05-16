// trailerkModel.js

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    active: { type: Boolean, default: true },
    id: {type: String, required: true },
    status: {type: String},
    size_len: {type: Number, default: 0},
    created: {
        username: String,
        date: { type: Date, default: Date.now }
    },
    update: {
        username: String,
        date: { type: Date, default: Date.now }
    }
});

 let Trailer = mongoose.model("Trailer", schema, 'trailers' );    // Asocia coleccion "Users" a un schema "Estructura"

 module.exports.Trailer = Trailer;
