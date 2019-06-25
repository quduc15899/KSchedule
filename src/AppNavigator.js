import Information from './component/Information';
import AboutUs from './component/AboutUs';
import Main from './component/Main/Main';
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
const Navigator = createStackNavigator(
    {
        "Main": {
            screen: Main,
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
const AppContainer = createAppContainer(Navigator);
class AppNavigator extends Component {
    constructor(props) {
        super(props);
        const res = this.props.navigation.getParam('res');
        this.state = {
            data: res.data.schedule,
            info: res.data
        }

    }
    render() {
        const { info, data } = this.state;
        return <AppContainer
            screenProps={{
                info: info,
                data: data
            }}
        />
    }
}
export default AppNavigator;
