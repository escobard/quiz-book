import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import Quiz from '../components/Quiz'

class QuizView extends Component {

	render(){

		let selectedQuiz = this.props.navigation.state.params

		return (
			<Quiz quiz={selectedQuiz} />
		)
	}
}

function mapStateToProps(state){

	// no state to pass yet, but will pass all for now to complete redux connection
	return {state}
}

export default connect(mapStateToProps)(QuizView)