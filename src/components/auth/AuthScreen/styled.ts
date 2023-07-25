import { Platform } from 'react-native';

import styled from 'styled-components/native';

import { colors } from 'src/styles';

export const AuthScreenWrapper = styled.KeyboardAvoidingView`
  flex: 1;
  z-index: 10;
  padding: 70px 20px 0px 20px;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.white};
  margin-bottom: ${Platform.OS === 'android' ? '20px' : '30px'};
`;

export const AuthScreenContainer = styled.View`
  flex-direction: column;
  row-gap: 14px;
  align-items: flex-start;
  justify-content: flex-start;
`;
