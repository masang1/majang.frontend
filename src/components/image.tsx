import { WithLocalSvg } from 'react-native-svg';
import { logo } from "../assets"

type logoProps = {
    width: number
    height: number
}

export const SVGLogo: React.FC<logoProps> = ({width, height} : logoProps) => {
    return (
        <WithLocalSvg
            width={width}
            height={height}
            asset={logo}
        />
    )
}