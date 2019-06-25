import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import drawer_logo from '../../assets/icon/drawer_logo.png';
import aboutus from '../../assets/icon/aboutus.png';
import infor from '../../assets/icon/infor.png';
import signout from '../../assets/icon/signout.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
class Menu extends Component {
    gotoAboutUs(){
        const {navigation} = this.props;
        navigation.navigate('AboutUs');
    }
    gotoInformation(){
        const {navigation} = this.props;
        navigation.navigate('Information');
    }
    gotoAuthentication(){
        const {navigation} = this.props;
        navigation.navigate('Login');
    }
    render() {
        const { container, top, image, bottom,
            btn, btnText } = styles;
        const {res} = this.props;
        return (
            <View style={container}>
                <View style={top}>
                    <Image style={image}
                        source={drawer_logo}
                    />
                </View>
                <View style={bottom}>

                    <TouchableOpacity style={btn} res={res} onPress={this.gotoInformation.bind(this)}>
                        <Image style={{ width: 50, height: 50 }} source={infor} />
                        <Text style={btnText}>Information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btn} onPress={this.gotoAboutUs.bind(this)}>
                        <Image style={{ width: 50, height: 50 }} source={aboutus} />
                        <Text style={btnText}>About & Contact Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btn} onPress={this.gotoAuthentication.bind(this)}>
                        <Image style={{ width: 50, height: 50 }} source={signout} />
                        <Text style={btnText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#68c2e8',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },
    top: {
        flex: 40,
        alignItems: 'center',
        margin: 50
    },
    bottom: {
        flex: 60,
        alignItems: 'center',
    },
    image: {
        width: (width * 0.6) - 50,
        height: (width * 0.6) - 50
    },
    btn: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:70
    },
    btnText: {
        fontFamily: 'Avenir',
        color: 'white',
        fontSize:16
    }
});
export default Menu;