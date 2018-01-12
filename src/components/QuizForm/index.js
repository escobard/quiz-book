import React, { Component } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'

export default class QuizForm extends Component {
	onPress(){
		// will contain the prop for navigating to each quiz
		console.log('PRESSED')
	}
	render(){

		return(
			<TouchableOpacity onPress={this.onPress}>
				<View>
					<Text>TEST</Text>
					<Text>TEST</Text>
				</View>
			</TouchableOpacity>
		)
	}
}