import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { colors } from 'src/styles';

export interface PrivacyListProps {
  text?: string;
  linkText?: string;
  url?: string;
}

export const PRIVACY_LIST: PrivacyListProps[] = [
  {
    linkText: '개인정보처리방침',
    text: '을 읽었으며 이에 동의합니다.',
    url: '/privacy',
  },
  {
    linkText: '마법의 장터 이용약관',
    text: '을 읽었으며 이에 동의합니다.',
    url: '/privacy',
  },
  {
    text: '(선택) 마케팅 정보 수신에 동의합니다.',
  },
];
