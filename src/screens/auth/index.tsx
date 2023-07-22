import React, { useState } from "react";
import * as S from "./styled"
import { Button, Text } from "src/components";
import { TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { LogoSVG } from "src/assets";

export const AuthScreen: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <S.AuthScreenContainer>
            <S.AuthScreenMainSection>
                <WithLocalSvg
                    width={100}
                    height={100}
                    asset={LogoSVG}
                />
                <Text.Container>
                    <Text size="large">마법의 장터 </Text>
                    <Text >나만의 취미 상품 장터, 마법의 장터</Text>
                </Text.Container>
            </S.AuthScreenMainSection>
            <S.AuthScreenBottomSection>
                <Button content="시작하기" onClick={() => { setIsLoading(true) }} isDisabled={isLoading} />
                <S.AuthScreenBottomTextContainer>
                    <Text size="small">이미 계정이 있으신가요?</Text>
                    <TouchableOpacity onPress={() => { setIsLoading(false) }} activeOpacity={0.5}>
                        <Text size="small" isBold={true}>로그인</Text>
                    </TouchableOpacity>
                </S.AuthScreenBottomTextContainer>
            </S.AuthScreenBottomSection>
        </S.AuthScreenContainer>
    )
}