import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

import { useRecoilState } from 'recoil';
import { useNavigation } from '@react-navigation/native';

import { AuthScreen, Button, Text } from 'src/components';
import { AuthState } from 'src/atom';
import { colors } from 'src/styles';
import { AuthValues } from 'src/api';

import * as S from './styled';

export const AuthStep1Screen: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AuthValues>();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [text, setText] = useState<string>('');
  const textInputRef = useRef<TextInput>(null);
  const navigate = useNavigation().navigate as (s: string) => void;
  const [authPhone, setAuthPhone] = useRecoilState(AuthState);

  const onNotFocus = () => {
    textInputRef.current?.blur();
  };

  const onTextChange = (text: string) => {
    let newText = '';
    const numbers = '0123456789';

    for (let i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        newText = newText.replace(text[i], '');
      }
    }
    setText(newText);
    setIsDisabled(text.length !== 11);
    setAuthPhone({ phone: text });
  };

  const onSubmit = ({ phone }: AuthValues) => {
    navigate('AuthStep2');
  };

  return (
    <S.AuthStep1ScreenContainer onPress={onNotFocus} activeOpacity={1}>
      <AuthScreen
        button={
          <Button content={'계속'} onClick={handleSubmit(onSubmit)} isDisabled={isDisabled} />
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
        <Controller
          control={control}
          render={() => (
            <S.AuthStep1ScreenInput
              placeholder="휴대폰 번호를 입력해주세요."
              onChangeText={(text: string) => {
                onTextChange(text);
              }}
              value={text}
              keyboardType="numeric"
              maxLength={11}
              {...register('phone', {
                pattern: {
                  value: /01[0-1, 7][0-9]{7,8}$/,
                  message: '전화번호 형식이 올바르지 않습니다.',
                },
              })}
            />
          )}
          name="phone"
        />
        <Text size={15} weight={600} color={colors.red}>
          {errors.phone?.message || authPhone.message}
        </Text>
      </AuthScreen>
    </S.AuthStep1ScreenContainer>
  );
};
