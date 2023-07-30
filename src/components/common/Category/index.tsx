import { WithLocalSvg } from 'react-native-svg';

import { CATEGORY_LIST } from 'src/constant';

import { Text } from '../Text';

import * as S from './styled';

export const Category: React.FC = () => {
  return (
    <S.CategoryContainer>
      {CATEGORY_LIST.map(({ text, icon }, i) => (
        <S.CategoryItemContainer key={i}>
          <S.CategoryItemWrapper activeOpacity={0.5}>
            <WithLocalSvg asset={icon} width={36} height={36} />
          </S.CategoryItemWrapper>
          <Text size={14} weight={700}>
            {text}
          </Text>
        </S.CategoryItemContainer>
      ))}
    </S.CategoryContainer>
  );
};
