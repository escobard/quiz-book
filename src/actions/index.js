import { ADD_QUIZ, ADD_CARD, FETCH_QUIZZES } from "./types"

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

export function fetchQuizzes(quizzes) {
	console.log("QUIZZES", quizzes)
	return {
		type: FETCH_QUIZZES,
		quizzes
	}
}
