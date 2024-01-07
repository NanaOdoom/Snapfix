import * as SplashScreen from "expo-splash-screen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import React from 'react'
import Login from "./screen/Login"
import Signup from "./screen/Signup"
import Verifcation from "./screen/Verifcation"
import Home from "./screen/Home"

// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Login"
        >
          <Stack.Screen 
          name="Login"
          component={Login}
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="Verify"
          component={Verifcation}
          options={{headerShown:false}}
          />
          <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}
