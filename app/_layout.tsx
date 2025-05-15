import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="notificacion" options={{ title: "Notificaciones" , headerShown: false}} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


