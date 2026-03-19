import { useState } from 'react';
import { Alert, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ContactScreen() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    const trimmedSubject = subject.trim() || 'Support request';
    const trimmedMessage = message.trim() || 'Hello support team,';

    const mailto = `mailto:support@fitnesstracker.app?subject=${encodeURIComponent(
      trimmedSubject,
    )}&body=${encodeURIComponent(trimmedMessage)}`;

    const supported = await Linking.canOpenURL(mailto);
    if (!supported) {
      Alert.alert('Email not available', 'Please email support@fitnesstracker.app.');
      return;
    }

    Linking.openURL(mailto);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Contact Us</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Subject</Text>
        <TextInput
          style={styles.input}
          value={subject}
          onChangeText={setSubject}
          placeholder="Account or billing question"
          placeholderTextColor="#6B6B6B"
        />

        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.messageInput]}
          value={message}
          onChangeText={setMessage}
          multiline
          placeholder="Tell us how we can help..."
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send Email</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Support hours</Text>
        <Text style={styles.paragraph}>Monday to Friday, 9:00 AM to 6:00 PM.</Text>
        <Text style={styles.paragraph}>We respond within 24 hours.</Text>
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
  label: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#262626',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    color: '#FFFFFF',
    fontWeight: '600',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginBottom: 14,
  },
  messageInput: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#60A5FA',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0F0F0F',
    fontWeight: '800',
    fontSize: 15,
  },
  heading: {
    fontSize: 15,
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
});
