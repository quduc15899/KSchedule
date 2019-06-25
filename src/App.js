import Login from './component/Login';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
const LogginNavigator = createStackNavigator(
    {
        "Login": {
            screen: Login,
        },
        AppNavigator: AppNavigator,
    },
    {
        defaultNavigationOptions: {
            header: null
        },
    }
);
export const App = createAppContainer(LogginNavigator);