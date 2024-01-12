// Home.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const sports = [
  { name: 'Tennis', image: require('../assets/tennis.png') }, 
  { name: 'Five', image: require('../assets/five.png') },
  { name: 'Ping-Pong', image: require('../assets/ping.png') },
  { name: 'Badminton', image: require('../assets/badminton.png') },
  { name: 'Padel', image: require('../assets/padel.png') }, 
  { name: 'Basket', image: require('../assets/basket.png') },
  
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez votre sport</Text>
      <ScrollView contentContainerStyle={styles.sportsContainer}>
        {sports.map((sport, index) => (
          <TouchableOpacity
          key={index}
          style={styles.sportCard}
          onPress={() => navigation.navigate('Reservation', { sportName: sport.name })}>
          <Image source={sport.image} style={styles.sportImage} />
          <Text style={styles.sportName}>{sport.name}</Text>
        </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  sportsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
  },
  sportCard: {
    margin: 10,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // for Android shadow
    // For iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  sportImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  sportName: {
    position: 'absolute',
    bottom: 10,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Home;
