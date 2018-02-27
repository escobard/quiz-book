import React, { Component } from "react"
import { FlatList, View, Text } from "react-native"
import { connect } from "react-redux"

import { fetchQuizzes } from "../actions"
import QuizItem from "../components/QuizItem"
import { getQuizzes } from "../utils"

class QuizList extends Component {
	constructor(props) {
		super(props)
		this.renderQuiz = this.renderQuiz.bind(this)
	}
	componentDidMount() {
		getQuizzes()
			.then(results => fetchQuizzes(results))
			.catch(error => console.log("error", error))
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
		console.log("this.props.quizzes", this.props.quizzes)
		if (this.props.quizzes) {
			let keyedQuizzes = Object.values(this.props.quizzes)
			return (
				<FlatList
					data={keyedQuizzes}
					keyExtractor={quiz => quiz.title}
					renderItem={this.renderQuiz}
					style={{ backgroundColor: "white" }}
				/>
			)
		} else {
			return (
				<View>
					<Text>Loading...</Text>
				</View>
			)
		}
	}
}

function mapStateToProps({ quizzes }) {
	return { quizzes }
}
export default connect(mapStateToProps, { fetchQuizzes })(QuizList)
