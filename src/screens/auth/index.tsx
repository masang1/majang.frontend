import React, { useState } from "react";
import * as S from "./styled"
import { colors } from "src/styles";
import { SVGLogo, MajangText, BottomButton, ClickableText } from "../../components";
// import { AuthBottomSheet } from "./bottomsheet";

export const AuthScreen: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <S.SafeContainer>
            {/* <AuthBottomSheet /> */}
            <S.TopAreaView>
                <SVGLogo width={100} height={100} />
                <S.ServiceDescriptionView>
                    <MajangText content="마법의 장터" fontSize={30} fontWeight="bold" color={colors.black} />
                    <MajangText content="나만의 취미 상품 장터, 마법의 장터" fontSize={15} fontWeight="regular" color={colors.black} />
                </S.ServiceDescriptionView>
            </S.TopAreaView>
            <S.BottomButtonAreaView>
                <BottomButton content="시작하기" onClick={() => {setIsLoading(true)}} isDisabled={isLoading} />
                <S.SameLineView>
                    <MajangText content="이미 계정이 있으신가요?" fontSize={15} fontWeight="regular" color={colors.black} />
                    <ClickableText
                        onClick={() => {setIsLoading(false)}}
                        isDisabled={false}
                        textProps={{
                            content: "로그인",
                            fontSize: 15,
                            fontWeight: "bold",
                            color: colors.black
                        }}
                    />
                </S.SameLineView>
            </S.BottomButtonAreaView>
        </S.SafeContainer>
    )
}