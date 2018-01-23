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
			showScore: false
		}

		this.handleAnswer = this.handleAnswer.bind(this);
		this.renderCards = this.renderCards.bind(this);
		this.nextCard = this.nextCard.bind(this);
	}

	componentDidMount(){
		this.setState({
			cardNumber: this.props.quiz.questions.length
		})
		console.log('MOUNT')
	}

	renderCards(questions, showAnswer, cardNumber, currentCard, showScore){
		
		if (showScore) {
			return(
				<Container>
					<Title text={'Score details go here'} addStyles={styles.title}/>
				</Container>
			)
		}

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

	renderButtons(btnContent, showAnswer, cardNumber, currentCard, showScore){
		if (showScore) {
			return (

				<Container>
					<Button text={'Restart Quiz'}/>
					<Button text={'Back to Quiz Details'}/>
				</Container>
			)
		}
		// need to add a handler for when the 
		return (
			<Container>
				<Button
				 text={btnContent} 
				 handler={() => this.handleAnswer(showAnswer)}
				/>

				<Button
				 text={'Correct'}
				 handler={() => this.nextCard(showAnswer, cardNumber, currentCard)}
				/>

				<Button
				 text={'Incorrect'}
				 handler={() => this.nextCard(showAnswer, cardNumber, currentCard)}
				/>
			</Container>

		)
	}

	nextCard(showAnswer, cardNumber, currentCard){
		
		// refactor this into a helper file after, in v0.7 during v0.6 cleanup
		let showScore = ( cardNumber, currentCard ) => {
			if (currentCard == cardNumber - 1) {
				return true
			}
		}

		let next = currentCard + 1

		this.setState({
			currentCard: next,
			showAnswer: false,
			showScore: showScore(cardNumber, currentCard)
		})

	}

	handleAnswer(showAnswer){

		this.setState({
			showAnswer: !showAnswer
		})
	}

	render(){

		let { quiz } = this.props
		let { showAnswer, cardNumber, currentCard, showScore } = this.state
		let { title, questions } = quiz
		let btnContent = showAnswer ? 'Show Question' : 'Show Answer'

		return(
			<Container addStyles={styles.container}>
				{this.renderCards(questions, showAnswer, cardNumber, currentCard, showScore)}
				{this.renderButtons(btnContent, showAnswer, cardNumber, currentCard, showScore)}
			</Container>
		)
	}
}