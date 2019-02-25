const Questions = require('../models/questions');

const createNewQuestion = async (req,res) => {
  try {
    const result = await Questions.insertNewQuestion(req.body);
    res
      .status(201)
      .send(result);
  } catch (err) {
    res
      .status(500)
      .send(err)
    console.error(err);
  }
};

module.exports = createNewQuestion;