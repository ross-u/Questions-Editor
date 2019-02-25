const express = require('express');
const Router = express.Router;
const fs = require('fs');
const router = new Router();
const controller = require('./controllers/');

// Images
router.post('/image', controller.createImage);

// Questions
router.get('/questions', controller.getAllQuestions);
router.post('/question', controller.createNewQuestion);

// Catchcall for 404
router.get('/*', async (req, res) => {
  let _404 = await fs.readFile('./404.html', (err, data) => {
    if (err) _404 = 'The requested URL was not found on this server.';
    else _404 = data;
  });   
  
  res
    .status(404)
    .send(_404);
});

module.exports = router;