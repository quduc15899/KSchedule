import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, Image, Dimensions, KeyboardAvoidingView,Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Loading from '../component/Main/Loading';
import getData from '../api/getData';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maSV: '',
            password: '',
            loading: false,
            loadingVisible: false,
        }
        this.handleLoginButton = this.handleLoginButton.bind(this);
    }
    handleLoginButton() {
        this.setState({ loadingVisible: true });
        const { navigation } = this.props;
        const { navigate } = navigation;
        const { maSV, password } = this.state;
        getData(maSV, password)
            .then(res => {
                if (res.success == true) {
                    this.setState({loadingVisible: false });
                    navigate('AppNavigator', { res });
                } else {
                    this.setState({ loadingVisible: false });
                    Alert.alert('Error with Login','Wrong Password or Student Code !');
                }
            })
    }
    render() {
        const { wrapper, top, logoImage, bottom, body
            , formLogin, input, icon, inputForm, loginText, login, copyright } = styles;
        const { loadingVisible, maSV, password } = this.state;
        return (
            <KeyboardAvoidingView style={wrapper} behavior="padding" s>
                <View style={top}>
                    <Image
                        style={logoImage}
                        source={require('../assets/icon/logoLogin.png')}
                    />
                </View>
                <View style={body} >
                    <View style={formLogin}>
                        <View style={inputForm}>
                            <Image
                                style={icon}
                                source={require('../assets/icon/user.png')} />
                            <TextInput
                                style={input}
                                placeholder="Mã sinh viên"
                                value={maSV}
                                onChangeText={text => this.setState({ maSV: text })}

                            />
                        </View>
                        <View style={inputForm}>
                            <Image style={icon}
                                source={require('../assets/icon/password.png')}
                            />
                            <TextInput style={input}
                                placeholder="Mật khẩu"
                                value={password}
                                secureTextEntry
                                onChangeText={text => this.setState({ password: text })}
                            />
                        </View>
                    </View>
                    <View >
                        <TouchableOpacity style={login} onPress={this.handleLoginButton}>
                            <Image style={icon}
                                source={require('../assets/icon/right_arrow.png')}
                            />
                            <Text style={loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <Loading
                        modalVisible={loadingVisible}
                        animationType="fade"
                    />
                </View>
                <View style={bottom}>
                    <Text style={copyright}> COPYRIGHT @2019  by quduc</Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    top: {
        flex: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoImage: {
        width: width - 150,
        height: width - 150,
        margin: 20

    },
    body: {
        flex: 50,
    },
    bottom: {
        flex: 10,
        alignItems: 'center'
    },
    copyright: {
        justifyContent: "flex-end",
        fontSize: 12,
        fontFamily: 'Avenir',
        color: '#68c2e8'

    },
    formLogin: {
        margin: 30,
    },
    inputForm: {
        flexDirection: 'row',
        marginLeft: 30,
        marginBottom: 5,
        padding: 5
    },
    input: {
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#68c2e8',
        fontFamily: 'Avenir',
        color: '#68c2e8',
        marginLeft: 10,
        height: 50,
        width: width - 200,
    },
    loginText: {
        marginLeft: 5,
        fontSize: 20,
        color: '#68c2e8',
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    login: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
    }
});
export default Login;
