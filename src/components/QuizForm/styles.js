
import { StyleSheet } from 'react-native'

import { colors, fonts, space } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginLeft: space.small,
    marginRight: space.small,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    fontSize: fonts.title,
  },
  btn: {
    backgroundColor: colors.orange,
    padding: space.small,
    paddingLeft: space.xlrg,
    paddingRight: space.xlrg,
    justifyContent : 'center',
    alignItems: 'center',
    borderRadius: space.xsmall,
  },
  btnText: {
    color: colors.white,
  },
  input: {
    marginTop: space.med,
    marginBottom: space.med,
    height: space.xlrg,
    padding: space.small,
    borderWidth: space.xxxsmall,
    borderColor: colors.darkGray,
  }
});
