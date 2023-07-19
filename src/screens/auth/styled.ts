import { colors } from 'src/styles';
import styled from 'styled-components/native';

export const SafeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.white};
`;

export const TopAreaView = styled.View`
    flex: 1;
    backgroud-color: ${colors.white};
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const BottomButtonAreaView = styled.View`
    flex: 0.1;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const ServiceDescriptionView = styled.View`
    align-items: center;
    justify-content: center;
    gap: 5px;
`;