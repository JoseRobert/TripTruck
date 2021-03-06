// index.js

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const cors = require('cors');

const config = require('./config/Config');  // DB Config

const usersRouter = require('./router/usersRouter');
const trucksRouter = require('./router/trucksRouter');
const trailersRouter = require('./router/trailersRouter');

// const customersRouter = require('./router/customersRouter');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));    // 
app.use(bodyparser.json());     // application/json
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    // console.log('Middlware...');
    next();
})
// app.get('/', function(req, res){
//     // res.send('Ruta...');
//     // res.render('./public/home');
//     // res.sendFile('./public/home.html');
// })
// Router
app.use('/users', usersRouter);
// app.use('/userAll', usersRouter);   // userAll

// app.use('/customers', customersRouter);

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
//mongoose.connect(config.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.connect(config.DB_URL);
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:') );
db.once('open', function(){
    console.log(`Connect to database: ${ config.DB_URL }`);
    app.listen(config.DB_PORT, function(){
        console.log(`Server running at port: ${ config.DB_PORT }`); 
    }); // Listen on port defined in environment
});
// 
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'user',
//   password: 'password',
//   database: 'database name'
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });