import { styled } from 'styled-components/native';
import { css } from 'styled-components/native';

import { colors } from 'src/styles';

export const TextColumnContainer = styled.View<{ isCenter?: boolean }>`
  flex-direction: column;
  align-items: ${({ isCenter }) => (isCenter ? 'center' : 'flex-start')};
  justify-content: center;
  row-gap: 10px;
`;

export const TextRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
`;

export const TextElement = styled.Text<{ size: number; weight?: number; color?: string }>`
  color: ${colors.black};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => (color ? color : colors.black)};
  ${({ weight }) => {
    switch (weight) {
      case 100 | 200 | 300 | 400:
        return css`
          font-family: 'SpoqahanSansNeo_Thin';
        `;
      case 600:
        return css`
          font-family: 'SpoqahanSansNeo_Regular';
        `;
      case 700:
        return css`
          font-family: 'SpoqahanSansNeo_Medium';
        `;
      case 800:
        return css`
          font-family: 'SpoqahanSansNeo_Bold';
        `;
      default:
        return css`
          font-family: 'SpoqahanSansNeo_Light';
        `;
    }
  }}
`;
