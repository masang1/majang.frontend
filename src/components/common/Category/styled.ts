import { styled } from 'styled-components/native';

export const CategoryContainer = styled.View`
  padding: 0 22px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
`;

export const CategoryItemContainer = styled.View`
  flex-direction: column;
  row-gap: 6px;
  align-items: center;
  justify-content: center;
`;

export const CategoryItemWrapper = styled.TouchableOpacity<{ isActive: boolean }>`
  width: 55px;
  height: 55px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive }) => (isActive ? '#000' : '#F8F8F8')};
`;
