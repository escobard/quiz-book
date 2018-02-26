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
		name: ""
	}

	textChange = name => {
		console.log("INPUT", name)
		this.setState({
			name
		})
	}

	addQuiz = (name, addQuiz, nav) => {
		let quiz = quizObject(name)
		addQuiz(quiz)
		nav("QuizList")
		nav("QuizBreakdown", { quiz })
		this.setState({
			name: ""
		})
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
