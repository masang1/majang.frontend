import { TouchableOpacity, View } from 'react-native';

import { useRecoilValue } from 'recoil';

import { phoneState } from 'src/atom';
import { AuthScreen, Text } from 'src/components';

import * as S from './styled';

export const AuthStep2Screen: React.FC = () => {
  const phone = useRecoilValue(phoneState);

  return (
    <AuthScreen buttonText="계속" prevUrl="AuthStep1" nextUrl="main">
      <Text.Column>
        <Text size="large">인증번호 입력</Text>
        <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <Text>{phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}로 인증번호를 보냈어요.</Text>
          <Text.Row>
            <Text>인증번호가 오지 않나요?</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Text isPrimary={true}>재전송하기</Text>
            </TouchableOpacity>
          </Text.Row>
        </View>
      </Text.Column>
      <S.AuthStep1ScreenInputSection>
        <S.AuthStep1ScreenInputContainer>
          <S.AuthStep1ScreenInput />
          <S.AuthStep1ScreenInput />
          <S.AuthStep1ScreenInput />
        </S.AuthStep1ScreenInputContainer>
        <S.AuthStep1ScreenInputContainer>
          <S.AuthStep1ScreenInput />
          <S.AuthStep1ScreenInput />
          <S.AuthStep1ScreenInput />
        </S.AuthStep1ScreenInputContainer>
      </S.AuthStep1ScreenInputSection>
    </AuthScreen>
  );
};
