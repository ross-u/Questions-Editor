const ObjectID = require('mongodb').ObjectID;
const models = require('./index');

const collectionName = 'questions';

const insertNewQuestion = (question) => {
  const collection = models.dbConnection.db().collection(collectionName);
  delete question._id;
  return collection.replaceOne(
    {'id': question.id},
    {...question},
    { upsert: true }  
  );
};

const retrieveAllQuestions = (question) => {
  const collection = models.dbConnection.db().collection(collectionName);
  return collection.find({}).toArray();
};

module.exports = {
  insertNewQuestion,
  retrieveAllQuestions
} 

//  module.exports = { post, getAll, findDocumentById };