import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";
import WelcomeScreen from "@/screens/welcome";
import SignInScreen from "@/screens/auth/signin";
import SignUpScreen from "@/screens/auth/signup";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const options = {
  headerShown: false,
};

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={options}
        component={WelcomeScreen}
      />
      <Stack.Screen name="SignIn" options={options} component={SignInScreen} />
      <Stack.Screen name="SignUp" options={options} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
