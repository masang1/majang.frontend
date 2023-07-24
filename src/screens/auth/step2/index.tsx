import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useRecoilValue } from 'recoil';

import { phoneState } from 'src/atom';
import { AuthScreen, Text } from 'src/components';

import * as S from './styled';

export const AuthStep2Screen: React.FC = () => {
  const phone = useRecoilValue(phoneState);
  const [verificationCode, setVerificationCode] = useState<string>('');

  const handleChange = (index: number, text: string) => {
    if (text.length === 1) {
      const updatedCode = verificationCode.split('');
      updatedCode[index] = text;
      setVerificationCode(updatedCode.join(''));
    }
  };

  const handleResendCode = () => {
    // Handle resend code logic here
  };

  return (
    <AuthScreen buttonText="계속" prevUrl="AuthStep1" nextUrl="Main">
      <Text.Column>
        <Text size="large">인증번호 입력</Text>
        <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <Text>{phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}로 인증번호를 보냈어요.</Text>
          <Text.Row>
            <Text>인증번호가 오지 않나요?</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={handleResendCode}>
              <Text isPrimary={true}>재전송하기</Text>
            </TouchableOpacity>
          </Text.Row>
        </View>
      </Text.Column>
      <S.AuthStep2ScreenInputSection>
        <S.AuthStep2ScreenInputContainer>
          {[...Array(3)].map((_, index) => (
            <S.AuthStep2ScreenInput
              key={index}
              maxLength={1}
              value={verificationCode[index] || ''}
              onChangeText={(text) => handleChange(index, text)}
            />
          ))}
        </S.AuthStep2ScreenInputContainer>
        <S.AuthStep2ScreenInputContainer>
          {[...Array(3)].map((_, index) => (
            <S.AuthStep2ScreenInput
              key={index + 3}
              maxLength={1}
              value={verificationCode[index + 3] || ''}
              onChangeText={(text) => handleChange(index + 3, text)}
            />
          ))}
        </S.AuthStep2ScreenInputContainer>
      </S.AuthStep2ScreenInputSection>
    </AuthScreen>
  );
};
