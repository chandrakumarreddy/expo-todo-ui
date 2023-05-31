import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./auth-stack-navigator";
import AppStackNavigator from "./app-stack-navigator";
import useUserGlobalStore from "@/store/useUserGlobalStore";

export default function Navigation() {
  const { user, updateUser } = useUserGlobalStore();
  useEffect(() => {
    setTimeout(() => {
      updateUser(null);
    }, 5000);
  }, []);
  return (
    <NavigationContainer>
      {user ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
