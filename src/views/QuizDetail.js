import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class QuizDetail extends Component {

	render(){

		let {title, questions} = this.props.quiz
		let cardNumber = questions.length
		let numberText = !questions.length ? 'No cards' : questions.length > 1 ? 'Cards' : 'Card'

		return(
			<View>
				<Text>{title}</Text>
				<Text>{cardNumber} {numberText}</Text>
				<TouchableOpacity>
					<Text>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>Start Quiz</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

function mapStateToProps({quizList}){

	// will be modified to work with individual quizes instead of base constant
	return {quiz: quizList[0]}
}

export default connect(mapStateToProps)(QuizDetail)