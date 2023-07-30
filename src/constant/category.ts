/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  AtisanBlackIcon,
  AtisanWhiteIcon,
  KeyKabBlackIcon,
  KeyKabWhiteIcon,
  KeyboardBlackIcon,
  KeyboardWhiteIcon,
  LikeBlackIcon,
  LikeWhiteIcon,
  SwitchBlackIcon,
  SwitchWhiteIcon,
} from 'src/assets';

export interface CategoryItems {
  name: string;
  blackIcon: any;
  whiteIcon: any;
}

export const CATEGORY_LIST: CategoryItems[] = [
  {
    name: '찜 목록',
    blackIcon: LikeBlackIcon,
    whiteIcon: LikeWhiteIcon,
  },
  {
    name: '키보드',
    blackIcon: KeyboardBlackIcon,
    whiteIcon: KeyboardWhiteIcon,
  },
  {
    name: '키캡',
    blackIcon: KeyKabBlackIcon,
    whiteIcon: KeyKabWhiteIcon,
  },
  {
    name: '아티산',
    blackIcon: AtisanBlackIcon,
    whiteIcon: AtisanWhiteIcon,
  },
  {
    name: '스위치',
    blackIcon: SwitchBlackIcon,
    whiteIcon: SwitchWhiteIcon,
  },
];
