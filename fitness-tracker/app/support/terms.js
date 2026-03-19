import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TermsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Terms & Conditions</Text>

      <View style={styles.card}>
        <Text style={styles.paragraph}>
          By using the Fitness Tracker app, you agree to use the service for
          personal wellness purposes. The app does not provide medical advice.
        </Text>
        <Text style={styles.paragraph}>
          You are responsible for keeping your account secure. Do not share your
          password or access token with anyone else.
        </Text>
        <Text style={styles.paragraph}>
          We may update these terms from time to time. If we make material
          changes, we will notify you inside the app.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Data & Privacy</Text>
        <Text style={styles.paragraph}>
          Your workout data is used to personalize insights and reminders. You
          can control sharing settings at any time in Privacy & Security.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Contact</Text>
        <Text style={styles.paragraph}>Questions? Email support@fitnesstracker.app.</Text>
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
