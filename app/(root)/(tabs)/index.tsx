import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Card, Title } from "react-native-paper";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  const [overview, setOverview] = useState({ cropHealth: "", weather: "", market: "" });

  useEffect(() => {
    // Fetch overview data
    fetch("your-overview-api-endpoint")
      .then((response) => response.json())
      .then((data) => setOverview(data));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-start", alignItems: "center", padding: 20 }}>
        <Title style={{ alignSelf: "flex-start", fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>AgroSense Overview</Title>
        <TouchableOpacity onPress={() => router.push("/crop-monitoring")}>
          <Card style={{ marginBottom: 20, padding: 20, width: 300 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Crop Health</Text>
            <Text>{overview.cropHealth || "Loading..."}</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/weather-forecast")}>
          <Card style={{ marginBottom: 20, padding: 20, width: 300 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Weather Update</Text>
            <Text>{overview.weather || "Loading..."}</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/market-trends")}>
          <Card style={{ marginBottom: 20, padding: 20, width: 300 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Market Trends</Text>
            <Text>{overview.market || "Loading..."}</Text>
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;