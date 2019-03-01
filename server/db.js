// MongoDB connection.
const MongoClient = require('mongodb').MongoClient;
const db = {};

db.MongoClient = MongoClient;

module.exports = db;