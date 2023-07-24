
import { AuthScreen, Input } from "src/components"
export const AuthStep2Screen: React.FC = () => {
    return (
        <AuthScreen
            title="휴대폰 인증"
            subTitle={`마법의 장터에서는 휴대폰 번호로 로그인해요.\n` + `휴대폰 번호는 안전하게 보관되며, 함부로 공개되지 않아요.`}
            input={<>Hello</>}
            buttonText="계속"
            navigateUrl="AuthStep2"
        />
    )
}