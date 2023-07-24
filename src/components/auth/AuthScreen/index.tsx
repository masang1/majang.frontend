import React from "react";
import * as S from "./styled"
import { Entypo } from '@expo/vector-icons';
import { Button, Input, Text } from "src/components";
import { useNavigation } from "@react-navigation/native";

export interface AuthScreenProps {
    title: string;
    subTitle: string;
    input: React.ReactNode;
    buttonText: string;
    navigateUrl: string;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ title, subTitle, input, buttonText, navigateUrl }) => {

    const navigate = useNavigation().navigate as (s: string) => void;

    return (
        <S.AuthScreenWrapper>
            <S.AuthScreenContainer>
                <Entypo name="chevron-thin-left" size={24} color="black" style={{ marginBottom: 20 }} onPress={() => navigate('AuthScreen')} />
                <Text.Container>
                    <Text size="large">{title}</Text>
                    <Text size="small">
                        {subTitle.split('\n').map((line) => (
                            <>
                                {line} {`\n`}
                            </>
                        ))
                        }
                    </Text>
                </Text.Container>
                {input}
            </S.AuthScreenContainer>
            <Button content={buttonText} onClick={() => navigate(navigateUrl)} />
        </S.AuthScreenWrapper>
    )
}