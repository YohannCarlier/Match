// Connexion.js
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Connexion = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot De Passe"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Main')} // Assurez-vous que 'Home' est le nom correct de votre écran d'accueil
      >
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Inscription')}>
        <Text style={styles.signupText}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 250, // Définissez la largeur de votre logo
    height: 250, // Définissez la hauteur de votre logo
    resizeMode: 'contain', // ou 'cover' selon vos besoins
  },
  input: {
    height: 50,
    width: '80%',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    paddingHorizontal: 15,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '80%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  signupText: {
    color: '#007bff',
    marginTop: 20,
  },
});

export default Connexion;
