import { quizData, newTest } from "../constants"

import { ADD_QUIZ } from "../actions/types"

export default function quizzes(state = quizData, action) {
	// console.log('REDUCER STATE', state)
	let obj = { ...state, ...newTest }

	// returns a sorted array with ES6
	// return Object.keys(obj).map(key => obj[key]);

	// returns a sorted array with ES7
	return Object.values(obj)
}