import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import QuizOverview from '../components/QuizOverview'

class QuizDetail extends Component {

	constructor(props) {
		super(props)

	}

	static navigationOptions = ({ navigation}) => {
		const quizTitle = navigation ? navigation.state.params.quiz.title : ''

		return {
			title: quizTitle
		}
	}

	render(){
		// this should be refactored into a reducer later
		let { navigation } = this.props		
		let { navigate, state: { params:{ quiz } } } = navigation

		return(
				<QuizOverview
					addCard={() => navigate('AddCard', quiz)} 
				 	startQuiz={() => navigate('QuizView', quiz)} 
				 	quiz={quiz} 
				/>
		)
	}
}

function mapStateToProps({quizList}){
	// will be modified to work with individual quizes instead of base constant
	return {quizPlaceholder: quizList[0]}
}

export default connect(mapStateToProps)(QuizDetail)