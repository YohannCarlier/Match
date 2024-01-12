// AddMatchScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Picker, TouchableOpacity } from 'react-native';

const AddMatchScreen = () => {
  const [selectedSport, setSelectedSport] = useState('Tennis');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [missingPersons, setMissingPersons] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  const handleAddMatch = () => {
    // Implement the logic to add the match here
    // This might involve validating the data and then saving it to a database or state management
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un Match</Text>
      
      <Text style={styles.label}>Choisir le sport</Text>
      <Picker
        selectedValue={selectedSport}
        onValueChange={(itemValue, itemIndex) => setSelectedSport(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Tennis" value="Tennis" />
        <Picker.Item label="Five" value="Five" />
        <Picker.Item label="Padel" value="Padel" />
        <Picker.Item label="Basket" value="Basket" />
        {/* Add other sports as needed */}
      </Picker>

      <TextInput
        placeholder="Lieu"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Prix"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
      />
      
      <TextInput
        placeholder="Nombre de personne manquante dans l'équipe"
        value={missingPersons}
        onChangeText={setMissingPersons}
        style={styles.input}
        keyboardType="numeric"
      />
      
      <TextInput
        placeholder="Jours"
        value={day}
        onChangeText={setDay}
        style={styles.input}
      />
      
      <TextInput
        placeholder="horaire (hh/hh)"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />
      
      <TouchableOpacity style={styles.addButton} onPress={handleAddMatch}>
        <Text style={styles.addButtonText}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#467FD0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  // ... add any other styles you need
});

export default AddMatchScreen;
