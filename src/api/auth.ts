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
  code: 'authorized' | 'code_sent' | 'invalid_code' | 'invalid_phone' | 'blocked' | 'user_notfound';
  token?: string;
}

export const auth = async ({ phone, code }: AuthValues): Promise<AuthResponse> => {
  const force = true;
  const { data } = await instance.post(API_SUFFIX.AUTH, {
    ...(code ? { force, phone: phone, code: code } : { force, phone: phone }),
  });
  return data;
};
