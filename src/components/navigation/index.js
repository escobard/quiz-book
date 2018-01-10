import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { purple, white } from '../../utils/colors'

import QuizList from '../../views/QuizList'
import AddQuiz from '../../views/AddQuiz'


export const Tabs = TabNavigator({
	// determines the tab name
	QuizList: {
		// determines the component rendered by this route
		screen: QuizList,

		// determins the options, for full options view the documentation above
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
		// adds navigation options to the tab navigator component
		navigationOptions: {
			header: null
		},

		// this adds options to the entire tab navigator component
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

// this will be utilized as the main navigation component
// this contains the navigation history, which keeps track of the nav. history much like BrowserHistory
// this can be used in combination with the Tabs const above, to add a separate navigational screen parameter
// this can then be accessed with the this.props.navigation.navigate('EntryDetail',{any other props go in this object}) parameter


export const MainNavigator = StackNavigator({
	Home: {
		screen: Tabs,
	},
	/*
	EntryDetail: {
		screen: EntryDetail,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple,
			}
		}
	} */
})


// there is also the DrawerNavigator component, very similar to TabNavigator
// However, when the navigation handler is clicked, a drawer opens up, to the left or right
// similar to the menus on the web that do more or less the same thing
// sample code below

/* 

COMPONENTS 
----------
const Home = ({ navigation }) => (
  <View>
    <Text>This is the Home view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Text>Press here to open the drawer!</Text>
    </TouchableOpacity>
  </View>
);

const Dashboard = ({ navigation }) => (
  <View>
    <Text>This is the Dashboard view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Text>Press here to open the drawer!</Text>
    </TouchableOpacity>
  </View>
);

NAV ROUTES
----------
const Drawer = DrawerNavigator({
  Home: {
    screen: Home
  },
  Dashboard: {
    screen: Dashboard
  }
});

PARENT COMPONENT
----------------
export default class App extends React.Component {
  render() {
    return (
      <Drawer />
    );
  }
}

*/