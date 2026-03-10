import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function ProgressScreen() {
  const stats = {
    totalWorkouts: 45,
    thisMonth: 12,
    streak: 5,
    totalDuration: 78,
  };

  const weeklyData = [
    { day: 'Mon', workouts: 1 },
    { day: 'Tue', workouts: 1 },
    { day: 'Wed', workouts: 0 },
    { day: 'Thu', workouts: 2 },
    { day: 'Fri', workouts: 1 },
    { day: 'Sat', workouts: 1 },
    { day: 'Sun', workouts: 0 },
  ];

  const maxHeight = Math.max(...weeklyData.map((d) => d.workouts)) || 1;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Progress Overview</Text>

      <View style={styles.statsGrid}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{stats.totalWorkouts}</Text>
          <Text style={styles.statLabel}>Total Workouts</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{stats.thisMonth}</Text>
          <Text style={styles.statLabel}>This Month</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{stats.streak}</Text>
          <Text style={styles.statLabel}>Day Streak 🔥</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{stats.totalDuration}h</Text>
          <Text style={styles.statLabel}>Total Hours</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>This Week's Activity</Text>
        <View style={styles.chart}>
          {weeklyData.map((data, index) => (
            <View key={index} style={styles.chartBar}>
              <View
                style={[
                  styles.bar,
                  {
                    height: (data.workouts / maxHeight) * 120 || 10,
                    backgroundColor: data.workouts > 0 ? '#4CAF50' : '#e0e0e0',
                  },
                ]}
              />
              <Text style={styles.dayLabel}>{data.day}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.recentActivity}>
        <Text style={styles.activityTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          <View style={styles.activityItem}>
            <Text style={styles.activityIcon}>🏋️</Text>
            <View style={styles.activityDetails}>
              <Text style={styles.activityName}>Upper Body Workout</Text>
              <Text style={styles.activityTime}>Today, 2:30 PM</Text>
            </View>
            <Text style={styles.activityDuration}>60 min</Text>
          </View>
          <View style={styles.activityItem}>
            <Text style={styles.activityIcon}>🏃</Text>
            <View style={styles.activityDetails}>
              <Text style={styles.activityName}>Cardio Session</Text>
              <Text style={styles.activityTime}>Yesterday, 6:00 AM</Text>
            </View>
            <Text style={styles.activityDuration}>30 min</Text>
          </View>
          <View style={styles.activityItem}>
            <Text style={styles.activityIcon}>🏋️</Text>
            <View style={styles.activityDetails}>
              <Text style={styles.activityName}>Lower Body Workout</Text>
              <Text style={styles.activityTime}>2 days ago, 4:15 PM</Text>
            </View>
            <Text style={styles.activityDuration}>45 min</Text>
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
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    minWidth: '48%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 180,
  },
  chartBar: {
    alignItems: 'center',
    gap: 8,
  },
  bar: {
    width: 25,
    borderRadius: 4,
  },
  dayLabel: {
    fontSize: 12,
    color: '#666',
  },
  recentActivity: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  activityList: {
    gap: 12,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  activityIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  activityDetails: {
    flex: 1,
  },
  activityName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  activityTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  activityDuration: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4CAF50',
  },
});
