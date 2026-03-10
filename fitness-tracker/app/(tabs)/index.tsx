import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';

export default function HomeScreen() {
  const router = useRouter();
  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      name: 'Upper Body',
      duration: 60,
      exercises: ['Bench Press', 'Rows', 'Shoulder Press'],
      completed: false,
    },
    {
      id: 2,
      name: 'Lower Body',
      duration: 45,
      exercises: ['Squats', 'Leg Press', 'Leg Curls'],
      completed: false,
    },
    {
      id: 3,
      name: 'Cardio',
      duration: 30,
      exercises: ['Treadmill', 'Jump Rope'],
      completed: false,
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Today's Workouts</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      {workouts.map((workout) => (
        <TouchableOpacity
          key={workout.id}
          style={styles.card}
          onPress={() => router.push(`/(tabs)/index?workoutId=${workout.id}`)}
        >
          <View style={styles.cardContent}>
            <Text style={styles.workoutName}>{workout.name}</Text>
            <Text style={styles.duration}>⏱️ {workout.duration} min</Text>
            <Text style={styles.exercises}>📋 {workout.exercises.length} exercises</Text>
          </View>
          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor: workout.completed ? '#e8f5e9' : '#fff3e0',
              },
            ]}
          >
            <Text
              style={[
                styles.statusText,
                {
                  color: workout.completed ? '#4CAF50' : '#FF9800',
                },
              ]}
            >
              {workout.completed ? '✓' : '○'}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.quickStats}>
        <Text style={styles.statsTitle}>Quick Stats</Text>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Workouts Today</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>135</Text>
            <Text style={styles.statLabel}>Total Minutes</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    margin: 12,
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  exercises: {
    fontSize: 14,
    color: '#666',
  },
  statusBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quickStats: {
    margin: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});
