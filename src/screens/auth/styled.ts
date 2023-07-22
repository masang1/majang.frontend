import { colors } from 'src/styles';
import styled from 'styled-components/native';

export const AuthScreenContainer = styled.SafeAreaView`
    flex: 1;
`;

export const AuthScreenMainSection = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const AuthScreenBottomSection = styled.View`
    flex: 0.1;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const AuthScreenMainTextContainer = styled.View`
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const AuthScreenBottomTextContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    margin: 10px;
`;


export const PrivacyTabContainer = styled.View`
    width: 100%;
    flex: 1;
    background-color: #8E8E8E;
`;

export const PrivacyTabContentContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 16px;
    padding: 10px 20px 40px 20px;
`;

export const PrivacyTabContentTitle = styled.Text`
    font-size: 24px;
    font-weight: 600;
`;

export const PrivacyTabContentWrapper = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
    z-index: 90;
`;


export const PrivacyTabContentText = styled.Text<{ isActive?: boolean, isLinked?: boolean }>`
    font-size: 16px;
    font-weight: 600;
    color: ${({ isActive }) => isActive ? colors.black : colors.gray};
    text-decoration: ${({ isLinked }) => isLinked ? 'underline' : 'none'};
    text-decoration-color: ${({ isLinked }) => isLinked ? colors.black : colors.gray};
`;