import React, {useState} from 'react';
import NavStack from './NavStack';
import MyStack from './StarterStack';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {isLoggedIn ? <NavStack /> : <MyStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigation;
