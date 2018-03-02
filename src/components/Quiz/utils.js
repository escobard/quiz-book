export const cardCount = (cardNumber, currentCard) => {
	if (currentCard == cardNumber - 1) {
		return true
	}
}

export const count = (currentCard, cardNumber) =>
	currentCard + 1 + " / " + cardNumber

export const detScore = (questions, currentCard, element) =>{

	let bool = false
	questions.forEach((question, index) =>{
					
					if (index == currentCard) {

						if (question.isCorrect == element) {
							bool = true
						}
						else if (element == false) {
							bool = true
						}
					}
		})
	return bool
}