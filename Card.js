import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;

const Card = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Your personal cheerleader</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.content}>
                    Motivation leades to increased confidence and an overall
                    improvement of mood, happiness and productivity.{" "}
                </Text>
            </View>
            <View style={styles.position}>
                <View style={styles.btnContainer}>
                    <MaterialCommunityIcons
                        name="dots-horizontal"
                        size={25}
                        color="grey"
                        style={styles.dots}
                    />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: "#fff",
        width: width,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        elevation: 42,
    },
    header: {
        alignItems: "flex-start",
        top: 48,
        left: 40,
    },
    headerText: {
        fontSize: 30,
        maxWidth: 200,
        fontWeight: "bold",
        fontFamily: "jost-medium",
    },
    body: {
        top: 56,
        maxWidth: 280,
        left: 40,
    },
    content: {
        fontSize: 16,
        fontFamily: "jost-light",
    },
    position: {
        justifyContent: "flex-end",

        height: 140,
    },
    btnContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btn: {
        backgroundColor: "#79b6fc",
        width: 120,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        elevation: 30,
        right: 10,
    },
    btnText: { color: "#fff", fontSize: 16 },
    dots: { left: 45 },
});

export default Card;
