import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity<{ isDisabled?: boolean }>`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 15px;
  background-color: ${({ isDisabled }) => (!isDisabled ? '#282828' : '#808080')};
`;
