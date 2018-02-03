import { demoQuizzes } from "../constants"

import { ADD_QUIZ } from "../actions/types"

export default function quizzes(state = demoQuizzes, action) {
	
	let { type, quiz } = action
	console.log('QUIZ', quiz)
	switch(type){
		case ADD_QUIZ:
			let quizList = { 
					...state,
					...quiz 
			}
			return Object.values(quizList)
		default:

			// returns a sorted array with ES6
			// return Object.keys(obj).map(key => obj[key]);

			// returns a sorted array with ES7
			return Object.values(state)
		}


}

