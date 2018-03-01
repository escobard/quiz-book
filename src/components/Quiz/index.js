import React, { Component } from "react"

import { styles } from "./styles"
import { cardCount, count, detScore } from "./utils"

import { Title, Container, Button } from "../Common"

import Score from "../Score"

export default class Quiz extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showAnswer: false,
			cardNumber: 0,
			currentCard: 0,
			showScore: false,
			cardObject: "",
			score: 0
		}
	}

	componentDidMount() {
		this.setState({
			cardNumber: this.props.quiz.questions.length
		})
	}

	renderCards = (
		questions,
		showAnswer,
		cardNumber,
		currentCard,
		showScore,
		score
	) => {
		// this should be refactored into a separate component in the future
		return questions.map((item, key) => {
			// checks current card number vs key
			// need to add the score screen text here
			if (currentCard != key) {
				return
			}

			let { answer, question } = item

			let content = showAnswer ? answer : question
			let checkStyles = showAnswer ? styles.answer : styles.question

			return (
				<Container key={key}>
					<Title
						isSubtitle={true}
						text={count(currentCard, cardNumber)}
					/>
					<Title
						isSubtitle={true}
						text={content}
						addStyles={[styles.title, checkStyles]}
					/>
				</Container>
			)
		})
	}

	renderButtons = (showAnswer, cardNumber, currentCard, goBack, questions) => {
		let btnContent = showAnswer ? "Show Question" : "Show Answer"
		console.log('QQ', questions)
		return (
			<Container>
				<Button
					text={btnContent}
					handler={() => this.handleAnswer(showAnswer)}
				/>

				<Button
					text={"Correct"}
					handler={() =>
						this.nextCard(showAnswer, cardNumber, currentCard, questions, true)
					}
				/>

				<Button
					text={"Incorrect"}
					handler={() =>
						this.nextCard(showAnswer, cardNumber, currentCard, questions)
					}
				/>
			</Container>
		)
	}

	nextCard = (showAnswer, cardNumber, currentCard, questions, element) => {
		let next = currentCard + 1
		let isRight = detScore(questions, currentCard, element);
		let showScore = cardCount(cardNumber, currentCard)
		if (isRight) {
			this.setState({
				score: this.state.score +1
			})
		}
		this.setState({
			currentCard: next,
			showAnswer: false,
			showScore
		})
	}

	handleAnswer = showAnswer => {
		this.setState({
			showAnswer: !showAnswer
		})
	}

	renderCard = () => {
		let { quiz, goBack, restartQuiz } = this.props
		let { showAnswer, cardNumber, currentCard, showScore, score } = this.state
		let { title, questions } = quiz

		if (showScore) {
			return (
				<Score
					results={this.state}
					restartQuiz={restartQuiz}
					goBack={goBack}
				/>
			)
		}
		return (
			<Container>
				{this.renderCards(
					questions,
					showAnswer,
					cardNumber,
					currentCard,
					score
				)}
				{this.renderButtons(
					showAnswer,
					cardNumber,
					currentCard,
					goBack,
					questions
				)}
			</Container>
		)
	}

	render() {
		console.log('STATE', this.state)
		return (
			<Container addStyles={styles.container}>
				{this.renderCard()}
			</Container>
		)
	}
}
