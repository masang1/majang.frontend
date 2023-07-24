import React from "react";
import * as S from "./styled"
import { Entypo } from '@expo/vector-icons';
import { Button, Input, Text } from "src/components";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";

export interface AuthScreenProps {
    children?: React.ReactNode;
    buttonText: string;
    prevUrl: string;
    nextUrl: string;
    isDisabled?: boolean;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ children, buttonText, nextUrl, isDisabled, prevUrl }) => {

    const navigate = useNavigation().navigate as (s: string) => void;

    return (
        <S.AuthScreenWrapper>
            <S.AuthScreenContainer>
                <Entypo name="chevron-thin-left" size={24} color="black" style={{ marginBottom: 10 }} onPress={() => navigate(prevUrl)} />
                {children}
            </S.AuthScreenContainer>
            <Button content={buttonText} onClick={() => navigate(nextUrl)} isDisabled={isDisabled} />
        </S.AuthScreenWrapper>
    )
}