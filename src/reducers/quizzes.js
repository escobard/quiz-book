import { demoQuizzes } from "../constants"

import { ADD_QUIZ, ADD_CARD } from "../actions/types"

export default function quizzes(state = demoQuizzes, action) {
	let { type, quiz, questions, quizTitle } = action

	switch (type) {
		case ADD_QUIZ:
			let qTitle = quiz
			return {
				...state,
				...{ [quiz.title]: quiz }
			}
		case ADD_CARD:
			let checkQ = state[quizTitle] ? state[quizTitle].questions : {}
			return {
				...state,
				[quizTitle]: {
					title: quizTitle,
					questions: [...checkQ, { ...questions }]
				}
			}

		default:
			// returns a sorted array with ES6
			// return Object.keys(obj).map(key => obj[key]);

			// returns a sorted array with ES7
			return state
	}
}
