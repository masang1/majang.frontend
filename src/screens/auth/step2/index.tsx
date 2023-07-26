import React, { useRef, useState } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';

import { useRecoilValue } from 'recoil';

import { phoneState } from 'src/atom';
import { AuthScreen, Button, Text } from 'src/components';
import { colors } from 'src/styles';

import * as S from './styled';

export const AuthStep2Screen: React.FC = () => {
  const phone = useRecoilValue(phoneState);
  const [verificationCode, setVerificationCode] = useState<string>('');
  const textInputRef = useRef<Array<TextInput>>([]);

  const handleChange = (index: number, text: string) => {
    const updatedCode = verificationCode.split('');
    updatedCode[index] = text;
    setVerificationCode(updatedCode.join(''));

    if (text.length !== 0 && index < 5) {
      textInputRef.current[index + 1]?.focus();
    }
  };

  const handleBackspacePress = (index: number) => {
    if (index > 0) {
      textInputRef.current[index - 1]?.focus();
    }
  };

  const handleResendCode = () => {
    // Handle resend code logic here
  };

  const handleBlur = () => {
    textInputRef.current.forEach((ref) => ref.blur());
  };

  return (
    <S.AuthStep2ScreenContainer onPress={() => handleBlur()} activeOpacity={1}>
      <AuthScreen
        prevUrl="AuthStep1"
        button={
          <Button
            content={'계속'}
            onClick={() => console.log('onClicked')}
            isDisabled={verificationCode.length !== 6}
          />
        }
      >
        <Text.Column>
          <Text size={30} weight={700}>
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
                <Text size={15} weight={600} color={colors.primary}>
                  재전송하기
                </Text>
              </TouchableOpacity>
            </Text.Row>
          </View>
        </Text.Column>
        <S.AuthStep2ScreenInputSection>
          <S.AuthStep2ScreenInputContainer>
            {[...Array(3)].map((_, index) => (
              <S.AuthStep2ScreenInput
                ref={(ref) => ref && (textInputRef.current[index] = ref)}
                keyboardType="numeric"
                key={index}
                maxLength={1}
                value={verificationCode[index] || ''}
                onChangeText={(text) => handleChange(index, text)}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    handleBackspacePress(index);
                  }
                }}
              />
            ))}
          </S.AuthStep2ScreenInputContainer>
          <S.AuthStep2ScreenInputContainer>
            {[...Array(3)].map((_, index) => (
              <S.AuthStep2ScreenInput
                ref={(ref) => ref && (textInputRef.current[index + 3] = ref)}
                keyboardType="numeric"
                key={index + 3}
                maxLength={1}
                value={verificationCode[index + 3] || ''}
                onChangeText={(text) => handleChange(index + 3, text)}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    handleBackspacePress(index + 3);
                  }
                }}
              />
            ))}
          </S.AuthStep2ScreenInputContainer>
        </S.AuthStep2ScreenInputSection>
      </AuthScreen>
    </S.AuthStep2ScreenContainer>
  );
};
