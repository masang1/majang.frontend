import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { colors } from "src/styles";

export interface PrivacyListProps {
    text?: string;
    linkText?: string;
    link?: string;
    icon: React.ReactNode;
    activeIcon?: React.ReactNode;
}

export const PRIVACY_LIST: PrivacyListProps[] = [
    {
        text: '모두 동의',
        icon: <MaterialIcons name={"check-box-outline-blank"} size={24} color="000" />,
        activeIcon: <MaterialIcons name={"check-box"} size={24} color="000" />
    },
    {
        linkText: '개인정보처리방침',
        text: '을 읽었으며 이에 동의합니다',
        link: '/privacy',
        icon: <MaterialIcons name={"check"} size={24} color={colors.gray} />,
        activeIcon: <MaterialIcons name={"check-box"} size={24} color={colors.black} />
    },
    {
        linkText: '마법의 장터 이용약관',
        text: '을 읽었으며 이에 동의합니다',
        icon: <MaterialIcons name={"check"} size={24} color={colors.gray} />,
        activeIcon: <MaterialIcons name={"check-box"} size={24} color={colors.black} />
    },
    {
        text: '(선택) 마케팅 정보 수신에 동의합니다.',
        icon: <MaterialIcons name={"check"} size={24} color={colors.gray} />,
        activeIcon: <MaterialIcons name={"check-box"} size={24} color={colors.black} />
    },
]