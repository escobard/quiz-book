import { ADD_QUIZ, ADD_CARD } from "./types"

export function addQuiz(quiz) {
	return {
		type: ADD_QUIZ,
		quiz
	}
}

export function addCard(questions, quizTitle) {
	return {
		type: ADD_CARD,
		questions,
		quizTitle
	}
}