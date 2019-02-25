// REDUCERS
import { combineReducers } from 'redux';

const selectedQuestionId = (state = null, action) => {
  switch (action.type) {
    case "SAVE_QUESTION_ID":
        return action.id;

    default:
        return state;
  }  
}

const questions = (state = [], action) => {
    switch (action.type) {
        case 'STORE_ALL_QUESTIONS':
            return [...action.questions];

        case "CREATE_QUESTION":
            return [...state, action.question];

        case 'UPDATE_QUESTION':
            const { id } = action.updatedQuestion;
            let newState = state.map( q => {
                if (q.id !== id) return q;
                return {
                  ...q, ...action.updatedQuestion
                };
            });
            return [...newState];

        default:
            return state;
    }
}

const allReducers = combineReducers({
  selectedQuestionId,
  questions
});

export default allReducers;
