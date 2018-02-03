import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"

import { addQuiz } from "../actions"

import QuizForm from "../components/QuizForm"

class AddQuiz extends Component {
	render() {
		let { addQuiz, navigation:{ navigate }} = this.props
		console.log('PROPS', this.props)
		return <QuizForm addQuiz={addQuiz} nav={navigate}/>
	}
}

function mapStateToProps(state) {
	// no state to pass yet, but will pass all for now to complete redux connection
	return { state }
}

export default connect(mapStateToProps, { addQuiz })(AddQuiz)