import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen, AuthStep1Screen, AuthStep2Screen, MainScreen } from './screens';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

const Stack = createStackNavigator();

export default function App() {
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

  return isReady ? (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Auth'>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="AuthStep1" component={AuthStep1Screen} />
          <Stack.Screen name="AuthStep2" component={AuthStep2Screen} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  ) : (
    <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} onError={() => { }} />
  );
}
