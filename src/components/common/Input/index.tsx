import React, { useState } from "react";
import * as S from "./styled"
import { SafeAreaView } from "react-native";
import { colors } from "src/styles";

export interface InputProps {
    placeholder: string;
}

export const Input: React.FC<InputProps> = ({ placeholder }) => {
    const [text, setText] = useState<string>("")

    return (
        <S.InputElement value={text} onChangeText={setText} placeholder={placeholder} placeholderTextColor={colors.placeHolder} />
    )
}