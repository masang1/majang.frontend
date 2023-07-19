import { colors } from 'src/styles';
import styled from 'styled-components/native';

export const AuthScreenContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 12px 0;
    border: 1px solid blue;
`;

export const AuthScreenBottomContainer = styled.View`
    border: 1px solid red;
    width: 100%;
    flex: 0.1;
`;

export const AuthScreenButtonView = styled.View`
    width: 80%;
    background-color: ${colors.black};
    border-radius: 1.4rem;
`;