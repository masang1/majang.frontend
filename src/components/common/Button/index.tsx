import { TouchableOpacity, View, ActivityIndicator, Text } from "react-native"
import * as S from "./styled"

export interface ButtonProps {
    content: string,
    onClick: any,
    isDisabled: boolean
}

export const Button: React.FC<ButtonProps> = ({ content, onClick, isDisabled }) => {
    return (
        <S.ButtonContainer onPress={onClick} isDisabled={isDisabled} >
            <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                {isDisabled ? <ActivityIndicator size="small" style={{ marginRight: 5 }} color={"#FFFFFF"} /> : null}
                <Text style={{ color: '#fff', fontSize: 17, fontWeight: "bold" }}>{content}</Text>
            </View>
        </S.ButtonContainer >
    )
}