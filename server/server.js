const express = require('express');
const { PORT, URI } = require('./config');
const router = require('./router');
const mongo = require('./db');
const app = express();

global.__basedir = __dirname;

// CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Middleware
app.use('/get-image', express.static(__basedir + '/images'));
app.use(express.json());
app.use(router);

// Server and DB connection
(async () => {
  try {
<<<<<<< HEAD
    mongo.dbConnection = await mongo.MongoClient.connect(URI, { useNewUrlParser: true });
    mongo.collections['questions'] = mongo.dbConnection.db().collection('questions')
=======
    // const connectedInstance = await db.MongoClient.connect(URI, { useNewUrlParser: true });
    // db.connection = connectedInstance.db();
    // db.collections['questions'] = db.connection.collection('questions');

    
    db.dbConnection = await db.MongoClient.connect(URI, { 
      useNewUrlParser: true 
    });
>>>>>>> a206246cc7c7c4169bca05c7fcc8b045fe4c8d26
    app.listen(PORT, () => console.log(`Server is running on the port ${PORT}.`));
  } catch (err) {
    console.error('Server connection error', err);
  }
})();