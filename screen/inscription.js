// Inscription.js
import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';

const Inscription = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
      <select id="seclectionnerSexe">
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
      </select><br></br>
      <Text>Entrez vos informations</Text>
      <TextInput style={styles.input} placeholder="Age" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Poids" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Taille" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Mot De Passe" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmer le Mot De Passe" secureTextEntry />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Connexion')} // Make sure 'Home' matches your Home screen route name
      >
        <Text style={styles.buttonText}>Inscription</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Connexion')}>
        <Text style={styles.linkText}>Se Connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007bff',
  },
});

export default Inscription;