import { Text } from "react-native"

type TextProps = {
    content: string,
    fontSize: number,
    fontWeight: "thin" | "light" | "regular" | "medium" | "bold"
    color: string
}

const fontName = {
    "thin": "SpoqahanSansNeo_Thin",
    "light": "SpoqahanSansNeo_Light",
    "regular": "SpoqahanSansNeo_Regular",
    "medium": "SpoqahanSansNeo_Medium",
    "bold": "SpoqahanSansNeo_Bold"
}

export const MajangText: React.FC<TextProps> = ({content, fontSize, fontWeight, color} : TextProps) => {
    return (
        <Text style={
            {
                fontFamily: fontName[fontWeight],
                fontSize: fontSize,
                color: color
            }
        }>{content}</Text>
    )
}