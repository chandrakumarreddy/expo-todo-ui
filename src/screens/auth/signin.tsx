import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/theme";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import { Pressable } from "react-native";

export default function SignInScreen() {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const onClick = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaWrapper>
      <Box px="5.5" mt="13">
        <Text variant="textXl" fontWeight="700" mb="11">
          Welcome Back
        </Text>
        <Input
          label="E-mail"
          placeholder="Email"
          containerStyles={{ mb: "6" }}
        />
        <Input label="Password" placeholder="Password" secureTextEntry />
        <Box alignItems="flex-end" marginVertical="5">
          <Pressable>
            <Text variant="textXs" color="primary">
              Forgot password?
            </Text>
          </Pressable>
        </Box>
        <Button title="Log in" onPress={onClick} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
}
