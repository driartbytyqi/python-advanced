import { ScrollView, StyleSheet, Text, View } from 'react-native';

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
                    backgroundColor: data.workouts > 0 ? '#60A5FA' : '#e0e0e0',
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
    backgroundColor: '#0F0F0F',
    paddingTop: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 28,
    paddingHorizontal: 24,
    color: '#FFFFFF',
    marginTop: 16,
    letterSpacing: -0.5,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginBottom: 28,
  },
  statBox: {
    width: '48%',
    backgroundColor: '#1A1A1A',
    margin: '1%',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
    borderTopWidth: 4,
    borderTopColor: '#60A5FA',
  },
  statNumber: {
    fontSize: 38,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  statLabel: {
    fontSize: 13,
    color: '#999999',
    textAlign: 'center',
    fontWeight: '700',
  },
  chartContainer: {
    backgroundColor: '#1A1A1A',
    marginHorizontal: 16,
    marginVertical: 18,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  chartTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 18,
    color: '#FFFFFF',
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 160,
  },
  chartBar: {
    alignItems: 'center',
  },
  bar: {
    width: 32,
    borderRadius: 8,
    marginBottom: 10,
  },
  dayLabel: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '700',
  },
  recentActivity: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 18,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 30,
  },
  activityTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 18,
    color: '#1A1A1A',
  },
  activityList: {
    gap: 12,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#60A5FA',
  },
  activityIcon: {
    fontSize: 28,
    marginRight: 14,
  },
  activityDetails: {
    flex: 1,
  },
  activityName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  activityTime: {
    fontSize: 12,
    color: '#999999',
    marginTop: 3,
    fontWeight: '500',
  },
  activityDuration: {
    fontSize: 14,
    fontWeight: '700',
    color: '#60A5FA',
  },
});
