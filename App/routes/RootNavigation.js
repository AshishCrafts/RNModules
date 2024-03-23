import React, {useState} from 'react';
import NavStack from './NavStack';
import MyStack from './StarterStack';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {isLoggedIn ? <NavStack /> : <MyStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigation;
