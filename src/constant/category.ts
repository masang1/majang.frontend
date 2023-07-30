/* eslint-disable @typescript-eslint/no-explicit-any */
import { KeyKab2Icon, KeyKabIcon, KeyboardIcon, LikeIcon, SwitchIcon } from 'src/assets';

export interface CategoryItems {
  text: string;
  icon: any;
}

export const CATEGORY_LIST: CategoryItems[] = [
  {
    text: '찜 목록',
    icon: LikeIcon,
  },
  {
    text: '키보드',
    icon: KeyboardIcon,
  },
  {
    text: '키캡',
    icon: KeyKabIcon,
  },
  {
    text: '아티산',
    icon: KeyKab2Icon,
  },
  {
    text: '스위치',
    icon: SwitchIcon,
  },
];
