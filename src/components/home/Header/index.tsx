import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';

import { LogoSVG } from 'src/assets';

import * as S from './styled';

export const Header: React.FC = () => {
  const [searchWord, setSearchWord] = useState('');

  const onChangeSearchWord = (searchWord: string) => {
    setSearchWord(searchWord);
  };
  return (
    <S.HeaderContainer>
      <S.LogoImg width={26} height={26} asset={LogoSVG} />
      <S.SearchBar>
        <S.SearchInput
          placeholder="무엇을 찾으시나요?"
          value={searchWord}
          onChangeText={onChangeSearchWord}
          placeholderTextColor={'#ADADAD'}
        />
        <S.SearchIcon name="search" size={20} color="#ADADAD" />
      </S.SearchBar>
      <Ionicons name="notifications-outline" size={26} color="black" />
    </S.HeaderContainer>
  );
};
