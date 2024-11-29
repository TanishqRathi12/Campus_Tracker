import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";


const TabRoot = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Location"
        options={{
          title: "Your Location",
          tabBarIcon: ({color})=>(
            <FontAwesome size={28} name="location-arrow" color={color}></FontAwesome>
            ),
        }}
      />
       <Tabs.Screen
        name="QrPage"
        options={{
          title: "QrPage",
          tabBarIcon: ({color})=>(
            <FontAwesome size={28} name="calendar" color={color}></FontAwesome>
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color}></FontAwesome>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabRoot;
