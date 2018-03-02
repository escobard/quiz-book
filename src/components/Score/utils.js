export const scoreMessage = (score, currentCard) => {
		if (score === currentCard) {
			return "You got them all right!"
		}
		else if(score === 0){
			return "You got them all wrong :("

		}
		else if(score >= currentCard / 2) {
			return "You got them more half right!"
		}
				else if(score <= currentCard / 2) {
			return "You got them more half wrong"
		}
	}
