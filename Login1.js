import React from 'react'
import { View } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { Pressable } from 'react-native';


function Login1() {
  return (
        <View style={styles.container}>
      <Text style={{fontSize:50}}>Login Form</Text>
      <Text style={{color:'blue',marginTop:20}}>UserName:</Text>
      <TextInput style={styles.textInput}/>
      <Text style={{color:'blue',marginTop:40}}>Password:</Text>
      <TextInput style={styles.textInput}/>
       <Pressable style={styles.button}><Text style={styles.text}>Sign in</Text></Pressable>
      
   
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
      display:'flex',
      flexDirection:'column',
      marginTop:20,
      textAlign:'center',
      marginLeft:50,
      padding:10,
    },
    textInput: {
      padding:2,
      textAlign:'center',
      justifyContent: "center",
      alignItems: "stretch",
      // borderRightWidth: 1,
      // borderLeftWidth: 1,
      // borderTopWidth:1,
      borderBottomWidth:1,
      height: 50,
      borderColor:'black',
      borderBottomColor:'blue'
    },
    btn:{
      padding:10,
      margin:10,
      color:'red'
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
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    
  })
export default Login1