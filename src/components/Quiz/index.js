import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export default class Quiz extends Component {

	render(){

		let {title, questions} = this.props.quiz
		let cardNumber = questions.length
		let numberText = !questions.length ? 'No cards' : questions.length > 1 ? 'Cards' : 'Card'

		return(
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{cardNumber} {numberText}</Text>
				<TouchableOpacity style={styles.btn}>
					<Text style={styles.btnText}>
						Add Card
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn}>
					<Text style={styles.btnText}>
						Start Quiz
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}