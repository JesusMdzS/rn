import  React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { MenuScreen } from '../screens/MenuScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const Navigation=()=> {
  return (
   
      <Stack.Navigator >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen  name="MenuScreen" component={MenuScreen}  options={{
            
            gestureEnabled:false
            
            }} />
      </Stack.Navigator>
   
  );
}