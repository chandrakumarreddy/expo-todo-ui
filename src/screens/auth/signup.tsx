import { Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";

export default function SignUpScreen() {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const onClick = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaWrapper>
      <Text>Signup screen</Text>
      <Button onPress={onClick} title="navigate to signin" />
    </SafeAreaWrapper>
  );
}
