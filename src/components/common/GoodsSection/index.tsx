import React from 'react';
import { View } from 'react-native';

import { GoodsProps } from 'src/components/home';
import { KeyBoardSVG } from 'src/assets';
import { colors } from 'src/styles';

import { Text } from '../Text';

import * as S from './styled';

export interface GoodsSectionProps {
  title: string;
  goods: GoodsProps[];
}

export const GoodsSection: React.FC<GoodsSectionProps> = ({ title, goods }) => {
  return (
    <S.GoodsSectionContainer>
      <Text size={22} weight={800}>
        {title}
      </Text>
      <S.GoodsSection>
        {goods.map(({ productName, price, auctionTime }, i) => (
          <S.GoodsSectionImageContainer key={i}>
            <S.GoodsSectionImage source={KeyBoardSVG} style={{ borderColor: colors.gray }} />
            <Text size={15} weight={600}>
              {productName}
            </Text>
            <View>
              <Text size={17} weight={800}>
                {auctionTime && (
                  <Text size={12} weight={800}>
                    현재{' '}
                  </Text>
                )}
                {price}원
              </Text>
              {auctionTime && (
                <Text size={12} weight={600}>
                  {auctionTime}
                </Text>
              )}
            </View>
          </S.GoodsSectionImageContainer>
        ))}
      </S.GoodsSection>
    </S.GoodsSectionContainer>
  );
};
