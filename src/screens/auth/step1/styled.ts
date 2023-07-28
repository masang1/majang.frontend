import { TextInput } from 'react-native';

import { styled } from 'styled-components/native';

import { colors } from 'src/styles';

export const AuthStep1ScreenContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: ${colors.white};
`;

export const AuthStep1ScreenInput = styled(TextInput)`
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  border-radius: 12px;
  background-color: #f4f4f5;
`;
