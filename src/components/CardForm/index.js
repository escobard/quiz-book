import React, { Component } from "react"

import { styles } from "./styles"

import { validation } from "../../utils/validation"
import { Container, Title, Button, Input, Toggle } from "../Common"

export default class CardForm extends Component {
	state = {
		question: "",
		answer: "",
		correctActive: false,
		incorrectActive: false,
		hasQuestionErrors: false,
		hasAnswerErrors: false,
		questionErrors: [],
		answerErrors: []
	}

	questionValidation = (questionErrors, hasQuestionErrors, question) => {
		// this object determines the strings
		let errorStrings = {
			empty: "The card question cannot be left empty",
			long: "The card question cannot be greated than 100 characters"
		}
		// this object determines the conditions
		let errorConditions = {
			empty:
				question === "" && !questionErrors.includes(errorStrings.empty),
			long: question > 100 && !questionErrors.includes(errorStrings.long)
		}
		// this array determines the questionErrors
		let valErrors = [
			{
				error: errorStrings.empty,
				condition: errorConditions.empty
			},
			{
				error: errorStrings.long,
				condition: errorConditions.long
			}
		]

		questionErrors = validation(valErrors, questionErrors)
		// then check in here if the variables are true, to handle the proper logic
		if (questionErrors.length >= 1) {
			this.setState({
				hasQuestionErrors: true,
				questionErrors
			})
			return false
		} else {
			// otherwise reset` the state
			this.setState({
				hasQuestionErrors: false,
				questionErrors: []
			})
			return true
		}
	}

	answerValidation = (answerErrors, hasAnswerErrors, answer) => {
		// this object determines the strings
		let errorStrings = {
			empty: "The card answer cannot be left empty",
			long: "The card answer cannot be greated than 100 characters"
		}
		// this object determines the conditions
		let errorConditions = {
			empty: answer === "" && !answerErrors.includes(errorStrings.empty),
			long: answer > 100 && !answerErrors.includes(errorStrings.long)
		}
		// this array determines the answerErrors
		let valErrors = [
			{
				error: errorStrings.empty,
				condition: errorConditions.empty
			},
			{
				error: errorStrings.long,
				condition: errorConditions.long
			}
		]

		answerErrors = validation(valErrors, answerErrors)
		// then check in here if the variables are true, to handle the proper logic
		if (answerErrors.length >= 1) {
			this.setState({
				hasAnswerErrors: true,
				answerErrors
			})
			return false
		} else {
			// otherwise reset` the state
			this.setState({
				hasAnswerErrors: false,
				answerErrors: []
			})
			return true
		}
	}
	addCard(
		question,
		answer,
		quizTitle,
		correctActive,
		incorrectActive,
		addCard,
		goBack,
		questionErrors,
		answerErrors,
		hasQuestionErrors,
		hasAnswerErrors
	) {
		let checkQuestion = this.questionValidation(
			questionErrors,
			hasQuestionErrors,
			question
		)
		let checkAnswer = this.answerValidation(
			answerErrors,
			hasAnswerErrors,
			answer
		)

		if (checkQuestion && checkAnswer) {
			let questions = {
				question,
				answer,
				isCorrect: incorrectActive ? false : true
			}

			addCard(questions, quizTitle)

			goBack()
		}
	}

	questionInput = question => {
		let { questionErrors, hasQuestionErrors } = this.state
		this.setState({
			question
		})
		this.questionValidation(questionErrors, hasQuestionErrors, question)
	}

	correctPress() {
		this.setState({
			correctActive: true,
			incorrectActive: false
		})
	}

	incorrectPress() {
		this.setState({
			correctActive: false,
			incorrectActive: true
		})
	}

	answerInput = answer => {
		let { answerErrors, hasAnswerErrors } = this.state
		this.setState({
			answer
		})
		this.answerValidation(answerErrors, hasAnswerErrors, answer)
	}

	showQuestionErrors = (questionErrors, hasQuestionErrors) => {
		if (hasQuestionErrors === true) {
			return questionErrors.map((error, index) => {
				return (
					<Title
						key={index}
						isSubtitle={true}
						text={error}
						addStyles={styles.errorMessage}
					/>
				)
			})
		}
	}
	showAnswerErrors = (answerErrors, hasAnswerErrors) => {
		if (hasAnswerErrors === true) {
			return answerErrors.map((error, index) => {
				return (
					<Title
						key={index}
						isSubtitle={true}
						text={error}
						addStyles={styles.errorMessage}
					/>
				)
			})
		}
	}
	render() {
		let {
			state: {
				question,
				answer,
				correctActive,
				incorrectActive,
				questionErrors,
				answerErrors,
				hasQuestionErrors,
				hasAnswerErrors
			},
			props: { goBack, addCard, quizTitle }
		} = this

		return (
			<Container formContainer={true}>
				<Title text={"Create a card"} />
				<Input
					input={question}
					placeholder={"Enter a question"}
					onChangeText={this.questionInput}
					addStyles={styles.addMargin}
				/>
				{this.showQuestionErrors(questionErrors, hasQuestionErrors)}
				<Input
					input={answer}
					placeholder={"Enter the answer to the question"}
					onChangeText={this.answerInput}
					addStyles={styles.addMargin}
				/>
				{this.showAnswerErrors(answerErrors, hasAnswerErrors)}
				<Toggle
					text1={"Incorrect"}
					text2={"Correct"}
					handler1={() => this.incorrectPress()}
					handler2={() => this.correctPress()}
					isCorrect={correctActive}
					isIncorrect={incorrectActive}
				/>
				<Button
					text={"Add Card"}
					handler={() =>
						this.addCard(
							question,
							answer,
							quizTitle,
							correctActive,
							incorrectActive,
							addCard,
							goBack,
							questionErrors,
							answerErrors,
							hasAnswerErrors,
							hasQuestionErrors
						)
					}
				/>
				<Button text={"Cancel"} handler={goBack} />
			</Container>
		)
	}
}
