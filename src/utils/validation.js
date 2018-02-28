export const validation = (condition, array, string) => {
	// try making each val condition a variable
	console.log(condition)
	if (condition) {
		array.push(string)
		return array
	} else {
		let forDeletion = string
		return (array = array.filter(item => !forDeletion.includes(item)))
		console.log("ARRAY IN FUNCT", array)
	}
}
