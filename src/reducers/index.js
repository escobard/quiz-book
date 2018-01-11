import { combineReducers } from 'redux';

import { quizData } from '../constants';

function quizList(state=quizData, action) {
	console.log('REDUCER STATE', state)
	return state;	
}

const rootReducer = combineReducers({
  quizList
});

export default rootReducer;
