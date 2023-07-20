import React, { useState } from "react";
import * as S from "./styled"
import { colors } from "src/styles";
import { SVGLogo, MajangText, Button, ClickableText } from "../../components";

export const AuthScreen: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <S.AuthScreenContainer>
            <S.AuthScreenMainSection>
                <SVGLogo width={100} height={100} />
                <S.AuthScreenMainTextContainer>
                    <MajangText content="마법의 장터" fontSize={30} fontWeight="bold" color={colors.black} />
                    <MajangText content="나만의 취미 상품 장터, 마법의 장터" fontSize={15} fontWeight="regular" color={colors.black} />
                </S.AuthScreenMainTextContainer>
            </S.AuthScreenMainSection>
            <S.AuthScreenBottomSection>
                <Button content="시작하기" onClick={() => { setIsLoading(true) }} isDisabled={isLoading} />
                <S.AuthScreenBottomTextContainer>
                    <MajangText content="이미 계정이 있으신가요?" fontSize={15} fontWeight="regular" color={colors.black} />
                    <ClickableText
                        onClick={() => { setIsLoading(false) }}
                        isDisabled={false}
                        textProps={{
                            content: "로그인",
                            fontSize: 15,
                            fontWeight: "bold",
                            color: colors.black
                        }}
                    />
                </S.AuthScreenBottomTextContainer>
            </S.AuthScreenBottomSection>
        </S.AuthScreenContainer>
    )
}