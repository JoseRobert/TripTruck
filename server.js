// server.js

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const logger = require('morgan');
const cors = require('cors')

// Models
const User = require('./models/userModel').Users;

// const cookieParser = require('cookie-parser');
const config = require('./config/Config');  // DB Config

const router = require('./router/router');

const app = express();
// Router
app.use('/', router);

mongoose.connect(config.DB_URL, { useNewUrlParser: true,  useUnifiedTopology: true } );
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:') );
db.once('open', function(){
    console.log('DB conectado.')
});

// Static files
app.use("/public", express.static('public'));
app.use(cors());  //enable cors

app.use(logger('dev'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(config.DB_PORT, function(){
   console.log(`Server running at port: ${ config.DB_PORT }`); 
}); // Listen on port defined in environment

