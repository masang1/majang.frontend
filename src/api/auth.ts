import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_SUFFIX, instance } from './api';

export const setAccessToken = (token: string | null) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};

export interface AuthValues {
  phone: string;
  code?: string;
}

export interface AuthResponse {
  code: string;
  token?: string;
}

export interface userResponse {
  id: number;
  nickname: string;
  picture?: string | null;
  phone: string;
}

export const auth = async ({ phone, code }: AuthValues): Promise<AuthResponse> => {
  const force = true;
  const { data } = await instance.post(API_SUFFIX.AUTH, {
    ...(code ? { force, phone: phone, code: code } : { force, phone: phone }),
  });
  return data;
};

export const getUser = async (): Promise<userResponse> => {
  const token = await AsyncStorage.getItem('token');
  setAccessToken(token);
  const { data } = await instance.get(API_SUFFIX.GET_USER);
  return data;
};
