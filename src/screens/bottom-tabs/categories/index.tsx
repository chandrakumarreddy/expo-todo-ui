import React from "react";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import useSWR from "swr";
import { fetcher } from "@/services/config";
import { Box, Text } from "@/utils/theme";
import Loader from "@/components/shared/Loader";
import { FlatList } from "react-native-gesture-handler";
import { ICategory } from "@/types";
import Category from "@/components/categories/category";

export default function CategoriesScreen() {
  const { data, isLoading } = useSWR<{ categories: ICategory[] }>(
    "/api/v1/user/categories",
    fetcher
  );
  if (isLoading) {
    return <Loader />;
  }
  const renderItem = ({ item }: { item: ICategory }) => (
    <Category category={item} />
  );
  return (
    <SafeAreaWrapper>
      <Box flex={1} padding="4">
        <Text variant="textXl" fontWeight="700" mb="10">
          Categories
        </Text>
        <FlatList
          data={data?.categories}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Box height={14} />}
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaWrapper>
  );
}
