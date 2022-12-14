import Cookies from "js-cookie";

import url from "config/url";
import http from "./httpService";
import authService from "./authService";

export async function register(userObj) {
  const res = await http.post(`http://localhost:1000/api/signup`, {
    name: userObj.name,
    email: userObj.email,
    password: userObj.password,
  });

  if (res.ok) {
    authService.loginWithJwt(res.data.token);
    Cookies.set("userCookie", res.data.token);
  }

  return res;
}

export const getUsers = async () => {
  return await http.get(`${url}/users`);
};
