import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const login = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>login</Text>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'crimson',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});
