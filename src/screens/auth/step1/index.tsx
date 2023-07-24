import React from "react";
import * as S from "./styled"
import { Entypo } from '@expo/vector-icons';
import { Button, Input, Text } from "src/components";
import { useNavigation } from "@react-navigation/native";

export const AuthStep1Screen: React.FC = () => {

    const navigate = useNavigation().navigate as (s: string) => void;

    return (
        <S.AuthStep1ScreenWrapper>
            <S.AuthStep1ScreenContainer>
                <Entypo name="chevron-thin-left" size={24} color="black" style={{ marginBottom: 20 }} onPress={() => navigate('Auth')} />
                <Text.Container>
                    <Text size="large">휴대폰 인증</Text>
                    <Text size="small">마법의 장터에서는 휴대폰 번호로 로그인해요.{`\n`}
                        휴대폰 번호는 안전하게 보관되며, 함부로 공개되지 않아요.
                    </Text>
                </Text.Container>
                <Input placeholder="전화번호를 입력해주세요" />
            </S.AuthStep1ScreenContainer>
            <Button content="계속" onClick={() => navigate('AuthStep2')} />
        </S.AuthStep1ScreenWrapper>
    )
}