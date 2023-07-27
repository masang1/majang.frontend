import { UseMutationResult, useMutation } from 'react-query';

import { useNavigation } from '@react-navigation/native';
import { useSetRecoilState } from 'recoil';

import { AuthValues, auth, setAccessToken } from 'src/api';
import { AuthState } from 'src/atom';

export const useAuth = ({ force, phone, code }: AuthValues): UseMutationResult => {
  const navigate = useNavigation().navigate as (s: string) => void;
  const setAuthMessage = useSetRecoilState(AuthState);
  return useMutation('useAuth', () => auth({ force, phone, code }), {
    onSuccess: ({ code, token }) => {
      if (code === 'authorized' && token) {
        navigate('Home');
        setAccessToken(token);
        localStorage.setItem('token', token);
      } else if (code === 'code_sent') {
        navigate('AuthStep2');
      }
    },
    onError: ({ code }) => {
      setAuthMessage({ message: code });
    },
  });
};
