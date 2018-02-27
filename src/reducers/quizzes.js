import { cache, createCache } from "../utils"
import { ADD_QUIZ, ADD_CARD, FETCH_QUIZZES } from "../actions/types"

export default function quizzes(state = {}, action) {
	let { type, quiz, questions, quizzes, quizTitle } = action
	switch (type) {
		case FETCH_QUIZZES:
			return {
				...state,
				...quizzes
			}
		case ADD_QUIZ:
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
