import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';

import { useRecoilState } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthScreen, Button, Text } from 'src/components';
import { AuthState } from 'src/atom';
import { colors } from 'src/styles';
import { useAuth } from 'src/hooks';
import { checkNumber } from 'src/utils';

import * as S from './styled';

export const AuthStep1Screen: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [phone, setPhone] = useState<string>('');
  const textInputRef = useRef<TextInput>(null);
  const [auth, setAuth] = useRecoilState(AuthState);

  const onNotFocus = () => {
    textInputRef.current?.blur();
  };

  const onTextChange = (text: string) => {
    const newText = checkNumber(text);

    setIsDisabled(text.length !== 11);
    setAuth({ phone: text });
    setPhone(newText);
  };

  const { mutate, isLoading } = useAuth();

  const onSubmit = async () => {
    await AsyncStorage.setItem('phone', phone);
    mutate({ phone: phone });
    setAuth({ step1message: '' });
  };

  return (
    <S.AuthStep1ScreenContainer onPress={onNotFocus} activeOpacity={1}>
      <AuthScreen
        button={
          <Button
            content={'계속'}
            onClick={onSubmit}
            isDisabled={isDisabled}
            isLoading={isLoading}
          />
        }
      >
        <Text.Column>
          <Text size={30} weight={800}>
            휴대폰 인증
          </Text>
          <Text size={15} weight={600}>
            마법의 장터에서는 휴대폰 번호로 로그인해요. {`\n`}
            휴대폰 번호는 안전하게 보관되며, 함부로 공개되지 않아요.
          </Text>
        </Text.Column>
        <S.AuthStep1ScreenInput
          placeholder="휴대폰 번호를 입력해주세요."
          onChangeText={onTextChange}
          value={phone}
          keyboardType="numeric"
          maxLength={11}
          ref={textInputRef}
        />
        <Text size={15} weight={600} color={colors.red}>
          {auth.step1message}
        </Text>
      </AuthScreen>
    </S.AuthStep1ScreenContainer>
  );
};
