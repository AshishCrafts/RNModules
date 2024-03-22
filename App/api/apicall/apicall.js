import fireAjax from '../axios/fireajex';
import ApiUrl from '../axios/url';
import {apiCall} from '../axios/xhttpApi';

export const ApiService = {
  handleLogin: async payload => {
    return fireAjax({
      method: 'POST',
      URL: 'oauth/token',
      data: payload,
    });
  },

  handleLogout: async access_token => {
    return fireAjax({
      method: 'GET',
      URL: `${ApiUrl.Logout}`,
      token: access_token,
      header: {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'X-Requested-With': 'XMLHttpRequest',
        },
      },
    });
  },

  //   handlegetRegister: async payload => {
  //     return await apiCall({
  //       method: 'POST',
  //       payload,
  //       url: ApiUrl.Register,
  //       header: {
  //         'X-Requested-With': 'XMLHttpRequest',
  //         'Content-Type': 'multipart/form-data;',
  //       },
  //     });
  //   },
};
