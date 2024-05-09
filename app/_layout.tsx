import { Text } from "react-native";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    // <>
    //   <Text>Header</Text>
    //   <Slot />
    //   <Text>Footer</Text>
    // </>
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='profile' options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
