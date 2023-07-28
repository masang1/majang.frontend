import React from 'react';
import { Text } from 'react-native';

import { Footer, Header } from 'src/components';

import * as S from './styled';

export const HomeScreen: React.FC = () => {
  return (
    <S.HomeScreenContainer>
      <Header />
      <Text>expo는 구조 맘대로 바꾸면 터져요</Text>
      <Footer />
    </S.HomeScreenContainer>
  );
};
