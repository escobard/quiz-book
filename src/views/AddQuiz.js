import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"

import { addQuiz } from "../actions"

import AddQuizForm from "../components/AddQuizForm"

class AddQuiz extends Component {
	render() {
		let { addQuiz } = this.props
		return <AddQuizForm addQuiz={addQuiz} />
	}
}

function mapStateToProps(state) {
	// no state to pass yet, but will pass all for now to complete redux connection
	return { state }
}

export default connect(mapStateToProps, { addQuiz })(AddQuiz)