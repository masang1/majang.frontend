import React, { useMemo, useRef, useState } from 'react';
import { Linking, ScrollView, TouchableOpacity, View } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

import BottomSheet from '@gorhom/bottom-sheet';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { PRIVACY_LIST } from 'src/constant';
import { LogoSVG } from 'src/assets';
import { Button, Text } from 'src/components';

import * as S from './styled';

export const AuthScreen: React.FC = () => {
  const navigate = useNavigation().navigate as (s: string) => void;

  const [privacyTab, setPrivacyTab] = useState<boolean>(false);
  const [activeList, setActiveList] = useState(PRIVACY_LIST.map(() => false));
  const [allActive, setAllActive] = useState<boolean>(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['40%', '40%'], []);

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
          <Text size="large">마법의 장터 </Text>
          <Text>나만의 취미 상품 장터, 마법의 장터</Text>
        </Text.Column>
      </S.AuthScreenMainSection>
      <S.AuthScreenBottomSection>
        <Button content="시작하기" onClick={() => setPrivacyTab(true)} />
        <S.AuthScreenBottomTextContainer>
          <Text.Row>
            <Text>이미 계정이 있으신가요?</Text>
            <TouchableOpacity onPress={() => navigate('Login')} activeOpacity={0.5}>
              <Text isPrimary={true}>로그인</Text>
            </TouchableOpacity>
          </Text.Row>
        </S.AuthScreenBottomTextContainer>
      </S.AuthScreenBottomSection>
      {privacyTab && (
        <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={1}>
          <ScrollView>
            <S.PrivacyTabContentContainer>
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
                    <S.PrivacyTabContentText isActive={activeList[i]}>
                      {text}
                    </S.PrivacyTabContentText>
                  )}
                </S.PrivacyTabContentWrapper>
              ))}
              <Button
                content="계속하기"
                isDisabled={!allActive}
                onClick={() => navigate('AuthStep1')}
              />
            </S.PrivacyTabContentContainer>
          </ScrollView>
        </BottomSheet>
      )}
    </S.AuthScreenContainer>
  );
};
