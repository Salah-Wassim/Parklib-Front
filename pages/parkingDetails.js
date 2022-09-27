import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Flex, Box } from "@react-native-material/core";
import BoxDetails from "../components/boxDetails";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ParkingDetails(props) {
    return (
        <ScrollView style={styles.scrollViewContainer} >
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />

                <Flex fill>
                    {/* <Box style={styles.boxTopImage}>
                        <Image
                            style={styles.topImage}
                            source={require("../assets/parking_default.jpg")}
                        />
                    </Box> */}

                    <BoxDetails />

                    <TouchableOpacity
                        style={styles.favoriteButtonContain}
                        onPress={() =>
                            console.log('Click on button "Ajouter aux Favoris"')
                        }
                    >
                        <Text style={styles.textButton}>Ajouter aux favoris</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.skipButtonContain}
                        onPress={() =>
                            console.log('Click on button "Réserver"')
                        }
                    >
                        <Text style={styles.textButton}>Réserver</Text>
                    </TouchableOpacity>
                </Flex>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
    },
    container: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-between",
        paddingTop: 30,
    },
    boxTopImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    topImage: {
        borderRadius: 0,
        width: wp("100%"),
    },
    skipButtonContain: {

        backgroundColor: "rgb(21, 117, 117)",
        width: wp("96%"),
        marginLeft: wp("2%"),
        marginVertical: 5,
        borderRadius: 10,

    },
    favoriteButtonContain: {

        backgroundColor: "#c70000",
        width: wp("96%"),
        marginLeft: wp("2%"),
        marginVertical: 5,
        borderRadius: 10,

    },
    textButton: {
        color: "white",
        padding: 10,
        textAlign: "center",
    },
});
