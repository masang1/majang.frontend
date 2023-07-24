

import { TouchableOpacity, View } from "react-native"
import { AuthScreen, Text } from "src/components"

export const AuthStep2Screen: React.FC = () => {
    return (
        <AuthScreen
            buttonText="계속"
            prevUrl="Auth1"
            nextUrl="main"
        >
            <Text.Column>
                <Text size="large">인증번호 입력</Text>
                <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <Text>010-3172-0552로 인증번호를 보냈어요.</Text>
                    <Text.Row>
                        <Text>인증번호가 오지 않나요?</Text>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text isPrimary={true}>재전송하기</Text>
                        </TouchableOpacity>
                    </Text.Row>
                </View>
            </Text.Column>
        </AuthScreen>
    )
}