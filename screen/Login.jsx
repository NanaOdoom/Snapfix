import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, Alert, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from "@react-native-async-storage/async-storage"

const Login = ({navigation}) => {
  const [ email, setEmail] = useState("");

  useEffect(()=>{
    getchecker();
  },[]);

  const getchecker = () =>{
    try {
      AsyncStorage.getItem("Usermail")
      .then(value=>{
        if (value != null){
          navigation.navigate("")
        }
      })
    } catch (error) {
      
    }
  }

  const handleAddEmail = () =>{
    console.log(email);
    setEmail(null);
    navigation.navigate("Verify")
  }

  const checker = async() =>{
    if (email.length > 5){
        try {
          await AsyncStorage.setItem("Usermail", email)
        } catch (error) {
        console.log(error);          
        }
        handleAddEmail()
    }
    else{
        Alert.alert("invalid email")
    }
  }

  return (
    <>
    <StatusBar style='auto'/>
    <SafeAreaView style={{ flex:1, backgroundColor: "#FBFBFB"}}>
        <View style={{marginHorizontal:25, marginTop:30}}>
         <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:26, color:"#000", fontWeight:600}}>SNAPFIX</Text>
         </View>
         <View style={{marginTop:58}}>
            <Text style={{
                fontSize:22,
                fontWeight:500,
            }}>
                Sign In
            </Text>
            <Text style={{color:"rgba(26, 41, 61, 0.83)"}}>
                Enter your email below to sign in
            </Text>
         </View>
         <KeyboardAvoidingView>
         <View style={{marginTop:27}}>
            <Text style={{
                color:"rgba(26, 41, 61, 0.83)",
                fontSize: 14
            }}>
                Email*
            </Text>
            <TextInput
            placeholder='example@domain.com'
            value={email}
            onChangeText={(text)=>{
                setEmail(text);
            }}
            style={{
                padding:10,
                borderWidth:1,
                borderColor: "rgba(26, 41, 61, 0.83)",
                width:"100%",
                borderRadius:5,
                height:50,
                justifyContent:"center",
                alignItems:"center",
                fontSize: 14
            }}
            keyboardType="email-address"
            />
         </View>
         <View style={{marginTop:10}}>
            <TouchableOpacity
            onPress={()=>{checker()}}
            style={{
                width:"100%",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#0000009E",
                height: 50,
                borderRadius:5,
                padding:10
            }}>
                <Text
                style={{
                    fontSize:20,
                    color:"#fff"
                }}>
                    SIGN IN
                </Text>
            </TouchableOpacity>
         </View>
         <View style={{
            marginTop:27,
            justifyContent:"center",
            alignItems:"center"
            }}>
                <View style={{
                    flexDirection:"row",
                    gap:5
                }}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity
                    >
                        <Text style={{fontWeight:600}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
         </View>
        </KeyboardAvoidingView>
        </View>
    </SafeAreaView>
    </>
  )
}

export default Login