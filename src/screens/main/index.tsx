import React from 'react';

import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ChatScreen, HomeScreen, MyScreen, RegistrationScreen, SearchScreen } from 'src/screens';

const BottomTab = createBottomTabNavigator();

export const MainScreen: React.FC = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
      <BottomTab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          tabBarActiveTintColor: '#000',
        }}
      />
      <BottomTab.Screen
        name="검색"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="search" size={size} color={color} />,
          tabBarActiveTintColor: '#000',
        }}
      />
      <BottomTab.Screen
        name="등록"
        component={RegistrationScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="plus-circle" size={size} color={color} />,
          tabBarActiveTintColor: '#000',
        }}
      />
      <BottomTab.Screen
        name="채팅"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-circle" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#000',
        }}
      />
      <BottomTab.Screen
        name="MY"
        component={MyScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
          tabBarActiveTintColor: '#000',
        }}
      />
    </BottomTab.Navigator>
  );
};
