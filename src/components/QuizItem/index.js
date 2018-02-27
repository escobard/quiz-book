import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"

import { styles } from "./styles"

import { Button } from "../Common"

export default class QuizItem extends Component {
	render() {
		let { nav, quiz: { title, questions } } = this.props

		let cardNumber = questions.length ? questions.length : "0"

		return (
			<Button
				text={title}
				btnText={`Cards: ${cardNumber}`}
				handler={nav}
				isQuizItem={true}
				addStyles={styles.subtitle}
			/>
		)
	}
}
