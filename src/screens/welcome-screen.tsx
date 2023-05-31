import { Text, Button } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";

export default function WelcomeScreen() {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  return (
    <SafeAreaWrapper>
      <Text>index</Text>
      <Button
        title="navigate to signup"
        onPress={() => navigation.navigate("SignUp")}
      />
      <Button
        title="navigate to signin"
        onPress={() => navigation.navigate("SignIn")}
      />
    </SafeAreaWrapper>
  );
}
