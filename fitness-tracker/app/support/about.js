import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>About</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>Fitness Tracker</Text>
        <Text style={styles.paragraph}>
          Track workouts, monitor progress, and stay consistent with your goals.
          This app keeps your routines organized and your data private.
        </Text>
        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Version</Text>
          <Text style={styles.metaValue}>1.0.0</Text>
        </View>
        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Build</Text>
          <Text style={styles.metaValue}>March 2026</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>What we collect</Text>
        <Text style={styles.paragraph}>
          We only store workout and profile data that you provide. Health metrics
          stay on your device unless you choose to share them.
        </Text>
      </View>
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
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  paragraph: {
    color: '#B0B0B0',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '600',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  metaLabel: {
    color: '#8A8A8A',
    fontWeight: '700',
  },
  metaValue: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
