import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class QuizList extends Component {
	renderView(quizList){
		{Object.keys(quizList).map((quiz, index) => {
			console.log('index-', index,' quiz: ', quiz);
        })}
	}
	render(){
		let { quizList } = this.props
		console.log('QUIZLIST', this.props)
		console.log('object keys', Object.entries(this.props.quizList))
		return (

			<View>
				<Text> Quiz List view</Text>
				{this.renderView(quizList)}
			</View>

		)
	}
}

function mapStateToProps({quizList}){
	return {quizList}
}
export default connect(mapStateToProps)(QuizList);