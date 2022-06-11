// This is where the login stuff will go I'll create some dummy before adding
// real authentication
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.viewStyles}>
        <TouchableOpacity onPress={() => console.log("Touchable opacity pressed")}>
            <View style={styles.textOpacityStyle}>
                <Text style={styles.textStyle}>
                    Login
                </Text>
            </View>
            
        </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    viewStyles: {
        backgroundColor: 'red',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        height: '100%',
    },
    touchOpacityStyle: {
        backgroundColor: 'black',
        width: 250,
        height: 100,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    textStyle: {
        color: 'white',
        backgroundColor: 'black',
        width: '100%',
    }

})