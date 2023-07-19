import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SplashImage } from "src/assets";

export const MainScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>This is Main Screen</Text>
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