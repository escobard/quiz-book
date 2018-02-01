import { ADD_QUIZ } from './types'

export default function addQuiz(title){
	return{
		type: ADD_QUIZ,
		title
	}
}