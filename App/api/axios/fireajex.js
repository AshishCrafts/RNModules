import axios from 'axios';
import CONFIG from './config';

export default function fireAjax({method, URL, data, header, token}) {
  URL = CONFIG.BASEURL + URL;
  console.log(method);
  if (method === 'POST') {
    let headers = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        accept: '*/*',
      },
    };
    if (header) {
      headers = header;
    }
    if (token) {
      headers = {
        headers: {
          ...headers.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }
    console.log(headers, 'header', data);
    return axios.post(URL, data, headers).then(
      res => {
        return res;
      },
      error => {
        console.log(error, URL, error.response);
        return axios.post(URL, data, headers);
      },
    );
  } else if (method === 'GET') {
    let headers = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Accept: '*/*',
      },
    };
    if (header) {
      headers = header;
    }
    if (token) {
      headers = {
        headers: {
          ...headers.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }
    return axios.get(URL, headers).then(
      res => {
        return res;
      },
      error => {
        return axios.get(URL, headers);
      },
    );
  } else if (method === 'DELETE') {
    let headers = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Accept: '*/*',
      },
    };
    if (header) {
      headers = header;
    }
    if (token) {
      headers = {
        headers: {
          ...headers.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }

    return axios.delete(URL, headers).then(
      res => {
        return res;
      },
      error => {
        return axios.delete(URL, headers);
      },
    );
  }
}
