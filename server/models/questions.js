const mongo = require('../db');
const { collections } = mongo;

const insertNewQuestion = (question) => {
  delete question._id;
  return collections['questions'].replaceOne(
    {'id': question.id},
    {...question},
    { upsert: true }  
  );
};

const retrieveAllQuestions = () => {
  return collections['questions'].find({}).toArray();
};

const deleteOneQuestion = async (id) => {
  let deletionResult = await collections['questions'].deleteOne({id});
  return deletionResult;
};

module.exports = {
  insertNewQuestion,
  retrieveAllQuestions,
  deleteOneQuestion
} 
