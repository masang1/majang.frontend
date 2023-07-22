import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen, MainScreen } from './screens';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';

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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth" component={AuthScreen} />
        <Stack.Screen name="main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} onError={() => { }} />
  );
}
