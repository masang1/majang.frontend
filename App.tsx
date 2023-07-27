import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { RecoilRoot } from 'recoil';

import { AuthStep1Screen, AuthStep2Screen, MainScreen, AuthScreen } from './src/screens';

const Stack = createStackNavigator();

const client = new QueryClient();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      SpoqahanSansNeo_Thin: require('./src/assets/fonts/SpoqaHanSansNeo-Thin.ttf'),
      SpoqahanSansNeo_Light: require('./src/assets/fonts/SpoqaHanSansNeo-Light.ttf'),
      SpoqahanSansNeo_Regular: require('./src/assets/fonts/SpoqaHanSansNeo-Regular.ttf'),
      SpoqahanSansNeo_Medium: require('./src/assets/fonts/SpoqaHanSansNeo-Medium.ttf'),
      SpoqahanSansNeo_Bold: require('./src/assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
    });
  };

  return isReady ? (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth">
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="AuthStep1" component={AuthStep1Screen} />
            <Stack.Screen name="AuthStep2" component={AuthStep2Screen} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </RecoilRoot>
  ) : (
    <AppLoading
      startAsync={loadFonts}
      onFinish={() => setIsReady(true)}
      onError={() => {
        console.log('error');
      }}
    />
  );
}
