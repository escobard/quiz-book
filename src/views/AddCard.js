import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import CardForm from '../components/CardForm'

class AddCard extends Component {
	constructor(props) {
		super(props)
		this.state={
			test:''
		}
	}

	static navigationOptions(){

		return {
			title: 'Add a card'
		}
	}

	goBack(nav){
		nav.goBack();
	}

	addCard(nav, quiz){

		// this will also need to handle the add to deck action
		nav.goBack();
	}

	render(){

		let { navigation } = this.props
		console.log('PROPS', this.props)

		return (
			
			<CardForm goBack={() => this.goBack(navigation)} addCard={() => this.addCard(navigation)}/>

		)
	}
}

function mapStateToProps({quizList}){
	return {quizList}
}

export default connect(mapStateToProps)(AddCard);