import { atom } from 'recoil';

export interface AuthStateProps {
  phone?: string;
  message?: string;
}

export const AuthState = atom<AuthStateProps>({
  key: 'AuthState',
  default: {
    phone: '',
    message: '',
  },
});
