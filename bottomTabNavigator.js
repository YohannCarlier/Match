import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screen/home';
import MesReservationsScreen from './screen/mesReservations';
import AddMatchScreen from './screen/addMatch';
import ProfileScreen from './screen/profile';
import { Ionicons } from '@expo/vector-icons'; // Si vous utilisez Expo ou installez react-native-vector-icons

const Tab = createBottomTabNavigator();

const bottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'MesReservations') {
            iconName = focused ? 'list' : 'list-outline'; // Remplacez par l'icône appropriée
          } else if (route.name === 'AddMatch') {
            iconName = focused ? 'add-circle' : 'add-circle-outline'; // Remplacez par l'icône appropriée
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Vous pouvez retourner n'importe quel composant ici!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'blue',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MesReservations" component={MesReservationsScreen} />
      <Tab.Screen name="AddMatch" component={AddMatchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default bottomTabNavigator;
