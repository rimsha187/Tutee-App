import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Octicons from 'react-native-vector-icons/Octicons'
export default class SignUp extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <Text style={styles.starttext}> Sign Up</Text>
                <View style={[styles.container1]} >


                    <View style={{
                        marginTop: 20,
                        marginHorizontal: 25
                    }}>
                        <View style={styles.textbox}>
                            <AntDesign style={styles.iconstyle} name="user" size={20} color='white' />
                            <TextInput style={{ paddingStart: 15, }}
                                placeholder='Name'
                                placeholderTextColor="white" />
                        </View>

                        <View style={styles.textbox}>
                            <Fontisto style={styles.iconstyle} name="email" size={20} color='white' />
                            <TextInput style={{ paddingStart: 15, }}
                                placeholder='Email'
                                placeholderTextColor="white" />
                        </View>
                        <View style={styles.textbox}>
                            <Fontisto style={styles.iconstyle} name="phone" size={20} color='white' />
                            <TextInput style={{ paddingStart: 15, }}
                                placeholder='Phone Number'
                                placeholderTextColor="white" />
                        </View>
                        <View style={styles.textbox}>
                            <MaterialIcons style={styles.iconstyle} name="batch-prediction" size={20} color='white' />
                            <TextInput style={{ paddingStart: 15, }}
                                placeholder='Batch'
                                placeholderTextColor="white" />
                        </View>
                        <View style={styles.textbox}>
                            <MaterialIcons style={styles.iconstyle} name="subject" size={20} color='white' />
                            <TextInput style={{ paddingStart: 15, }}
                                placeholder='Program'
                                placeholderTextColor="white" />
                        </View>
                        <View style={styles.textbox}>
                            <MaterialIcons style={styles.iconstyle} name="lock-outline" size={20} color='white' />
                            <TextInput style={{ paddingStart: 15, }}
                                placeholder='Password'
                                placeholderTextColor="white" />
                        </View>
                        <View style={styles.textbox}>
                            <Octicons style={styles.iconstyle} name="lock" size={20} color='white' />
                            <TextInput style={{ paddingStart: 15, }}
                                placeholder='Confirm Password'
                                placeholderTextColor="white" />
                        </View>

                    </View>

                    <View>
                        <TouchableOpacity activeOpacity={0.5}
                            style={styles.btn}>
                            <Text style={styles.SignUptxt}>Submit</Text>
                        </TouchableOpacity>
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
        marginTop: '10%',
        marginHorizontal: 25
    },

    textbox: {
        marginTop: 20,
        marginHorizontal: 15,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#1A2A4D',
        marginLeft: '5%', flexDirection: 'row',

    },

    btn: {
        marginHorizontal: 35,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'white',


        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "10%", marginBottom: 20
    },
    SignUptxt:
    {

        fontSize: 18,
        color: '#1A2A4D'
    },
    iconstyle: {
        marginTop: 15, marginStart: 20,
    },
});

