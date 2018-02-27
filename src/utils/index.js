// will need to refactor these into actions / reducers with redux thunk in the future

import { AsyncStorage } from "react-native"

import { QUIZ_STORAGE_KEY, demoQuizzes } from "../constants"

export function getQuizzes() {
	return AsyncStorage.getItem(QUIZ_STORAGE_KEY).then(results => {
		if (results === null) {
			AsyncStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(demoQuizzes))
			return demoQuizzes
		}
		return JSON.parse(results)
	})
}

// this should be expanded with the mongoDB data later on
export function createCache(demoQuizzes) {
	return AsyncStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(demoQuizzes))
}

export const cache = async () => {
	var value, collect
	var value, collect
	try {
		value = await AsyncStorage.getItem(QUIZ_STORAGE_KEY).then(values => {
			collect = values
			console.log("Then: ", values)
		})
	} catch (error) {
		console.log("Error: ", error)
	}
	collect = JSON.parse(collect)
	console.log("Final: ", collect)
	return collect
}
