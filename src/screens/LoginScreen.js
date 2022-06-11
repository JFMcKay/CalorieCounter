// This is where the login stuff will go I'll create some dummy before adding
// real authentication
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.viewStyles}>
        <TextInput style={styles.inputStyle}
            placeholder='Username' 
            autoCapitalize='none'
            autoCorrect={false}    
        />
        <TextInput style={styles.inputStyle}
            placeholder='Password' 
            autoCapitalize='none'
            autoCorrect={false}  
        />
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
        backgroundColor: 'green',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        height: '100%',
    },
    touchOpacityStyle: {
        backgroundColor: 'black',
        width: 250,
        height: 100,
    }, 
    textStyle: {
        color: 'white',
        backgroundColor: 'black',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 5,
    },
    inputStyle: {
        backgroundColor: '#fefefe',
        borderRadius: 5,
        margin: 5,
        padding: 10,
        fontSize: 18,
    }

})