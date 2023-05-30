import { Pressable } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/theme";

export default function Button() {
  return (
    <Pressable onPress={() => alert("hi")}>
      <Box p="4" bg="primary" borderRadius="rounded-3xl">
        <Text color="white" fontFamily="Inter-Black" variant="text2Xl">
          Button text
        </Text>
      </Box>
    </Pressable>
  );
}
