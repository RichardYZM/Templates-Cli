import Cookies from 'js-cookie';
import { message } from 'antd';

export function setCookie(name, val) {
  Cookies.set(name, val, { expires: 13, path: '/' });
}

export function getCookie(name) {
  return Cookies.get(name);
}

export function getCookieJSON(name) {
  return Cookies.getJSON(name);
}

export function removeCookie(name) {
  Cookies.remove(name);
}

export function setUserInfo(data) {
  setCookie('userInfo', data);
}

export function getUserInfo() {
  return Cookies.getJSON('userInfo') || {};
}

export function removeUserInfo() {
  removeCookie('userInfo');
}
