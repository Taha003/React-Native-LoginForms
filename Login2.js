import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { ImageBackground } from 'react-native'
import Image1 from './Assets/BackgroundImage.jpg'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { Pressable } from 'react-native'
const Login2 = () => {
    let userName='userName'
  return (
    <View>
        <ImageBackground source={Image1} style={{height:800}} resizeMode='cover'>
        <Text style={{textAlign:'center',fontSize:100,color:'white'}}>Login</Text>
        <TextInput plac  style={styles.textInput} placeholder="Username"  placeholderTextColor="white"/>
        <TextInput plac  style={styles.textInput2} placeholder="Password"  placeholderTextColor="white"/>
        <Pressable style={styles.button}><Text style={styles.text}>Sign in</Text></Pressable>

        </ImageBackground>
        </View>
  )
}
const styles=StyleSheet.create({
    textInput: {
        
        padding:10,
        textAlign:'center',
        justifyContent: "center",
        // alignItems: "stretch",
        // borderRightWidth: 1,
        // borderLeftWidth: 1,
        // borderTopWidth:1,
        borderBottomWidth:5,
        marginLeft:10,
        marginRight:10,
        height: 50,
        borderColor:'black',
        borderBottomColor:'black',
        fontSize:25,
        marginTop:50,
        color:'blue'
        
      },
      textInput2: {
        
        padding:10,
        textAlign:'center',
        justifyContent: "center",
        // alignItems: "stretch",
        // borderRightWidth: 1,
        // borderLeftWidth: 1,
        // borderTopWidth:1,
        borderBottomWidth:5,
        marginLeft:10,
        marginRight:10,
        height: 50,
        borderColor:'black',
        borderBottomColor:'black',
        fontSize:25,
        marginTop:100,
        color:'blue'
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginTop:30,
        backgroundColor: 'skyblue',
        marginLeft:10,
        marginRight:10
      },
    
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
})
export default Login2