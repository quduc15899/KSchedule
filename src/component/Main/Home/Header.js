import React, { Component } from 'react';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import menuIcon from '../../../assets/icon/menu.png';
import ic_logo from '../../../assets/icon/ic_logo.png';
class Header extends Component {
    render() {
        const { header, menu, icon, text } = styles;
        return (
            <View style={header}>
                <TouchableOpacity style={menu}
                    onPress={this.props.onOpen}
                >
                    <Image style={icon}
                        source={menuIcon} />
                </TouchableOpacity>
                <Text style={text}>KSCHEDULE</Text>
                <View style={{ width: 40, height: 40 ,marginRight:10}}>
                    <Image style={icon}
                        source={ic_logo} />
                </View>

            </View>
        );
    }
}
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    header: {
        height: height / 10,
        backgroundColor: '#68c2e8',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menu: {
        margin: 10
    },
    icon: {
        width: 40,
        height: 40
    },
    text: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#fff',

    },

});
export default Header