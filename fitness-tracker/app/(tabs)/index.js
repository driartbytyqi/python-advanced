import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const [stats] = useState({
    move: { current: 685, goal: 760, unit: 'CAL', color: '#FF6B6B' },
    exercise: { current: 72, goal: 30, unit: 'MIN', color: '#4ECDC4' },
    stand: { current: 4, goal: 12, unit: 'HRS', color: '#95E1D3' },
  });

  const [activities] = useState([
    { title: 'Step Count', value: '13,818', icon: '👣', color: '#FFD93D' },
    { title: 'Step Distance', value: '6.58 km', icon: '📍', color: '#6BCB77' },
    { title: 'Outdoor Run', value: '6.21 km', icon: '🏃', color: '#FF6B6B' },
  ]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity Rings</Text>
        <Text style={styles.headerSubtitle}>Today's Progress</Text>
      </View>

      {/* Activity Rings Section */}
      <View style={styles.ringsSection}>
        <View style={styles.ringCard}>
          <ActivityRing stat={stats.move} />
          <Text style={styles.ringLabel}>Move</Text>
        </View>
        <View style={styles.ringCard}>
          <ActivityRing stat={stats.exercise} />
          <Text style={styles.ringLabel}>Exercise</Text>
        </View>
        <View style={styles.ringCard}>
          <ActivityRing stat={stats.stand} />
          <Text style={styles.ringLabel}>Stand</Text>
        </View>
      </View>

      {/* Activity Stats */}
      <View style={styles.statsContainer}>
        {activities.map((activity, index) => (
          <View key={index} style={styles.activityCard}>
            <View style={[styles.activityIcon, { backgroundColor: activity.color }]}>
              <Text style={styles.activityIconText}>{activity.icon}</Text>
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityValue}>{activity.value}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Sessions */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Sessions</Text>
        <View style={styles.sessionCard}>
          <View style={styles.sessionIcon}>
            <Text>🏋️</Text>
          </View>
          <View style={styles.sessionContent}>
            <Text style={styles.sessionName}>Upper Body Workout</Text>
            <Text style={styles.sessionTime}>45 min • 340 cal</Text>
          </View>
          <Text style={styles.sessionArrow}>›</Text>
        </View>
        <View style={styles.sessionCard}>
          <View style={styles.sessionIcon}>
            <Text>🏃</Text>
          </View>
          <View style={styles.sessionContent}>
            <Text style={styles.sessionName}>Morning Run</Text>
            <Text style={styles.sessionTime}>30 min • 280 cal</Text>
          </View>
          <Text style={styles.sessionArrow}>›</Text>
        </View>
      </View>

      {/* Awards Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Awards</Text>
        <View style={styles.awardCard}>
          <View style={styles.awardBadge}>
            <Text style={styles.awardEmoji}>🏆</Text>
          </View>
          <View style={styles.awardContent}>
            <Text style={styles.awardTitle}>New Record</Text>
            <Text style={styles.awardDesc}>Reached 15,000 steps</Text>
          </View>
        </View>
      </View>

      <View style={styles.spacer} />
    </ScrollView>
  );
}

function ActivityRing({ stat }) {
  const percentage = (stat.current / stat.goal) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.ringContainer}>
      <View
        style={[
          styles.ring,
          {
            borderColor: stat.color,
            borderWidth: percentage >= 100 ? 8 : 8,
          },
        ]}
      >
        <View style={styles.ringInner}>
          <Text style={styles.ringValue}>{stat.current}</Text>
          <Text style={styles.ringUnit}>{stat.unit}</Text>
        </View>
      </View>
      <View style={styles.ringGoal}>
        <Text style={styles.ringGoalText}>{stat.goal}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 28,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#999999',
    marginTop: 6,
    fontWeight: '500',
  },
  ringsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 32,
    gap: 12,
  },
  ringCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  ringContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  ring: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 8,
  },
  ringInner: {
    alignItems: 'center',
  },
  ringValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  ringUnit: {
    fontSize: 11,
    color: '#999999',
    fontWeight: '600',
    marginTop: 2,
  },
  ringGoal: {
    marginTop: 8,
  },
  ringGoalText: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '600',
  },
  ringLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  statsContainer: {
    paddingHorizontal: 24,
    marginBottom: 32,
    gap: 12,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  activityIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  activityIconText: {
    fontSize: 24,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  activityValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 4,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 14,
    letterSpacing: -0.3,
  },
  sessionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  sessionIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    fontSize: 20,
  },
  sessionContent: {
    flex: 1,
  },
  sessionName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  sessionTime: {
    fontSize: 12,
    color: '#999999',
    fontWeight: '500',
    marginTop: 3,
  },
  sessionArrow: {
    fontSize: 18,
    color: '#666666',
  },
  awardCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 14,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  awardBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFD93D',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  awardEmoji: {
    fontSize: 24,
  },
  awardContent: {
    flex: 1,
  },
  awardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  awardDesc: {
    fontSize: 12,
    color: '#999999',
    fontWeight: '500',
    marginTop: 3,
  },
  spacer: {
    height: 40,
  },
});
