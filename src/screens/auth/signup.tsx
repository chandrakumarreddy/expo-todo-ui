import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/theme";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import { Pressable } from "react-native";

export default function SignUpScreen() {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaWrapper>
      <Box px="5.5" mt="13">
        <Text variant="textXl" fontWeight="700" mb="6">
          Welcome to Blossom!{"\n"}Your journey starts here
        </Text>
        <Input label="Name" placeholder="Name" containerStyles={{ mb: "6" }} />
        <Input
          label="E-mail"
          placeholder="Email"
          containerStyles={{ mb: "6" }}
        />
        <Input label="Password" placeholder="Password" secureTextEntry />
        <Box marginVertical="5" alignItems="flex-end">
          <Pressable onPress={navigateToSignIn}>
            <Text variant="textXs" color="primary" fontWeight="500">
              Already have an Account? Login
            </Text>
          </Pressable>
        </Box>
        <Button title="Register" onPress={() => alert()} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
}
