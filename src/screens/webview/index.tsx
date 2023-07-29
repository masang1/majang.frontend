import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { WebView } from 'react-native-webview';
import { ActivityIndicator, View } from "react-native";
import * as S from "./styled";
import { Text } from "src/components";
import { useNavigation } from "@react-navigation/native";
import { colors } from "src/styles";

export const WebViewScreen: React.FC = ({navigator, route}: any) => {
    const navigation = useNavigation();
    const [title, setTitle] = useState<string>("읽어들이는 중..");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        console.log("isLoading changed to " + isLoading)
    }, [isLoading])

    return (
        <S.WebViewSafeContainer>
            <S.HeaderContainer>
                <S.HeaderContentWrapper align="flex-start">
                    <Entypo
                        name="chevron-thin-left"
                        size={24}
                        color="black"
                        onPress={() => navigation.goBack()}
                    />
                </S.HeaderContentWrapper>
                <S.HeaderContentWrapper align="center">
                    <Text size={18} weight={600}>{title}</Text>
                </S.HeaderContentWrapper>
                <S.HeaderContentWrapper align="flex-end"></S.HeaderContentWrapper>
            </S.HeaderContainer>
            <WebView
                source={{ uri: route.params?.url }}
                onLoad={() => setIsLoading(false)}
                injectedJavaScript= "window.ReactNativeWebView.postMessage(document.title)"
                onMessage={(message) => setTitle(message.nativeEvent.data)}
            >
                {isLoading ? (
                    <S.LoadingWrapper>
                        <ActivityIndicator size="large" color={colors.gray} />
                    </S.LoadingWrapper>
                ) : null}
            </WebView>
        </S.WebViewSafeContainer>
    )
}