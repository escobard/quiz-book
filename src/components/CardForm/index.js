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
		hasErrors: false,
		errors: []
	}

	questionValidation = (errors, hasErrors, question) => {
		// this object determines the strings
		let errorStrings = {
			empty: "The card question cannot be left empty",
			long: "The card question cannot be greated than 40 characters"
		}
		// this object determines the conditions
		let errorConditions = {
			empty: question === "" && !errors.includes(errorStrings.empty),
			long: question > 40 && !errors.includes(errorStrings.long)
		}
		// this array determines the errors
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

		errors = validation(valErrors, errors)
		// then check in here if the variables are true, to handle the proper logic
		if (errors.length >= 1) {
			this.setState({
				hasErrors: true,
				errors
			})
			return false
		} else {
			// otherwise reset` the state
			this.setState({
				hasErrors: false,
				errors: []
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
		errors,
		hasErrors
	) {
		let check = this.questionValidation(errors, hasErrors, question)
		if (check) {
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
		let { errors, hasErrors } = this.state
		this.setState({
			question
		})
		this.questionValidation(errors, hasErrors, question)
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
		this.setState({
			answer
		})
	}

	showErrors = (errors, hasErrors) => {
		if (hasErrors === true) {
			return errors.map((error, index) => {
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
				errors,
				hasErrors
			},
			props: { goBack, addCard, quizTitle }
		} = this

		return (
			<Container formContainer={true}>
				<Title text={"Create a card"} />
				<Title
					isSubtitle={true}
					text={"Each card must contain an answer and a question"}
				/>
				<Input
					input={question}
					placeholder={"Enter a question"}
					onChangeText={this.questionInput}
					addStyles={styles.addMargin}
				/>
				{this.showErrors(errors, hasErrors)}
				<Input
					input={answer}
					placeholder={"Enter the answer to the question"}
					onChangeText={this.answerInput}
					addStyles={styles.addMargin}
				/>
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
							errors,
							hasErrors
						)
					}
				/>
				<Button text={"Cancel"} handler={goBack} />
			</Container>
		)
	}
}
