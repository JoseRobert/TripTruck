//config/Config.js

module.exports = {
    DB_URL: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:27017/todos',
    DB_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80,
};
  