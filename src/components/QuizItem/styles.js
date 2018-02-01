import { StyleSheet } from "react-native"

import { colors, fonts, space, common } from "../../styles"

export const styles = StyleSheet.create({
	container: common.container,
	subtitle: { ...common.subtitle, ...{ color: colors.white } },
	btn: common.btn,
	btnText: common.btnText
})