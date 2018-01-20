import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'

import {styles} from './styles'

import { Container, Title, Button, Input } from '../Common'

export default class QuizForm extends Component {
	
	state={
		cardName: '',
		cardAnswer: ''
	}

	cardInput(cardName){
	  	console.log('INPUT', cardName )
	    this.setState({
	      cardName 
	    })
	}

	answerInput(cardAnswer){
		console.log('ANSWER INPUT', cardAnswer)
		this.setState({
	      cardAnswer 
	    })
	}
	
	handleAddQuiz(cardName){
	  	
	  	// will contain the prop for navigating to each quiz
		console.log('PRESSED');
	}

	handleCancel(cardName){
	  	
		console.log('PRESSED');
	}
	
	render(){

		let { cardName, cardAnswer } = this.state

		return(
			<Container formContainer={true}>
				<Title text={''} addStyles={styles.addHeight}/>
				<Input 
	                input={cardName} 
	                placeholder={'Type the answer for your card!'}
	                onChangeText={this.cardInput} />
	            <Input 
	                input={cardAnswer} 
	                placeholder={"What's the answer to the card's question?"}
	                onChangeText={this.answerInput} />
	            <Button text={'Add Quiz'} handler={this.handleAddQuiz} addStyles={styles.addMargin}/>
	           	<Button text={'Cancel'} handler={this.handleCancel} addStyles={styles.addMargin}/>
			</Container>
		)
	}
}
