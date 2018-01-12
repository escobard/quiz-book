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
	let obj = {...state, ...newTest}

	// returns a sorted array with ES6
	// return Object.keys(obj).map(key => obj[key]);

	// returns a sorted array with ES7
	return Object.values(obj)
}

const rootReducer = combineReducers({
  quizList
});

export default rootReducer;
