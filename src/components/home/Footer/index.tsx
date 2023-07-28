import React from 'react';
import { View } from 'react-native';

import { Text } from 'src/components';
import { colors } from 'src/styles';
import { FOOTER_MESSAGE_LIST } from 'src/constant';

import * as S from './styled';
export const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterTextContainer>
        <View>
          <Text size={10.5} weight={800} color={colors.gray}>
            (주)마법의상자
          </Text>
          {FOOTER_MESSAGE_LIST.map((message, index) => (
            <Text key={index} size={10} weight={600} color={colors.gray}>
              {message}
            </Text>
          ))}
        </View>
        <Text size={10.5} weight={800} color={colors.gray}>
          (주)마법의상자는 통신판매중개자로 거래 당사자가 아니며, {`\n`}
          회원간의 거래에 대해 관여하지 않고 어떠한 의무와 책임도 지지 않습니다.
        </Text>
      </S.FooterTextContainer>
    </S.FooterContainer>
  );
};
