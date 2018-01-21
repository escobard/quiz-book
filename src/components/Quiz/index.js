import React, { Component } from 'react'

import { styles } from './styles'
import { checkNumber } from './utils'

import { Title, Container, Button } from '../Common'

export default class Quiz extends Component {

	render(){
		let { quiz } = this.props
		let {title, questions} = quiz

		return(
			<Container addStyles={styles.centered}>
				<Title text={title}/>
			</Container>
		)
	}
}