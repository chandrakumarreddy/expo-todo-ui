import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CategoriesStackParamList } from "./types";
import CategoriesScreen from "@/screens/bottom-tabs/categories";
import CategoryScreen from "@/screens/bottom-tabs/categories/category";
import CreateCategoryScreen from "@/screens/bottom-tabs/categories/create-category";

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const options = {
  headerShown: false,
};

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={options}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={options}
      />
      <Stack.Screen
        name="CreateCategory"
        component={CreateCategoryScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStackNavigator;
