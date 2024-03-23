import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {hp, wp} from '../../services/diamension';
import {colors} from '../../themes';

const Button = ({
  onPress,
  navigation,
  title,
  buttonTextColor,
  handleFilter,
  buttonStyle,
  isLoading,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} navigation={navigation} {...props}>
      <View style={[styles.buttonContainer, buttonStyle]}>
        <View style={styles.conatiner}>
          {isLoading ? (
            <ActivityIndicator color={colors.WHITE} size="large" />
          ) : (
            <Text style={[styles.text, buttonTextColor]}>{title}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.PINK,
  },
  text: {
    color: colors.WHITE,
    alignSelf: 'center',
  },
});
export default Button;
