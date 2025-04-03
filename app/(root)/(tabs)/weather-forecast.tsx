// app/(root)/(tabs)/weather-forecast.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { fetchWeatherData } from '../../../components/weatherService';

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // You can later allow dynamic location updates; for now, we use a fixed location.
  const location = 'Nairobi';

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeatherData(location);
        setWeatherData(data);
      } catch (err) {
        setError('Failed to load weather data.');
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [location]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Weather Forecast for {location}</Text>
      {weatherData && weatherData.list.map((item: any, index: number) => (
        <View key={index} style={styles.weatherItem}>
          <Text>{new Date(item.dt * 1000).toLocaleString()}</Text>
          <Text>Temp: {item.main.temp}°C</Text>
          <Text>{item.weather[0].description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 30,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  weatherItem: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});

export default WeatherForecast;
