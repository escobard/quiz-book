import React, { Component } from 'react'

import {styles} from './styles'

import { Container, Title, Button, Input, Toggle } from '../Common'

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
				<Title text={'Create a card'} />
				<Title isSubtitle={true} text={'Each card must contain an answer and a question'}/>
				<Input 
	                input={cardName} 
	                placeholder={"Enter a question"}
	                onChangeText={this.cardInput}
	                addStyles={styles.addMargin}
	            />
	            <Input 
	                input={cardAnswer} 
	                placeholder={"Enter the answer to the question"}
	                onChangeText={this.answerInput}
	                addStyles={styles.addMargin} 
	            />
	            <Toggle text1={'Incorrect'} text2={'Correct'}/>
	            <Button text={'Add Card'} handler={addCard}/>
	           	<Button text={'Cancel'} handler={goBack}/>
			</Container>
		)
	}
}
