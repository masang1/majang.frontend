import axios from 'axios';

export const API_SUFFIX = {
  BASEURL: process.env.EXPO_PUBLIC_BASE_URL,
  AUTH: '/users',
  GET_USER: '/users/@me',
};

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
