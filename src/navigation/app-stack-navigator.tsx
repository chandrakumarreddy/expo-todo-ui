import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabNavigator from "./botton-tab-navigator";
import { AppStackParamList } from "./types";

const Stack = createNativeStackNavigator<AppStackParamList>();

const options = {
  headerShown: false,
};

const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
