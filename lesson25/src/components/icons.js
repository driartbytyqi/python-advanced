import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, iconText }) => {
  return (
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons name={name} size={50} color="#FF6347" />
      <Text style={styles.iconText}>{iconText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginVertical: 10,
  },
  iconText: {
    fontSize: 12,
    marginTop: 5,
    color: "#333",
  },
});

export default Icon;
