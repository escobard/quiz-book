import React, { Component } from 'react'

import { styles } from './styles'

import { Title, Container, Button } from '../Common'

export default class Quiz extends Component {

	constructor(props) {
		super(props)

		this.state={
			showAnswer: false,
			cardNumber: 0,
			currentCard: 0,
		}

		this.handleAnswer = this.handleAnswer.bind(this);
		this.renderCard = this.renderCard.bind(this);
	}

	renderCard(questions, content, cardNumber, currentCard){

		return questions.map((item, key) => {
			// checks current card number vs key
			if (currentCard != key) { return }
			
			/*
			console.log('item', item)	
			console.log('key', key)
			console.log('content', content)
			let {question, answer } = item
			*/
			
			return (

				<Container key={key}>
					<Title text={content} addStyles={styles.title}/>
				</Container>

			)

		})
	}

	handleAnswer(showAnswer){

		this.setState({
			showAnswer: !showAnswer
		})
	}

	render(){

		let { quiz } = this.props
		let { showAnswer, cardNumber, currentCard } = this.state
		let { title, questions } = quiz
		let { answer, question } = questions[0]

		let content =  showAnswer ? answer : question 
		let btnContent = showAnswer ? 'Show Question' : 'Show Answer'

		return(
			<Container addStyles={styles.container}>
				{this.renderCard(questions, content, cardNumber, currentCard)}
				
				<Button
				 text={btnContent} 
				 handler={() => this.handleAnswer(showAnswer)}
				/>

				<Button text={'Correct'}/>
				<Button text={'Incorrect'}/>
			</Container>
		)
	}
}