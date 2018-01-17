import { StyleSheet } from 'react-native'

export const colors = {
	purple : '#292477',
	gray : '#757575',
	white : '#fff',
	red : '#b71845',
	orange : '#f26f28',
	blue : '#4e4cb8',
	lightPurp : '#7c53c3',
	pink : '#b93fb3',

}

export const fonts = {
	subtitle : 24,
	title : 32,
}

export const space ={
	xxxsmall: 1,
	xxsmall: 3, 
	xsmall : 5,
	small : 10,
	med : 20,
	lrg : 30,
	xlrg : 50,
}

export const common ={
	container: {
	    flex: 1,
	    backgroundColor: colors.white,
	    marginLeft: space.small,
	    marginRight: space.small,
	    alignItems: 'stretch',
	    justifyContent: 'center',
	},
	centeredContainer: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	title: {
	    height: space.xlrg,
	    textAlign: 'center',
	    fontSize: fonts.title,
	},
	subtitle: {  
	    fontSize: fonts.subtitle,
	    textAlign: 'center',
	},
	btn: {
	    backgroundColor: colors.purple,
	    padding: space.small,
	    paddingLeft: space.xlrg,
	    paddingRight: space.xlrg,
	    justifyContent : 'center',
	    alignItems: 'center',
	    borderRadius: space.xxsmall,
	    marginTop: space.med,
	},
	btnText: {
	    color: colors.white,
	},
	input: {
	    height: space.xlrg,
	    padding: space.small,
	    borderRadius: space.xxsmall,
	    borderWidth: space.xxxsmall,
	    borderColor: colors.darkGray,
	}
}

