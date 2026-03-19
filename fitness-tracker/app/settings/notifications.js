import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function NotificationsScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [weeklySummary, setWeeklySummary] = useState(true);

  const handleSave = () => {
    Alert.alert('Preferences saved', 'Your notification settings have been updated.');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Notifications</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>Push Notifications</Text>
            <Text style={styles.rowSubtitle}>Workout reminders and achievements.</Text>
          </View>
          <Switch
            value={pushEnabled}
            onValueChange={setPushEnabled}
            trackColor={{ false: '#2A2A2A', true: '#60A5FA' }}
            thumbColor={pushEnabled ? '#FFFFFF' : '#B0B0B0'}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>Email Updates</Text>
            <Text style={styles.rowSubtitle}>Progress summaries and tips.</Text>
          </View>
          <Switch
            value={emailEnabled}
            onValueChange={setEmailEnabled}
            trackColor={{ false: '#2A2A2A', true: '#60A5FA' }}
            thumbColor={emailEnabled ? '#FFFFFF' : '#B0B0B0'}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>SMS Alerts</Text>
            <Text style={styles.rowSubtitle}>Critical account and billing notices.</Text>
          </View>
          <Switch
            value={smsEnabled}
            onValueChange={setSmsEnabled}
            trackColor={{ false: '#2A2A2A', true: '#60A5FA' }}
            thumbColor={smsEnabled ? '#FFFFFF' : '#B0B0B0'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summaries</Text>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>Weekly Summary</Text>
            <Text style={styles.rowSubtitle}>Get a recap every Monday.</Text>
          </View>
          <Switch
            value={weeklySummary}
            onValueChange={setWeeklySummary}
            trackColor={{ false: '#2A2A2A', true: '#60A5FA' }}
            thumbColor={weeklySummary ? '#FFFFFF' : '#B0B0B0'}
          />
        </View>
      </View>

      <View style={styles.helperCard}>
        <Text style={styles.helperTitle}>Tip</Text>
        <Text style={styles.helperText}>
          Disable SMS if you only want in-app reminders.
        </Text>
      </View>

      <View style={styles.spacer} />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Preferences</Text>
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
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  rowText: {
    flex: 1,
    marginRight: 16,
  },
  rowTitle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 4,
  },
  rowSubtitle: {
    color: '#999999',
    fontSize: 12,
    fontWeight: '600',
  },
  helperCard: {
    backgroundColor: '#262626',
    borderRadius: 16,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#60A5FA',
    marginBottom: 16,
  },
  helperTitle: {
    color: '#FFFFFF',
    fontWeight: '800',
    marginBottom: 8,
  },
  helperText: {
    color: '#B0B0B0',
    fontSize: 13,
    fontWeight: '600',
  },
  spacer: {
    height: 6,
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
