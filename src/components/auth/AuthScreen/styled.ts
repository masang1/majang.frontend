import styled from 'styled-components/native';

import { colors } from 'src/styles';

export const AuthScreenWrapper = styled.View`
  flex: 1;
  z-index: 10;
  padding: 70px 20px 40px 20px;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.white};
`;

export const AuthScreenContainer = styled.View`
  flex-direction: column;
  row-gap: 14px;
  align-items: flex-start;
  justify-content: flex-start;
`;
