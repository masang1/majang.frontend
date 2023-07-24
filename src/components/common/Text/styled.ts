import { colors } from 'src/styles';
import { css } from 'styled-components/native';
import { styled } from 'styled-components/native';

export const TextContainer = styled.View<{ isCenter?: boolean }>`
  flex-direction: column;
  align-items: ${({ isCenter }) => (isCenter ? 'center' : 'flex-start')};
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
          font-size: 15px;
          font-weight: ${isBold ? 700 : 500};
        `;
      default:
        return css`
          font-size: 20px;
          font-weight: 500;
        `;
    }
  }}
`;
