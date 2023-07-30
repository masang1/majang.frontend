import { WithLocalSvg } from 'react-native-svg';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { CATEGORY_LIST } from 'src/constant';

import { Text } from '../Text';

import * as S from './styled';

export const Category: React.FC = () => {
  const navigator = useNavigation();

  return (
    <S.CategoryContainer>
      {CATEGORY_LIST.map(({ name, Icon, navigate }, i) => (
        <S.CategoryItemContainer key={i}>
          <S.CategoryItemWrapper
            activeOpacity={0.5}
            onPress={() => navigator.navigate(navigate as never)}
          >
            <WithLocalSvg asset={Icon} width={36} height={36} />
          </S.CategoryItemWrapper>
          <Text size={14} weight={700}>
            {name}
          </Text>
        </S.CategoryItemContainer>
      ))}
    </S.CategoryContainer>
  );
};
