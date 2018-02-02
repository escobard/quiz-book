import { quizData, newTest } from "../constants"

import { ADD_QUIZ } from "../actions/types"

export default function quizzes(state = quizData, action) {
	
	switch(action.type){
		case ADD_QUIZ:

		default:
			
			
			// returns a sorted array with ES6
			// return Object.keys(obj).map(key => obj[key]);

			// returns a sorted array with ES7
			return [ ...state, ...newTest ]
		}

	// console.log('REDUCER STATE', state)

}

