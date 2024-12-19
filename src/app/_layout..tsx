import Loading from "@/components/loading";
import { colors } from "@/styles/theme";
import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  useFonts
} from "@expo-google-fonts/rubik";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.gray[100] } }} />
    </GestureHandlerRootView>
  )
}