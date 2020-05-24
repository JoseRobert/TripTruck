// config/config.js
 
module.exports = {
    DB_URL: process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb+srv://root:toor@cluster0-juyt5.mongodb.net/test?retryWrites=true&w=majority",
    DB_URL: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:27017/TripTruck',
    DB_PORT: process.env.APP_PORT ? process.env.APP_PORT : 3000,
};

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://root:<password>@cluster0-juyt5.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
  