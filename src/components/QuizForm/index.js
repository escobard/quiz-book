import React, { Component } from "react"
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from "react-native"

import { styles } from "./styles"
import { quizObject } from "./utils"

import { validation } from "../../utils/validation"
import { Container, Title, Button, Input } from "../Common"

export default class QuizForm extends Component {
	state = {
		name: "",
		hasErrors: false,
		errors: []
	}

	textChange = name => {
		let { errors, hasErrors } = this.state
		this.setState({
			name
		})
		this.validation(errors, hasErrors, name)
	}
	validation = (errors, hasErrors, name) => {
		// this object determines the strings
		let errorStrings = {
			empty: "The quiz name cannot be left empty",
			long: "The quiz name cannot be greated than 40 characters"
		}
		// this object determines the conditions
		let errorConditions = {
			empty: name === "" && !errors.includes(errorStrings.empty),
			long: name > 40 && !errors.includes(errorStrings.long)
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
		console.log("VALERRORS", errors)
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
	addQuiz = (name, addQuiz, nav) => {
		let { errors, hasErrors } = this.state
		let check = this.validation(errors, hasErrors, name)

		if (check) {
			let quiz = quizObject(name)
			addQuiz(quiz)
			this.setState({
				name: ""
			})
			nav("QuizList")
			nav("QuizBreakdown", { quiz })
		}
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
		let { name, errors, hasErrors } = this.state
		let { addQuiz, nav } = this.props

		return (
			<Container formContainer={true}>
				<Title text={"Create a Quiz"} addStyles={styles.addHeight} />
				<Input
					input={name}
					placeholder={"Give your quiz a name"}
					onChangeText={this.textChange}
				/>
				{this.showErrors(errors, hasErrors)}
				<Button
					text={"Add Quiz"}
					handler={() => this.addQuiz(name, addQuiz, nav)}
					addStyles={styles.addMargin}
				/>
			</Container>
		)
	}
}
