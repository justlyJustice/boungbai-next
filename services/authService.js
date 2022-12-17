/* eslint-disable import/no-anonymous-default-export */
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

import http from "./httpService";

import storage from "utils/storage";

const userTokenKey = "userToken";
const adminTokenKey = "adminToken";

const getJwt = () => {
  return storage.getItem(userTokenKey);
};

http.setJwt(getJwt());

const getCurrentUser = () => {
  try {
    const jwt = storage.getItem(userTokenKey);
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
      storage.setItem(userTokenKey, jwt);
      Cookies.set("userCookie", response.data.token);
      break;
  }

  return response;
};

export const loginWithJwt = (jwt) => {
  storage.setItem(userTokenKey, jwt);
};

const logout = () => {
  storage.removeItem(userTokenKey);
};

export default {
  adminUser,
  currentUser,
  login,
  logout,
  loginWithJwt,
};
