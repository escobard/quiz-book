import React from 'react'
import { View, StatusBar} from 'react-native'
import { Constants } from 'expo'

// this changes the color and adds the proper margin to elements depending on which device they are rendered under
export default function UdaciStatusBar ({ backgroundColor, props }) {
	return (
		<View style={{backgroundColor, height: Constants.statusBarHeight}}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}