import { combineReducers } from 'redux';

import { quizData } from '../constants';

const newTest = {React2: {
	    title: 'React2',
	    questions: [
	      {
	        question: 'What is React?',
	        answer: 'A library for managing user interfaces'
	      },
	      {
	        question: 'Where do you make Ajax requests in React?',
	        answer: 'The componentDidMount lifecycle event'
	      }
	    ]
	  }}

function quizList(state=quizData, action) {
	console.log('REDUCER STATE', state)
	state = Object.entries(state);
	return {...state, ...newTest}
}

const rootReducer = combineReducers({
  quizList
});

export default rootReducer;
