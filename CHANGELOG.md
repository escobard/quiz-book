# CHANGELOG - Quiz Book - react-native && react-redux  

##v0.8
	- TODO:
		+ configure data flow including:
			- action for storage / fetching from AsyncStorage
			- Data update each time a new card / deck is added:
				+ Either have the application update + fetch the stored decks from Async to reload global data
				+ Or have the application state update every time, and only fetch data form async during init.
		+ tune some functionality:
			- Add score functionality / render methods.
			- Add validation to both forms
			- Optionally add card deletion / deck deletion mechanisms.

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