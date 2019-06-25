import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import email from '../assets/icon/email.png';
import back from '../assets/icon/back.png';
import facebook from '../assets/icon/facebook.png';
import instagram from '../assets/icon/instagram.png';
import profileIc from '../assets/icon/profile.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
class AboutUs extends Component {
    goBackMain(){
        const {navigation} = this.props;
        navigation.pop();
    }
    render() {
        const { wrapper, profile, row, image, text,bottom,top,icon } = styles;
        return (
            <View style={wrapper}>
                <View style={top}>
                    <TouchableOpacity style={icon} onPress={this.goBackMain.bind(this)}>
                        <Image style={{width:40,height:40}} source={back}/>
                    </TouchableOpacity>
                    <Text style={{fontFamily:'Avenir',color:'black',fontSize:30}}>About us</Text>
                    <View style={{width:40,height:40}}></View>
                </View>
                <View style={bottom} >
                    <View style={profile}>
                        <View style={row}>
                            <Image style={image} source={profileIc} />
                            <Text style={text}>Nguyen Quang Duc</Text>
                        </View>
                        <View style={row}>
                            <Image style={image} source={facebook} />
                            <Text style={text}>fb.me/quduc15</Text>
                        </View>
                        <View style={row}>
                            <Image style={image} source={instagram} />
                            <Text style={text}>@quducc</Text>
                        </View>
                        <View style={row}>
                            <Image style={image} source={email} />
                            <Text style={text}>nqduc74@gmail.com</Text>
                        </View>

                    </View>
                    <View style={profile}>
                        <View style={row}>
                            <Image style={image} source={profileIc} />
                            <Text style={text}>Nguyen Tuan Anh</Text>
                        </View>
                        <View style={row}>
                            <Image style={image} source={facebook} />
                            <Text style={text}>fb.me/toanh2612</Text>
                        </View>
                        <View style={row}>
                            <Image style={image} source={instagram} />
                            <Text style={text}>@toanh2612</Text>
                        </View>
                        <View style={row}>
                            <Image style={image} source={email} />
                            <Text style={text}>toanhkma@gmail.com</Text>
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
    top:{
        flex:40,
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:10,
        marginRight:10,
        marginTop:30
        
    },
    bottom:{
        flex:60,
        flexDirection: 'row',
        justifyContent:'space-between'
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
        width: 30,
        height: 30
    },
    text: {
        color: 'black',
        fontFamily: 'Avenir'
    }
})
export default AboutUs;