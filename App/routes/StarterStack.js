import * as React from 'react';
import {SignUpScreen, loginScreen} from '../screen/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function MyStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="loginScreen"
        component={loginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
