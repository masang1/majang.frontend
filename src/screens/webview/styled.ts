import styled from 'styled-components/native';

export const WebViewSafeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const HeaderContainer = styled.View`
    margin: 0px 20px 0px 20px;
    height: 40px;
    align-items: center;
    flex-direction: row;
`;

export const HeaderContentWrapper = styled.View<{align: string}>`
    flex: 1;
    flex-direction: row;
    justify-content: ${({align}) => align};
`;

export const LoadingWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;