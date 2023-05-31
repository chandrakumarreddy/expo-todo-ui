import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import AuthStackNavigator from "./auth-stack-navigator";
import AppStackNavigator from "./app-stack-navigator";

export default function Navigation() {
  return (
    <NavigationContainer>
      {/* <AuthStackNavigator /> */}
      <AppStackNavigator />
    </NavigationContainer>
  );
}
