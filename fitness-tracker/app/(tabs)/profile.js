import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function ProfileScreen() {
  const router = useRouter();
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [age, setAge] = useState('28');
  const [weight, setWeight] = useState('75');
  const [height, setHeight] = useState('180');
  const [steps, setSteps] = useState(3847);
  const [isEditing, setIsEditing] = useState(false);
  const [photo, setPhoto] = useState(null);

  const pickImage = async () => {
    let ImagePickerModule;
    try {
      ImagePickerModule = require('expo-image-picker');
    } catch (e) {
      console.warn('expo-image-picker not installed; image selection unavailable');
      return;
    }
    // ask for permission
    if (Platform.OS !== 'web') {
      const { status } = await ImagePickerModule.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access gallery is required!');
        return;
      }
    }
    let result = await ImagePickerModule.launchImageLibraryAsync({
      mediaTypes: ImagePickerModule.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity style={styles.avatar} onPress={pickImage}>
          {photo ? (
            <Image source={{ uri: photo }} style={styles.avatarImage} />
          ) : (
            <Text style={styles.avatarText}>{name.split(' ').map(n=>n[0]).join('').toUpperCase()}</Text>
          )}
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>
      </View>

      <View style={styles.healthStatsContainer}>
        <View style={styles.healthStatCard}>
          <Text style={styles.healthStatIcon}>🎯</Text>
          <Text style={styles.healthStatValue}>10,000</Text>
          <Text style={styles.healthStatLabel}>Goal</Text>
        </View>

        <View style={styles.healthStatCard}>
          <Text style={styles.healthStatIcon}>🔥</Text>
          <Text style={styles.healthStatValue}>324</Text>
          <Text style={styles.healthStatLabel}>Burned kcal</Text>
        </View>

        <View style={styles.healthStatCard}>
          <Text style={styles.healthStatIcon}>⏱️</Text>
          <Text style={styles.healthStatValue}>3</Text>
          <Text style={styles.healthStatLabel}>km Today</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
            <Text style={styles.editButton}>{isEditing ? 'Done' : 'Edit'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.inputDisabled]}
            value={name}
            onChangeText={setName}
            editable={isEditing}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.inputDisabled]}
            value={email}
            onChangeText={setEmail}
            editable={isEditing}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={[styles.input, !isEditing && styles.inputDisabled]}
              value={age}
              onChangeText={setAge}
              editable={isEditing}
              keyboardType="numeric"
            />
          </View>
          <View style={[styles.inputGroup, { flex: 1 }]}>
            <Text style={styles.label}>Height (cm)</Text>
            <TextInput
              style={[styles.input, !isEditing && styles.inputDisabled]}
              value={height}
              onChangeText={setHeight}
              editable={isEditing}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1 }]}>
            <Text style={styles.label}>Weight (kg)</Text>
            <TextInput
              style={[styles.input, !isEditing && styles.inputDisabled]}
              value={weight}
              onChangeText={setWeight}
              editable={isEditing}
              keyboardType="decimal-pad"
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/settings/notifications')}
        >
          <Text style={styles.menuItemText}>🔔 Notifications</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/settings/goals')}
        >
          <Text style={styles.menuItemText}>🎯 Goals</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/settings/privacy-security')}
        >
          <Text style={styles.menuItemText}>🔐 Privacy & Security</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Help & Support</Text>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/support/about')}
        >
          <Text style={styles.menuItemText}>ℹ️ About</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/support/contact')}
        >
          <Text style={styles.menuItemText}>📧 Contact Us</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/support/terms')}
        >
          <Text style={styles.menuItemText}>📋 Terms & Conditions</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          alert('Logged out successfully');
          router.replace('/');
        }}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Fitness Tracker v1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  profileHeader: {
    backgroundColor: '#60A5FA',
    paddingHorizontal: 24,
    paddingVertical: 28,
    paddingTop: 34,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    shadowColor: '#60A5FA',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 8,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 3,
    borderColor: '#E0F2FE',
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#60A5FA',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  userEmail: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 6,
    opacity: 0.9,
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#1A1A1A',
    marginHorizontal: 16,
    marginVertical: 16,
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 14,
    letterSpacing: -0.3,
  },
  editButton: {
    color: '#60A5FA',
    fontWeight: '800',
    fontSize: 15,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#333333',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#FFFFFF',
    backgroundColor: '#262626',
    fontWeight: '600',
  },
  inputDisabled: {
    backgroundColor: '#1F1F1F',
    color: '#666666',
    borderColor: '#2A2A2A',
  },
  row: {
    flexDirection: 'row',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  menuItemText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  menuItemArrow: {
    fontSize: 20,
    color: '#CCCCCC',
  },
  logoutButton: {
    backgroundColor: '#F44336',
    marginHorizontal: 16,
    marginVertical: 24,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#F44336',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.3,
  },
  footer: {
    alignItems: 'center',
    padding: 24,
  },
  footerText: {
    fontSize: 12,
    color: '#999999',
    fontWeight: '600',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statItemIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  statItemValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#60A5FA',
  },
  statItemLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
    fontWeight: '600',
  },
  healthStatsContainer: {
    marginHorizontal: 16,
    marginVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  healthStatCard: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 20,
    padding: 20,
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
  healthStatIcon: {
    fontSize: 38,
    marginBottom: 12,
  },
  healthStatValue: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
    color: '#60A5FA',
  },
  healthStatLabel: {
    fontSize: 12,
    color: '#999999',
    marginTop: 6,
    fontWeight: '600',
    textAlign: 'center',
  },
});
