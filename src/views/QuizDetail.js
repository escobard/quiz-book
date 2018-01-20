import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import QuizOverview from '../components/QuizOverview'

class QuizDetail extends Component {

	constructor(props) {
		super(props)

	}

	static navigationOptions = ({ navigation }) => {
		const quizTitle = navigation.state.params.quiz.title

		return {
			title: quizTitle
		}
	}

	addCard(nav, quiz){
		nav.navigate('AddCard', quiz)
	}
	startQuiz(nav, quiz){
		nav.navigate('Quiz', quiz)
	}
	render(){
		// this should be refactored into a reducer later
		let { navigation } = this.props		
		let passedQuiz = navigation.state.params.quiz

		return(
				<QuizOverview
					addCard={() => this.addCard(navigation, passedQuiz)} 
				 	goBack={() => this.startQuiz(navigation, passedQuiz)} 
				 	quiz={passedQuiz} 
				/>
		)
	}
}

function mapStateToProps({quizList}){
	// will be modified to work with individual quizes instead of base constant
	return {quizPlaceholder: quizList[0]}
}

export default connect(mapStateToProps)(QuizDetail)