import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const WorkoutDetailCard = ({ workout }) => {
  const handleYouTube = () => {
    Linking.openURL(workout.youtubeUrl).catch(() => alert('Unable to open YouTube'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.icon}>{workout.icon}</Text>
        <View style={styles.headerContent}>
          <Text style={styles.title}>{workout.name}</Text>
          <Text style={styles.subtitle}>Complete workout series</Text>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>⏱️</Text>
          <View>
            <Text style={styles.detailLabel}>Duration</Text>
            <Text style={styles.detailValue}>{workout.duration} minutes</Text>
          </View>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailIcon}>💪</Text>
          <View>
            <Text style={styles.detailLabel}>Exercises</Text>
            <Text style={styles.detailValue}>{workout.exercises.length} exercises</Text>
          </View>
        </View>
      </View>

      <View style={styles.exercisesList}>
        <Text style={styles.exercisesTitle}>Exercises:</Text>
        {workout.exercises.map((exercise, idx) => (
          <View key={idx} style={styles.exerciseItem}>
            <Text style={styles.exerciseBullet}>• {exercise}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.youtubeButton} onPress={handleYouTube}>
        <Text style={styles.youtubeIcon}>▶️</Text>
        <Text style={styles.youtubeText}>Watch Tutorial on YouTube</Text>
      </TouchableOpacity>

      <View style={styles.tips}>
        <Text style={styles.tipsTitle}>💡 Pro Tips:</Text>
        <Text style={styles.tipText}>• Warm up for 5 minutes before starting</Text>
        <Text style={styles.tipText}>• Rest 60-90 seconds between sets</Text>
        <Text style={styles.tipText}>• Maintain proper form over speed</Text>
        <Text style={styles.tipText}>• Hydrate throughout your workout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  icon: {
    fontSize: 50,
    marginRight: 16,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 13,
    color: '#666666',
    marginTop: 4,
    fontWeight: '500',
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  detailItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  detailIcon: {
    fontSize: 20,
    marginRight: 10,
    marginTop: 2,
  },
  detailLabel: {
    fontSize: 12,
    color: '#999999',
    fontWeight: '600',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    marginTop: 4,
  },
  exercisesList: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  exercisesTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  exerciseItem: {
    marginBottom: 8,
  },
  exerciseBullet: {
    fontSize: 13,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  youtubeButton: {
    backgroundColor: '#FF0000',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  youtubeIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  youtubeText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  tips: {
    backgroundColor: '#E0F2FE',
    borderRadius: 12,
    padding: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#60A5FA',
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#60A5FA',
    marginBottom: 10,
  },
  tipText: {
    fontSize: 12,
    color: '#1A1A1A',
    marginBottom: 6,
    fontWeight: '500',
  },
});

export default WorkoutDetailCard;
