import React, {useEffect} from 'react';
import MyStack from './StaterStack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import NavStack from './NavStack';
import {hasLocationPermission} from './locRequest';
import {updateLogin} from '../redux/slice/loginSlice';
import {getData} from '../service/localStorage';
import {useDispatch, useSelector} from 'react-redux';

const RootNavigation = () => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.loginSlice);
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
      hasLocationPermission();
      const {isLoggedIn: login, access_token} = await getData('isLoggedIn');
      if (login || access_token) {
        dispatch(updateLogin({isLoggedIn: login, access_token: access_token}));
      }
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, [dispatch]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {isLoggedIn ? <NavStack /> : <MyStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigation;
