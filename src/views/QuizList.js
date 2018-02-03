import React, { Component } from "react"
import { FlatList } from "react-native"
import { connect } from "react-redux"

import QuizItem from "../components/QuizItem"

class QuizList extends Component {
	constructor(props) {
		super(props)
		this.renderQuiz = this.renderQuiz.bind(this)
	}

	goToDeck(nav, quiz) {	
		nav.navigate("QuizBreakdown", { quiz })
	}

	renderQuiz({ item, key }) {
		// console.log('QUIZ WITHIN LOOP', item.title)
		return (
			<QuizItem
				key={key}
				quiz={item}
				nav={() => this.goToDeck(this.props.navigation, item)}
			/>
		)
	}

	render() {
		let { quizzes } = this.props
		console.log(quizzes)
		
		return (
			<FlatList
				data={quizzes}
				keyExtractor={quiz => quiz.title}
				renderItem={this.renderQuiz}
				style={{ backgroundColor: "white" }}
			/>
		)
	}
}

function mapStateToProps({ quizzes }) {
	return { quizzes }
}
export default connect(mapStateToProps)(QuizList)