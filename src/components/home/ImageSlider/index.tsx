import Swiper from 'react-native-swiper'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { colors } from 'src/styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as S from './styled'
import { RootStackParamList } from 'src/Router'

interface imageObject {
    url: string
    clickUrl: string
}

export interface ImageSliderProps {
    images: imageObject[]
}

/*
    * 사용 방법:

    <ImageSlider
        images={[
            {"url" : "https://cdn.discordapp.com/attachments/1131204229218971758/1134471113158692994/Frame_171.png", "clickUrl" : "https://naver.com"},
            {"url" : "https://cdn.discordapp.com/attachments/1131204229218971758/1134471113158692994/Frame_171.png", "clickUrl" : "https://minima.green"}
        ]}
    />

    * images: imageObject[]
    * imageObject: {url: string, clickUrl: string}
    * url: 이미지 주소
    * clickUrl: 이미지 클릭 시 웹뷰로 렌더링할 URL
*/

export const ImageSlider: React.FC<ImageSliderProps> = ({images}) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <Swiper style={{height: 200}} dot={
            <S.SliderDot isActive={false}/>
        } activeDot={
            <S.SliderDot isActive={true}/>
        }>
            {images.map((imgObj) => {
                return (
                    <TouchableOpacity onPress={() => {
                        if (imgObj.clickUrl !== "") {
                            navigation.push('WebView', {
                                url: imgObj.clickUrl
                            })
                        }
                    }} activeOpacity={0.8}>
                        <Image
                            source={{uri: imgObj.url}}
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            resizeMode='cover'
                        />
                    </TouchableOpacity>
                )
            })}
        </Swiper>
    )
}