import {hp, wp} from '../../services/diamension';
import React from 'react';
import {InputText, RNButton} from '../../components';
import {colors} from '../../themes';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  const handleSubmit = async () => {
    navigation.navigate('Chat');
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Home Screen</Text>

      <Text>You want to create your account?</Text>
      <View style={styles.bottomText}>
        <Text style={styles.loginText}>Sign up</Text>
      </View>
      <RNButton
        title={'Login'}
        buttonTextColor={styles.btnText}
        buttonStyle={{
          width: wp(70),
          marginTop: hp(3),
          backgroundColor: colors.purple,
          borderRadius: 9,
        }}
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: hp(12),
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formWrapper: {
    width: '80%',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
});

export default HomeScreen;
