import { Text } from 'src/components';
import { KeyBoardSVG } from 'src/assets';

import * as S from './styled';

export interface GoodsProps {
  productName: string;
  price: number;
  auctionTime?: string;
}

export interface SliderProps {
  title: string;
  goods: GoodsProps[];
}

export const Slider: React.FC<SliderProps> = ({ title, goods }) => {
  return (
    <S.SliderContainer>
      <Text size={22} weight={800}>
        {title}
      </Text>
      <S.SliderImageSection horizontal={true} showsHorizontalScrollIndicator={false}>
        {goods.map(({ productName, price, auctionTime }, i) => (
          <S.SliderImageContainer key={i}>
            <S.SliderImage source={KeyBoardSVG} />
            <Text size={15} weight={600}>
              {productName}
            </Text>
            <Text size={15} weight={800}>
              {price}
            </Text>
            {auctionTime && (
              <Text size={15} weight={600}>
                {auctionTime}
              </Text>
            )}
          </S.SliderImageContainer>
        ))}
      </S.SliderImageSection>
    </S.SliderContainer>
  );
};
