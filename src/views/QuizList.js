import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import QuizItem from '../components/QuizItem'

class QuizList extends Component {

	goToDeck(){
		// will contain nav handler for each quiz
	}

	renderQuiz({item, key}){
		// console.log('QUIZ WITHIN LOOP', item.title)
		return (
			<QuizItem id={key} quiz={item}/>

		)
	}

	render(){
		let { quizList } = this.props

		return (
			<FlatList 
				data={quizList}
				keyExtractor={quiz => quiz.title}
				renderItem={this.renderQuiz}
			/>
	

		)
	}
}

function mapStateToProps({quizList}){
	return {quizList}
}
export default connect(mapStateToProps)(QuizList);