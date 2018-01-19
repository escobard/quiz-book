import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import QuizOverview from '../components/QuizOverview'

class QuizOverviewDetail extends Component {

	static navigationOptions = ({ navigation }) => {
		const quizTitle = navigation.state.params.quiz.title

		return {
			title: quizTitle
		}
	}
	
	render(){
		console.log('PROPS', this.props)		
		// this should be refactored into a reducer later
		let passedQuizOverview = this.props.navigation.state.params.quiz
		return(
				<QuizOverview quiz={passedQuizOverview} />
		)
	}
}

function mapStateToProps({quizList}){
	// will be modified to work with individual quizes instead of base constant
	return {quizPlaceholder: quizList[0]}
}

export default connect(mapStateToProps)(QuizOverviewDetail)