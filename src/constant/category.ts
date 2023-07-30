/* eslint-disable @typescript-eslint/no-explicit-any */

import { AtisanIcon, KeyKabIcon, KeyboardIcon, LikeIcon, SwitchIcon } from 'src/assets';

export interface CategoryItems {
  name: string;
  Icon: any;
  navigate: string;
}

export const CATEGORY_LIST: CategoryItems[] = [
  {
    name: '찜 목록',
    Icon: LikeIcon,
    navigate: 'Like',
  },
  {
    name: '키보드',
    Icon: KeyboardIcon,
    navigate: 'Keyboard',
  },
  {
    name: '키캡',
    Icon: KeyKabIcon,
    navigate: 'Keycap',
  },
  {
    name: '아티산',
    Icon: AtisanIcon,
    navigate: 'Artisan',
  },
  {
    name: '스위치',
    Icon: SwitchIcon,
    navigate: 'Switch',
  },
];
