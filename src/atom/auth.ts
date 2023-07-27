import { atom } from 'recoil';

export interface AuthStateProps {
  phone?: string;
  step1message?: string;
  step2message?: string;
}

export const AuthState = atom<AuthStateProps>({
  key: 'AuthState',
  default: {
    phone: '',
    step1message: '',
    step2message: '',
  },
});
