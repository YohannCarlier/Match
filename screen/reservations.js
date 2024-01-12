// ReservationScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Switch, TouchableOpacity, Picker } from 'react-native';
import { Calendar } from 'react-native-calendars'; // Make sure to install this package

export default function ReservationScreen({ navigation, route }) {
  const [selectedDistance, setSelectedDistance] = useState('5');
  const [isGeolocationEnabled, setIsGeolocationEnabled] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const sportName = route.params?.sportName || 'Sport'; // Get the sport name from navigation params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Reservation\n${sportName}`}</Text>
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          // You can also perform other actions here if needed
        }}
        // ... any other props you need to pass to the Calendar
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'blue',
            selectedTextColor: 'white'
          }
        }}
        renderArrow={(direction) => (
          <View style={styles.arrowContainer}>
            {direction === 'left' ? (
              <Text style={styles.arrowText}>{'<'}</Text>
            ) : (
              <Text style={styles.arrowText}>{'>'}</Text>
            )}
          </View>
        )}
      />
      <Text style={styles.label}>Sélectionner une distance:</Text>
      <Picker
        selectedValue={selectedDistance}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedDistance(itemValue)
        }>
        <Picker.Item label="5 km" value="5" />
        <Picker.Item label="10 km" value="10" />
        <Picker.Item label="20 km" value="20" />
        <Picker.Item label="30 km" value="30" />
        <Picker.Item label="50 km" value="50" />
      </Picker>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>J'autorise ma géolocalisation</Text>
        <Switch
          value={isGeolocationEnabled}
          onValueChange={setIsGeolocationEnabled}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DetailsReservation')}>
        <Text style={styles.buttonText}>Afficher les disponibilités</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 20,
  },
  picker: {
    height: 50,
    width: '80%',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // ... add any other styles you need
});

// Modify your Home.js to pass the sport name to the ReservationScreen
// Add onPress to your TouchableOpacity to navigate to ReservationScreen with params
