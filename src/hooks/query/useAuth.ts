import { UseMutationResult, useMutation } from 'react-query';

import { CommonActions, useNavigation } from '@react-navigation/native';
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
  const navigator = useNavigation();
  const setAuth = useSetRecoilState(AuthState);
  return useMutation('useAuth', auth, {
    onSuccess: ({ code, token }) => {
      if (code === 'authorized' && token) {
        navigator.dispatch(
          CommonActions.reset({
            routes: [
              { name: "Main" },
            ],
        }))
        navigator.navigate('Main' as never);
        setAccessToken(token);
        AsyncStorage.setItem('token', token);
      } else if (code === 'code_sent') {
        navigator.navigate('AuthStep2' as never);
      }
    },
    onError: (error) => {
      const code = error.response?.data.code;
      switch (code) {
        case 'invalid_phone':
          setAuth({ step1message: '전화번호가 잘못되었어요.' });
          break;
        case 'invalid_code':
          setAuth({ step2message: '인증번호가 잘못되었어요.' });
          break;
        case 'user_notfound':
          setAuth({ step1message: '가입되지 않은 전화번호에요.' });
          break;
        case 'blocked':
          setAuth({ step1message: '이용약관 위반으로 인해 영구적으로 차단된 전화번호에요.' });
          break;
      }
    },
    retry: 0,
  });
};
