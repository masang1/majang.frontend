import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { useRecoilState } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthState } from 'src/atom';
import { AuthScreen, Button, Text } from 'src/components';
import { colors } from 'src/styles';
import { useAuth } from 'src/hooks';
import { checkNumber } from 'src/utils';

import * as S from './styled';

const CELL_COUNT = 6;
const CODE_VALIDATION_REGEX = /^\d{6}$/;

export const AuthStep2Screen: React.FC = () => {
  const [auth, setAuth] = useRecoilState(AuthState);

  const [value, setValue] = useState('');
  const [prevPhone, setPrevPhone] = useState<string>('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onChangeText = (text: string) => {
    const newText = checkNumber(text);
    setValue(newText);
    if (newText.length === 6) {
      onSubmit(newText);
    }
  };

  const { mutate } = useAuth();

  const onResend = () => {
    setValue('');
    mutate({ phone: prevPhone });
    setAuth({ step2message: '' });
  };

  const onSubmit = (code: string) => {
    mutate({ phone: prevPhone, code });
    setAuth({ step2message: '' });
  };

  const loadPrevPhone = async () => {
    const phone = await AsyncStorage.getItem('phone');
    phone && setPrevPhone(phone);
  };

  useEffect(() => {
    loadPrevPhone();
  }, []);

  return (
    <S.AuthStep2ScreenContainer>
      <AuthScreen
        button={
          <Button
            content={'계속'}
            onClick={onSubmit}
            isDisabled={!CODE_VALIDATION_REGEX.test(value)}
          />
        }
      >
        <Text.Column>
          <Text size={30} weight={800}>
            인증번호 입력
          </Text>
          <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Text size={15} weight={600}>
              {prevPhone?.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}로 인증번호를 보냈어요.
            </Text>
            <Text.Row>
              <Text size={15} weight={600}>
                인증번호가 오지 않나요?
              </Text>
              <TouchableOpacity activeOpacity={0.5} onPress={onResend}>
                <Text size={15} weight={800} color={colors.black}>
                  재전송하기
                </Text>
              </TouchableOpacity>
            </Text.Row>
          </View>
        </Text.Column>
        <S.AuthStep2ScreenInputSection>
          <S.AuthStep2ScreenInputContainer>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={onChangeText}
              cellCount={CELL_COUNT}
              caretHidden={true}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              rootStyle={{
                width: '100%',
              }}
              renderCell={({ index, symbol, isFocused }) => (
                <S.AuthStep2ScreenInput key={index} onLayout={getCellOnLayoutHandler(index)}>
                  <Text size={20} weight={600}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </S.AuthStep2ScreenInput>
              )}
            />
          </S.AuthStep2ScreenInputContainer>
        </S.AuthStep2ScreenInputSection>
        <Text size={15} weight={600} color={colors.red}>
          {auth.step2message}
        </Text>
      </AuthScreen>
    </S.AuthStep2ScreenContainer>
  );
};
