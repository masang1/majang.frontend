import React from 'react';
import * as S from './styled';

export interface TextCommonProps {
  children: React.ReactNode;
}

export const TextContainer: React.FC<TextCommonProps> = ({ children }) => {
  return <S.TextContainer>{children}</S.TextContainer>;
};

interface TextProps extends TextCommonProps {
  size?: 'small' | 'large' | 'medium';
  isBold?: boolean;
}

export const TextComponent: React.FC<TextProps> = ({
  children,
  size = 'medium',
  isBold = false,
}) => {
  return (
    <S.TextElement size={size} isBold={isBold}>
      {children}
    </S.TextElement>
  );
};

export const Text = Object.assign(TextComponent, {
  Container: TextContainer,
});
