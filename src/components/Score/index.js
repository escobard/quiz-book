import React from "react"

import { styles } from "./styles"

import { Title, Container, Button } from "../Common"

// should probably consider refactoring this and other child components into the parent component folder
const Score = ({ results, goBack, restartQuiz }) => {
	console.log("results", results)

	let { cardNumber, currentCard } = results
	let count = cardNumber + " / " + currentCard

	// export this into a helper file
	let scoreMessage = (cardNumber, currentCard) => {
		if (cardNumber === currentCard) {
			return "You got them all right!"
		}
	}
	return (
		<Container>
			<Title isSubtitle={true} text={count} addStyles={styles.sub} />
			<Title
				text={scoreMessage(cardNumber, currentCard)}
				addStyles={styles.title}
			/>
			<Button text={"Restart Quiz"} handler={restartQuiz} />
			<Button text={"Back to Quiz Details"} handler={goBack} />
		</Container>
	)
}

export default Score
