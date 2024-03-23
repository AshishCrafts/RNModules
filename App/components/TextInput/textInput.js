import React from 'react';
import {View, TextInput, useColorScheme} from 'react-native';
import styles from './styles';
import {colors} from '../../themes';

const InputText = ({style, value, containerStyle, onChange, ...props}) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={isDark ? colors.BLACK : colors.BLACK}
        onChangeText={onChange}
        value={value}
        {...props}
      />
    </View>
  );
};

export default InputText;
