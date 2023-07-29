import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { useFetchUser } from 'src/hooks';
import { AuthStep1Screen, AuthStep2Screen, MainScreen, AuthScreen, WebViewScreen } from 'src/screens';

const Stack = createStackNavigator();


// 이거 있어야지 정석대로 라우팅할 수 있음
// https://reactnavigation.org/docs/typescript/
export type RootStackParamList = {
  WebView: { url: string };
};

export default function Router() {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      SpoqahanSansNeo_Thin: require('./assets/fonts/SpoqaHanSansNeo-Thin.ttf'),
      SpoqahanSansNeo_Light: require('./assets/fonts/SpoqaHanSansNeo-Light.ttf'),
      SpoqahanSansNeo_Regular: require('./assets/fonts/SpoqaHanSansNeo-Regular.ttf'),
      SpoqahanSansNeo_Medium: require('./assets/fonts/SpoqaHanSansNeo-Medium.ttf'),
      SpoqahanSansNeo_Bold: require('./assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
    });
  };

  const { data, isLoading } = useFetchUser();

  const loading = async () => {
    await loadFonts();
    isLoading;
  };

  return isReady ? (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={data ? 'Main' : 'Auth'}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="AuthStep1" component={AuthStep1Screen} />
        <Stack.Screen name="AuthStep2" component={AuthStep2Screen} />
        <Stack.Screen name="WebView" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={loading}
      onFinish={() => setIsReady(true)}
      onError={() => {
        console.log('error');
      }}
    />
  );
}
