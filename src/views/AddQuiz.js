import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import QuizForm from '../components/QuizForm'

class AddQuiz extends Component {
	render(){
		return (
			<QuizForm />
		)
	}
}

function mapStateToProps(state){

	// no state to pass yet, but will pass all for now to complete redux connection
	return {state}
}

export default connect(mapStateToProps)(AddQuiz)