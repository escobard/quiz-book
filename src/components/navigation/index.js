import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { purple, white } from '../../utils/colors'

import AddQuiz from '../../views/AddQuiz'
import AddCard from '../../views/AddCard'
import QuizDetail from '../../views/QuizDetail'
import QuizList from '../../views/QuizList'
import QuizView from '../../views/QuizView'

export const Tabs = TabNavigator({
	QuizList: {
		screen: QuizList,
		navigationOptions: {
			tabBarLabel: 'Quiz List',
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
	},
	AddCard: {
		screen: AddCard,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple,
			}
		}
	},
	QuizView: {
		screen: QuizView,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple,
			}
		}
	},

})