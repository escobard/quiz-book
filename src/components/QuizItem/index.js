import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

import {Button} from '../Common'

export default class QuizItem extends Component {
	
	render(){
		let {nav, quiz} = this.props
		let {title, questions} = quiz

		return(
			<Button
			 text={title} 
			 btnText={`Cards: ${questions.length}`} 
			 handler={nav} 
			 isQuizItem={true} 
			 addStyles={styles.subtitle}
			 />
		)
	}
}