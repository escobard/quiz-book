import React, { Component } from "react"
import { styles } from "./styles"
import { checkNumber } from "./utils"

import { Title, Container, Button } from "../Common"

export default class QuizDescription extends Component {
	render() {
		let { quiz: { title, questions }, addCard, startQuiz } = this.props
		let cardsNumber = questions.length

		let cardNumber = checkNumber(cardsNumber)
		let numberText = checkNumber(cardsNumber, true)

		let subText = cardsNumber ? `${cardNumber} ${numberText}` : "No cards"

		return (
			<Container addStyles={styles.centered}>
				<Title text={title} />
				<Title isSubtitle={true} text={`${cardNumber} ${numberText}`} />
				<Button text={"Add Card"} handler={addCard} />
				<Button text={"Start Quiz"} handler={startQuiz} />
			</Container>
		)
	}
}