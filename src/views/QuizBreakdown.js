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
		let { navigate, state: { params: { quiz: { title } } } } = navigation
		let quiz = quizzes[title]
		return (
			<QuizDescription
				addCard={() => navigate("AddCard", quiz)}
				startQuiz={() => navigate("QuizView", quiz)}
				quiz={quiz}
			/>
		)
	}
}

function mapStateToProps({ quizzes }) {
	return { quizzes }
}

export default connect(mapStateToProps)(QuizBreakdown)
