// MongoDB connection.
const MongoClient = require('mongodb').MongoClient;
const db = {};

db.MongoClient = MongoClient;
db.collections = [];

module.exports = db;