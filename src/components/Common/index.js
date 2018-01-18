import React, { Component } from 'react'
import {Text, View, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export class Container extends Component{
	render(){

		let {addStyles, children} = this.props

		return (
			<View style={[styles.container, addStyles]}>{children}</View>
		)
	}

}

export const Button = ({text, handler, addStyles}) => {

	let onTouch = handler ? handler : console.log('PRESSED')

	return (


		<TouchableOpacity style={[styles.btn, addStyles]} onPress={()=> onTouch}>
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

export const Input = ({}) => {
	
	return {

	}

}

