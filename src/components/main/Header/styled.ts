import { WithLocalSvg } from 'react-native-svg';

import { styled } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from 'src/styles';

export const HeaderContainer = styled.View`
  position: absolute;
  top: 0;
  padding: 70px 22px 20px 22px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const LogoImg = styled(WithLocalSvg)`
  margin: 3px;
`;

export const SearchBar = styled.View`
  flex: 0.9;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.glassBackground};
  border-radius: 12px;
  backdrop-filter: blur(16px);
`;

export const SearchIcon = styled(Ionicons)`
  background-color: transparent;
  padding: 0 16px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  height: 42px;
  padding: 0px 16px;
  border-radius: 12px;
  backdrop-filter: blur(16px);
  background-color: transparent;
  font-size: 14px;
`;
