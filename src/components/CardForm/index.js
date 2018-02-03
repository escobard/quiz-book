import React, { Component } from "react";

import { styles } from "./styles";

import { Container, Title, Button, Input, Toggle } from "../Common";

export default class CardForm extends Component {
	state = {
		question: "",
		answer: "",
		correctActive: false,
		incorrectActive: false
	}

	addCard(question, answer, quizTitle, correctActive, incorrectActive, addCard, goBack) {

		let questions = {question, answer}

		addCard(questions, quizTitle)

		goBack()
	}

	cardInput = question => {
		console.log("INPUT", question);
		this.setState({
			question
		});
	}

	correctPress() {
		this.setState({
			correctActive: true,
			incorrectActive: false
		})
	}

	incorrectPress() {
		this.setState({
			correctActive: false,
			incorrectActive: true
		})
	}

	answerInput = answer => {
		console.log("ANSWER INPUT", answer);
		this.setState({
			answer
		})
	}

	render() {
		let {
			state: { question, answer, correctActive, incorrectActive },
			props: { goBack, addCard, quizTitle }
		} = this

		console.log("this state", this.state);

		return (
			<Container formContainer={true}>
				<Title text={"Create a card"} />
				<Title
					isSubtitle={true}
					text={"Each card must contain an answer and a question"}
				/>
				<Input
					input={question}
					placeholder={"Enter a question"}
					onChangeText={this.cardInput}
					addStyles={styles.addMargin}
				/>
				<Input
					input={answer}
					placeholder={"Enter the answer to the question"}
					onChangeText={this.answerInput}
					addStyles={styles.addMargin}
				/>
				<Toggle
					text1={"Incorrect"}
					text2={"Correct"}
					handler1={() => this.incorrectPress()}
					handler2={() => this.correctPress()}
					isCorrect={correctActive}
					isIncorrect={incorrectActive}
				/>
				<Button
					text={"Add Card"}
					handler={() => this.addCard(
						question,
						answer,
						quizTitle,
						correctActive,
						incorrectActive,
						addCard,
						goBack
					)}
				/>
				<Button text={"Cancel"} handler={goBack} />
			</Container>
		);
	}
}