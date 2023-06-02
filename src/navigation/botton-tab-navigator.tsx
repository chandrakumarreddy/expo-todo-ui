import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottonTabParamList } from "./types";
import HomeStackNavigator from "./home-stack-navigator";
import CompletedScreen from "@/screens/bottom-tabs/completed";
import TodayScreen from "@/screens/bottom-tabs/today";
import CategoriesStackNavigator from "./categories-stack-navigator";
import { useTheme } from "@shopify/restyle";
import Icons from "@/components/shared/icons";

const Tab = createBottomTabNavigator<RootBottonTabParamList>();

export default function BottonTabsNavigator() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: theme.colors.gray550,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => <Icons name="home" color={color} />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={() => ({
          title: "Completed",
          tabBarIcon: ({ color }) => <Icons name="completed" color={color} />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={() => ({
          title: "Today",
          tabBarIcon: ({ color }) => <Icons name="calendar" color={color} />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="CategoriesStack"
        component={CategoriesStackNavigator}
        options={() => ({
          title: "Categories",
          tabBarIcon: ({ color }) => <Icons name="categories" color={color} />,
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
}
