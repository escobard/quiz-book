import React, { Component } from "react"
import { FlatList } from "react-native"
import { connect } from "react-redux"

import { addCard } from "../actions"

import CardForm from "../components/CardForm"

class AddCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			question: "",
			answer: ""
		}
	}

	static navigationOptions() {
		return {
			title: "Add a card"
		}
	}

	goBack(nav) {
		nav.goBack()
	}

	render() {
		let { navigation, addCard } = this.props
		let { state: { params: { title } } } = navigation

		return (
			<CardForm
				goBack={() => this.goBack(navigation)}
				addCard={addCard}
				quizTitle={title}
			/>
		)
	}
}

function mapStateToProps({ quizzes }) {
	return { quizzes }
}

export default connect(mapStateToProps, { addCard })(AddCard)
