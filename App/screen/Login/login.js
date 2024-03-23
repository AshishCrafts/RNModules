import {hp, wp} from '../../services/diamension';
import {InputText, RNButton} from '../../components';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../themes';

const Login = () => {
  const handleSubmit = async () => {
    console.log('hi');
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.formWrapper}>
        <InputText style={styles.input} placeholder={'Email'} onChange={''} />
        <InputText
          style={styles.input}
          placeholder={'Password'}
          onChange={''}
          secureTextEntry={true}
        />
      </View>
      <RNButton
        title={'Login'}
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
      <Text style={styles.bottomText}>You want to create your account?</Text>
      <View style={styles.bottomText}>
        <Text style={styles.loginText}>Sign up</Text>
      </View>
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

export default Login;
