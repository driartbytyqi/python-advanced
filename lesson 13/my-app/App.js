// App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DriartiScreen from "./screens/Diartiscreen";

import MainScreen from "./screens/MainScreen";

import ListScreen from "./screens/ListScreen"; 
import StudentDetails from "./components/StudentDetail";
import StudentScreen from "./screens/StudentScreen";
import ProfileScreen from "./screens/ProfileScreen";
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button, ScrollView, StyleSheet, View } from 'react-native';
import { fetchWithRetry } from './src/utils/fetchWithRetry';
import localSample from './src/data/sample.json';

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchWithRetry('https://jsonplaceholder.typicode.com/todos/1', { timeout: 5000, retries: 2 });
      setData(res.data);
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const loadLocal = () => {
    setData(localSample);
    setError(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Fetch demo</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button title="Reload" onPress={load} />
          <Button title="Load Local" onPress={loadLocal} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {loading && <Text>Loading…</Text>}
        {error && <Text style={styles.error}>Error: {error}</Text>}
        {data && <Text>{JSON.stringify(data, null, 2)}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  title: { fontSize: 18, fontWeight: '600' },
  content: { padding: 16 },
  error: { color: 'red' }
});
