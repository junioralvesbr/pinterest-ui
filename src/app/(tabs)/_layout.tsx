import { theme } from "@/theme";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import Avatar from "@/components/Avatar";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.colors.white,
      tabBarInactiveTintColor: theme.colors.gray[600],
      tabBarStyle: {
        backgroundColor: theme.colors.black,
        borderColor: theme.colors.black
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => <Foundation name="home" size={size} color={color} />
        }}
      />
      <Tabs.Screen name="search"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => <Ionicons name="chatbox-ellipses" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Avatar
                selected={focused}
                source={{ uri: "https://github.com/junioralvesbr.png" }}
              />
            )
          }
        }}
      />
    </Tabs>
  )
}