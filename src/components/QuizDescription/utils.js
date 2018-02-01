export const checkNumber = (cardNumber, numberText) => {
	if (numberText) {
		return !cardNumber ? "No cards" : cardNumber > 1 ? "Cards" : "Card"
	}
	return cardNumber
}