import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* User Info Section */}
      <View style={styles.userInfoContainer}>
        <FontAwesome5 name="user" size={50} color="#fff" />
        <Text style={styles.userName}>Hello, User!</Text>
        <Text style={styles.userEmail}>example@example.com</Text>
      </View>

      {/* Account Settings Section */}
      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.settingItem}><Text style={styles.settingText}>Change Password</Text></TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}><Text style={styles.settingText}>Privacy Settings</Text></TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}><Text style={styles.settingText}>Notification Settings</Text></TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}><Text style={styles.settingText}>Language Preferences</Text></TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}><Text style={styles.settingText}>Help & Support</Text></TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}><Text style={styles.settingText}>About</Text></TouchableOpacity>
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  userInfoContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    width: '90%',
    marginBottom: 20,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  userEmail: {
    fontSize: 16,
    color: '#bbb',
    marginTop: 5,
    textAlign: 'center',
  },
  settingsContainer: {
    width: '90%',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  settingItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    width: '100%',
    alignItems: 'center',
  },
  settingText: {
    color: '#fff',
    fontSize: 16,
  },
  signOutButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  signOutText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
