import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import NewQuiz from '../components/NewQuiz'

class AddQuiz extends Component {
	render(){
		return (
			<NewQuiz />
		)
	}
}

function mapStateToProps(state){

	// no state to pass yet, but will pass all for now to complete redux connection
	return {state}
}

export default connect(mapStateToProps)(AddQuiz)