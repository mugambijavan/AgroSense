import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">AgroSense AI</Text>
      <Link href='/sign-in'>SignIn</Link>
      <Link href='/crop-monitoring'>CropMonitoring</Link>
      <Link href='/market-trends'>MarketTrends</Link>
      <Link href='/resource-optimization'>ResourceOptimization</Link>
      <Link href='/weather-forecast'>WeatherForecast</Link>
      <Link href='/settings'>Settings</Link>
    </View>
  );
}
