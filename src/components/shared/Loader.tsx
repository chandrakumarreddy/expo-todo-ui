import { ActivityIndicator } from "react-native";
import SafeAreaWrapper from "./safe-area-wrapper";
import { Box } from "@/utils/theme";

export default function Loader() {
  return (
    <SafeAreaWrapper>
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Box>
    </SafeAreaWrapper>
  );
}
