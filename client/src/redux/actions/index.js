// ACTIONS

// export const getQuestion = (id) => ({
//   type: 'GET_QUESTION',
//   id
// });

export const createQuestion = (question) => ({
  type: 'CREATE_QUESTION',
  question
});

export const storeAllQuestions = (questions) => ({
  type: 'STORE_ALL_QUESTIONS',
  questions
});

export const updateQuestion = (updatedQuestion) => ({
  type: 'UPDATE_QUESTION',
  updatedQuestion
});

export const saveQuestionID = (id) => ({
  type: 'SAVE_QUESTION_ID',
  id
});
