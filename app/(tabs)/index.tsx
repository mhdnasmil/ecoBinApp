import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* User Info Section */}
      <View style={styles.userInfoContainer}>
        <FontAwesome name="user-circle" size={80} color="#ffffff" />
        <Text style={styles.userName}>Hello, User!</Text>
        <Text style={styles.pointsText}>Your Points: 500</Text>
      </View>
      
      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => console.log('View Wallet')}>
          <MaterialIcons name="account-balance-wallet" size={18} color="#fff" />
          <Text style={styles.buttonText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Redeem Points')}>
          <MaterialIcons name="card-giftcard" size={18} color="#fff" />
          <Text style={styles.buttonText}>Redeem</Text>
        </TouchableOpacity>
      </View>
      
      {/* Scan QR Code Button */}
      <TouchableOpacity style={styles.scanButton} onPress={() => console.log('Scan QR Code')}>
        <FontAwesome name="qrcode" size={24} color="#000" />
        <Text style={styles.scanButtonText}>Scan QR Code</Text>
      </TouchableOpacity>
      
      {/* Recent Transactions Section */}
      <View style={styles.transactionContainer}>
        <Text style={styles.subtitle}>Recent Transactions</Text>
        <View style={styles.transactionItem}>
          <Text style={styles.transactionText}>Scanned at Park</Text>
          <Text style={styles.transactionPoints}>+10 pts</Text>
        </View>
        <View style={styles.transactionItem}>
          <Text style={styles.transactionText}>Scanned at Mall</Text>
          <Text style={styles.transactionPoints}>+15 pts</Text>
        </View>
      </View>
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
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    width: '90%',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  pointsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#333',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scanButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 35,
    borderRadius: 30,
    width: '90%',
    marginTop: 20,
  },
  scanButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  transactionContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    width: '90%',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  transactionText: {
    color: '#fff',
    fontSize: 16,
  },
  transactionPoints: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});