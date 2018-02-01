# README - Quiz Book - react-native && react-redux  

The client side of this project was built around the criteria of the final project of the [React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) with [Udacity](https://www.udacity.com/).

The server and data side of this project will be built from the material learned from:
- [The Complete Developers Guide to MongoDB] (https://www.udemy.com/the-complete-developers-guide-to-mongodb)
- [Server Side Rendering with React and Redux] (https://www.udemy.com/server-side-rendering-with-react-and-redux) 

## Project Criteria

The main purpose of this application is to provide the following features:
	
	- A quiz game, with public scoreboards including:
		+ Basic user profiles.
		+ User dashboard, with metrics.
			* Showing quizzes, (option to display public or not)
			* Show scores (always public, with quiz names only displayed)
		+ Scoreboard

This application will be built to showcase the following technologies and practices:
	
	- Consistent data retention with MongoDB / Mongoose
	- REST API to manage HTTP requests with Express / Node
	- Render the client interface with React Native / Redux
	- Testing of server, data, and client applications with Mocha / Enzyme / Jest
	- Manage user Authentication with oAuth / Passport 
	- Offline caching with AsyncStorage

Possible future technologies include:

	- GraphQL / Apollo for better offline - first utilization
	- Server Side Rendering for optimized performance
	- React application for web devices

(Expand upon criteria in a later version)

## Demo

(to be expanded in a future version with the structure below)

![desktop image](https://onlinedevelopers.ca/udacity/weather-app/src/img/read-me/proj5-collage.jpg)

[To view the application live click here] (http://onlinedevelopers.ca/udacity/weather-app/)

To download and install, please follow the instructions below.

## Installation

(expand on yarn installation, and node.js installation instructions, as well as expo instructions before repository instructions in the future)


Clone the repository from: 
```
$ git clone https://github.com/escobard/react-native-mobile-flashcards.git
```

Install NPM dependencies:
```
$ npm install (or yarn install)
```

## Usage

To run this application locally for development, use the following commands:

```
$ npm start (or yarn start)
```


## Most Recent Update - v0.6

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


## To Do's - v0.7
	- TODO:
		+ configure data flow including:
			- new deck addition
			- new card addition
			- storage / fetching from AsyncStorage
		+ tune some functionality:
			- Add score functionality / render methods
			- Optionally add card deletion / deck deletion mechanisms.

## Known Bugs
- Application live version showing an error due to bundle.js compression.

## Libraries, Frameworks, APIs

[React](https://facebook.github.io/react/)

[Redux] (http://redux.js.org/docs/introduction/)

[React Native] (https://facebook.github.io/react-native/r)

[Create React Native App] (https://github.com/react-community/create-react-native-app)

(add other maj libraries here)


## Contribution

All files in this repository are protected under the MIT license, but feel free to contribute, fork, star, or share this application as you see fit.

For commercial or educational use, please paste a link to this repository to give proper credit.

## License

As of January 9th, 2018, these files are open for all to use and contribute to. This repository is protected under the [MIT License](http://choosealicense.com/licenses/mit/).