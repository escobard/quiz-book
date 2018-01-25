import React, { Component } from "react"

import { styles } from "./styles"

import { Title, Container, Button } from "../Common"

const Score = ({ results, goBack, restartQuiz }) => {
	return (
		<Container>
			<Title text={"Score details go here"} addStyles={styles.title} />
			<Button text={"Restart Quiz"} handler={restartQuiz} />
			<Button text={"Back to Quiz Details"} handler={goBack} />
		</Container>
	)
}

export default Score