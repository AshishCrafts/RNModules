import {createSlice} from '@reduxjs/toolkit';
import {ApiService} from '../../api/apicall/apiCall';
import {storeData, clearAll} from '../../service/localStorage';

const initialState = {
  isLoader: false,
  isError: false,
  errorMessage: '',
  isLoggedIn: false,
  accountInfo: [],
  forgotInfo: [],
  resetInfo: {},
  access_token: '',
  registerinfo: [],
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    Loginreq: (state, action) => {
      //login
      state.isLoader = true;
      state.errorMessage = '';
    },
    LoginSuccess: (state, action) => {
      state.isLoader = false;
      state.isLoggedIn = true;
      state.access_token = action.payload;
    },
    LoginFailed: (state, action) => {
      state.isLoader = false;
      state.isError = true;
      state.errorMessage = action.payload.errorMessage;
    },
    LogoutReq: (state, action) => {
      //logout
      state.isLoader = true;
    },
    LogoutSuccess: (state, action) => {
      state.isLoader = false;
      state.isLoggedIn = false;
    },
    LogoutFailed: (state, action) => {
      state.isLoader = false;
      state.isError = true;
      state.errorMessage = action.payload.errorMessage;
    },
    forgotpwdReq: (state, action) => {
      //pwd reset
      state.isLoader = true;
      state.errorMessage = '';
    },
    forgotpwdSuccess: (state, action) => {
      state.isLoader = false;
      state.forgotInfo = action.payload;
    },
    forgotpwdFailed: (state, action) => {
      state.isLoader = false;
      state.isError = true;
      state.errorMessage = action.payload.errorMessage;
    },
    resetpwdReq: (state, action) => {
      state.isLoader = true;
      state.errorMessage = '';
    },
    resetpwdSuccess: (state, action) => {
      state.isLoader = false;
      state.resetInfo = action.payload;
    },
    resetpwdFailed: (state, action) => {
      state.isLoader = false;
      state.isError = true;
      state.errorMessage = action.payload.errorMessage;
    },
    clearLoginSlice: state => {
      //clear login
      state.access_token = '';
    },
    registerreq: state => {
      //register
      state.isLoader = false;
      state.isError = true;
    },
    registerSuccess: (state, action) => {
      state.isLoader = false;
      state.registerinfo = action.payload;
    },
    registerFail: state => {
      state.isLoader = false;
      state.isError = true;
    },
    passwordUpdatereq: state => {
      state.isLoader = true;
    },
    passwordUpdateSuccess: (state, action) => {
      state.isLoader = false;
      state.passwordinfo = action.payload.errorMessage;
    },
    passwordUpdatefailed: state => {
      state.isLoader = false;
      state.isError = true;
    },
  },
});

export const {
  Loginreq,
  LoginSuccess,
  LoginFailed,
  LogoutReq,
  LogoutSuccess,
  LogoutFailed,
  passwordUpdatereq,
  passwordUpdateSuccess,
  passwordUpdatefailed,
  updateLogin,
  forgotpwdReq,
  forgotpwdSuccess,
  forgotpwdFailed,
  resetpwdReq,
  resetpwdSuccess,
  resetpwdFailed,
  clearLoginSlice,
  registerreq,
  registerSuccess,
  registerFail,
} = loginSlice.actions;

export const Login = request => {
  return async dispatch => {
    const {payload, onFail} = request;
    dispatch(Loginreq());
    try {
      const res = await ApiService.handleLogin(payload);
      if (res?.status === 200) {
        dispatch(LoginSuccess(res?.data?.access_token));
        storeData('isLoggedIn', {
          isLoggedIn: true,
          access_token: res?.data?.access_token,
        });
      } else {
        dispatch(
          LoginFailed({
            errorMessage: res?.data?.message || 'loginSlice.wrong',
          }),
        );
      }
    } catch (e) {
      onFail(e?.response?.data?.message);
      dispatch(
        LoginFailed({
          errorMessage: e?.response?.data?.message || 'loginSlice.wrong',
        }),
      );
    }
  };
};

export const changePassword = request => {
  return async (dispatch, getState) => {
    const {payload, onSuccess, onFail} = request;
    const {access_token} = getState().loginSlice;
    dispatch(passwordUpdatereq());
    try {
      const res = await ApiService.handlePassword(payload, access_token);
      console.log(res, 'response');
      if (res) {
        onSuccess(JSON.parse(res)?.message);
      } else {
        onFail('loginSlice.invalid');

        dispatch(
          passwordUpdatefailed({
            errorMessage: res?.error || 'loginSlice.wrong',
          }),
        );
      }
    } catch (e) {
      onFail(e?.statusText?.errors?.password);
      dispatch(
        passwordUpdatefailed({
          errorMessage: e?.response?.data?.message || 'loginSlice.wrong',
        }),
      );
    }
  };
};

export const forgotpwd = request => {
  return async (dispatch, getState) => {
    const {payload, onSuccess, onFail} = request;
    dispatch(forgotpwdReq());
    try {
      let res = await ApiService.handleforgotpwd(payload);

      if (res) {
        dispatch(forgotpwdSuccess(JSON.parse(res).user));
        onSuccess(JSON.parse(res)?.message);
      } else {
        dispatch(
          forgotpwdFailed({
            errorMessage: res?.data?.message || 'loginSlice.wrong',
          }),
        );
      }
    } catch (e) {
      const error = e.response.response
        ? JSON.parse(e.response.response)
        : 'something went wrong';
      const message = error !== 'something went wrong' ? error.message : error;
      onFail(message);
      dispatch(
        forgotpwdFailed({
          errorMessage: e?.response?.data?.message || 'loginSlice.wrong',
        }),
      );
    }
  };
};

export const resetpwd = request => {
  return async (dispatch, getState) => {
    const {payload, onSuccess, onFail} = request;

    dispatch(resetpwdReq());
    try {
      let res = await ApiService.handleresetpwd(payload);
      const result = JSON.parse(res);
      if (result) {
        dispatch(resetpwdSuccess());
        onSuccess(JSON.parse(res).message);
      } else {
        dispatch(
          resetpwdFailed({
            errorMessage: res?.data?.message || 'loginSlice.wrong',
          }),
        );
      }
    } catch (e) {
      onFail(e?.statusText?.errors?.password);
      dispatch(
        resetpwdFailed({
          errorMessage: e?.response?.data?.message || 'loginSlice.wrong',
        }),
      );
    }
  };
};
