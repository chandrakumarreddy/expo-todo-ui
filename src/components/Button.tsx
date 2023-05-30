import { View, Text, Pressable } from "react-native";
import React from "react";

export default function Button() {
  return (
    <Pressable onPress={() => alert("hi")}>
      <Text>Button</Text>
    </Pressable>
  );
}
