const Questions = require('../models/questions');

const getAllQuestions = async (req,res) => {
  try {
    const result = await Questions.retrieveAllQuestions();
    res
      .status(200)
      .send(result);
  } catch (err) {
    res
      .status(500)
      .send(err)
    console.error(err);
  }
};

module.exports = getAllQuestions;