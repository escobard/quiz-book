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
		this.renderCards = this.renderCards.bind(this);
		this.nextCard = this.nextCard.bind(this);
	}

	componentDidMount(){
		this.setState({
			cardNumber: this.props.quiz.questions.length
		})
	}

	renderCards(questions, showAnswer, cardNumber, currentCard){

		return questions.map((item, key) => {
			// checks current card number vs key
			// need to add the score screen text here
			if (currentCard != key) { return }
			
			/*
			console.log('item', item)	
			console.log('key', key)
			console.log('content', content)
			*/

			let { answer, question } = item

			let content =  showAnswer ? answer : question

			return (

				<Container key={key}>
					<Title text={content} addStyles={styles.title}/>
				</Container>

			)

		})
	}

	renderButtons(btnContent, showAnswer, currentCard){
		// need to add a handler for when the 
		return (
			<Container>
				<Button
				 text={btnContent} 
				 handler={() => this.handleAnswer(showAnswer)}
				/>

				<Button
				 text={'Correct'}
				 handler={() => this.nextCard(currentCard)}
				/>

				<Button
				 text={'Incorrect'}
				 handler={() => this.nextCard(currentCard)}
				/>
			</Container>

		)
	}

	nextCard(card){

		let next = card + 1
		
		this.setState({
			currentCard: next,
			showAnswer: false
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
		 
		let btnContent = showAnswer ? 'Show Question' : 'Show Answer'

		return(
			<Container addStyles={styles.container}>
				{this.renderCards(questions, showAnswer, cardNumber, currentCard)}
				{this.renderButtons(btnContent, showAnswer, currentCard)}
			</Container>
		)
	}
}