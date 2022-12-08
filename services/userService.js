import url from "config/url";
import http from "./httpService";

export async function register(userObj) {
  return await http.post(`${url}/signup`, {
    name: userObj.name,
    email: userObj.email,
    password: userObj.password,
  });
}

export const getUsers = async () => {
  return await http.get(`${url}/users`);
};
