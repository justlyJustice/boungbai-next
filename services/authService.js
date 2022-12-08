/* eslint-disable import/no-anonymous-default-export */
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

import http from "./httpService";

import storage from "utils/storage";
import url from "config/url";

const tokenKey = "token";
const adminTokenKey = "admin";

const getJwt = () => {
  return storage.getItem(tokenKey || adminTokenKey);
};

http.setJwt(getJwt());

const getCurrentUser = () => {
  try {
    const jwt = storage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
};
const currentUser = getCurrentUser();

const getAdminUser = () => {
  try {
    const jwt = storage.getItem(adminTokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
};
const adminUser = getAdminUser();

const login = async ({ email, password }) => {
  const response = await http.post(`http://localhost:1000/api/login`, {
    email,
    password,
  });

  switch (response.data.email) {
    case "admin@boungbai.com":
      storage.setItem(adminTokenKey, response.data.token);
      Cookies.set("adminCookie", response.data.token);
      break;

    default:
      const jwt = response.data.token;
      storage.setItem(tokenKey, jwt);
      Cookies.set("userCookie", response.data.token);
      break;
  }

  return response;
};

export const loginWithJwt = (jwt) => {
  storage.setItem(tokenKey, jwt);
};

const logout = () => {
  storage.removeItem(tokenKey);
};

export default {
  adminUser,
  currentUser,
  login,
  logout,
  loginWithJwt,
};
