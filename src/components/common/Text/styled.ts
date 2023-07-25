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

export const TextElement = styled.Text<{ size: number; family: string; color?: string }>`
  color: ${colors.black};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => (color ? color : colors.black)};
  font-family: ${({ family }) => family};
`;
