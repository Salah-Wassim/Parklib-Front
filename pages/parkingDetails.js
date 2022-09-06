import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Flex, Box } from "@react-native-material/core";
import BoxDetails from "../components/boxDetails";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ParkingDetails() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />

            <Flex fill>
                <Box style={styles.boxTopImage} >
                    <Image
                        style={styles.topImage}
                        source={require("../assets/parking_default.jpg")}
                    />
                </Box>

                <BoxDetails />

                <TouchableOpacity
                    style={styles.skipButtonContain}
                    onPress={() => console.log('Click on button "Continuer"')}
                >
                    <Text style={styles.skipButton}>Continuer</Text>
                </TouchableOpacity>
            </Flex>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center",
        paddingTop: 30,
    },
    boxTopImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    topImage: {
        borderRadius: 20,
    },
    skipButtonContain: {
        position: "absolute",
        bottom: 15,

        backgroundColor: "rgb(21, 117, 117)",
        width: wp("100%"),
    },
    skipButton: {
        color: "white",
        padding: 10,
        textAlign: "center",
    },
});
