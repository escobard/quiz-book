import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export default class QuizItem extends Component {
	onPress(){
		// will contain the prop for navigating to each quiz
		console.log('PRESSED')
	}
	render(){
		let {title, questions} = this.props.quiz

		return(
			<TouchableOpacity style={styles.container} onPress={this.onPress}>
				<View style={styles.btn}>
					<Text style={styles.subtitle}>{title}</Text>
					<Text style={styles.btnText}>Cards: {questions.length}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}