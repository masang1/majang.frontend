import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';

import { useRecoilValue } from 'recoil';

import { phoneState } from 'src/atom';
import { AuthScreen, Button, Text } from 'src/components';
import { colors } from 'src/styles';

import * as S from './styled';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;
const CODE_VAILDATION_REGEX = /^\d{6}$/;

export const AuthStep2Screen: React.FC = () => {
  const phone = useRecoilValue(phoneState);

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    console.log(value)
  },[value])

  const handleResendCode = () => {
    // Handle resend code logic here
  };


  return (
    <S.AuthStep2ScreenContainer>
      <AuthScreen
        button={
          <Button
            content={'계속'}
            onClick={() => console.log(value)}
            isDisabled={!CODE_VAILDATION_REGEX.test(value)}
          />
        }
      >
        <Text.Column>
          <Text size={30} weight={800}>
            인증번호 입력
          </Text>
          <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Text size={15} weight={600}>
              {phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}로 인증번호를 보냈어요.
            </Text>
            <Text.Row>
              <Text size={15} weight={600}>
                인증번호가 오지 않나요?
              </Text>
              <TouchableOpacity activeOpacity={0.5} onPress={handleResendCode}>
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
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              caretHidden={true}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              rootStyle={{
                width: '100%',
              }}
              renderCell={({index, symbol, isFocused}) => (
                <S.AuthStep2ScreenInput
                  key={index}
                  onLayout={getCellOnLayoutHandler(index)}>
                  <Text size={20} weight={600}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </S.AuthStep2ScreenInput>
              )}
            />
          </S.AuthStep2ScreenInputContainer>
        </S.AuthStep2ScreenInputSection>
      </AuthScreen>
    </S.AuthStep2ScreenContainer>
  );
};
