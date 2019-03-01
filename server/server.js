const express = require('express');
const busboy = require('connect-busboy');
const { PORT, URI} = require('./config');
const router = require('./router');
const db = require('./db');
const app = express();

global.__basedir = __dirname;

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Middleware
app.use(busboy());
app.use('/get-image', express.static(__basedir + '/images'));
app.use(express.json());
app.use(router);

// Server and DB connection
(async () => {
  try {
    db.dbConnection = await db.MongoClient.connect(URI, { useNewUrlParser: true });
    app.listen(PORT, () => console.log(`Server is running on the port ${PORT}.`));
  } catch (err) {
    console.error('Server connection error', err);
  }
})();