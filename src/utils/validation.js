export const validation = (errors, array) => {
	errors.map((errorObject, index) => {
		let { error, condition } = errorObject
		if (condition) {
			array.push(error)
		} else {
			array = array.filter(item => !error.includes(item))
		}
	})
	return array
}
