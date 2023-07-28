import React from 'react';

import { Footer, GoodsSection, Header, Slider } from 'src/components';

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
            price: '10,000',
            auctionTime: '입찰 0건, 1시간 30분 남음',
          }))}
        />
        <Slider
          title="경매가 곧 끝나요!"
          goods={Array.from({ length: 10 }).map(() => ({
            productName: '키보드',
            price: '10,000',
            auctionTime: '입찰 0건, 1시간 30분 남음',
          }))}
        />
        <GoodsSection
          title="조용한 저소음 키보드"
          goods={Array.from({ length: 6 }).map(() => ({
            productName: '키보드',
            price: '10,000',
          }))}
        />
        <Footer />
      </S.HomeScreenContentContainer>
    </S.HomeScreenContainer>
  );
};
