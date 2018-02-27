# CHANGELOG - Quiz Book - react-native && react-redux  

## v1.0
	- TODO:
		- Handle prod vs dev
		- Final refactor of code, cleanup of obsolete methods, commentary, console logs, etc
		- Front End:
			- Animate everything - views, text, cards, etc.
			- Create a splash screen for when no decks are created:
				- Add the option to pre-load decks, or create your own.
			- Optional:
				- Testing with Jest
				- Add delete / edit functionality to deck and cards

## v0.9
	- TODO:
		- Add score functionality, incorrect / correct handlers.
		- Add validation to both forms
		- Clean up AsyncStorage promises with redux-thunk
		- Refactor code to better meet best practices

##v0.8
	- COMPLETED:
		+ configure data flow including:
			- Data retention each time a new card / deck is added:
				+ Async storage being updated every state change - need to consider smarter solutions
		+ fix functionality:
			- new decks will only display start quiz button when cards are created

##v0.7
	- COMPLETED:
		- Refactor of most application code.
		- Child component inherited data cleanup
		+ configure data flow including:
			- action for new deck addition
			- action for new card addition

##v0.6
	- COMPLETED:
		+ style & create navigation for:
			- AddCard view
			- Card
			- Score
			- Quiz view 

##v0.5
	- COMPLETED:
		+ refactor component elements for better syntax structure
		+ style & create navigation for:
			- QuizDetail view
			- AddQuiz view
		

## v0.4
	- COMPLETED:
		+ create base navigation for quiz list and quiz components
		+ style base components 

## v0.3

	
	- COMPLETED:
		+ connect redux
		+ create base components including:
			- QuizList
			- QuizItem
			- AddQuiz
			- Quiz

## v0.2
	- COMPLETED:
		+ create base components including:
			- navigation
			- base views
		+ create static data

## v0.1 
	COMPLETED:
		- installed boilerplate
		- create base react-redux / ublitz file structure