import { WithLocalSvg } from 'react-native-svg';
import React, { useState } from 'react';

import { CATEGORY_LIST } from 'src/constant';

import { Text } from '../Text';

import * as S from './styled';

export const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_LIST.map(() => false));
  const onPressCategory = (index: number) => {
    setSelectedCategory((prev) => prev.map((_, i) => (i === index ? true : false)));
  };
  return (
    <S.CategoryContainer>
      {CATEGORY_LIST.map(({ name, blackIcon, whiteIcon }, i) => (
        <S.CategoryItemContainer key={i}>
          <S.CategoryItemWrapper
            isActive={selectedCategory[i]}
            activeOpacity={0.5}
            onPress={() => onPressCategory(i)}
          >
            <WithLocalSvg
              asset={selectedCategory[i] ? whiteIcon : blackIcon}
              width={36}
              height={36}
            />
          </S.CategoryItemWrapper>
          <Text size={14} weight={700}>
            {name}
          </Text>
        </S.CategoryItemContainer>
      ))}
    </S.CategoryContainer>
  );
};
