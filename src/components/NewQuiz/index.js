import React, { Component } from "react"
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from "react-native"

import { styles } from "./styles"

import { Container, Title, Button, Input } from "../Common"

export default class NewQuiz extends Component {
	state = {
		quizName: ""
	}

	textChange = quizName => {
		console.log("INPUT", quizName)
		this.setState({
			quizName
		})
	}

	addQuiz = () => {
		// will contain the prop for navigating to each quiz
		console.log("PRESSED")
	}

	render() {
		let { quizName } = this.state

		return (
			<Container formContainer={true}>
				<Title text={"Create a Quiz"} addStyles={styles.addHeight} />
				<Input
					input={quizName}
					placeholder={"Give your quiz a name"}
					onChangeText={this.textChange}
				/>
				<Button
					text={"Add Quiz"}
					handler={this.addQuiz}
					addStyles={styles.addMargin}
				/>
			</Container>
		)
	}
}