import { TouchableOpacity, View, ActivityIndicator, Text } from "react-native"
import { MajangText, TextProps } from "./text"

type ClickableTextProps = {
    onClick: any,
    isDisabled: boolean,
    textProps: TextProps
}

export const ClickableText: React.FC<ClickableTextProps> = ({ onClick, isDisabled, textProps }: ClickableTextProps) => {
    return (
        <TouchableOpacity onPress={onClick} disabled={isDisabled} activeOpacity={0.5}>
            <MajangText
                content={textProps.content}
                fontSize={textProps.fontSize}
                fontWeight={textProps.fontWeight}
                color={textProps.color}
            />
        </TouchableOpacity>
    )
}