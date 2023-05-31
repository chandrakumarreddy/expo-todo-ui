import { Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";

export default function SignInScreen() {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const onClick = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaWrapper>
      <Text>Signin screen</Text>
      <Button onPress={onClick} title="navigate to signup" />
    </SafeAreaWrapper>
  );
}
