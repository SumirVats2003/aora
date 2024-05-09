// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";

// import { useColorScheme } from "@/hooks/useColorScheme";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style='auto' />
      <Link href='/profile' style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
