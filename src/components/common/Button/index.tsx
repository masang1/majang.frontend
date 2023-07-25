import { Text } from 'src/components';
import { colors } from 'src/styles';

import * as S from './styled';

export interface ButtonProps {
  content: string;
  onClick: () => void;
  isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ content, onClick, isDisabled }) => {
  return (
    <S.ButtonContainer
      {...(!isDisabled && { onPress: onClick })}
      isDisabled={isDisabled}
      activeOpacity={isDisabled ? 1 : 0.5}
    >
      <Text.Row>
        <Text weight={800} size={17} color={colors.white}>
          {content}
        </Text>
      </Text.Row>
    </S.ButtonContainer>
  );
};
