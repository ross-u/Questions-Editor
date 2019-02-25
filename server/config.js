const dbUrl = 'mongodb://localhost:27017';
const dbName = 'quantilope_challenge';

module.exports = {
  PORT: '3000',
  clientPath: './',
  URI: `${dbUrl}/${dbName}` // concat the URL and Database name
}