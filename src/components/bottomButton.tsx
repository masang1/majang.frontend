import { TouchableOpacity, View, ActivityIndicator, Text } from "react-native"

export type bottomButtonProps = {
    content: string,
    onClick: any,
    isDisabled: boolean
}

export const BottomButton: React.FC<bottomButtonProps> = ({content, onClick, isDisabled} : bottomButtonProps) => {
    return (
        <TouchableOpacity onPress={onClick} disabled={isDisabled} style={
            {
                backgroundColor: !isDisabled ? '#282828' : '#808080',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: 55,
                borderRadius: 15,
            }
        }>
            <View style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
                {isDisabled ? <ActivityIndicator size="small" style={{marginRight: 5}} color={"#FFFFFF"}/> : null}
                <Text style={{ color: '#fff', fontSize: 17, fontWeight: "bold" }}>{content}</Text>
            </View>
        </TouchableOpacity>
    )
}