import { View } from 'react-native';

import { Text } from 'src/components';
import { KeyBoardSVG } from 'src/assets';
import { colors } from 'src/styles';

import * as S from './styled';

export interface GoodsProps {
  productName: string;
  price: string;
  auctionTime?: string;
}

export interface SliderProps {
  title: string;
  goods: GoodsProps[];
}

export const Slider: React.FC<SliderProps> = ({ title, goods }) => {
  return (
    <S.SliderContainer>
      <S.SliderTitleWrapper>
        <Text size={22} weight={800}>
          {title}
        </Text>
      </S.SliderTitleWrapper>
      <S.SliderImageSection
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 36 }}
      >
        {goods.map(({ productName, price, auctionTime }, i) => (
          <S.SliderImageContainer key={i} id={`${i}`}>
            <S.SliderImage source={KeyBoardSVG} style={{ borderColor: colors.gray }} />
            <Text size={17} weight={600}>
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
          </S.SliderImageContainer>
        ))}
      </S.SliderImageSection>
    </S.SliderContainer>
  );
};
