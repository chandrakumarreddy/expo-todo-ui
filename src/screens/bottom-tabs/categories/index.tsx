import React from "react";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import useSWR from "swr";
import { fetcher } from "@/services/config";
import { Text } from "@/utils/theme";

export default function CategoriesScreen() {
  const { data, isLoading } = useSWR("/api/v1/user/categories", fetcher);
  console.log(!isLoading && data.categories);
  return (
    <SafeAreaWrapper>
      <Text variant="textSm">categories</Text>
    </SafeAreaWrapper>
  );
}
