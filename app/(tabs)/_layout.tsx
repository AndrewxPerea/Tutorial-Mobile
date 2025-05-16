import { Tabs } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'

export default function TabLayout() {
  return (
   <Tabs
    screenOptions={
      {
        tabBarShowLabel : false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
      }
    }
   >
        <Tabs.Screen name="index" options={{
          tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color}/>
          }}/>
        <Tabs.Screen name="bookmarks" options={{
          tabBarIcon: ({size, color}) => <Ionicons name="bookmarks" size={size} color={color}/>
          }}/>
        <Tabs.Screen name="create" options={{
          tabBarIcon: ({size, color}) => <Ionicons name="add-circle" size={size} color={COLORS.primary}/>
          }}/>
        <Tabs.Screen name="notifications" options={{
          tabBarIcon: ({size, color}) => <Ionicons name="notifications" size={size} color={color}/>
          }}/>
        <Tabs.Screen name="profile" options={{
          tabBarIcon: ({size, color}) => <Ionicons name="person-circle" size={size} color={color}/>
          }}/>     
   </Tabs>
  )
}