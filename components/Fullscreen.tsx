import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

type FullScreenProps = {
  children: React.ReactNode;
  center?: boolean;
  padding?: number;
  gap?: number;
};

export default function Fullscreen({
  children,
  center,
  padding,
  gap,
}: FullScreenProps) {
  const customStyle = {
    gap,
    padding,
  };

  return (
    <SafeAreaProvider>
      <View style={[styles.container, customStyle, center && styles.center]}>
        {children}
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
