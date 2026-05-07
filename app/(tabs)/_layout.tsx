import React from "react";
import { Platform, StyleSheet, View, useWindowDimensions } from "react-native";
import { Tabs } from "expo-router";
import { Home, BookOpen, Radio, Video, User } from "lucide-react-native";

import { useLanguage } from "@/providers/LanguageProvider";

export default function TabLayout() {
  const { width } = useWindowDimensions();
  const { t } = useLanguage();
  const isWeb = Platform.OS === "web";
  const isDesktop = isWeb && width >= 900;

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: isDesktop ? { display: "none" } : styles.tabBar,
          tabBarActiveTintColor: "#ed1c24",
          tabBarInactiveTintColor: "#8f8a7e",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: t("home"),
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: t("library"),
            tabBarIcon: ({ color, size }) => <BookOpen color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="radio"
          options={{
            title: t("radio"),
            tabBarIcon: ({ color, size }) => <Radio color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="media"
          options={{
            title: t("media"),
            tabBarIcon: ({ color, size }) => <Video color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: t("profile"),
            tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#fffaf1",
    borderTopColor: "rgba(237, 28, 36, 0.12)",
    height: 72,
    paddingBottom: 10,
    paddingTop: 8,
  },
});
