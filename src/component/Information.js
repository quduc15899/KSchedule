import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import studentcode from '../assets/icon/studentcode.png';
import back from '../assets/icon/back.png';
import majoir from '../assets/icon/majoir.png';
import classIc from '../assets/icon/class.png';
import user from '../assets/icon/user.png';


class Information extends Component {
    goBackMain() {
        const { navigation } = this.props;
        navigation.pop();
    }

    render() {
        const { wrapper, profile, row, image, text, bottom, top, icon } = styles;
        const {info} = this.props.screenProps;
        return (
            <View style={wrapper}>
                <View style={top}>
                    <TouchableOpacity style={icon} onPress={this.goBackMain.bind(this)}>
                        <Image style={{ width: 40, height: 40 }} source={back} />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Avenir', color: 'black', fontSize: 30 }}>Information</Text>
                    <View style={{ width: 40, height: 40 }}></View>
                </View>
                <View style={bottom} >
                    <View style={profile}>
                        <View style={row}>
                            <Image style={image} source={user} />
                            <Text style={text}>{info.name}</Text>
                        </View>
                        <View style={row}>
                            <Image style={image} source={classIc} />
                            <Text style={text}>{info.class_name}</Text>
                        </View>
                        <View style={row}>
                            <Image style={image} source={studentcode} />
                            <Text style={text}>{info.username}</Text>
                        </View>
                        <View style={row}>
                            <Image style={image} source={majoir} />
                            <Text style={text}>{info.majors}</Text>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#68c2e8',
    },
    top: {
        flex: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30

    },
    bottom: {
        flex: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profile: {
        flexDirection: 'column',
    },
    row: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 40,
        height: 40
    },
    text: {
        color: 'black',
        fontFamily: 'iCielPanton-BlackItalic',
        fontSize: 13,

    }
})
export default Information;