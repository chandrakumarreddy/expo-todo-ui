import { Image, StyleSheet } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Text } from "@/utils/theme";
import Button from "@/components/shared/Button";

const Logo = require("../../assets/images/logo.png");

export default function WelcomeScreen() {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  return (
    <SafeAreaWrapper>
      <LinearGradient
        colors={["#fff", "#fcecff", "#f8daff", "#fae2ff", "#fae2ff", "#fff"]}
        style={styles.fullHeight}
      >
        <Box flex={1} justifyContent="center" marginHorizontal="10">
          <Box alignItems="center">
            <Image source={Logo} style={styles.logo} />
          </Box>
          <Text variant="textXl" fontWeight="700" textAlign="center" mb="3.5">
            Do you want to be more productive?
          </Text>
          <Button
            onPress={() => navigation.navigate("SignUp")}
            title="Start your journey"
          />
        </Box>
      </LinearGradient>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
  logo: {
    width: 124,
    height: 126,
    marginBottom: 14,
  },
});
