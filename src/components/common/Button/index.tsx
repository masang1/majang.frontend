/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from 'src/components';
import { colors } from 'src/styles';
import { ActivityIndicator } from 'react-native';

import * as S from './styled';

export interface ButtonProps {
  content: string;
  onClick: any;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ content, onClick, isDisabled, isLoading }) => {
  return (
    <S.ButtonContainer
      {...{ onPress: onClick, disabled: isDisabled || isLoading }}
      isDisabled={isDisabled || isLoading}
      activeOpacity={isDisabled ? 1 : 0.5}
    >
      {isLoading ? <ActivityIndicator color={colors.white}/> : null}
      <Text weight={800} size={17} color={colors.white}>
        {content}
      </Text>
    </S.ButtonContainer>
  );
};
