import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class LogIn extends Component {

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.starttext}> welcome</Text>

                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <View style={{
                            marginTop: 70,


                        }}>
                            <Image style={{
                                height: 200, width: '100%', position: 'absolute', marginTop: 50
                            }}
                                source={require('../../assets/image/image.png')} />
                        </View>
                        <View style={styles.container3} >
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={() => this.props.navigation.navigate('LogIn')}
                                style={styles.btnlogin}>

                                <Text style={styles.SignUptxt}>Log In</Text>
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity activeOpacity={0.5}
                                    onPress={() => this.props.navigation.navigate('SignUp')}
                                    style={styles.btnsignup}>

                                    <Text style={styles.SignUptxt}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

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
        backgroundColor: 'white',
        height: '100%',
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        marginTop: '30%'
    },
    container2:
    {
        backgroundColor: 'white',
        height: '100%',
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        marginTop: '30%'
    },
    container3:
    {
        backgroundColor: '#07193F',
        height: '100%',
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        marginTop: '55%'
    },
    starttext:
    {
        color: '#07193F',
        fontSize: 30,
        marginTop: 20,
        marginHorizontal: 25
    },
    btnlogin: {
        marginHorizontal: 75,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'white',


        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "15%"
    },
    btnsignup: {
        marginHorizontal: 75,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'white',


        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "10%"
    },
    SignUptxt:
    {

        fontSize: 18,
        color: '#07193F'

    },
    textboxcontainer:
    {

        marginTop: 50,
        marginHorizontal: 25

    },



});

