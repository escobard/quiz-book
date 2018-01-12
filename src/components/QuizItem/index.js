import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class QuizItem extends Component {
	onPress(){
		// will contain the prop for navigating to each quiz
		console.log('PRESSED')
	}
	render(){
		let {title, questions} = this.props.quiz

		return(
			<TouchableOpacity onPress={this.onPress}>
				<View>
					<Text>{title}</Text>
					<Text>{questions.length}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}