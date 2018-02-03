import { demoQuizzes } from "../constants"

import { ADD_QUIZ, ADD_CARD } from "../actions/types"

export default function quizzes(state = demoQuizzes, action) {
	
	let { type, quiz, questions, quizTitle} = action
	console.log('QUIZ', quiz)

	switch(type){
		case ADD_QUIZ:
			
			return { 
					...state,
					...{type: quiz} 
			}
		case ADD_CARD:
			console.log('CASE TRIGGERED', quizTitle)

			return {
		        ...state,
		        [quizTitle]: {
		        title: quizTitle,
		        questions: [
            		...state[quizTitle].questions,
            		{...questions}
			    ]
			  }
			}
			
		default:

			// returns a sorted array with ES6
			// return Object.keys(obj).map(key => obj[key]);

			// returns a sorted array with ES7
			return state
		}


}

