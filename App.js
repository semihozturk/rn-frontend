import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './src/components/screens/FirstScreen';
import ThirdScreen from './src/components/screens/ThirdScreen';


const Stack = createStackNavigator();

const App = () => {
 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
