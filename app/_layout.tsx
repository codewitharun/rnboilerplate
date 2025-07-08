import { store } from "@src/store/store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StatusBar, View } from "react-native";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

const theme = {
  ...DefaultTheme,
  fonts: {
    regular: { fontFamily: "Lora-Regular", fontWeight: "normal" },
    regular2: { fontFamily: "Questrial-Regular", fontWeight: "normal" },
    medium: { fontFamily: "Lora-Medium", fontWeight: "500" },
    light: { fontFamily: "Lora-Regular", fontWeight: "300" },
    thin: { fontFamily: "Lora-Regular", fontWeight: "200" },
  },
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Lora-Regular": require("@assets/fonts/Lora-Regular.ttf"),
    "Lora-Medium": require("@assets/fonts/Lora-Medium.ttf"),
    "Lora-SemiBold": require("@assets/fonts/Lora-SemiBold.ttf"),
    "Lora-Bold": require("@assets/fonts/Lora-Bold.ttf"),
    "Questrial-Regular": require("@assets/fonts/Questrial-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <Stack screenOptions={{ headerShown: false }} />
        </View>
      </PaperProvider>
    </Provider>
  );
}
