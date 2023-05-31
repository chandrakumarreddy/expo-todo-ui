import EditTaskScreen from "@/screens/bottom-tabs/home/edit-task";
import HomeScreen from "@/screens/bottom-tabs/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeStackParamList } from "./types";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const options = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={options} />
      <Stack.Screen
        name="EditTask"
        component={EditTaskScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
