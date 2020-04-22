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
console.log('Entro..')
let userAll = mongoose.model("userAll", user_schema);

router.get('/', async (req, res) => {
    console.log('Entro a /usersAll...')
    try {
        const users = await userAll.find();
        // console.log(users);
        res.json(users);
    } catch (err) {
        // res.status(500).json({ message: err.message });
        res.status(500).json([]);
    }
});

module.exports = router;
