import {StyleSheet, Text} from 'react-native';
import React from 'react';
const RNText = ({type, bold, semiBold, italic, style, ...props}) => {
  return (
    <Text
      style={StyleSheet.flatten([
        getTextStyle(type, bold, semiBold, italic),
        style,
      ])}
      {...props}
    />
  );
};
export default RNText;
const getTextStyle = (type, bold, semiBold, italic) => {
  let style = '';
  switch (type) {
    case 'heading':
      style = styles.textBold;
      break;
    case 'sub_heading':
      style = styles.textSemiBold;
      break;
    default:
      style = styles.textRegular;
  }
  if (bold) {
    style = {...style, fontWeight: 'bold'};
  } else if (semiBold) {
    style = {...style, fontWeight: '600'};
  } else {
    style = {...style, fontWeight: 'normal'};
  }
  if (italic) {
    style = {...style, fontStyle: 'italic'};
  }
  return style;
};
const styles = StyleSheet.create({
  textRegular: {
    fontSize: 16,
  },
  textBold: {
    fontSize: 18,
  },
  textSemiBold: {
    fontSize: 18,
  },
});
