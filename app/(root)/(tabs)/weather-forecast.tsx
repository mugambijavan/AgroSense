import { View, Text } from 'react-native'
import React from 'react'

const WeatherForecast = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10 ">Weather Forecast</Text>
      
    </View>
  )
}

export default WeatherForecast