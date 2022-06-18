import { getUserInfo, removeUserInfo, setUserInfo } from './common';
import { message } from 'antd';
import { history } from 'umi';
import axios from 'axios';
import qs from 'qs';

axios.interceptors.request.use(
  function (config) {
    const { headers, ...rest } = config;
    return {
      ...rest,
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
      headers: {
        Authorization: getUserInfo().accessToken ? `Bearer ${getUserInfo().accessToken}` : null,
        ...headers,
      },
    };
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    const data = response.data;

    return data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axios;
