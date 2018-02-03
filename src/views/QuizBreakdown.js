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
		let { navigation } = this.props
		let { navigate, state: { params: { quiz } } } = navigation

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
	// will be modified to work with individual quizes instead of base constant
	return { quizPlaceholder: quizzes[0] }
}

export default connect(mapStateToProps)(QuizBreakdown)