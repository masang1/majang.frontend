import { styled } from 'styled-components/native';

export const AuthStep1ScreenInputSection = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  width: 100%;
`;

export const AuthStep1ScreenInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
`;

export const AuthStep1ScreenInput = styled.TextInput`
  width: 47px;
  height: 67px;
  padding: 0px 16px;
  border-radius: 12px;
  backdrop-filter: blur(16px);
  background-color: #f4f4f5;
`;
