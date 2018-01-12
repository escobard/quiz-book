import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'

import {styles} from './styles'

export default class QuizForm extends Component {
	
	state={
		quizName: ''
	}

	onPress(){
		// will contain the prop for navigating to each quiz
		console.log('PRESSED')
	}

	handleTextChange(){

	}
	
	render(){

		let { quizName } = this.state

		return(
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<TextInput 
	                value={quizName} 
	                style={styles.input} 
	                onChangeText={this.handleTextChange} />
				<TouchableOpacity onPress={this.onPress}>
					<Text>Add Quiz</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		)
	}
}
