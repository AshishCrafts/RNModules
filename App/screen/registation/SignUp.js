import {hp, wp} from '../../services/diamension';
import {InputText, RNButton} from '../../components';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../themes';

const SignUp = ({navigation}) => {
  const handleSubmit = async () => {
    navigation.navigate('loginScreen');
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>SignUp</Text>
      <View style={styles.formWrapper}>
        <InputText style={styles.input} placeholder={'Name'} onChange={''} />
        <InputText style={styles.input} placeholder={'Email'} onChange={''} />
        <InputText
          style={styles.input}
          placeholder={'Password'}
          onChange={''}
          secureTextEntry={true}
        />
      </View>
      <RNButton
        title={'SignUp'}
        buttonTextColor={styles.btnText}
        buttonStyle={{
          width: wp(90),
          marginTop: hp(3),
          backgroundColor: colors.purple,
          borderRadius: 9,
        }}
        onPress={handleSubmit}
        isLoading={''}
      />
      <Text style={styles.bottomText}>Already have an account?</Text>
      <View style={styles.bottomText}>
        <Text style={styles.loginText}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
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
  input: {
    height: hp(6),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  button: {
    width: '90%',
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomText: {
    marginTop: 20,
  },
  loginText: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default SignUp;
