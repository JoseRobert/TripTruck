// truckModel.js

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    active: { type: Boolean, default: true },
    id: {type: String, required: true },
    status: {type: String},
    current_mileage: {type: Number, default: 0},
    current_fuel: {type: Number, default: 0},
    created: {
        username: String,
        date: { type: Date, default: Date.now }
    },
    update: {
        username: String,
        date: { type: Date, default: Date.now }
    }
});

 let Truck = mongoose.model("Truck", schema, 'trucks' );    // Asocia coleccion "Users" a un schema "Estructura"

 module.exports.Truck = Truck;
