import { UseMutationResult, useMutation } from 'react-query';

import { useNavigation } from '@react-navigation/native';
import { useSetRecoilState } from 'recoil';
import { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthResponse, AuthValues, auth, setAccessToken } from 'src/api';
import { AuthState } from 'src/atom';

export const useAuth = (): UseMutationResult<
  AuthResponse,
  AxiosError<{ code: string }>,
  AuthValues
> => {
  const navigate = useNavigation().navigate as (s: string) => void;
  const setAuth = useSetRecoilState(AuthState);
  return useMutation('useAuth', auth, {
    onSuccess: ({ code, token }) => {
      if (code === 'authorized' && token) {
        navigate('Main');
        setAccessToken(token);
        AsyncStorage.setItem('token', token);
      } else if (code === 'code_sent') {
        navigate('AuthStep2');
      }
    },
    onError: (error) => {
      const code = error.response?.data.code;
      switch (code) {
        case 'invalid_phone':
          setAuth({ step1message: '잘못된 전화번호입니다.' });
          break;
        case 'invalid_code':
          setAuth({ step2message: '잘못된 인증번호입니다.' });
          break;
        case 'user_notfound':
          setAuth({ step1message: '가입되지 않은 전화번호입니다.' });
          break;
        case 'blocked':
          setAuth({ step1message: '차단된 전화번호입니다.' });
          break;
      }
    },
    retry: 0,
  });
};
