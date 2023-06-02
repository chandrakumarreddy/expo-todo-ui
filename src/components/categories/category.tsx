import { CategoriesNavigationType } from "@/navigation/types";
import { ICategory } from "@/types";
import { Box, Text } from "@/utils/theme";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

export default function Category({ category }: { category: ICategory }) {
  const navigation = useNavigation<CategoriesNavigationType>();
  const navigateToCreateCategory = () => {
    navigation.navigate("CreateCategory", {});
  };
  const navigateToCategoryScreen = () => {
    navigation.navigate("Category", {
      id: category._id,
    });
  };
  return (
    <Pressable onPress={navigateToCategoryScreen}>
      <Box
        padding="4"
        bg="lightGray"
        borderRadius="rounded-5xl"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text variant="textBase" fontWeight="600">
            🎉
          </Text>
          <Text variant="textBase" fontWeight="600" ml="3">
            {category.name}
          </Text>
        </Box>
        <Pressable onPress={navigateToCreateCategory}>
          <Entypo name="dots-three-vertical" size={16} />
        </Pressable>
      </Box>
    </Pressable>
  );
}
