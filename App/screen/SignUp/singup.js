import React, {useState} from 'react';
import {View, StyleSheet, Image, Keyboard} from 'react-native';
import {colors} from '../../theme/colors';
import {hp, wp} from '../../service/resDimension';
import RNText from '../../component/rnText/RNText';
import RNButton from '../../component/button/RNButton';
import {useDispatch, useSelector} from 'react-redux';
import {logo2} from '../../assets/images';
import {forgotpwd} from '../../redux/slice/loginSlice';

const SignUp = ({navigation, route}) => {
  const [callingCode, setCallingCode] = useState(91);
  const {isLoader} = useSelector(state => state.loginSlice);
  const {isLoader: registerLoder} = useSelector(state => state.RegisterSlice);
  const dispatch = useDispatch();
  const toast = useToast();
  const page = route?.params?.data;

  const [input, setInput] = useState('');

  const hanldeForgetPassword = () => {
    const form = new FormData();
    form.append('phone', `+${callingCode}${input}`);

    if (input === '') {
      toast.show('SignUp.number', {type: 'warning'});
    } else {
      const request = {
        payload: form,
        onSuccess: () =>
          navigation.navigate('OtpScreen', {
            number: `+${callingCode}${input}`,
            page: page,
          }),
        onFail: e => toast.show(e, {type: 'danger'}),
      };
      dispatch(forgotpwd(request));
    }
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();
    const form = new FormData();
    form.append('phone', `+${callingCode}${input}`);

    if (page === 'forget') {
      hanldeForgetPassword();
    } else if (page === 'register') {
      if (input === '') {
        toast.show('SignUp.number', {type: 'warning'});
      } else {
        const request = {
          payload: form,
          onSuccess: () =>
            navigation.navigate('OtpScreen', {
              number: `+${callingCode}${input}`,
              page: page,
            }),
          onFail: e => toast.show(e, {type: 'danger'}),
        };
        dispatch(getOtpUser(request));
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image style={styles.image} source={logo2} />
      </View>
      <View></View>
      <View>
        <RNButton
          title={'SignUp.next'}
          buttonTextColor={styles.btnText}
          buttonStyle={{width: wp(90), marginTop: hp(3)}}
          onPress={handleSubmit}
          isLoading={isLoader || registerLoder}
        />
      </View>
      <View style={styles.account}>
        <View>
          <RNText style={styles.Text}>
            {'SignUp.alreadyAcc'}
            <RNText
              style={styles.login}
              onPress={() => navigation.navigate('SignIn')}>
              {' '}
              {'SignUp.login'}
            </RNText>
          </RNText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    padding: wp(5),
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  image: {
    height: 110,
    width: 200,
  },
  inputStyle: {
    width: wp(90),
    fontSize: 18,
    marginTop: hp(2),
  },
  Text: {
    color: colors.BLACK,
    fontSize: 15,
    marginVertical: hp(2),
  },

  lowerText2: {
    color: colors.BLACK,
    fontSize: 16,
    alignSelf: 'center',
  },
  firstTextView: {
    flexDirection: 'row',
    height: hp(9),
    borderBottomColor: colors.light_gray,
  },
  icon: {
    marginTop: hp(3.5),
    height: 30,
    width: 30,
  },
  socialIcon: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(3.5),
  },
  lowerView: {
    marginTop: hp(20),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  socialMediaIcon: {
    marginHorizontal: wp(2),
    width: wp(10),
    height: wp(10),
  },
  account: {
    flexDirection: 'row',
    textAlign: 'cenetr',
    marginTop: hp(2),
    marginHorizontal: hp(8),
    height: hp(20),
    width: wp(57),
    justifyContent: 'space-between',
  },
  login: {
    color: colors.PINK,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default SignUp;
