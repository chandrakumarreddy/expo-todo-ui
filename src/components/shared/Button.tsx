import { Pressable, ButtonProps as DefaultButtonProps } from "react-native";
import { Text, Box } from "@/utils/theme";

type ButtonProps = {
  uppercase?: boolean;
} & DefaultButtonProps;

export default function Button({
  onPress,
  title,
  disabled,
  uppercase,
}: ButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Box
        bg={disabled ? "gray800" : "primary"}
        paddingVertical="3.5"
        borderRadius="rounded-7xl"
        py="3.5"
      >
        <Text
          variant="textXs"
          color="white"
          fontWeight="700"
          textAlign="center"
          textTransform={uppercase ? "uppercase" : "none"}
        >
          {title}
        </Text>
      </Box>
    </Pressable>
  );
}
