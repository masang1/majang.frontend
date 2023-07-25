import React from 'react';

import * as S from './styled';

export interface TextCommonProps {
  children: React.ReactNode;
}

export interface TextColumnContainerProps extends TextCommonProps {
  isCenter?: boolean;
}

export const TextColumnContainer: React.FC<TextColumnContainerProps> = ({ children, isCenter }) => {
  return <S.TextColumnContainer isCenter={isCenter}>{children}</S.TextColumnContainer>;
};

export const TextRowContainer: React.FC<TextCommonProps> = ({ children }) => {
  return <S.TextRowContainer>{children}</S.TextRowContainer>;
};

interface TextProps extends TextCommonProps {
  size: number;
  weight: 400 | 500 | 600 | 700 | 800 | 900;
  color?: string;
}

export const TextComponent: React.FC<TextProps> = ({ children, size, weight, color }) => {
  return (
    <S.TextElement size={size} weight={weight} color={color}>
      {children}
    </S.TextElement>
  );
};

export const Text = Object.assign(TextComponent, {
  Column: TextColumnContainer,
  Row: TextRowContainer,
});
