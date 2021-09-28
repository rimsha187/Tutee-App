import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, } from 'react-native'
import User from 'react-native-vector-icons/AntDesign';
import Eye from 'react-native-vector-icons/Ionicons';
import Lock from 'react-native-vector-icons/MaterialIcons';
export default class LogIn extends Component {
    state = {
        username: '',
        Pass: '',
        showPass: true,
        password: '',

    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.starttext}> Log In</Text>
                    <Text style={styles.bodytext}> Create Account to Continue</Text>
                    <View style={styles.container1}>
                        <View style={styles.container2}>
                            <View style={styles.container3} >
                                <View style={styles.textboxcontainer}>
                                    <View style={styles.textbox}>
                                        <User style={styles.iconstyle} name="user" size={20} color='white' />
                                        <TextInput style={{ paddingStart: 15 }}
                                            placeholder='name'
                                            placeholderTextColor="white" />
                                    </View>
                                    <View style={styles.textbox3}>
                                        <Lock style={styles.iconstyle} name="lock-outline" size={20} color='white' />
                                        <TextInput style={{ paddingStart: 20, flex: 1 }}
                                            placeholder='Password'
                                            placeholderTextColor="white"
                                            value={this.state.Pass}
                                            secureTextEntry={this.state.showPass}
                                            onChangeText={(txt) => this.setState({ Pass: txt })} />
                                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                                            onPress={() => this.setState({ showPass: !this.state.showPass })}>
                                            <Eye style={styles.EyeIcon} name={this.state.showPass == true ? 'eye-off-outline' : 'eye-outline'} size={20} color="white" />
                                        </TouchableOpacity>

                                    </View>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('SignUp')}
                                        style={styles.btn}>

                                        <Text style={styles.SignUptxt}>Log In</Text>
                                    </TouchableOpacity>

                                    <View style={styles.lasttxtcontainer}>
                                        <Text style={styles.alreadyText}>Don't Have Account? </Text>
                                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('SignUp')}>
                                            <Text style={styles.SignInText}>Sign Up</Text>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '32%' }}>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    container1:
    {
        backgroundColor: '#F3F4F6',
        height: '100%',
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        marginTop: '30%'
    },
    container2:
    {
        backgroundColor: '#EAECEF',
        height: '100%',
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        marginTop: '20%'
    },
    container3:
    {
        backgroundColor: '#07193F',
        height: '100%',
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        marginTop: '20%'
    },
    starttext:
    {
        color: '#07193F',
        fontSize: 30,
        marginTop: 20,
        marginHorizontal: 25
    },
    bodytext:
    {
        fontSize: 16,
        color: '#07193F',
        paddingTop: 10,
        marginHorizontal: 25
    },

    textboxcontainer:
    {

        marginTop: 50,
        marginHorizontal: 25

    },
    textbox: {
        marginHorizontal: 15,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#1A2A4D',
        paddingStart: 20,
        flexDirection: 'row',
    },


    textbox3: {
        marginHorizontal: 15,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#1A2A4D',
        paddingStart: 20,
        marginTop: 20,
        flexDirection: 'row',

    },
    btn: {
        marginHorizontal: 15,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'white',
        paddingStart: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "30%"
    },
    SignUptxt:
    {

        fontSize: 18,
        color: '#07193F'

    },
    lasttxtcontainer:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
    },
    alreadyText:
    {
        color: 'white',
        fontSize: 16,
    },
    SignInText:
    {
        color: 'white',
        fontSize: 16
    },

    iconstyle: {
        marginTop: 20, marginStart: 5
    },

    iconstyle1: {
        marginTop: 20, marginStart: 5,
    },
    EyeIcon:
    {
        paddingEnd: 20
    },
});
