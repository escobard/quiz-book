import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"

import { styles } from "./styles"

import { Button } from "../Common"

export default class QuizItem extends Component {
	render() {
		let { nav, quiz: { title, questions } } = this.props

		let cardNumber = questions.length ? `Cards: ${questions.length}`  : '0'

		return (
			<Button
				text={title}
				btnText={cardNumber}
				handler={nav}
				isQuizItem={true}
				addStyles={styles.subtitle}
			/>
		)
	}
}