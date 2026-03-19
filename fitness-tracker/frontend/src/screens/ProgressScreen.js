import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { getProgressData } from '../services/api';
import ProgressChart from '../components/ProgressChart';

const getActivityIcon = (name = '') => {
  const lower = name.toLowerCase();
  if (lower.includes('cardio') || lower.includes('run')) {
    return '\u{1F3C3}';
  }
  if (lower.includes('leg') || lower.includes('lower')) {
    return '\u{1F9B5}';
  }
  if (lower.includes('upper') || lower.includes('strength')) {
    return '\u{1F3CB}\u{FE0F}';
  }
  return '\u{1F4AA}';
};

const formatActivityDate = (dateString) => {
  if (!dateString) {
    return 'Date not set';
  }

  const parts = dateString.split('-').map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) {
    return dateString;
  }

  const activityDate = new Date(parts[0], parts[1] - 1, parts[2]);
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const activityStart = new Date(
    activityDate.getFullYear(),
    activityDate.getMonth(),
    activityDate.getDate(),
  );

  const diffMs = todayStart - activityStart;
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Today';
  }
  if (diffDays === 1) {
    return 'Yesterday';
  }

  return activityDate.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const formatDuration = (duration) => {
  if (!duration) {
    return '?';
  }
  return `${duration} min`;
};

export default function ProgressScreen({ navigation }) {
  const [progressData, setProgressData] = useState(null);
  const [stats, setStats] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);
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
      setRecentActivity(data.recentActivity || []);
    } catch (error) {
      console.error('Error fetching progress data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleActivityPress = (activity) => {
    if (!activity?.id || !navigation?.navigate) {
      return;
    }

    navigation.navigate('Home', {
      screen: 'Workout',
      params: { workoutId: activity.id },
    });
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
          <Text style={styles.statValue}>{stats?.totalDuration || 0} hrs</Text>
        </View>
      </View>

      <View style={styles.recentActivity}>
        <Text style={styles.activityTitle}>Recent Activity</Text>
        {recentActivity.length === 0 ? (
          <Text style={styles.emptyActivity}>No workouts yet. Log one to see it here.</Text>
        ) : (
          recentActivity.map((activity, index) => (
            <TouchableOpacity
              key={activity.id ?? `${activity.name}-${activity.date}-${index}`}
              style={styles.activityItem}
              onPress={() => handleActivityPress(activity)}
              disabled={!activity.id}
              activeOpacity={0.75}
            >
              <Text style={styles.activityIcon}>{getActivityIcon(activity.name)}</Text>
              <View style={styles.activityDetails}>
                <Text style={styles.activityName}>{activity.name}</Text>
                <Text style={styles.activityTime}>{formatActivityDate(activity.date)}</Text>
              </View>
              <Text style={styles.activityDuration}>
                {formatDuration(activity.duration)}
              </Text>
            </TouchableOpacity>
          ))
        )}
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
  emptyActivity: {
    color: '#888',
    fontSize: 13,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  activityIcon: {
    fontSize: 22,
    marginRight: 12,
  },
  activityDetails: {
    flex: 1,
  },
  activityName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
  activityTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 3,
  },
  activityDuration: {
    fontSize: 13,
    fontWeight: '700',
    color: '#4CAF50',
  },
});
