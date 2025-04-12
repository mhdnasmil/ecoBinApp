import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      {/* Wallet Info Section */}
      <View style={styles.walletContainer}>
        <FontAwesome5 name="wallet" size={50} color="#fff" />
        <Text style={styles.walletBalance}>Wallet Balance: 500 Points</Text>
      </View>

      {/* Redeem Options */}
      <View style={styles.walletOptions}>
        <TouchableOpacity style={styles.optionButton}>
          <MaterialIcons name="card-giftcard" size={24} color="#fff" />
          <Text style={styles.optionText}>Redeem as Gift Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <MaterialIcons name="local-offer" size={24} color="#fff" />
          <Text style={styles.optionText}>Exclusive Offers</Text>
        </TouchableOpacity>
      </View>

      {/* Available Offers */}
      <View style={styles.offersContainer}>
        <Text style={styles.offersTitle}>Available Gift Cards</Text>
        <View style={styles.offerItem}>
          <Text style={styles.offerText}>Swiggy Gift Card - 300 Points</Text>
        </View>
        <View style={styles.offerItem}>
          <Text style={styles.offerText}>Flipkart Gift Card - 500 Points</Text>
        </View>
        <View style={styles.offerItem}>
          <Text style={styles.offerText}>Amazon Gift Card - 700 Points</Text>
        </View>
      </View>
    </View>
  );
}

export function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000' },
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={WalletScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Redeem" 
        component={RedeemScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="redeem" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
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
  walletContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    width: '90%',
    marginBottom: 20,
    justifyContent: 'center',
  },
  walletBalance: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  walletOptions: {
    width: '90%',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    width: '100%',
    justifyContent: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  offersContainer: {
    width: '90%',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  offersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  offerItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    width: '100%',
    alignItems: 'center',
  },
  offerText: {
    color: '#fff',
    fontSize: 16,
  },
});