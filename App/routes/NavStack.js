import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpScreen, loginScreen} from '../screen/index';

const NavStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="loginScreen"
        component={loginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      {/* 
      <Stack.Screen
        name="ddddddddddddd"
        component={ddddddddddddddddd}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};
export default NavStack;
