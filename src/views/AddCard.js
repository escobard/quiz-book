import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

// import Quiz from '../components/Quiz'

class AddCard extends Component {
	
	static navigationOptions = () => {
		return {
			title: 'Add a card'
		}
	}

	constructor(props) {
		super(props)
		this.renderQuiz = this.renderQuiz.bind(this);

	}

	goToDeck(nav, quiz){
		nav.navigate('QuizDetail',{quiz})
	}

	renderCard({item, key}){
		// console.log('QUIZ WITHIN LOOP', item.title)
		/*
		return (
			<Quiz id={key} quiz={item} nav={() => this.goToDeck(this.props.navigation, item)}/>

		) */
	}

	render(){
		let { quizList } = this.props

		return (
			
			<FlatList 
				data={quizList}
				keyExtractor={quiz => quiz.title}
				renderItem={this.renderQuiz}
				style={{backgroundColor: 'white'}}
			/>

		)
	}
}

function mapStateToProps({quizList}){
	return {quizList}
}
export default connect(mapStateToProps)(AddCard);