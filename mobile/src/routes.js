import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevFinder'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'GitHub profile'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#1F1345',

            }
        }
    })
);

export default Routes;