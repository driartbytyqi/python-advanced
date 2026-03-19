import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function PrivacySecurityScreen() {
  const [profileVisible, setProfileVisible] = useState(true);
  const [shareActivity, setShareActivity] = useState(true);
  const [biometricLogin, setBiometricLogin] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  const handlePasswordReset = () => {
    Alert.alert('Password reset', 'We sent a reset link to your email.');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Privacy & Security</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy</Text>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>Profile Visibility</Text>
            <Text style={styles.rowSubtitle}>Allow others to view your profile.</Text>
          </View>
          <Switch
            value={profileVisible}
            onValueChange={setProfileVisible}
            trackColor={{ false: '#2A2A2A', true: '#60A5FA' }}
            thumbColor={profileVisible ? '#FFFFFF' : '#B0B0B0'}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>Share Activity</Text>
            <Text style={styles.rowSubtitle}>Show workouts on leaderboards.</Text>
          </View>
          <Switch
            value={shareActivity}
            onValueChange={setShareActivity}
            trackColor={{ false: '#2A2A2A', true: '#60A5FA' }}
            thumbColor={shareActivity ? '#FFFFFF' : '#B0B0B0'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security</Text>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>Biometric Login</Text>
            <Text style={styles.rowSubtitle}>Use Face ID or fingerprint.</Text>
          </View>
          <Switch
            value={biometricLogin}
            onValueChange={setBiometricLogin}
            trackColor={{ false: '#2A2A2A', true: '#60A5FA' }}
            thumbColor={biometricLogin ? '#FFFFFF' : '#B0B0B0'}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>Two-Factor Authentication</Text>
            <Text style={styles.rowSubtitle}>Add an extra layer of protection.</Text>
          </View>
          <Switch
            value={twoFactor}
            onValueChange={setTwoFactor}
            trackColor={{ false: '#2A2A2A', true: '#60A5FA' }}
            thumbColor={twoFactor ? '#FFFFFF' : '#B0B0B0'}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.actionButton} onPress={handlePasswordReset}>
        <Text style={styles.actionButtonText}>Change Password</Text>
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
  actionButton: {
    backgroundColor: '#60A5FA',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#0F0F0F',
    fontWeight: '800',
    fontSize: 15,
  },
});
