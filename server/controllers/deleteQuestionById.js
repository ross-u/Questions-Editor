const Questions = require('../models/questions');

const deleteQuestionById = async (req,res) => {
  try {
    const {id} = req.params;
    await Questions.deleteOneQuestion(id);
    const result = await Questions.retrieveAllQuestions();
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

module.exports = deleteQuestionById;