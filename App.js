import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import img from "./assets/img.jpg";

import Card from "./Card";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const getFonts = () => {
    return Font.loadAsync({
        "jost-light": require("./fonts/Jost-Light.ttf"),
        "jost-medium": require("./fonts/Jost-Medium.ttf"),
    });
};

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={img} style={styles.img} />
                </View>
                <View style={styles.card}>
                    <Card />
                </View>
            </View>
        );
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e4eefa",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        elevation: 2,
    },
    card: {
        position: "absolute",
        bottom: 0,
    },
    img: {
        width: width,
        height: 340,
    },
    imgContainer: {
        position: "absolute",
        top: 0,
    },
});
