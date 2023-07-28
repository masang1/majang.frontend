import { styled } from 'styled-components/native';

import { colors } from 'src/styles';

export const HomeScreenContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  background-color: ${colors.white};
`;

export const HomeScreenContentContainer = styled.ScrollView`
  flex: 1;
  padding: 10px 0;
  flex-direction: column;
`;
