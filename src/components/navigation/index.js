import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { purple, white } from '../../utils/colors'

import QuizList from '../../views/QuizList'
import AddQuiz from '../../views/AddQuiz'
import QuizDetail from '../../views/QuizDetail'


export const Tabs = TabNavigator({
	QuizList: {
		screen: QuizList,
		navigationOptions: {
			tabBarLabel: 'History',
			tabBarIcon: ({tintColor}) => <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
		}
	},
	AddQuiz: {
		screen: AddQuiz,
		navigationOptions: {
			tabBarLabel: 'Add Quiz',
			tabBarIcon: ({tintColor}) => <FontAwesome name="plus-square" size={30} color={tintColor} />
		},
	},
},
	{	
		navigationOptions: {
			header: null
		},
		tabBarOptions: {
			activeTintColor: Platform.OS === 'ios' ? purple : white, 
			style: {
				height: 56,
				backgroundColor: Platform.os === 'ios' ? white : purple,
				shadowColor: 'rgba(0,0,0,0.24)',
				shadowOffset: {
					width: 0,
					height: 3
				},
				shadowRadius: 6,
				shadowOpacity: 1
			}
		}
})
export const MainNavigator = StackNavigator({
	Home: {
		screen: Tabs,
	},
	QuizDetail: {
		screen: QuizDetail,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple,
			}
		}
	}
})