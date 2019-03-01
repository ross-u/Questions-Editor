const express = require('express');
const Router = express.Router;
const router = new Router();
const controller = require('./controllers/');

// Images
router.post('/image', controller.createImage);

// Questions
router.get('/questions', controller.getAllQuestions);
router.post('/question', controller.createNewQuestion);
router.delete('/question/:id', controller.deleteQuestionById);

module.exports = router;