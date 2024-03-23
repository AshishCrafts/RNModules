import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../themes';
import {hp, wp} from '../../services/diamension';
import {InputText} from '../../components';
import React from 'react';

const Login = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.texts}>Login</Text>
      <View>
        <InputText />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.light_gray,
    paddingHorizontal: hp(2),
  },
  texts: {
    textAlign: 'center',
    fontSize: hp(3.5),
    marginTop: hp(2),
    color: colors.BLACK,
  },
});
