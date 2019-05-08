const express = require('express');
const { PORT, URI } = require('./config');
const router = require('./router');
const mongo = require('./db');
const app = express();
require('dotenv').config();

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
( async () => {
  try {
    mongo.dbConnection = await mongo.MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
    mongo.collections['questions'] = mongo.dbConnection.db().collection('questions')
    app.listen(PORT, () => console.log(`Server is running on the port ${PORT}.`));
  } catch (err) {
    console.error('Server connection error', err);
  }
})();

/*     mongo.MongoClient.connect(URI, { useNewUrlParser: true })
      .then( ()=> {
        mongo.collections['questions'] = mongo.dbConnection.db().collection('questions');
      })
      .then(() =>{
        app.listen(PORT, () => console.log(`Server is running on the port ${PORT}.`));
      })
      .catch( (err) => console.error('Server connection error', err)); */
