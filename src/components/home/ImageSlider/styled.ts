import { styled } from "styled-components/native";
import { colors } from "src/styles";

export const SliderDot = styled.View<{isActive: boolean}>`
    background-color: ${({isActive}) => isActive ? colors.black : colors.gray};
    width: 5px;
    height: 5px;
    border-radius: 4px;
    margin-left: 3px;
    margin-right: 3px;
    margin-top: 3px;
    margin-bottom: 3px;
`;