import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SplashImage } from "src/assets";

export const MainScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>expo는 구조 맘대로 바꾸면 터져요</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});