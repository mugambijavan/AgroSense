import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '@/constants/icons'

const TabIcon = ({focused, icon, title}: {focused: boolean; icon:any ;title: string})=>(
  <View className='flex-1 mt-3 flex flex-col items-center'>
    <Image 
      source={icon}
      tintColor={focused ? 'green' : 'gray'}
      resizeMode='contain'
      className='w-10 h-10'
    />
    <Text className={'${focused? "text-green-800" : "text-gray-500"} text-xsm w-full text-center mt-1'}>{title}

    </Text>
  </View>
)

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: 'white',
        position: 'absolute',
        borderTopColor:'green',
        borderTopWidth:1,
        minHeight: 100,
      },
    }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title:'Home',
          headerShown: false,
          tabBarIcon: ( {focused} ) => (
            <TabIcon 
              icon={icons.dashboard}
              focused={focused}
              title='Home'
            />

          )
        }}
      /><Tabs.Screen 
      name="crop-monitoring"
      options={{
        title:'Crop',
        headerShown: false,
        tabBarIcon: ( {focused} ) => (
          <TabIcon 
            icon={icons.crop}
            focused={focused}
            title={'Crop\nMonitoring'}
          />

        )
      }}
    />
    <Tabs.Screen 
        name="market-trends"
        options={{
          title:'Market',
          headerShown: false,
          tabBarIcon: ( {focused} ) => (
            <TabIcon 
              icon={icons.market}
              focused={focused}
              title={'Market\nTrends'}
            />

          )
        }}
      />
      <Tabs.Screen 
        name="weather-forecast"
        options={{
          title:'Weather',
          headerShown: false,
          tabBarIcon: ( {focused} ) => (
            <TabIcon 
              icon={icons.weather}
              focused={focused}
              title={'Weather\nForecast'}
            />

          )
        }}
      />
      <Tabs.Screen 
        name="resource-optimization"
        options={{
          title:'Resource',
          headerShown: false,
          tabBarIcon: ( {focused} ) => (
            <TabIcon 
              icon={icons.resource}
              focused={focused}
              title={'Resource\nOptimization'}
            />

          )
        }}
      />
      <Tabs.Screen 
        name="settings"
        options={{
          title:'Settings',
          headerShown: false,
          tabBarIcon: ( {focused} ) => (
            <TabIcon 
              icon={icons.settings}
              focused={focused}
              title='Settings'
            />

          )
        }}
      />

    </Tabs>
  )
}

export default TabsLayout