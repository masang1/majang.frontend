import { UseMutationResult, useMutation } from 'react-query';

import { useNavigation } from '@react-navigation/native';
import { useSetRecoilState } from 'recoil';
import { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthResponse, AuthValues, auth, setAccessToken } from 'src/api';
import { AuthState } from 'src/atom';

export const useAuth = (): UseMutationResult<AuthResponse, AxiosError, AuthValues> => {
  const navigate = useNavigation().navigate as (s: string) => void;
  const setAuthMessage = useSetRecoilState(AuthState);
  return useMutation('useAuth', auth, {
    onSuccess: ({ code, token }) => {
      if (code === 'authorized' && token) {
        navigate('Home');
        setAccessToken(token);
        AsyncStorage.setItem('token', token);
      } else if (code === 'code_sent') {
        navigate('AuthStep2');
      }
    },
    onError: ({ code }) => {
      setAuthMessage({ message: code });
    },
  });
};
