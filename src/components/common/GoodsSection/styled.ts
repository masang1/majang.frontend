import { styled } from 'styled-components/native';

export const GoodsSectionContainer = styled.View`
  flex: 1;
  width: 110%;
  margin-bottom: 60px;
`;

export const GoodsSection = styled.View`
  margin-top: 20px;
  width: 100%;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 12px;
  row-gap: 20px;
`;

export const GoodsSectionImageContainer = styled.View`
  flex-direction: column;
  row-gap: 2px;
  width: 108px;
`;

export const GoodsSectionImage = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  border-width: 0.2px;
  margin-bottom: 6px;
`;
