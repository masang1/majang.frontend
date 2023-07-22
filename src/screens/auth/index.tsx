import React, { useMemo, useRef, useState } from "react";
import * as S from "./styled"
import { Button, Text } from "src/components";
import { TouchableOpacity, View } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { LogoSVG } from "src/assets";
import BottomSheet from '@gorhom/bottom-sheet';
import { MaterialIcons } from '@expo/vector-icons';


export const AuthScreen: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [privacyTabOpen, setPrivacyTab] = useState<boolean>(false)

    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ['30%', '30%'], []);

    const Screen = () => {
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
                    <Button content="시작하기" onClick={() => { setIsLoading(true), setPrivacyTab(true) }} isDisabled={isLoading} />
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

    return (
        <>
            {privacyTabOpen ? (
                <S.PrivacyTabContainer>
                    <Screen />
                    <BottomSheet
                        ref={bottomSheetRef}
                        snapPoints={snapPoints}
                        index={1}
                    >
                        <S.PrivacyTabContentContainer>
                            <S.PrivacyTabContentTitle>이용 약관</S.PrivacyTabContentTitle>
                            <S.PrivacyTabContentWrapper>
                                <MaterialIcons name="check-box-outline-blank" size={24} color="000" />
                                <S.PrivacyTabContentText isActive={true}>모두 동의</S.PrivacyTabContentText>
                            </S.PrivacyTabContentWrapper>
                            <Text>Awesome 🎉</Text>
                        </S.PrivacyTabContentContainer>
                    </BottomSheet>
                </S.PrivacyTabContainer>
            ) : <Screen />}
        </>
    )
}