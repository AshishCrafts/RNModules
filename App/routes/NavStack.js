import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  dddddddddddddd,
  ddddddddddddd,
  dddddddddddd,
  ddddddddddddd,
} from '../screen';

const Stack = createNativeStackNavigator();

const NavStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ddddddddddddddd"
        component={dddddddddddddd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ddddddddddddddd"
        component={dddddddddddd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ddddddddddddddddd"
        component={ddddddddddddddddd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ddddddddddddd"
        component={ddddddddddddddddd}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default NavStack;
