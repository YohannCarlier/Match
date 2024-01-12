// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  // Replace these with actual data from your state or props
  const userName = 'Nom';
  const userFirstName = 'Prénom';
  const userEmail = 'email@email.com';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.name}>{userName} {userFirstName}</Text>
        <Text style={styles.email}>{userEmail}</Text>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ModifProfil')}>
        <Text style={styles.buttonText}>Modifier profil</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('MesMatchs')}>
        <Text style={styles.buttonText}>Mes Matchs</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, styles.logoutButton]}
        onPress={() => navigation.navigate('Connexion')}>
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#467FD0',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E1E2E6',
    marginBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#D9534F',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
  // ... add any other styles you need
});
