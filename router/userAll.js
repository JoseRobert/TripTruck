// userAll.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let user_schema = new Schema({

   username: String,
   fullname: String,
   role: String,
   mobile: String

});
// console.log('Entro----------------------');
const userAll = mongoose.model("User1", user_schema);
// const User = require('../models/userModel').User;
// console.log('UserAll-Model:', userAll);


router.get('/', async (req, res) => {
    console.log('Entro a /userAll...')
    try {
        // const users = await userAll.find();
        const users = await userAll.find();
        // console.log(users);
        res.json(users);
    } catch (err) {
        // res.status(500).json({ message: err.message });
        console.log('Error en /userAll')
        res.status(500).json([]);
    }
});

module.exports = router;
