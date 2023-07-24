import React from "react";
import { AuthScreen, Button, Input, Text } from "src/components";
import { useNavigation } from "@react-navigation/native";

export const AuthStep1Screen: React.FC = () => {
    const navigate = useNavigation().navigate as (s: string) => void;

    return (
        <AuthScreen
            isDisabled={false}
            buttonText="계속"
            prevUrl="Auth"
            nextUrl="AuthStep2"
        >
            <Text.Column>
                <Text size="large">휴대폰 인증"</Text>
                <Text>
                    마법의 장터에서는 휴대폰 번호로 로그인해요. {`\n`}
                    휴대폰 번호는 안전하게 보관되며, 함부로 공개되지 않아요.
                </Text>
            </Text.Column>
            <Input placeholder="전화번호를 입력해주세요" />
        </AuthScreen>
    )
}