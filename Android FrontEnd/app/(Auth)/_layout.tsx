import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout(){
  return(
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="index" options={{title:"Login", headerTitleAlign:'center' }}/>
        <Stack.Screen name="Signup" options={{title:"Signup ", headerTitleAlign:'center' }}/>
    </Stack>
  );
};


