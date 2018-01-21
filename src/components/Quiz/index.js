import React, { Component } from 'react'

import { styles } from './styles'

import { Title, Container, Button } from '../Common'

export default class Quiz extends Component {

	render(){
		let { quiz } = this.props
		let {title, questions} = quiz

		return(
			<Container>
				<Title text={title}/>
			</Container>
		)
	}
}