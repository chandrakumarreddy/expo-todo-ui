import theme, { Box, Text } from "@/utils/theme";
import React, { ComponentProps } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type InputProps = {
  label: string;
  error?: string;
  containerStyles?: ComponentProps<typeof Box>;
} & ComponentProps<TextInput>;

export default function Input({
  label,
  placeholder,
  containerStyles,
  ...rest
}: InputProps) {
  return (
    <Box {...containerStyles}>
      <Text
        variant="textXs"
        textTransform="uppercase"
        mb="3.5"
        fontWeight="700"
      >
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        autoCorrect={false}
        autoComplete="off"
        {...rest}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: theme.borderRadii["rounded-7xl"],
    borderColor: theme.colors.grey,
    borderWidth: 1,
    padding: theme.spacing[4],
  },
});
