import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'

import {styles} from './styles'

export default class QuizForm extends Component {
	
	state={
		quizName: ''
	}

	handleTextChange = (quizName) =>{
	  	console.log('INPUT', quizName )
	    this.setState({
	      quizName 
	    })
	}
	
	handleAddQuiz =(quizName) =>{
	  	
	  	// will contain the prop for navigating to each quiz
		console.log('PRESSED', quizName);
	}
	
	render(){

		let { quizName } = this.state

		return(
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				
				<TextInput 
	                value={quizName} 
	                style={styles.input} 
	                onChangeText={this.handleTextChange} />

				<TouchableOpacity 
					style={styles.btn}
					onPress={this.handleAddQuiz}>
						<Text style={styles.btnText}>Add Quiz</Text>
				</TouchableOpacity>

			</KeyboardAvoidingView>
		)
	}
}
