import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { Colors, Values } from '../../constants'
import Input from '../../components/Input'
import Header from '../../components/Header'
import Button from '../../components/Button'
export default class SignIn extends Component {
    navigate() {
        this.props.navigation.navigate('Sign In')
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.top}>
                    <Header title={'SIGN IN'} />
                    <Input label={'email'} placeholder={'email@example.com'} isPassword={false}/>
                    <Input label={'password'} placeholder={''} isPassword={true} />
                </View>
                <View style={styles.bottom}>
                    <Button text={'Sign Up'} />
                </View>
            </KeyboardAvoidingView>
        )
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    top: {
        flex: 2,
    },
    bottom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 1,
    },
})
