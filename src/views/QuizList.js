import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'

class QuizItem extends Component {
	onPress(){
		// will contain the prop for navigating to each quiz
		console.log('PRESSED')
	}
	render(){
		let {title, questions} = this.props

		return(
			<TouchableOpacity onPress={this.onPress}>
				<View>
					<Text>TEST</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

class QuizList extends Component {

	goToDeck(){
		// will contain nav handler for each quiz
	}

	renderQuiz({item, key}){
		console.log('QUIZ WITHIN LOOP', item)
		return (
			<QuizItem id={key} props={item}/>

		)
	}

	render(){
		let { quizList } = this.props
		console.log('QUIZLIST', quizList[2])

		return (
			<FlatList 
				data={quizList}
				keyExtractor={quiz => quiz.title}
				renderItem={this.renderQuiz}
			/>
	

		)
	}
}

function mapStateToProps({quizList}){
	return {quizList}
}
export default connect(mapStateToProps)(QuizList);