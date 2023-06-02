import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Box, Theme } from "@/utils/theme";
import NavigateBack from "@/components/shared/navigate-back";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import useSWRMutation from "swr/mutation";
import axiosInstance from "@/services/config";
import { Pressable } from "react-native";
import { CategoriesStackParamList } from "@/navigation/types";
import { useSWRConfig } from "swr";

async function deleteCategory(url: string, { arg }: { arg: string }) {
  return axiosInstance.delete(`${url}/${arg}`).then((res) => res.data);
}

type CategoryScreenRouteProp = RouteProp<CategoriesStackParamList, "Category">;

export default function CategoryScreen() {
  const route = useRoute<CategoryScreenRouteProp>();
  const theme = useTheme<Theme>();
  const { mutate } = useSWRConfig();
  const { trigger, data, error } = useSWRMutation(
    "/api/v1/user/categories",
    deleteCategory,
    { onSuccess: () => mutate("/api/v1/user/categories") }
  );
  console.log(data, error);
  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box width={40}>
            <NavigateBack />
          </Box>
          <Pressable onPress={() => trigger(route.params.id)}>
            <MaterialCommunityIcons
              size={24}
              color={theme.colors.red500}
              name="delete"
            />
          </Pressable>
        </Box>
      </Box>
    </SafeAreaWrapper>
  );
}
