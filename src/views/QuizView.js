import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"

import Quiz from "../components/Quiz"

class QuizView extends Component {
	static navigationOptions = () => {
		return {
			title: "Back to Quiz Details"
		}
	}

	goBack(nav, quiz) {
		nav.navigate("QuizBreakdown", { quiz })
	}

	restartQuiz(nav, quiz) {
		nav.navigate("QuizView", quiz)
	}

	render() {
		let { navigation } = this.props
		let selectedQuiz = navigation.state.params

		return (
			<Quiz
				quiz={selectedQuiz}
				goBack={() => this.goBack(navigation, selectedQuiz)}
				restartQuiz={() => this.restartQuiz(navigation, selectedQuiz)}
			/>
		)
	}
}

function mapStateToProps(state) {
	// no state to pass yet, but will pass all for now to complete redux connection
	return { state }
}

export default connect(mapStateToProps)(QuizView)
