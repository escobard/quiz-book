import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import CardForm from '../components/CardForm'

class AddCard extends Component {
	constructor(props) {
		super(props)

	}

	static navigationOptions = () => {
		return {
			title: 'Add a card'
		}
	}

	goToDeck(nav, quiz){
		nav.navigate('QuizDetail',{quiz})
	}

	render(){
		let { quizList } = this.props
		
		return (
			
			<CardForm />

		)
	}
}

function mapStateToProps({quizList}){
	return {quizList}
}
export default connect(mapStateToProps)(AddCard);