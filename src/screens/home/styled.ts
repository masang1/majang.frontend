import { styled } from 'styled-components/native';

import { colors } from 'src/styles';

export const HomeScreenContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  flex-direction: column;
  background-color: ${colors.white};
`;

export const HomeScreenContentContainer = styled.View`
  flex: 1;
  padding: 0px 22px;
  padding-bottom: 40px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 60px;
`;
