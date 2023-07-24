import React from "react";
import * as S from "./styled"
import { Entypo } from '@expo/vector-icons';
import { Text } from "src/components";

export const AuthStep1Screen: React.FC = () => {
    return (
        <S.AuthStep1ScreenContainer>
            <S.AuthStep1ScreenTopSection>
                <Entypo name="chevron-thin-left" size={24} color="black" style={{ marginBottom: 20 }} />
                <Text.Container>
                    <Text size="large">휴대폰 인증</Text>
                    <Text size="small">마법의 장터에서는 휴대폰 번호로 로그인해요.{`\n`}
                        휴대폰 번호는 안전하게 보관되며, 함부로 공개되지 않아요.
                    </Text>
                </Text.Container>
            </S.AuthStep1ScreenTopSection>
        </S.AuthStep1ScreenContainer>
    )
}