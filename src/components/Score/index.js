import React from "react"

import { styles } from "./styles"

import { Title, Container, Button } from "../Common"
import { scoreMessage } from "./utils"

// should probably consider refactoring this and other child components into the parent component folder
const Score = ({ results, goBack, restartQuiz }) => {

	let { cardNumber, score, currentCard } = results
	let count =  score + " / " + cardNumber
	let percentile = score / cardNumber * 100 + "%"

	return (
		<Container>
			<Title isSubtitle={true} text={count} addStyles={styles.sub} />
			<Title isSubtitle={true} text={percentile} addStyles={styles.sub}/>
			<Title
				text={scoreMessage(score, currentCard)}
				addStyles={styles.title}
			/>
			<Button text={"Restart Quiz"} handler={restartQuiz} />
			<Button text={"Back to Quiz Details"} handler={goBack} />
		</Container>
	)
}

export default Score
