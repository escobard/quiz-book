import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { connect } from "react-redux"

import QuizDescription from "../components/QuizDescription"

class QuizBreakdown extends Component {
	constructor(props) {
		super(props)
	}

	static navigationOptions = ({ navigation }) => {
		const quizTitle = navigation ? navigation.state.params.quiz.title : ""

		return {
			title: quizTitle
		}
	}

	render() {
		// this should be refactored into a reducer later
		let { navigation, quizzes } = this.props
		let { navigate, state: { params: { quiz } } } = navigation
		let title = quiz.title
		let quizUpdate = quizzes[title]
		let checkQuiz = quizUpdate ? quizUpdate : quiz
		return (
			<QuizDescription
				addCard={() => navigate("AddCard", checkQuiz)}
				startQuiz={() => navigate("QuizView", checkQuiz)}
				quiz={checkQuiz}
			/>
		)
	}
}

function mapStateToProps({ quizzes }) {
	return { quizzes }
}

export default connect(mapStateToProps)(QuizBreakdown)
