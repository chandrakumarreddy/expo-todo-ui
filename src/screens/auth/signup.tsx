import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box, Text } from "@/utils/theme";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import { Pressable } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { IUser } from "@/types";
import { registerUser } from "@/services/api";

export default function SignUpScreen() {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  const onSubmit = async (data: IUser) => {
    try {
      await registerUser(data);
      navigateToSignIn();
    } catch (error) {}
  };
  return (
    <SafeAreaWrapper>
      <Box px="5.5" mt="13">
        <Text variant="textXl" fontWeight="700" mb="6">
          Welcome to Blossom!{"\n"}Your journey starts here
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Name"
              placeholder="Name"
              containerStyles={{ mb: "6" }}
              onChangeText={onChange}
              value={value}
              error={errors.name?.message}
            />
          )}
          name="name"
        />
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
        <Box marginVertical="5" alignItems="flex-end">
          <Pressable onPress={navigateToSignIn}>
            <Text variant="textXs" color="primary" fontWeight="500">
              Already have an Account? Login
            </Text>
          </Pressable>
        </Box>
        <Button title="Register" onPress={handleSubmit(onSubmit)} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
}
