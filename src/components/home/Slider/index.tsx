import { Text } from 'src/components';
import { KeyBoardSVG } from 'src/assets';

import * as S from './styled';

export const Slider: React.FC = () => {
  return (
    <S.SliderContainer>
      <Text size={22} weight={800}>
        방금 올라온 매물!
      </Text>
      <S.SliderImageListWrapper horizontal={true} showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 10 }).map((_, i) => (
          <S.SliderImageContainer key={i}>
            <S.SliderImage source={KeyBoardSVG} />
            <Text size={15} weight={600}>
              M0110 -12
            </Text>
            <Text size={15} weight={800}>
              390,000원
            </Text>
          </S.SliderImageContainer>
        ))}
      </S.SliderImageListWrapper>
    </S.SliderContainer>
  );
};
