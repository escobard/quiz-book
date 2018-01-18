import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Quiz from '../components/Quiz'

class QuizDetail extends Component {

	static navigationOptions = ({ navigation }) => {
		const quizTitle = navigation.state.params.quiz.title

		return {
			title: quizTitle
		}
	}
	
	render(){
		console.log('PROPS', this.props)		
		// this should be refactored into a reducer later
		let passedQuiz = this.props.navigation.state.params.quiz
		return(
				<Quiz quiz={passedQuiz} />
		)
	}
}

function mapStateToProps({quizList}){
	// will be modified to work with individual quizes instead of base constant
	return {quizPlaceholder: quizList[0]}
}

export default connect(mapStateToProps)(QuizDetail)