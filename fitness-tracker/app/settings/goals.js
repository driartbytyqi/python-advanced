import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function GoalsScreen() {
  const [dailySteps, setDailySteps] = useState('10000');
  const [weeklyWorkouts, setWeeklyWorkouts] = useState('4');
  const [activeMinutes, setActiveMinutes] = useState('150');

  const handleSave = () => {
    Alert.alert('Goals updated', 'Your goals have been saved successfully.');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Goals</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Set Your Targets</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Daily Steps</Text>
          <TextInput
            style={styles.input}
            value={dailySteps}
            onChangeText={setDailySteps}
            keyboardType="numeric"
            placeholder="10000"
            placeholderTextColor="#6B6B6B"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Weekly Workouts</Text>
          <TextInput
            style={styles.input}
            value={weeklyWorkouts}
            onChangeText={setWeeklyWorkouts}
            keyboardType="numeric"
            placeholder="4"
            placeholderTextColor="#6B6B6B"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Active Minutes per Week</Text>
          <TextInput
            style={styles.input}
            value={activeMinutes}
            onChangeText={setActiveMinutes}
            keyboardType="numeric"
            placeholder="150"
            placeholderTextColor="#6B6B6B"
          />
        </View>
      </View>

      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>How we use goals</Text>
        <Text style={styles.tipText}>
          Goals personalize your reminders and progress insights.
        </Text>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Goals</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#1A1A1A',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 14,
  },
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#262626',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    color: '#FFFFFF',
    fontWeight: '600',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  tipCard: {
    backgroundColor: '#262626',
    borderRadius: 16,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#60A5FA',
    marginBottom: 16,
  },
  tipTitle: {
    color: '#FFFFFF',
    fontWeight: '800',
    marginBottom: 8,
  },
  tipText: {
    color: '#B0B0B0',
    fontSize: 13,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#60A5FA',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#0F0F0F',
    fontWeight: '800',
    fontSize: 15,
  },
});
