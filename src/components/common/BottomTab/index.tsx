import React, { useMemo, useRef } from 'react';
import { Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import * as S from "./styled"

export interface BottomTabInterface {
    children: React.ReactNode;
}

export const BottomTab: React.FC<BottomTabInterface> = ({ children }) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ['30%', '30%'], []);

    return (
        <S.BottomTabContainer>
            {children}
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                index={1}
            >
                <S.BottomTabContentContainer>
                    <Text>Awesome 🎉</Text>
                </S.BottomTabContentContainer>
            </BottomSheet>
        </S.BottomTabContainer>
    );
};