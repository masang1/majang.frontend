import { WithLocalSvg } from 'react-native-svg';
import { Platform } from 'react-native';

import { styled } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from 'src/styles';

export const HeaderContainer = styled.View`
  flex: 0.1;
  padding: ${Platform.OS === 'android' ? '40px' : '60px'} 22px 10px 22px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  background-color: transparent;
  font-size: 14px;
`;
