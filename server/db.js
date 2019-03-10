// MongoDB connection.
const MongoClient = require('mongodb').MongoClient;
const mongo = {};

<<<<<<< HEAD
mongo.MongoClient = MongoClient;
mongo.collections = [];
=======
db.MongoClient = MongoClient;
db.collections = [];
>>>>>>> a206246cc7c7c4169bca05c7fcc8b045fe4c8d26

module.exports = mongo;