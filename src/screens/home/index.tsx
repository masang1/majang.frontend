import React from 'react';
import { Text } from 'react-native';

import { Footer, Header, Slider } from 'src/components';

import * as S from './styled';

export const HomeScreen: React.FC = () => {
  return (
    <S.HomeScreenContainer>
      <Header />
      <S.HomeScreenContentContainer>
        <Text>expo는 구조 맘대로 바꾸면 터져요</Text>
        <Slider />
        <Footer />
      </S.HomeScreenContentContainer>
    </S.HomeScreenContainer>
  );
};
