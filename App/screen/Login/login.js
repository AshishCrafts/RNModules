import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import RNButton from '../../component/button/RNButton';
import InputText from '../../component/inputText/InputText';
import RNText from '../../component/rnText/RNText';
import {colors} from '../../theme/colors';
import {useToast} from 'react-native-toast-notifications';
import {useDispatch, useSelector} from 'react-redux';
import {Login} from '../../redux/slice/loginSlice';
import Icon from '../../assets/icon/Icon';
import {hp, wp} from '../../service/resDimension';
import I18n from '../../i18n/i18n';
import CountryModal from '../../component/countryModal/CountryModal';
import Header from '../../component/header/Header';
import {logo2} from '../../assets/images';

const SignIn = ({navigation}) => {
  const [show, setShow] = useState(true);
  const [callingCode, setCallingCode] = useState(91);
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const {isLoader} = useSelector(state => state.loginSlice);
  const toast = useToast();
  const dispatch = useDispatch();

  const handleBtn = () => {
    Keyboard.dismiss();
    if (input.length < 10) {
      toast.show('Please enter your valid mobile number', {type: 'warning'});
    } else if (password.length < 6) {
      toast.show('Please enter your  password', {type: 'warning'});
    } else {
      const payload = {
        grant_type: 'password',
        username: `+${callingCode}${input}`,
        password: password,
        client_id: '2',
        client_secret: '57nAvca8Wixk9NRIgSYRzR0dXcGPkbhNIpBTc8yC',
      };

      const request = {
        payload,
        onSuccess: successMessage => {
          toast.show(successMessage, {
            type: 'success',
            duration: 3000,
          });
        },
        onFail: e => {
          toast.show(e, {
            type: 'danger',
            duration: 3000,
          });
        },
      };
      dispatch(Login(request));
    }
  };

  const handleInputStore = e => {
    setInput(e);
  };
  const handlePasswordStore = e => {
    setPassword(e);
  };
  return (
    <>
      <Header
        headerBackgroundColor={colors.WHITE}
        Childeren
        style={styles.headerText}
        leftIconType={'Ionicons'}
        color={colors.CYAN_ORIGNAL}
        size={30}
        onPress={() => navigation.navigate('ProfileScreen')}
      />
      <View style={styles.mainContainer}>
        <View style={styles.imageView}>
          <Image style={styles.image} source={logo2} />
        </View>
        <View>
          <View style={styles.firstTextView}>
            <CountryModal setInput={setInput} setCallingCode={setCallingCode} />
          </View>
          <View style={styles.SecondTextView}>
            <Icon
              type={'Entypo'}
              name="key"
              size={20}
              color={colors.DARK_GRAY}
              style={styles.icon1}
            />
            <InputText
              style={styles.inputStyle1}
              placeholder={I18n.t('SignIn.password')}
              onChange={handlePasswordStore}
              secureTextEntry={show ? true : false}
            />
            <Icon
              name={show ? 'eye-off' : 'eye'}
              type={'Feather'}
              onPress={() => setShow(!show)}
              color={colors.DARK_GRAY}
              size={20}
              style={styles.icon2}
            />
          </View>
        </View>
        <View>
          <RNButton
            title={I18n.t('SignIn.next')}
            buttonTextColor={styles.btnText}
            onPress={handleBtn}
            buttonStyle={styles.buttonStyle}
            isLoading={isLoader}
          />
        </View>
        <View style={styles.lowerText}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp', {data: 'register'})}>
            <RNText style={styles.Text}>
              {I18n.t('SignIn.dontAcc')}{' '}
              <RNText style={{color: colors.PINK}}>
                {I18n.t('SignIn.register')}
              </RNText>
            </RNText>
          </TouchableOpacity>

          <RNText
            style={styles.Text1}
            onPress={() => navigation.navigate('SignUp', {data: 'forget'})}>
            {I18n.t('SignIn.forgotPass')}
          </RNText>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(10),
    width: 'auto',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
    padding: wp(5),
  },
  image: {
    height: 85,
    width: 155,
  },
  inputStyle: {
    marginHorizontal: 10,
    width: wp(84),
    fontSize: 18,
    color: colors.BLACK,
    marginRight: wp(1),
  },
  inputStyle1: {
    marginHorizontal: 10,
    width: wp(80),
    fontSize: 18,
    color: colors.BLACK,
  },
  Text: {
    color: colors.BLACK,
    fontSize: 16,
    marginTop: hp(5),
  },
  Text1: {
    color: colors.PINK,
    fontSize: 16,
    marginTop: hp(1),
    textAlign: 'center',
  },
  lowerText: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  lowerText2: {
    color: colors.BLACK,
    fontSize: 15,
    alignSelf: 'center',
    marginTop: hp(4),
  },
  icon: {
    marginTop: hp(4),
    paddingLeft: 15,
    height: 30,
    width: 30,
  },
  icon1: {
    marginTop: hp(2.5),
    marginLeft: wp(3),
  },
  icon2: {
    marginTop: Platform.OS === 'ios' ? hp(2) : hp(2.5),
    marginLeft: Platform.OS === 'ios' ? wp(-10) : wp(-15),
  },
  SecondTextView: {
    flexDirection: 'row',
    height: hp(7),
    marginTop: hp(1),
    borderBottomWidth: 1,
    borderColor: colors.light_gray,
  },
  socialIcon: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(3),
  },
  socialMediaIcon: {
    marginHorizontal: wp(2),
  },
  signinText: {
    color: colors.CYAN_ORIGNAL,
    fontSize: hp(4.5),
    fontWeight: 'bold',
    marginTop: hp(-1),
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(13),
    width: wp(90),
    marginBottom: hp(5),
  },
  buttonStyle: {
    width: wp(90),
    marginTop: hp(5),
  },
  buttonStyle1: {
    borderRadius: hp(5),
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignIn;
