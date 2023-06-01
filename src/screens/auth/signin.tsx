import React from "react";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/theme";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import { Pressable } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { IUser } from "@/types";
import { loginUser } from "@/services/api";
import useUserGlobalStore from "@/store/useUserGlobalStore";

type IFormData = Omit<IUser, "name">;

export default function SignInScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { updateUser } = useUserGlobalStore();
  const onSubmit = async (data: IFormData) => {
    try {
      const user = await loginUser(data);
      updateUser(user);
    } catch (error) {}
  };
  return (
    <SafeAreaWrapper>
      <Box px="5.5" mt="13">
        <Text variant="textXl" fontWeight="700" mb="11">
          Welcome Back
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="E-mail"
              placeholder="Email"
              containerStyles={{ mb: "6" }}
              onChangeText={onChange}
              value={value}
              error={errors.email?.message}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Password"
              placeholder="Password"
              secureTextEntry
              onChangeText={onChange}
              value={value}
              error={errors.password?.message}
            />
          )}
          name="password"
        />
        <Box alignItems="flex-end" marginVertical="5">
          <Pressable>
            <Text variant="textXs" color="primary">
              Forgot password?
            </Text>
          </Pressable>
        </Box>
        <Button title="Log in" onPress={handleSubmit(onSubmit)} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
}
