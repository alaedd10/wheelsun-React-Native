import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Colors, Values } from '../../constants'
type inputProps = {
    label: string,
    placeholder: string,
    isPassword: boolean
}
const input = ({ label, placeholder, isPassword }: inputProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}:</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={isPassword}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    label: {
        fontSize: Values.labelTextSize,
        color: Colors.textColor,
        fontWeight: 'bold',
        marginVertical: 10,
        alignSelf: "flex-start"
    },
    input: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '80%',
        height: 50,
        backgroundColor: Colors.inputColors
    }
})


export default input
