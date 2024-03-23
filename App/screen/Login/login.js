import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../themes';
import {hp, wp} from '../../services/diamension';
import React from 'react';

const Login = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.begini,
  },
  text: {
    fontSize: 30,
    color: colors.WHITE,
  },
});
