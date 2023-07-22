import { colors } from "src/styles";
import { css } from "styled-components";
import { styled } from "styled-components/native";

export const TextContainer = styled.View`
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const TextElement = styled.Text<{ size: string; isBold?: boolean; }>`
    color: ${colors.black};
  ${({ size, isBold }) => {
        switch (size) {
            case 'large':
                return css`
          font-size: 26px;
          font-weight: 700;
        `;
            case 'small':
                return css`
          font-size: 18px;
          font-weight: 400;
        `;
            default:
                return css`
          font-size: 22px;
          font-weight: ${isBold ? 700 : 400};
        `;
        }
    }}
`;
