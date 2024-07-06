import { Stack } from "expo-router";

const AuthLayout = () => {
  console.log("-=-===");

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="forgetpassword" />
    </Stack>
  );
};

export default AuthLayout;
