import { colors } from 'src/styles';
import styled from 'styled-components/native';

export const AuthScreenContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.white};
`;

export const AuthScreenMainSection = styled.View`
    flex: 1;
    background-color: ${colors.white};
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
    gap: 5px;
    margin: 10px;
`;