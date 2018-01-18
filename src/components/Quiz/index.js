import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'
import { checkNumber } from './utils'

import { Title, Container, Button } from '../Common'


export default class Quiz extends Component {

	render(){

		let {title, questions} = this.props.quiz
		let cardNumber = checkNumber(questions.length)
		let numberText = checkNumber(questions.length, true)

		return(
			<Container>
				<Title text={title}/>
				<Title isSubtitle={true} text={`${cardNumber} ${numberText}`}/>
				<Button text={'Add Card'}/>
				<Button text={'Start Quiz'}/>
			</Container>
		)
	}
}