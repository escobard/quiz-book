import React, { Component } from "react"
import { FlatList, View, Text } from "react-native"
import { connect } from "react-redux"

import { fetchQuizzes } from "../actions"
import QuizItem from "../components/QuizItem"
import { getQuizzes, updateCache } from "../utils/async"

class QuizList extends Component {
	constructor(props) {
		super(props)
		this.renderQuiz = this.renderQuiz.bind(this)
	}
	componentWillMount() {
		// for whatever reason, the dispatch must be manually applied to dispatch the action with
		// react native - this is not encountered on native redux
		const { dispatch } = this.props

		// this should be refactored into the actions/api file with redux-thunk in the future
		getQuizzes()
			.then(results => dispatch(fetchQuizzes(results)))
			.catch(error => console.log("error", error))
	}
	componentDidUpdate() {
		// this causes an inf. loop which causes new data to not be loaded - to get this to work it should only
		// trigger on NEW state changes
		const { quizzes } = this.props
		// this should be refactored into the actions/api file with redux-thunk in the future
		updateCache(quizzes).catch(error => console.log("error", error))
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
export default connect(mapStateToProps)(QuizList)
