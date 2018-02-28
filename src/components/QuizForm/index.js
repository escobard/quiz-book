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

import { Container, Title, Button, Input } from "../Common"

export default class QuizForm extends Component {
	state = {
		name: "",
		hasErrors: false,
		errors: []
	}

	textChange = name => {
		this.setState({
			name
		})
	}

	addQuiz = (name, addQuiz, nav) => {
		let { errors, hasErrors } = this.state
		console.log("ERRORS", errors)
		console.log("name", name)
		console.log("error length", errors.length)
		if (
			name === "" &&
			!errors.includes("The quiz name cannot be left empty")
		) {
			errors.push("The quiz name cannot be left empty")
		}

		if (
			name.length > 40 &&
			!errors.includes("The quiz name cannot be left empty")
		) {
			errors.push("The quiz name cannot be greated than 40 characters")
		}

		if (errors.length > 1) {
			this.setState({
				hasErrors: true
			})
		}

		if (errors.length === 0 && hasErrors === false) {
			console.log("VALIDATED")
			let quiz = quizObject(name)
			addQuiz(quiz)
			this.setState({
				name: "",
				errors: []
			})
			nav("QuizList")
			nav("QuizBreakdown", { quiz })
		}
	}

	render() {
		let { name } = this.state
		let { addQuiz, nav } = this.props

		return (
			<Container formContainer={true}>
				<Title text={"Create a Quiz"} addStyles={styles.addHeight} />
				<Input
					input={name}
					placeholder={"Give your quiz a name"}
					onChangeText={this.textChange}
				/>
				<Button
					text={"Add Quiz"}
					handler={() => this.addQuiz(name, addQuiz, nav)}
					addStyles={styles.addMargin}
				/>
			</Container>
		)
	}
}
