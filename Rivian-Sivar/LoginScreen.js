import React from 'react'
import { KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native'


const LoginScreen =() => {
  
    return (
     
          <KeyboardAvoidingView style={styles.container}
          behavior="padding">
              <View style={styles.InputContainer1}>
                  <TextInput placeholder='Users'
             
                  style={styles.inputText}/>
                   </View>
                   <View style={styles.InputContainer1}>
                   <TextInput placeholder='Password'
               
                  style={styles.inputText}
                  secureTextEntry/>
                  </View>
             
              <View style={styles.buttonContainer1}>
                  <TouchableOpacity
                  onPress={() =>{}}
                  style={styles.button}>
                  <Text style={styles.buttonText1}>INICIAR SESION</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={styles.buttonContainer2}>
                  <TouchableOpacity
                  onPress={() =>{}}
                  style={styles.button}>
                  <Text style={styles.buttonText2}>REGISTRARME</Text>
                  </TouchableOpacity>
                
              </View>
          </KeyboardAvoidingView>     
    )
  }

export default LoginScreen
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputContainer1:{
        borderColor:  ("#0E4C59"),
        borderWidth: 2,
        width: "85%",
        height: 50,
        marginBottom: 20,
        borderRadius: 15,
        textAlign:"center",
        alignItems:"center",
        paddingTop: 10

    },
    InputContainer2:{
        borderColor:  ("#0E4C59"),
        borderWidth: 2,
        width: "85%",
        height: 50,
        marginTop:"5%",
        borderRadius: 15,
        textAlign:"center",
        alignItems:"center",
        paddingTop: 10

    },
    buttonContainer1:{
        backgroundColor:("#0E4C59"),
        marginTop: 25,
        width: "75%",
        height: 50,
       elevation: 25,
        borderRadius: 10,
        borderColor:  "black",
        borderWidth: 2,

    },
    buttonContainer2:{
        backgroundColor:"white",
        marginTop: 10,
        width: "75%",
        height: 50,
       elevation: 25,
        borderRadius: 10,
        borderColor:("#0E4C59"),
        borderWidth: 2,

    },
    buttonText1:{
        textAlign:"center",
        padding: 10,
        color:"white"
    },
    buttonText2:{
        textAlign:"center",
        padding: 10,
        color:("#0E4C59")
    }

    
})