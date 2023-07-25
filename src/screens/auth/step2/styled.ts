import { TextInput } from 'react-native';

import { styled } from 'styled-components/native';

import { colors } from 'src/styles';

export const AuthStep2ScreenContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: ${colors.white};
`;

export const AuthStep2ScreenInputSection = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  width: 100%;
`;

export const AuthStep2ScreenInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
`;

export const AuthStep2ScreenInput = styled(TextInput)`
  width: 47px;
  height: 67px;
  padding: 0px 16px;
  border-radius: 12px;
  font-size: 20px;
  backdrop-filter: blur(16px);
  background-color: #f4f4f5;
`;
