import axios from "axios";

import api from "../config/settings";

const login = async (email, password) => {
  return axios
    .post(`${api.baseUrl}/auth/login`, {
      email,
      password,
    })
    .then((res) => {
      return res.data.token;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
const register = async (fullname, username, email, password) => {
  return axios
    .post(`${api.baseUrl}/auth/register`, {
      fullname,
      username,
      email,
      password,
    })
    .then((res) => {
      return res.data.token;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export { login, register };
