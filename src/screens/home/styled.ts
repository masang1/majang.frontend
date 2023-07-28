import { styled } from 'styled-components/native';

import { colors } from 'src/styles';

export const HomeScreenContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 22px;
  flex-direction: column;
  row-gap: 40px;
  align-items: flex-start;
  justify-content: center;
  background-color: ${colors.white};
`;
