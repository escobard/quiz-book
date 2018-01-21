import React, { Component } from 'react'

import { styles } from './styles'

import { Title, Container, Button } from '../Common'

export default class Quiz extends Component {

	render(){
		let { quiz } = this.props
		let { title, questions } = quiz
		let { answer, question} = questions[0]

		return(
			<Container>
				<Title text={answer}/>
				<Title text={question}/>
				<Button text={'Correct'}/>
				<Button text={'Incorrect'}/>
			</Container>
		)
	}
}