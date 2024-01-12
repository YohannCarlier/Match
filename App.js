import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './bottomTabNavigator';

import HomeScreen from './screen/home';
import ConnexionScreen from './screen/connexion';
import InscriptionScreen from './screen/inscription';
import ReservationScreen from './screen/reservations';
import DetailsReservationScreen from './screen/DetailsReservation';
import ModifProfilScreen from './screen/modifProfil';


const Stack = createStackNavigator();


  

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion">
        <Stack.Screen name="Connexion" component={ConnexionScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} />
        <Stack.Screen name="DetailsReservation" component={DetailsReservationScreen} />
        <Stack.Screen name="ModifProfil" component={ModifProfilScreen} />
        <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
