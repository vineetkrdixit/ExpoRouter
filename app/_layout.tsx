import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack, router, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { supabase } from "@/supabase";
import { Session } from "@supabase/supabase-js";
import { Provider } from "react-redux";
import { store } from "../redux/store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const segment = useSegments();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [token, setToken] = useState<Session | null>(null); // Example state

  // console.log(supabase, "==-==--=-=-=-");

  console.log(segment, "segment==");
  // useEffect(() => {
  //   if (token) {
  //     console.log("in if statement");
  //     router.replace("(drawer)");
  //   } else {
  //     console.log("in else statement");
  //     router.replace("(auth)");
  //   }
  // }, [token]);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setToken(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setToken(session);
      if (token) {
        console.log("in if statement");
        router.replace("(drawer)");
      } else {
        console.log("in else statement");
        router.replace("(auth)");
      }
    });
    // if (token) {
    //   console.log("in if statement");
    //   router.replace("(drawer)");
    // } else {
    //   console.log("in else statement");
    //   router.replace("(auth)");
    // }
  }, [loaded]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <Slot />;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="(drawer)"
            options={{ headerShown: false }}
            initialParams={{ session: token }}
          />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
