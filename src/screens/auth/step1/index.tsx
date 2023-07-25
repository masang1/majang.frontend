import React, { useState } from 'react';

import { useSetRecoilState } from 'recoil';

import { AuthScreen, Text } from 'src/components';
import { phoneState } from 'src/atom';

import * as S from './styled';

export const AuthStep1Screen: React.FC = () => {
  const [text, setText] = useState<string>('');
  const setPhone = useSetRecoilState(phoneState);

  const onTextChange = (text: string) => {
    setText(text);
    setPhone(text);
  };

  return (
    <AuthScreen
      isDisabled={text.length !== 11}
      buttonText="계속"
      prevUrl="Auth"
      nextUrl="AuthStep2"
    >
      <Text.Column>
        <Text size="30px" weight={700}>
          휴대폰 인증"
        </Text>
        <Text size="15px" weight={500}>
          마법의 장터에서는 휴대폰 번호로 로그인해요. {`\n`}
          휴대폰 번호는 안전하게 보관되며, 함부로 공개되지 않아요.
        </Text>
      </Text.Column>
      <S.AuthStep1ScreenInput
        keyboardType="numeric"
        value={text}
        onChangeText={onTextChange}
        placeholder="전화번호를 입력해주세요"
      />
    </AuthScreen>
  );
};
