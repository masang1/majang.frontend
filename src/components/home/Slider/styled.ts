import { styled } from 'styled-components/native';

export const SliderContainer = styled.View`
  flex: 1;
  margin-top: 60px;
`;

export const SliderTitleWrapper = styled.View`
  padding-left: 22px;
`;

export const SliderImageSection = styled.ScrollView`
  padding-left: 22px;
  margin-top: 20px;
`;

export const SliderImageContainer = styled.View`
  flex-direction: column;
  row-gap: 2px;
  width: 140px;
  margin-right: 12px;
`;

export const SliderImage = styled.Image`
  width: 100%;
  height: 140px;
  border-radius: 10px;
  border-width: 0.2px;
  margin-bottom: 6px;
`;
