import { StyleSheet } from "react-native"

import { space, colors, fonts } from "../../styles"

export const styles = StyleSheet.create({
	title: {
		height: space.xxxlrg + space.xlrg,
		marginTop: space.small,
		fontSize: fonts.smallSub
	},
	answer: {
		color: colors.orange
	},
	question: {
		color: colors.blue
	},
	container: {
		paddingBottom: space.xxlrg
	}
})
