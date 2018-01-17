import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Quiz from '../components/Quiz'

class QuizDetail extends Component {

	render(){

		return(
			<View>
				<Quiz quiz={this.props.quiz} />
			</View>
		)
	}
}

function mapStateToProps({quizList}){

	// will be modified to work with individual quizes instead of base constant
	return {quiz: quizList[0]}
}

export default connect(mapStateToProps)(QuizDetail)