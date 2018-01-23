import React, { Component } from 'react'
import {Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

import { styles } from './styles'

export class Container extends Component{
	render(){

		let {formContainer, addStyles, children} = this.props
		
		if (formContainer) {
			return (
				<KeyboardAvoidingView behavior='padding' style={[styles.container, addStyles]}>
					{children}
				</KeyboardAvoidingView>
			)
		}
		
		return (
			<View style={[styles.container, addStyles]}>{children}</View>
		)
	}

}

export class Input extends Component{

	render(){
		return(
			<TextInput {...this.props} style={[styles.input, this.props.addStyles]} />
		)
	}
}

export const Button = ({text, btnText, handler, addStyles, isQuizItem}) => {

	let onTouch = handler ? handler : console.log('PRESSED')

	if (isQuizItem) {
		return(

			<TouchableOpacity style={styles.container} onPress={handler}>
				<View style={styles.btn}>
					<Text style={[styles.subtitle, addStyles]}>{text}</Text>
					<Text style={styles.btnText}>{btnText}</Text>
				</View>
			</TouchableOpacity>

		)
	}

	return (


		<TouchableOpacity style={[styles.btn, addStyles]} onPress={handler}>
			<Text style={styles.btnText}>
				{text}
			</Text>
		</TouchableOpacity>

	)
}

export const Title = ({text, isSubtitle, addStyles}) => {
	
	let style = isSubtitle ? styles.subtitle : styles.title

	return (
		<Text style={[style, addStyles]}>{text}</Text>
	)

}

export const Toggle = ( { text1, text2, handler1, handler2, addStyles, isCorrect, isIncorrect } ) =>{
	let correctStyle = isCorrect ? styles.correctActive : {}
	let incorrectStyle = isIncorrect ? styles.incorrectActive : {}
	return (

		<View style={[styles.toggle, addStyles]}>
			<Button text={text1} handler={handler1} addStyles={[styles.incorrectBtn, styles.toggleBtn, incorrectStyle]}/>
			<Button text={text2} handler={handler2} addStyles={[styles.correctBtn, styles.toggleBtn, correctStyle]}/>
		</View>

	)
}
