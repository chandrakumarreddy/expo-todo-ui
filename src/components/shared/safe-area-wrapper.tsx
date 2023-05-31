import { useTheme } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type props = {
  children: ReactNode;
};
export default function SafeAreaWrapper({ children }: props) {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      {children}
    </SafeAreaView>
  );
}
