import { ADD_QUIZ } from "./types"

export function addQuiz(quiz) {
	return {
		type: ADD_QUIZ,
		quiz
	}
}