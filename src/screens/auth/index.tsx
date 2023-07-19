import React, { useState } from "react";
import * as S from "./styled"
import { colors } from "src/styles";
import { SVGLogo, MajangText, BottomButton } from "../../components";

export const AuthScreen: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <S.SafeContainer>
            <S.TopAreaView>
                <SVGLogo width={100} height={100} />
                <S.ServiceDescriptionView>
                    <MajangText content="마법의 장터" fontSize={30} fontWeight="bold" color={colors.black} />
                    <MajangText content="나만의 취미 상품 장터, 마법의 장터" fontSize={15} fontWeight="regular" color={colors.black} />
                </S.ServiceDescriptionView>
            </S.TopAreaView>
            <S.BottomButtonAreaView>
                <BottomButton content="시작하기" onClick={() => {setIsLoading(true)}} isDisabled={isLoading} />
            </S.BottomButtonAreaView>
        </S.SafeContainer>
    )
}