import { css } from 'styled-components/native';
import { styled } from 'styled-components/native';

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

export const TextElement = styled.Text<{ size: string; isPrimary?: boolean }>`
  color: ${colors.black};
  ${({ size, isPrimary }) => {
    switch (size) {
      case 'large':
        return css`
          font-size: 30px;
          font-weight: 700;
        `;
      case 'small':
        return css`
          font-size: 12px;
          font-weight: 400;
        `;
      default:
        return css`
          font-size: 15px;
          font-weight: 500;
          color: ${isPrimary ? colors.primary : colors.black};
        `;
    }
  }}
`;
