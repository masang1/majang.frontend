import { colors } from 'src/styles';
import { css } from 'styled-components';
import { styled } from 'styled-components/native';

export const TextContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
`;

export const TextElement = styled.Text<{ size: string; isBold?: boolean }>`
  color: ${colors.black};
  ${({ size, isBold }) => {
    switch (size) {
      case 'large':
        return css`
          font-size: 30px;
          font-weight: 700;
        `;
      case 'small':
        return css`
          font-size: 16px;
          font-weight: ${isBold ? 700 : 400};
        `;
      default:
        return css`
          font-size: 20px;
          font-weight: 500;
        `;
    }
  }}
`;
