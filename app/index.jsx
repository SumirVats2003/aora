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
import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledLink = styled(Link);

export default function App() {
  return (
    <StyledView className='flex-1 items-center justify-center bg-white'>
      <StyledText className='text-3xl font-pblack'>Aora!</StyledText>
      <StatusBar style='auto' />
      <StyledLink href='/home' className='text-blue-500'>
        Go to Profile
      </StyledLink>
    </StyledView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
