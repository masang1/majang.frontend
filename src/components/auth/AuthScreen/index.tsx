import React from 'react';

import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'src/components';

import * as S from './styled';

export interface AuthScreenProps {
  children?: React.ReactNode;
  buttonText: string;
  prevUrl: string;
  nextUrl: string;
  isDisabled?: boolean;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({
  children,
  buttonText,
  nextUrl,
  isDisabled,
  prevUrl,
}) => {
  const navigate = useNavigation().navigate as (s: string) => void;

  return (
    <S.AuthScreenWrapper>
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
      <Button content={buttonText} onClick={() => navigate(nextUrl)} isDisabled={isDisabled} />
    </S.AuthScreenWrapper>
  );
};
