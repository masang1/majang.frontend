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

export const TextElement = styled.Text<{ size: number; weight: number; color?: string }>`
  color: ${colors.black};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => (color ? color : colors.black)};
  ${({ weight }) => {
    switch (weight) {
      case 400:
        return css`
          font-weight: 400;
          font-family: 'SpoqahanSansNeo_Thin', 'sans-serif';
        `;
      case 500:
        return css`
          font-weight: 500;
          font-family: 'SpoqahanSansNeo_Light', 'sans-serif';
        `;
      case 600:
        return css`
          font-weight: 600;
          font-family: 'SpoqahanSansNeo_Regular', 'sans-serif';
        `;
      case 700:
        return css`
          font-weight: 700;
          font-family: 'SpoqahanSansNeo_Medium', 'sans-serif';
        `;
      case 800:
        return css`
          font-weight: 800;
          font-family: 'SpoqahanSansNeo_Bold', 'sans-serif';
        `;
    }
  }}
`;
