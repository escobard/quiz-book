import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import QuizItem from '../components/QuizItem'

class QuizList extends Component {
	
	constructor(props) {
		super(props)
		this.renderQuiz = this.renderQuiz.bind(this);

	}

	goToDeck(nav, quiz){
		nav.navigate('QuizDetail',{quiz})
	}

	renderQuiz({item, key}){
		// console.log('QUIZ WITHIN LOOP', item.title)
		return (
			<QuizItem id={key} quiz={item} nav={() => this.goToDeck(this.props.navigation, item)}/>

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