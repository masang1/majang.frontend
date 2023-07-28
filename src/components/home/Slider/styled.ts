import { styled } from 'styled-components/native';

import { colors } from 'src/styles';

export const SliderContainer = styled.ScrollView`
  flex: 1;
  width: 110%;
`;

export const SliderImageSection = styled.ScrollView`
  margin-top: 20px;
  width: 100%;
  flex: 1;
`;

export const SliderImageContainer = styled.View`
  flex-direction: column;
  row-gap: 4px;
  width: 140px;
  margin-right: 20px;
`;

export const SliderImage = styled.Image`
  width: 100%;
  height: 140px;
  border-radius: 10px;
  border-width: 0.2px;
`;
