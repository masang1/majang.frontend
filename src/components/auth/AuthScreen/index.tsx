import React from 'react';

import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as S from './styled';

export interface AuthScreenProps {
  children: React.ReactNode;
  prevUrl: string;
  button: React.ReactNode;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ children, prevUrl, button }) => {
  const navigate = useNavigation().navigate as (s: string) => void;

  return (
    <S.AuthScreenWrapper behavior="padding" keyboardVerticalOffset={15}>
      <S.AuthScreenContainer>
        <Entypo
          name="chevron-thin-left"
          size={24}
          color="black"
          style={{ marginBottom: 10 }}
          onPress={() => navigate(prevUrl)}
        />
        {children}
      </S.AuthScreenContainer>
      {button}
    </S.AuthScreenWrapper>
  );
};
