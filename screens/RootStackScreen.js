import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./SplashScreen";
// import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        {/* <RootStack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    </RootStack.Navigator> 
)

export default RootStackScreen;