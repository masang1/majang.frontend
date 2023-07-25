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

export enum TextFamily {
  /** 400 */
  Thin = 'SpoqahanSansNeo_Thin',
  /** 500 */
  Light = 'SpoqahanSansNeo_Light',
  /** 600 */
  Regular = 'SpoqahanSansNeo_Regular',
  /** 700 */
  Medium = 'SpoqahanSansNeo_Medium',
  /** 800 */
  Bold = 'SpoqahanSansNeo_Bold',
}

interface TextProps extends TextCommonProps {
  size: number;
  family: TextFamily;
  color?: string;
}

export const TextComponent: React.FC<TextProps> = ({ children, size, family, color }) => {
  return (
    <S.TextElement size={size} family={family} color={color}>
      {children}
    </S.TextElement>
  );
};

export const Text = Object.assign(TextComponent, {
  Column: TextColumnContainer,
  Row: TextRowContainer,
});
