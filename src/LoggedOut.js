import Login from './component/Login';
import Information from './component/Information';
import AboutUs from './component/AboutUs';
import Main from './component/Main/Main';
import { createStackNavigator, createAppContainer } from 'react-navigation';
const LoggedOut = createStackNavigator({
    "Logout":{
        screen:Logout
    },
    "Login":{
        screen:Login
    }
})
const AppNavigator = createStackNavigator(
    {
        "Main": {
            screen: Main,
        },
        "Logout": {
            screen: LoggedOut,
        },
        "Information": {
            screen: Information,
        },
        "AboutUs": {
            screen: AboutUs,
        },
    },
    {
        defaultNavigationOptions: {
            header: null
        },
    });
const LogginNavigator = createStackNavigator(
    {
        "Login": {
            screen: Login,
        },
        AppNavigator: AppNavigator
    },
    {
        defaultNavigationOptions: {
            header: null
        },
    }
);
export default LoggedOut;