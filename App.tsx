import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import LoginScreen from './screens/FirstScreen';
import HomeScreen from './screens/HomeScreen';
import AddMenuScreen from './screens/AddMenuScreen';
import EditMenuScreen from './screens/EditMenuScreen';
import FirstScreen from './screens/FirstScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* Set StatusBar color and style */}
      <StatusBar backgroundColor="#0f1015" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="First"
          screenOptions={{
            headerShown: false,  // hide header globally if you want
          }}
        >
          <Stack.Screen name="First" component={FirstScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddMenu" component={AddMenuScreen} />
          <Stack.Screen name="EditMenu" component={EditMenuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
