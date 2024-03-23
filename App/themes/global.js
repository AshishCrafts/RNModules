import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';
import {hp, wp} from '../services/diamension';

const global = StyleSheet.create({
  InputTYpe: {
    color: colors.BLACK,
    borderBottomWidth: 1,
    paddingLeft: hp(2),
    borderColor: colors.light_gray,
  },
  email: {
    color: colors.BLACK,
    borderBottomWidth: 1,
    paddingLeft: hp(2),
    borderColor: colors.light_gray,
  },
  phone: {
    color: colors.BLACK,
    borderBottomWidth: 1,
    paddingLeft: hp(2),
    borderColor: colors.light_gray,
  },
});

export default global;
