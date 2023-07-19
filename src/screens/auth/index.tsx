import React from "react";
import * as S from "./styled"
import { Text, View } from "react-native";
import { colors } from "src/styles";

export const AuthScreen: React.FC = () => {
    return (
        <>
            <S.AuthScreenContainer>
                <Text>asdf</Text>
            </S.AuthScreenContainer>
            <S.AuthScreenBottomContainer>
                <S.AuthScreenButtonView>
                    <Text style={{ color: 'white' }}>Hello</Text>
                </S.AuthScreenButtonView>
            </S.AuthScreenBottomContainer>
        </>

    )
}