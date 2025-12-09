import { View, Text, StyleSheet } from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title="Go to DriartiScreen" onPress={() => navigation.navigate("Driart")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
