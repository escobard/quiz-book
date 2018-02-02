import { ADD_QUIZ } from "./types"

export function addQuiz(title) {
	return {
		type: ADD_QUIZ,
		title
	}
}