import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export default class QuizItem extends Component {
	
	render(){
		let {nav, quiz} = this.props
		let {title, questions} = quiz

		return(
			<TouchableOpacity style={styles.container} onPress={nav}>
				<View style={styles.btn}>
					<Text style={styles.subtitle}>{title}</Text>
					<Text style={styles.btnText}>Cards: {questions.length}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}