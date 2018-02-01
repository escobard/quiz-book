import React, { Component } from 'react'
import { styles } from './styles'
import { checkNumber } from './utils'

import { Title, Container, Button } from '../Common'

export default class Quiz extends Component {

	render(){
		let {quiz, addCard, startQuiz} = this.props
		let {title, questions} = quiz
		let cardNumber = checkNumber(questions.length)
		let numberText = checkNumber(questions.length, true)

		return(
			<Container addStyles={styles.centered}>
				<Title text={title}/>
				<Title isSubtitle={true} text={`${cardNumber} ${numberText}`}/>
				<Button text={'Add Card'} handler={addCard}/>
				<Button text={'Start Quiz'} handler={startQuiz}/>
			</Container>
		)
	}
}