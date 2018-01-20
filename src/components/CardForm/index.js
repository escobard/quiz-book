import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'

import {styles} from './styles'

import { Container, Title, Button, Input } from '../Common'

export default class QuizForm extends Component {
	
	state={
		cardName: '',
		cardAnswer: ''
	}

	cardInput = (cardName) => {
	  	console.log('INPUT', cardName)
	    this.setState({
	      cardName 
	    })
	}

	answerInput = (cardAnswer) => {
		console.log('ANSWER INPUT', cardAnswer)
		this.setState({
	      cardAnswer 
	    })
	}

	render(){

		let { cardName, cardAnswer } = this.state
		let { goBack, addCard} = this.props

		return(
			<Container formContainer={true}>
				<Input 
	                input={cardName} 
	                placeholder={"Enter the name of your card"}
	                onChangeText={this.cardInput} />
	            <Input 
	                input={cardAnswer} 
	                placeholder={"What's the answer to the card's question?"}
	                onChangeText={this.answerInput}
	                addStyles={styles.addMargin} />
	            <Button text={'Add Card'} handler={addCard}/>
	           	<Button text={'Cancel'} handler={goBack}/>
			</Container>
		)
	}
}
