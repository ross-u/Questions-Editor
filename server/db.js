// MongoDB connection.
const MongoClient = require('mongodb').MongoClient;
const mongo = {};

mongo.MongoClient = MongoClient;
mongo.collections = [];

module.exports = mongo;