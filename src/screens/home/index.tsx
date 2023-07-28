import React from 'react';

import { Footer, Header, Slider } from 'src/components';

import * as S from './styled';

export const HomeScreen: React.FC = () => {
  return (
    <S.HomeScreenContainer>
      <Header />
      <S.HomeScreenContentContainer>
        <Slider
          title="방금 올라온 매물!"
          goods={Array.from({ length: 10 }).map(() => ({
            productName: '키보드',
            price: 10000,
            auctionTime: '1시간 30분 남음',
          }))}
        />
        <Slider
          title="경매가 곧 끝나요!"
          goods={Array.from({ length: 10 }).map(() => ({
            productName: '키보드',
            price: 10000,
            auctionTime: '1시간 30분 남음',
          }))}
        />
        <Slider
          title="조용한 저소음 키보드"
          goods={Array.from({ length: 10 }).map(() => ({
            productName: '키보드',
            price: 10000,
            auctionTime: '1시간 30분 남음',
          }))}
        />
        <Footer />
      </S.HomeScreenContentContainer>
    </S.HomeScreenContainer>
  );
};
