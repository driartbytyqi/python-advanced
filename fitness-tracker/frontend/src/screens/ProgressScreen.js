import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { getProgressData } from '../services/api';
import ProgressChart from '../components/ProgressChart';

export default function ProgressScreen() {
  const [progressData, setProgressData] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProgressData();
  }, []);

  const fetchProgressData = async () => {
    try {
      setLoading(true);
      const data = await getProgressData();
      setProgressData(data.chartData);
      setStats(data.stats);
    } catch (error) {
      console.error('Error fetching progress data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Progress Tracking</Text>

      {progressData && <ProgressChart data={progressData} />}

      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Statistics</Text>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total Workouts</Text>
          <Text style={styles.statValue}>{stats?.totalWorkouts || 0}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>This Month</Text>
          <Text style={styles.statValue}>{stats?.thisMonth || 0}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Current Streak</Text>
          <Text style={styles.statValue}>{stats?.streak || 0} days</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total Duration</Text>
          <Text style={styles.statValue}>
            {stats?.totalDuration || 0} hrs
          </Text>
        </View>
      </View>

      <View style={styles.recentActivity}>
        <Text style={styles.activityTitle}>Recent Activity</Text>
        {stats?.recentActivity?.map((activity, index) => (
          <View key={index} style={styles.activityItem}>
            <Text style={styles.activityDate}>{activity.date}</Text>
            <Text style={styles.activityWorkout}>{activity.workout}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  statsContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  recentActivity: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  activityItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  activityDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 3,
  },
  activityWorkout: {
    fontSize: 14,
    color: '#333',
  },
});
