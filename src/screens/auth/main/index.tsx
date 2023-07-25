import React, { useMemo, useRef, useState } from 'react';
import { Linking, TouchableOpacity, View } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

import BottomSheet from '@gorhom/bottom-sheet';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { PRIVACY_LIST } from 'src/constant';
import { LogoSVG } from 'src/assets';
import { Button, Text } from 'src/components';
import { colors } from 'src/styles';

import * as S from './styled';

export const AuthScreen: React.FC = () => {
  const navigate = useNavigation().navigate as (s: string) => void;

  const [showTab, setShowTab] = useState<boolean>(false);
  const [privacyTab, setPrivacyTab] = useState<boolean>(false);
  const [activeList, setActiveList] = useState(PRIVACY_LIST.map(() => false));
  const [allActive, setAllActive] = useState<boolean>(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['35%', '35%'], []);

  const onOpenLink = (url: string) => {
    Linking.openURL(url);
  };

  const onActive = (i: number) => {
    setActiveList((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const onListToggle = () => {
    if (activeList.every !== undefined) {
      if (activeList.every((v) => v === false)) {
        setActiveList((prev) => prev.map(() => true));
        setAllActive(true);
      } else {
        setActiveList((prev) => prev.map(() => false));
        setAllActive(false);
      }
    } else {
      if (Object.values(activeList).every((v) => v === true)) {
        setActiveList([false, false, false]);
        setAllActive(false);
      } else {
        setActiveList([true, true, true]);
        setAllActive(true);
      }
    }
  };

  const handleClosePress = () => {
    setPrivacyTab(false);
    bottomSheetRef.current?.close();
  };

  const handleOpenPress = () => {
    setPrivacyTab(true);
    setShowTab(true);
    bottomSheetRef.current?.expand();
  };

  useMemo(() => {
    if (Object.values(activeList).every((v) => v === true)) {
      setAllActive(true);
    } else {
      setAllActive(false);
    }
  }, [activeList]);

  return (
    <S.AuthScreenContainer tabOpen={privacyTab} activeOpacity={1} onPress={handleClosePress}>
      <S.AuthScreenMainSection>
        <WithLocalSvg width={100} height={100} asset={LogoSVG} />
        <Text.Column isCenter={true}>
          <Text size={30} weight={800}>
            마법의 장터
          </Text>
          <Text size={15} weight={600 }>
            나만의 취미 상품 장터, 마법의 장터
          </Text>
        </Text.Column>
      </S.AuthScreenMainSection>
      <S.AuthScreenBottomSection>
        <Button content="시작하기" onClick={handleOpenPress} />
        <S.AuthScreenBottomTextContainer>
          <Text.Row>
            <Text size={15} weight={700} color={colors.gray}>
              이미 계정이 있으신가요?
            </Text>
            <TouchableOpacity onPress={() => navigate('Login')} activeOpacity={0.5}>
              <Text size={15} weight={800} color={colors.black}>
                로그인
              </Text>
            </TouchableOpacity>
          </Text.Row>
        </S.AuthScreenBottomTextContainer>
      </S.AuthScreenBottomSection>
      {showTab && (
        <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={1}>
          <S.PrivacyTabContentContainer activeOpacity={1} onPress={handleOpenPress}>
            <S.PrivacyTabContentTitle>이용 약관</S.PrivacyTabContentTitle>
            <S.PrivacyTabContentWrapper onPress={onListToggle} activeOpacity={1}>
              <TouchableOpacity activeOpacity={0.5} onPress={onListToggle}>
                {allActive ? (
                  <MaterialIcons name={'check-box'} size={20} color="000" />
                ) : (
                  <MaterialIcons name={'check-box-outline-blank'} size={20} color="000" />
                )}
              </TouchableOpacity>
              <S.PrivacyTabContentText isActive={allActive}>모두 동의</S.PrivacyTabContentText>
            </S.PrivacyTabContentWrapper>
            {PRIVACY_LIST.map(({ text, icon, linkText, url, activeIcon }, i) => (
              <S.PrivacyTabContentWrapper onPress={() => onActive(i)} activeOpacity={1}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => onActive(i)}>
                  {activeList[i] ? activeIcon : icon}
                </TouchableOpacity>
                {linkText && url ? (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <S.PrivacyTabContentText
                      isActive={activeList[i]}
                      onPress={() => onOpenLink(url)}
                      isLinked={true}
                    >
                      {linkText}
                    </S.PrivacyTabContentText>
                    <S.PrivacyTabContentText isActive={activeList[i]}>
                      {text}
                    </S.PrivacyTabContentText>
                  </View>
                ) : (
                  <S.PrivacyTabContentText isActive={activeList[i]}>{text}</S.PrivacyTabContentText>
                )}
              </S.PrivacyTabContentWrapper>
            ))}
            <Button
              content="계속하기"
              isDisabled={!allActive}
              onClick={() => navigate('AuthStep1')}
            />
          </S.PrivacyTabContentContainer>
        </BottomSheet>
      )}
    </S.AuthScreenContainer>
  );
};
