import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Values, Colors } from '../../constants'

type typeProps = {
    title: string,
}

const header = ({title}: typeProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: 25,
    },
    title: {
        fontSize: Values.buttonTextSize,
        fontWeight: '700',
        color: Colors.textColor,
    }
})

export default header
